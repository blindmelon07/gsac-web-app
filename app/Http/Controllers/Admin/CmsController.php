<?php

namespace App\Http\Controllers\Admin;

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
use Illuminate\Http\Request;
use Inertia\Inertia;

class CmsController extends Controller
{
    private const BG_CLASSES  = ['slide1', 'slide2', 'slide3', 'feature3'];
    private const CATEGORIES  = ['board', 'audit', 'election', 'mediation', 'ethics', 'keypersons'];
    private const YP_CATS     = ['agriculture', 'healthcare', 'retail', 'hospitality', 'financial', 'education'];
    private const SAFE_URL    = 'nullable|string|max:500|regex:/^(https?:\/\/|\/).*/';

    public function dashboard()
    {
        return Inertia::render('admin/dashboard', [
            'counts' => [
                'slides'        => Slide::count(),
                'announcements' => Announcement::count(),
                'boardMembers'  => BoardMember::count(),
                'branches'      => Branch::count(),
                'faqs'          => Faq::count(),
                'jobs'          => JobPosting::where('is_active', true)->count(),
                'loans'         => LoanProduct::count(),
                'yellowPages'   => YellowPageListing::count(),
            ],
        ]);
    }

    // ── Slides ──────────────────────────────────────────────
    public function slides() { return Inertia::render('admin/slides/index', ['slides' => Slide::orderBy('order')->get()]); }

    private function slideRules(): array
    {
        return [
            'title'       => 'required|string|max:255',
            'subtitle'    => 'nullable|string|max:500',
            'button_text' => 'nullable|string|max:100',
            'button_url'  => self::SAFE_URL,
            'bg_class'    => 'required|string|in:' . implode(',', self::BG_CLASSES),
            'order'       => 'integer|min:0|max:999',
            'is_active'   => 'boolean',
        ];
    }
    public function storeSlide(Request $r)  { Slide::create($r->validate($this->slideRules())); return back()->with('success', 'Slide created.'); }
    public function updateSlide(Request $r, Slide $slide) { $slide->update($r->validate($this->slideRules())); return back()->with('success', 'Slide updated.'); }
    public function destroySlide(Slide $slide) { $slide->delete(); return back()->with('success', 'Slide deleted.'); }

    // ── Announcements ────────────────────────────────────────
    public function announcements() { return Inertia::render('admin/announcements/index', ['announcements' => Announcement::orderByDesc('created_at')->get()]); }

    private function announcementRules(): array
    {
        return [
            'title'        => 'required|string|max:255',
            'content'      => 'required|string|max:20000',
            'is_published' => 'boolean',
            'published_at' => 'nullable|date',
        ];
    }
    public function storeAnnouncement(Request $r)
    {
        $data = $r->validate($this->announcementRules());
        if (!empty($data['is_published']) && empty($data['published_at'])) $data['published_at'] = now();
        Announcement::create($data);
        return back()->with('success', 'Announcement created.');
    }
    public function updateAnnouncement(Request $r, Announcement $announcement)
    {
        $data = $r->validate($this->announcementRules());
        if (!empty($data['is_published']) && empty($data['published_at'])) $data['published_at'] = now();
        $announcement->update($data);
        return back()->with('success', 'Announcement updated.');
    }
    public function destroyAnnouncement(Announcement $announcement) { $announcement->delete(); return back()->with('success', 'Deleted.'); }

    // ── Stats ────────────────────────────────────────────────
    public function stats() { return Inertia::render('admin/stats/index', ['stats' => HomeStat::orderBy('order')->get()]); }

    private function statRules(): array
    {
        return [
            'value' => 'required|string|max:50',
            'label' => 'required|string|max:100',
            'link'  => self::SAFE_URL,
            'order' => 'integer|min:0|max:999',
        ];
    }
    public function storeStat(Request $r)  { HomeStat::create($r->validate($this->statRules())); return back()->with('success', 'Stat created.'); }
    public function updateStat(Request $r, HomeStat $stat) { $stat->update($r->validate($this->statRules())); return back()->with('success', 'Stat updated.'); }
    public function destroyStat(HomeStat $stat) { $stat->delete(); return back()->with('success', 'Deleted.'); }

    // ── Board Members ────────────────────────────────────────
    public function boardMembers() { return Inertia::render('admin/board/index', ['members' => BoardMember::orderBy('category')->orderBy('order')->get()]); }

    private function boardRules(): array
    {
        return [
            'name'       => 'required|string|max:255',
            'position'   => 'required|string|max:255',
            'category'   => 'required|string|in:' . implode(',', self::CATEGORIES),
            'photo_path' => 'nullable|string|max:500',
            'order'      => 'integer|min:0|max:999',
        ];
    }
    public function storeBoardMember(Request $r)  { BoardMember::create($r->validate($this->boardRules())); return back()->with('success', 'Member added.'); }
    public function updateBoardMember(Request $r, BoardMember $member) { $member->update($r->validate($this->boardRules())); return back()->with('success', 'Member updated.'); }
    public function destroyBoardMember(BoardMember $member) { $member->delete(); return back()->with('success', 'Deleted.'); }

