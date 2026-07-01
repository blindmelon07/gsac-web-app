<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class LoanProduct extends Model {
    protected $fillable = ['name','description','interest','term','payment','order','is_active'];
    protected $casts = ['is_active' => 'boolean'];
}
