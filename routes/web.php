<?php

use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Route::get('/', [NewsController::class, 'index']);
Route::middleware(['auth', 'verified'])->group(function () {
    Route::post('/news', [NewsController::class, 'store']);
    Route::get('/news', [NewsController::class, 'show']);
    Route::get('/news/edit', [NewsController::class, 'edit'])->name('edit.news');
    Route::put('/news/update', [NewsController::class, 'update'])->name('update.news');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
