<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/thnal', function () {
    return Inertia::render('Thnal/Index');
})->name('thnal');