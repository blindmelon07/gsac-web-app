<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class BoardMember extends Model {
    protected $fillable = ['name','position','category','photo_path','order'];
}
