<?php

use App\Http\Controllers\QuoteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\BlogPost;
use App\Models\Quote;

Route::get('/', fn () => Inertia::render('home'))->name('home');

Route::get('/form', fn () => Inertia::render('QuoteForm', [
    'quotes' => Quote::query()->orderBy('id', 'desc')->get(),
    'success' => session('success'),
]))->name('QuoteForm');

Route::post('/quotes', [QuoteController::class, 'store'])->name('quotes.store');
Route::put('/quotes/{quote}', [QuoteController::class, 'update'])->name('quotes.update');
Route::delete('/quotes/{quote}', [QuoteController::class, 'destroy'])->name('quotes.destroy');

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
