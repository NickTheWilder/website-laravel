<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\BlogPost;
use App\Models\Quote;

Route::get('/', fn () => Inertia::render('home'))->name('home');

Route::get('/blog', fn () => Inertia::render('blog', [
    'blogPosts' => BlogPost::query()->orderBy('date', 'desc')->get(),
    'quotes' => Quote::all(),
  ]))->name('blog');

Route::get('/blog/{slug}', function ($slug) {
    $post = BlogPost::query()->where('route', "/blog/{$slug}")->firstOrFail();
    return Inertia::render('blogPost', [
        'post' => $post,
    ]);
})->name('blog.post');
