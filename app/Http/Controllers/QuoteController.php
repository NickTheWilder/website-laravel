<?php

namespace App\Http\Controllers;

use App\Models\Quote;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
     public function store(Request $request): RedirectResponse {
        $quote = new Quote();

        $validatedData = $request->validate([
            'author' => 'required|string|max:50',
            'quote' => 'required|string',
        ]);

        $quote->author = $validatedData['author'];
        $quote->quote = $validatedData['quote'];
        $quote->save();
        return redirect()->route('QuoteForm')->with('success', 'Quote created successfully!');
    }

    public function update(Request $request, Quote $quote): RedirectResponse {
        $validatedData = $request->validate([
            'author' => 'required|string|max:50',
            'quote' => 'required|string',
        ]);

        $quote->author = $validatedData['author'];
        $quote->quote = $validatedData['quote'];
        $quote->save();
        return redirect()->route('QuoteForm')->with('success', 'Quote updated successfully!');
    }

    public function destroy(Quote $quote): RedirectResponse {
        $quote->delete();
        return redirect()->route('QuoteForm')->with('success', 'Quote deleted successfully!');
    }
}
