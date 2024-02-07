import React from "react";
import {useState} from "react";

function AddProduct(){
    const [namaProduk, setNamaProduk] = useState("");
    const [stok, setStok] = useState("");
    const [jenisBarang, setJenisBarang] = useState("");
    const [jumlahTerjual, setJumlahTerjual] = useState("");
    const [tanggalTransaksi, setTanggalTransaksi] = useState("");

    async function addProduct(){
        console.warn(namaProduk, stok, jenisBarang, jumlahTerjual, tanggalTransaksi);
        const formData = new FormData;
        formData.append('nama_barang', namaProduk);
        formData.append('stok', stok);
        formData.append('jenis_barang', jenisBarang);
        formData.append('jumlah_terjual', jumlahTerjual);
        formData.append('tanggal_transaksi', tanggalTransaksi);
        let result = await fetch("http://127.0.0.1:8000/api/addProduct", 
        {
            method: 'POST',
            body: formData
        });
        alert("Product added!");
    }

    return (
        <div>
            <h1>Halaman Add Product</h1>
            <div className="col-sm-6 offset-sm-3">
            <br/>
            <input type="text" className="form-control mt-2" placeholder="Nama Barang" onChange={(e) => setNamaProduk(e.target.value)}/>
            <input type="text" className="form-control mt-2" placeholder="Stok" onChange={(e) => setStok(e.target.value)}/>
            <input type="text" className="form-control mt-2" placeholder="Jenis Barang" onChange={(e) => setJenisBarang(e.target.value)}/>
            <input type="number" className="form-control mt-2" placeholder="Jumlah Terjual" onChange={(e) => setJumlahTerjual(e.target.value)}/>
            <input type="date" className="form-control mt-2" placeholder="Tanggal Transaksi" onChange={(e) => setTanggalTransaksi(e.target.value)}/>
            <button className="btn btn-primary mt-3" onClick={addProduct}>Add Product</button>
            </div>
           
        </div>
    )
}

export default AddProduct;