    // ── Branches ─────────────────────────────────────────────
    public function branches() { return Inertia::render('admin/branches/index', ['branches' => Branch::orderBy('order')->get()]); }

    private function branchRules(): array
    {
        return [
            'name'       => 'required|string|max:255',
            'address'    => 'required|string|max:500',
            'manager'    => 'nullable|string|max:255',
            'contact'    => 'nullable|string|max:100',
            'email'      => 'nullable|email|max:255',
            'photo_path' => 'nullable|string|max:500',
            'order'      => 'integer|min:0|max:999',
        ];
    }
    public function storeBranch(Request $r)  { Branch::create($r->validate($this->branchRules())); return back()->with('success', 'Branch created.'); }
    public function updateBranch(Request $r, Branch $branch) { $branch->update($r->validate($this->branchRules())); return back()->with('success', 'Branch updated.'); }
    public function destroyBranch(Branch $branch) { $branch->delete(); return back()->with('success', 'Deleted.'); }

    // ── FAQs ─────────────────────────────────────────────────
    public function faqs() { return Inertia::render('admin/faqs/index', ['faqs' => Faq::orderBy('order')->get()]); }

    private function faqRules(): array
    {
        return [
            'question'  => 'required|string|max:500',
            'answer'    => 'required|string|max:10000',
            'order'     => 'integer|min:0|max:999',
            'is_active' => 'boolean',
        ];
    }
    public function storeFaq(Request $r)  { Faq::create($r->validate($this->faqRules())); return back()->with('success', 'FAQ created.'); }
    public function updateFaq(Request $r, Faq $faq) { $faq->update($r->validate($this->faqRules())); return back()->with('success', 'FAQ updated.'); }
    public function destroyFaq(Faq $faq) { $faq->delete(); return back()->with('success', 'Deleted.'); }

    // ── Jobs ─────────────────────────────────────────────────
    public function jobs() { return Inertia::render('admin/jobs/index', ['jobs' => JobPosting::orderByDesc('created_at')->get()]); }

    private function jobRules(): array
    {
        return [
            'title'        => 'required|string|max:255',
            'department'   => 'nullable|string|max:255',
            'description'  => 'required|string|max:10000',
            'requirements' => 'nullable|string|max:5000',
            'is_active'    => 'boolean',
        ];
    }
    public function storeJob(Request $r)  { JobPosting::create($r->validate($this->jobRules())); return back()->with('success', 'Job posting created.'); }
    public function updateJob(Request $r, JobPosting $job) { $job->update($r->validate($this->jobRules())); return back()->with('success', 'Job posting updated.'); }
    public function destroyJob(JobPosting $job) { $job->delete(); return back()->with('success', 'Deleted.'); }

    // ── Loans ─────────────────────────────────────────────────
    public function loans() { return Inertia::render('admin/loans/index', ['loans' => LoanProduct::orderBy('order')->get()]); }

    private function loanRules(): array
    {
        return [
            'name'        => 'required|string|max:255',
            'description' => 'required|string|max:5000',
            'interest'    => 'required|string|max:100',
            'term'        => 'required|string|max:100',
            'payment'     => 'required|string|max:100',
            'order'       => 'integer|min:0|max:999',
            'is_active'   => 'boolean',
        ];
    }
    public function storeLoan(Request $r)  { LoanProduct::create($r->validate($this->loanRules())); return back()->with('success', 'Loan product created.'); }
    public function updateLoan(Request $r, LoanProduct $loan) { $loan->update($r->validate($this->loanRules())); return back()->with('success', 'Loan product updated.'); }
    public function destroyLoan(LoanProduct $loan) { $loan->delete(); return back()->with('success', 'Deleted.'); }

    // ── Yellow Pages ─────────────────────────────────────────
    public function yellowPages() { return Inertia::render('admin/yellow-pages/index', ['listings' => YellowPageListing::orderBy('category')->orderBy('name')->get()]); }

    private function yellowPageRules(): array
    {
        return [
            'name'        => 'required|string|max:255',
            'category'    => 'required|string|in:' . implode(',', self::YP_CATS),
            'address'     => 'nullable|string|max:500',
            'phone'       => 'nullable|string|max:50',
            'email'       => 'nullable|email|max:255',
            'description' => 'nullable|string|max:2000',
        ];
    }
    public function storeYellowPage(Request $r)  { YellowPageListing::create($r->validate($this->yellowPageRules())); return back()->with('success', 'Listing created.'); }
    public function updateYellowPage(Request $r, YellowPageListing $listing) { $listing->update($r->validate($this->yellowPageRules())); return back()->with('success', 'Listing updated.'); }
    public function destroyYellowPage(YellowPageListing $listing) { $listing->delete(); return back()->with('success', 'Deleted.'); }
}
