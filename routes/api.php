<?php

use App\Http\Controllers\Api\CmsController;
use Illuminate\Support\Facades\Route;

// Public CMS API — rate limited to 60 requests/minute per IP
Route::middleware('throttle:60,1')->prefix('cms')->group(function () {
    Route::get('slides',        [CmsController::class, 'slides']);
    Route::get('announcements', [CmsController::class, 'announcements']);
    Route::get('stats',         [CmsController::class, 'stats']);
    Route::get('board-members', [CmsController::class, 'boardMembers']);
    Route::get('branches',      [CmsController::class, 'branches']);
    Route::get('faqs',          [CmsController::class, 'faqs']);
    Route::get('jobs',          [CmsController::class, 'jobs']);
    Route::get('loans',         [CmsController::class, 'loans']);
    Route::get('yellow-pages',  [CmsController::class, 'yellowPages']);
});
