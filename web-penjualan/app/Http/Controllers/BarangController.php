<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;
use App\Models\Transaction;

class BarangController extends Controller
{
    function addProduct(request $req)
    {   
        $barang = new Barang;
        $barang->nama_barang = $req->input('nama_barang');
        $barang->stok = $req->input('stok');
        $barang->jenis_barang = $req->input('jenis_barang');
        $barang->jumlah_terjual = $req->input('jumlah_terjual');
        $barang->tanggal_transaksi = $req->input('tanggal_transaksi');
        $barang->save();
        
        return $barang;
    }

    function list()
    {
        return Barang::all();

    }
    function delete($id)
    {
        $result=Barang::where('id', $id)->delete();
        if($result){
            return["result" => "Product has been deleted"];
        } else{
            return["result" => "Operation failed"];
        }
    }

    function getProduct($id)
    {
        return Barang::find($id);
    }

    function updateProduct($id, Request $req)
    {
        $barang = Barang::find($id);
        $barang->nama_barang = $req->input('nama_barang');
        $barang->stok = $req->input('stok');
        $barang->jenis_barang = $req->input('jenis_barang');
        $barang->jumlah_terjual = $req->input('jumlah_terjual');
        $barang->tanggal_transaksi = $req->input('tanggal_transaksi');
        $barang->save();
        return $req->input();
    }

    function search($key)
    {
        return Barang::where('nama_barang', 'like', "%$key%")->get();
    }
}
