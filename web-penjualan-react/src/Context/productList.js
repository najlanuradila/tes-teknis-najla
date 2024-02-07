import Header from "../Component/header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.warn("result", data);

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
      getData();
      alert("Product has been deleted");
    } else {
      getData();
    }
  }

  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }

  return (
    <div>
      <h1>Produk Lists</h1>
      <div className="col-sm-8 offset-sm-2">
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
    </div>
  );
}

export default ProductList;
