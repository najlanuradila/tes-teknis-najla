import Header from "../Component/header";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function UpdateProduct(props) {
  const [namaProduk, setNamaProduk] = useState("");
  const [stok, setStok] = useState("");
  const [jenisBarang, setJenisBarang] = useState("");
  const [jumlahTerjual, setJumlahTerjual] = useState("");
  const [tanggalTransaksi, setTanggalTransaksi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/updateproduct/" + id + "?_method=PUT"
        );
        const result = await response.json();

        setData(result);
        setNamaProduk(result.namaProduk);
        setStok(result.stok);
        setJenisBarang(result.jenisBarang);
        setJumlahTerjual(result.jumlahTerjual);
        setTanggalTransaksi(result.tanggalTransaksi);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  async function editProduct(id) {
    const formData = new FormData();
    formData.append("nama_barang", namaProduk);
    formData.append("stok", stok);
    formData.append("jenis_barang", jenisBarang);
    formData.append("jumlah_terjual", jumlahTerjual);
    formData.append("tanggal_transaksi", tanggalTransaksi);
    let result = await fetch(
      "http://localhost:8000/api/updateproduct/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    alert("Product has been updated!");
    navigate("/");
  }

  return (
    <div>
      <h1>Update Products</h1>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Nama Barang"
          defaultValue={data.namaProduk}
          onChange={(e) => setNamaProduk(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Stok"
          defaultValue={data.stok}
          onChange={(e) => setStok(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Jenis Barang"
          defaultValue={data.jenisBarang}
          onChange={(e) => setJenisBarang(e.target.value)}
        />
        <input
          type="number"
          className="form-control mt-2"
          placeholder="Jumlah Terjual"
          defaultValue={data.jumlahTerjual}
          onChange={(e) => setJumlahTerjual(e.target.value)}
        />
        <input
          type="date"
          className="form-control mt-2"
          placeholder="Tanggal Transaksi"
          defaultValue={data.tanggalTransaksi}
          onChange={(e) => setTanggalTransaksi(e.target.value)}
        />
        <br />
        <button className="btn btn-danger" onClick={() => editProduct(data.id)}>
          Update Product
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;
