<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BarangController;
use Illuminate\Routing\Router;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('addProduct', [BarangController::class, 'addProduct']);
Route::get('list', [BarangController::class, 'list']);
Route::delete('delete/{id}', [BarangController::class, 'delete']);
Route::get('product/{id}', [BarangController::class, 'getProduct']);
Route::put('updateproduct/{id}', [BarangController::class, 'updateproduct']);
Route::get('search/{key}', [BarangController::class, 'search']);