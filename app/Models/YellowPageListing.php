<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class YellowPageListing extends Model {
    protected $fillable = ['name','category','address','phone','email','description','photos'];
    protected $casts = ['photos' => 'array'];
}
