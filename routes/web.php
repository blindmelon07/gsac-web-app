<?php

use App\Http\Controllers\Admin\CmsController;
use App\Http\Controllers\Admin\ImageUploadController;
use Illuminate\Support\Facades\Route;

// Admin panel (Inertia + auth + admin role)
Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('dashboard', [CmsController::class, 'dashboard'])->name('dashboard');

    // Image upload
    Route::post('admin/upload-image',  [ImageUploadController::class, 'upload'])->name('admin.upload-image');
    Route::post('admin/delete-image',  [ImageUploadController::class, 'delete'])->name('admin.delete-image');

    // Slides
    Route::get('admin/slides',              [CmsController::class, 'slides'])->name('admin.slides');
    Route::post('admin/slides',             [CmsController::class, 'storeSlide'])->name('admin.slides.store');
    Route::put('admin/slides/{slide}',      [CmsController::class, 'updateSlide'])->name('admin.slides.update');
    Route::delete('admin/slides/{slide}',   [CmsController::class, 'destroySlide'])->name('admin.slides.destroy');

    // Announcements
    Route::get('admin/announcements',                        [CmsController::class, 'announcements'])->name('admin.announcements');
    Route::post('admin/announcements',                       [CmsController::class, 'storeAnnouncement'])->name('admin.announcements.store');
    Route::put('admin/announcements/{announcement}',         [CmsController::class, 'updateAnnouncement'])->name('admin.announcements.update');
    Route::delete('admin/announcements/{announcement}',      [CmsController::class, 'destroyAnnouncement'])->name('admin.announcements.destroy');

    // Stats
    Route::get('admin/stats',            [CmsController::class, 'stats'])->name('admin.stats');
    Route::post('admin/stats',           [CmsController::class, 'storeStat'])->name('admin.stats.store');
    Route::put('admin/stats/{stat}',     [CmsController::class, 'updateStat'])->name('admin.stats.update');
    Route::delete('admin/stats/{stat}',  [CmsController::class, 'destroyStat'])->name('admin.stats.destroy');

    // Board Members
    Route::get('admin/board',              [CmsController::class, 'boardMembers'])->name('admin.board');
    Route::post('admin/board',             [CmsController::class, 'storeBoardMember'])->name('admin.board.store');
    Route::put('admin/board/{member}',     [CmsController::class, 'updateBoardMember'])->name('admin.board.update');
    Route::delete('admin/board/{member}',  [CmsController::class, 'destroyBoardMember'])->name('admin.board.destroy');

    // Branches
    Route::get('admin/branches',              [CmsController::class, 'branches'])->name('admin.branches');
    Route::post('admin/branches',             [CmsController::class, 'storeBranch'])->name('admin.branches.store');
    Route::put('admin/branches/{branch}',     [CmsController::class, 'updateBranch'])->name('admin.branches.update');
    Route::delete('admin/branches/{branch}',  [CmsController::class, 'destroyBranch'])->name('admin.branches.destroy');

    // FAQs
    Route::get('admin/faqs',           [CmsController::class, 'faqs'])->name('admin.faqs');
    Route::post('admin/faqs',          [CmsController::class, 'storeFaq'])->name('admin.faqs.store');
    Route::put('admin/faqs/{faq}',     [CmsController::class, 'updateFaq'])->name('admin.faqs.update');
    Route::delete('admin/faqs/{faq}',  [CmsController::class, 'destroyFaq'])->name('admin.faqs.destroy');

    // Jobs
    Route::get('admin/jobs',           [CmsController::class, 'jobs'])->name('admin.jobs');
    Route::post('admin/jobs',          [CmsController::class, 'storeJob'])->name('admin.jobs.store');
    Route::put('admin/jobs/{job}',     [CmsController::class, 'updateJob'])->name('admin.jobs.update');
    Route::delete('admin/jobs/{job}',  [CmsController::class, 'destroyJob'])->name('admin.jobs.destroy');

    // Loans
    Route::get('admin/loans',            [CmsController::class, 'loans'])->name('admin.loans');
    Route::post('admin/loans',           [CmsController::class, 'storeLoan'])->name('admin.loans.store');
    Route::put('admin/loans/{loan}',     [CmsController::class, 'updateLoan'])->name('admin.loans.update');
    Route::delete('admin/loans/{loan}',  [CmsController::class, 'destroyLoan'])->name('admin.loans.destroy');

    // Yellow Pages
    Route::get('admin/yellow-pages',               [CmsController::class, 'yellowPages'])->name('admin.yellow-pages');
    Route::post('admin/yellow-pages',              [CmsController::class, 'storeYellowPage'])->name('admin.yellow-pages.store');
    Route::put('admin/yellow-pages/{listing}',     [CmsController::class, 'updateYellowPage'])->name('admin.yellow-pages.update');
    Route::delete('admin/yellow-pages/{listing}',  [CmsController::class, 'destroyYellowPage'])->name('admin.yellow-pages.destroy');
});

require __DIR__.'/settings.php';

// Public frontend SPA — catch-all must be last
Route::get('/{any?}', function () {
    return view('frontend');
})->where('any', '^(?!api|admin|dashboard|login|register|settings|sanctum).*')->name('home');
