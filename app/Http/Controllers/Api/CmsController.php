<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\BoardMember;
use App\Models\Branch;
use App\Models\Faq;
use App\Models\HomeStat;
use App\Models\JobPosting;
use App\Models\LoanProduct;
use App\Models\Slide;
use App\Models\YellowPageListing;

class CmsController extends Controller
{
    public function slides()
    {
        return response()->json(
            Slide::select('id', 'title', 'subtitle', 'button_text', 'button_url', 'bg_class', 'order')
                ->where('is_active', true)->orderBy('order')->get()
        );
    }

    public function announcements()
    {
        return response()->json(
            Announcement::select('id', 'title', 'content', 'published_at')
                ->where('is_published', true)->orderByDesc('published_at')->get()
        );
    }

    public function stats()
    {
        return response()->json(
            HomeStat::select('id', 'value', 'label', 'link', 'order')
                ->orderBy('order')->get()
        );
    }

    public function boardMembers()
    {
        return response()->json(
            BoardMember::select('id', 'name', 'position', 'category', 'photo_path', 'order')
                ->orderBy('category')->orderBy('order')->get()
        );
    }

    public function branches()
    {
        return response()->json(
            Branch::select('id', 'name', 'address', 'manager', 'contact', 'email', 'photo_path', 'order')
                ->orderBy('order')->get()
        );
    }

    public function faqs()
    {
        return response()->json(
            Faq::select('id', 'question', 'answer', 'order')
                ->where('is_active', true)->orderBy('order')->get()
        );
    }

    public function jobs()
    {
        return response()->json(
            JobPosting::select('id', 'title', 'department', 'description', 'requirements', 'created_at')
                ->where('is_active', true)->orderByDesc('created_at')->get()
        );
    }

    public function loans()
    {
        return response()->json(
            LoanProduct::select('id', 'name', 'description', 'interest', 'term', 'payment', 'order')
                ->where('is_active', true)->orderBy('order')->get()
        );
    }

    public function yellowPages()
    {
        return response()->json(
            YellowPageListing::select('id', 'name', 'category', 'address', 'phone', 'email', 'description')
                ->orderBy('category')->orderBy('name')->get()
        );
    }
}
