<?php

namespace Database\Seeders;

use App\Models\Faq;
use App\Models\HomeStat;
use App\Models\LoanProduct;
use App\Models\Slide;
use Illuminate\Database\Seeder;

class CmsSeeder extends Seeder
{
    public function run(): void
    {
        // Slides
        if (Slide::count() === 0) {
            Slide::insert([
                ['title' => 'The keeper of your trust for 60 years now.', 'subtitle' => 'Continuing to serve with unwavering trust and excellence since 1964', 'button_text' => 'Join GSAC now', 'button_url' => '/onlinemembership', 'bg_class' => 'slide1', 'order' => 1, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
                ['title' => 'GCash accepted at GSAC.', 'subtitle' => 'Conveniently pay your loans and deposits via GCash.', 'button_text' => null, 'button_url' => null, 'bg_class' => 'slide2', 'order' => 2, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
                ['title' => 'Grow with GSAC.', 'subtitle' => 'Savings, loans, insurance and more.', 'button_text' => 'Our Products', 'button_url' => '/products', 'bg_class' => 'slide3', 'order' => 3, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ]);
        }

        // Home Stats
        if (HomeStat::count() === 0) {
            HomeStat::insert([
                ['value' => '71k', 'label' => 'Members',  'link' => '/savings',   'order' => 1, 'created_at' => now(), 'updated_at' => now()],
                ['value' => '6.8b','label' => 'Asset',    'link' => '/loans',     'order' => 2, 'created_at' => now(), 'updated_at' => now()],
                ['value' => '18',  'label' => 'Branches', 'link' => '/branches',  'order' => 3, 'created_at' => now(), 'updated_at' => now()],
            ]);
        }

        // FAQs
        if (Faq::count() === 0) {
            Faq::insert([
                ['question' => 'How do I become a member of GSAC?', 'answer' => 'You can apply online through our Membership Form or visit any of our branches. Bring a valid ID and the required initial share capital.', 'order' => 1, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
                ['question' => 'What types of loans does GSAC offer?', 'answer' => 'GSAC offers Regular Loans, Express Loans, Petty Cash Loans, Agri-Production Loans, and more. Visit our Loans page for full details.', 'order' => 2, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
                ['question' => 'Can I pay my loans via GCash?', 'answer' => 'Yes! GSAC now accepts GCash payments for loan amortizations and savings deposits.', 'order' => 3, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
                ['question' => 'Where are GSAC branches located?', 'answer' => 'GSAC operates 18 branches across the Bicol Region. Visit our Branches page for the complete list of locations.', 'order' => 4, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ]);
        }

        // Loan Products
        if (LoanProduct::count() === 0) {
            LoanProduct::insert([
                ['name' => 'Regular Loan', 'description' => 'This loan product serves both productive and providential needs. It goes beyond the member\'s share capital and is usually used for various purposes.', 'interest' => '21% p.a.', 'term' => 'Max. of 36 months', 'payment' => 'Monthly', 'order' => 1, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
                ['name' => 'Express Loan', 'description' => 'This loan type is available for an amount equal to or less than a member\'s share capital. Designed to be quickly approved and disbursed on the same day.', 'interest' => '12% p.a.', 'term' => 'Max. of 36 months', 'payment' => 'Monthly', 'order' => 2, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
                ['name' => 'Petty Cash Loan', 'description' => 'Specifically designed to address the immediate needs of member borrowers. Accessible once the first installment of an ongoing regular loan has been repaid.', 'interest' => '18% p.a.', 'term' => 'Max. of 6 months', 'payment' => 'Monthly', 'order' => 3, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
                ['name' => 'Agri-Production Loan', 'description' => 'Designed for member-owners engaged in agricultural production. Supports palay, corn, and other crop production needs.', 'interest' => '15% p.a.', 'term' => 'Max. of 12 months', 'payment' => 'Upon harvest', 'order' => 4, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ]);
        }
    }
}
