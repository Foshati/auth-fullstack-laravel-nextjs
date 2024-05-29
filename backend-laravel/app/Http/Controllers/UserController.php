<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function me()
    {
        $user = User::find(Auth::id());
        return response()->json(['user' => $user], 200);
    }
}
