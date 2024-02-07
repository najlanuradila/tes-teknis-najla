import React from "react";
import {useState} from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchProduct(){

const [data, setData] = useState([])
async function search(key){
    console.warn(key);
    let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    result = await result.json();
    setData(result);
}
async function deleteOperation(id) {
    if (
      window.confirm(
        "Are you sure you want to delete product with id = " + id + " ? "
      )
    ) {
      let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
        method: "DELETE",
      });
      result = await result.json();
      console.warn(result);
      search();
      alert("Product has been deleted");
    } else {
      search();
    }
  }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1> Search Product</h1>
            <br/>
            <input onChange={(e) => search(e.target.value)} type="text" className="form-control" placeholder="Type here to search for a product"/>
            <br/>
            <Table striped bordered hover>
          <thead>
            <tr>
              <td>Id</td>
              <td>Nama Barang</td>
              <td>Stok</td>
              <td>Jenis Barang</td>
              <td>Jumlah Terjual</td>
              <td>Tanggal Transaksi</td>
              <td>Action</td>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody>
              <tr>
                <td>{item.id}</td>
                <td>{item.nama_barang}</td>
                <td>{item.stok}</td>
                <td>{item.jenis_barang}</td>
                <td>{item.jumlah_terjual}</td>
                <td>{item.tanggal_transaksi}</td>
                <td>
                  <span
                    className="btnDelete"
                    onClick={() => deleteOperation(item.id)}
                  >
                    Delete
                  </span>
                  <Link to={"update/" + item.id}>
                    <span className="btnUpdate">Update</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        </div>

    )
}

export default SearchProduct;