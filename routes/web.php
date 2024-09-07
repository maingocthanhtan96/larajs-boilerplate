<?php

use Illuminate\Support\Facades\Route;

Route::get('/{path}', static fn () => view('spa'))->where('path', '(.*)');
