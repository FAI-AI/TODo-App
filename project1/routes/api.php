<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("tasks", "TaskController@index");
Route::post("task", "TaskController@store");
Route::get("task/{id}/complete", "TaskController@complete");
Route::get("task/{id}/delete", "TaskController@destroy");
Route::post('login', [MainController::class, 'index']);
