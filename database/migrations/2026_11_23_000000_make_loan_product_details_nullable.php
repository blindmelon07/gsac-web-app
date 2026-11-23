<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('loan_products', function (Blueprint $table) {
            $table->string('interest')->nullable()->change();
            $table->string('term')->nullable()->change();
            $table->string('payment')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('loan_products', function (Blueprint $table) {
            $table->string('interest')->nullable(false)->change();
            $table->string('term')->nullable(false)->change();
            $table->string('payment')->nullable(false)->change();
        });
    }
};
