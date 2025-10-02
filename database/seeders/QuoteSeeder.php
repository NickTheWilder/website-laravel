<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $quotes = [
            [
                'author' => 'John Woods',
                'quote' => 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
            ],
            [
                'author' => 'Jim Benson',
                'quote' => 'Software being \'Done\' is like lawn being \'Mowed\'.',
            ],
            [
                'author' => 'Socrates',
                'quote' => 'There is only one good, knowledge, and one evil, ignorance',
            ],
            [
                'author' => 'The Primeagen',
                'quote' => 'The name...',
            ],
            [
                'author' => 'Edsger W. Dijkstra',
                'quote' => 'If debugging is the process of removing bugs, then programming must be the process of putting them in.',
            ],
            [
                'author' => 'Martin Fowler',
                'quote' => 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            ],
            [
                'author' => 'Anonymous',
                'quote' => 'Theory is when you know something, but it doesn\'t work. Practice is when something works, but you don\'t know why. Programmers combine theory and practice: Nothing works and they don\'t know why.',
            ],
            [
                'author' => 'Grace Hopper',
                'quote' => 'The most dangerous phrase in the language is, \'We\'ve always done it this way.\'',
            ],
            [
                'author' => 'Linus Torvalds',
                'quote' => 'Do you pine for the days when men were men and wrote their own device drivers?',
            ],
            [
                'author' => 'Alan Kay',
                'quote' => 'The best way to predict the future is to invent it.',
            ],
            [
                'author' => 'Donald Knuth',
                'quote' => 'Premature optimization is the root of all evil.',
            ],
            [
                'author' => 'Robert C. Martin',
                'quote' => 'The only way to go fast is to go well.',
            ],
            [
                'author' => 'Kent Beck',
                'quote' => 'Make it work, make it right, make it fast.',
            ],
            [
                'author' => 'Marcus Aurelius',
                'quote' => 'You have power over your mind - not outside events. Realize this, and you will find strength.',
            ],
            [
                'author' => 'Albert Einstein',
                'quote' => 'Logic will get you from A to B. Imagination will take you everywhere.',
            ],
            [
                'author' => 'Ada Lovelace',
                'quote' => 'The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.',
            ],
            [
                'author' => 'Steve Jobs',
                'quote' => 'Design is not just what it looks like and feels like. Design is how it works.',
            ],
            [
                'author' => 'Ralph Johnson',
                'quote' => 'Before software can be reusable it first has to be usable.',
            ],
            [
                'author' => 'Aristotle',
                'quote' => 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
            ],
            [
                'author' => 'Seneca',
                'quote' => 'It is not that we have a short time to live, but that we waste a lot of it.',
            ],
            [
                'author' => 'Fred Brooks',
                'quote' => 'The hardest single part of building a software system is deciding precisely what to build.',
            ],
            [
                'author' => 'Carl Sagan',
                'quote' => 'If you wish to make an apple pie from scratch, you must first invent the universe.',
            ],
            [
                'author' => 'Richard Feynman',
                'quote' => 'The first principle is that you must not fool yourself and you are the easiest person to fool.',
            ],
            [
                'author' => 'Bjarne Stroustrup',
                'quote' => 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
            ],
        ];

        DB::table('quotes')->insert($quotes);
    }
}
