<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deluxe extends Model
{
    use HasFactory;

    protected $fillable = ['image','car', 'price', 'brand', 'power', 'speed', 'cons'];
}
