<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('slides', function (Blueprint $table) {
            $table->index(['is_active', 'order']);
        });
        Schema::table('announcements', function (Blueprint $table) {
            $table->index(['is_published', 'published_at']);
        });
        Schema::table('home_stats', function (Blueprint $table) {
            $table->index('order');
        });
        Schema::table('board_members', function (Blueprint $table) {
            $table->index(['category', 'order']);
        });
        Schema::table('branches', function (Blueprint $table) {
            $table->index('order');
        });
        Schema::table('faqs', function (Blueprint $table) {
            $table->index(['is_active', 'order']);
        });
        Schema::table('job_postings', function (Blueprint $table) {
            $table->index(['is_active', 'created_at']);
        });
        Schema::table('loan_products', function (Blueprint $table) {
            $table->index(['is_active', 'order']);
        });
        Schema::table('yellow_page_listings', function (Blueprint $table) {
            $table->index(['category', 'name']);
        });
    }

    public function down(): void
    {
        Schema::table('slides',               fn($t) => $t->dropIndex(['is_active', 'order']));
        Schema::table('announcements',        fn($t) => $t->dropIndex(['is_published', 'published_at']));
        Schema::table('home_stats',           fn($t) => $t->dropIndex(['order']));
        Schema::table('board_members',        fn($t) => $t->dropIndex(['category', 'order']));
        Schema::table('branches',             fn($t) => $t->dropIndex(['order']));
        Schema::table('faqs',                 fn($t) => $t->dropIndex(['is_active', 'order']));
        Schema::table('job_postings',         fn($t) => $t->dropIndex(['is_active', 'created_at']));
        Schema::table('loan_products',        fn($t) => $t->dropIndex(['is_active', 'order']));
        Schema::table('yellow_page_listings', fn($t) => $t->dropIndex(['category', 'name']));
    }
};
