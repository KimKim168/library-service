<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\Video;
use App\Models\VideoCategory;
use Inertia\Inertia;
use Illuminate\Http\Request;

class LibraryServiceFrontPageController extends Controller
{

    public function index()
    {
        $videoHeader = Page::where('code','content-header-home-top')->first();
        $videoHeaderBottom = Page::where('code','content-header-home-bottom')->first();
        $heroVideo = Video::where('category_code', 'hero-video')
            ->where('status', 'published')
            ->first();

        // All videos (published only)
        $allVideos = Video::where('status', 'published')
            ->orderBy('id', 'desc')
            ->get();

        // All resources / posts (published only)
        $allResoures = Post::where('status', 'published')
            ->orderBy('id', 'desc')
            ->get();
        // return ($allVideos);
        return Inertia::render('LibraryService/Index', [
            'videoHeader' => $videoHeader,
            'videoHeaderBottom' => $videoHeaderBottom,
            'heroVideo' => $heroVideo,
            'allVideos' => $allVideos,
            'allResoures' => $allResoures,
        ]);
    }
    public function how_to()
    {
        $header = Page::where('code', 'content-header-how-to-page')->first();

        $categoryWithPostsData = VideoCategory::with(['videos' => function ($query) {
            $query->orderBy('created_at', 'desc')
                ->select(['id', 'category_code', 'thumbnail', 'name', 'name_kh', 'short_description', 'short_description_kh']) // include FK and PK
                ->limit(6);
        }])
            ->orderBy('order_index')
            ->orderBy('name')
            ->get();
        // return $categoryWithPostsData;
        return Inertia::render('LibraryService/HowTo', [
            'header' => $header,
            'categoryWithPostsData' => $categoryWithPostsData,
        ]);
    }

    public function video(Request $request, $id)
    {
        $query = Video::query();

        $showVideoData = Video::find($id);
        $relatedVideoData = (clone $query)
            ->where('status', 'published')
            ->where('category_code', $showVideoData->category_code)
            ->inRandomOrder()
            ->get();
        // return ($relatedVideoData);    
        return Inertia::render('LibraryService/Video', [
            'showVideoData' => $showVideoData,
            'relatedVideoData' => $relatedVideoData,
        ]);
    }
    public function show($id)
    {
        $query = Post::query();
        $showData = Post::find($id);
        $relatedData = (clone $query)
            ->where('status', operator: 'published')
            ->where('category_code', $showData->category_code)
            ->inRandomOrder()
            ->get();

        // return ($relatedData);
        return Inertia::render('LibraryService/Detail', [
            'showData' => $showData,
            'relatedData' => $relatedData,
        ]);
    }
}
