<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class JobPosting extends Model {
    protected $fillable = ['title','department','description','requirements','is_active'];
    protected $casts = ['is_active' => 'boolean'];
}
