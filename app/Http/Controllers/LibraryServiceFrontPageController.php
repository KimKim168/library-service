<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LibraryServiceFrontPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('LibraryService/Index');
    }
    public function how_to()
    {

        return Inertia::render('LibraryService/HowTo');
    }

      public function video($id)
    {

        return Inertia::render('LibraryService/Video');
    }
      public function show($id)
    {
        return Inertia::render('LibraryService/Detail');
    }
}
