<?php

namespace Database\Seeders;

use App\Models\Faq;
use App\Models\HomeStat;
use App\Models\LoanProduct;
use App\Models\Slide;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

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
                ['value' => '6.8b', 'label' => 'Asset',    'link' => '/loans',     'order' => 2, 'created_at' => now(), 'updated_at' => now()],
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
        // Keyed by name so re-running the seeder adds new products and refreshes
        // existing ones. A count() === 0 guard would skip everything once the
        // table already holds any rows (e.g. the original 4 seeded loans).
        $loans = [
            ['name' => 'Regular Loan', 'description' => 'This loan product serves both productive and providential needs. It goes beyond the member’s share capital and is usually used for various purposes. The loan disbursement is scheduled by the assigned Account Officer.', 'interest' => '21% p.a.', 'term' => 'Max. of 36 months', 'payment' => 'Monthly', 'order' => 1, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Express Loan', 'description' => 'This loan type is available for an amount that is equal to or less than a member’s share capital. It’s designed to be quickly approved and disbursed on the same day it’s applied for.', 'interest' => '12% p.a.', 'term' => 'Max. of 36 months', 'payment' => 'Monthly', 'order' => 2, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Petty Cash Loan', 'description' => 'This loan is specifically designed to address the immediate needs of our member borrowers. It’s accessible once the first installment of their ongoing regular loan has been successfully repaid.

The amount shall depend on the classification:

Diamond – maximum of PHP 6,000.00
Gold – maximum of PHP 5,000.00
Silver  – maximum of PHP 4,000.00
Bronze  – maximum of PHP 3,000.00', 'interest' => null, 'term' => null, 'payment' => null, 'order' => 3, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'ATM Salary Loan', 'description' => 'A loan product is offered to government and private employees receiving their salaries through their ATM. Applicant must hold a PERMANENT job status and must be at least in service for a minimum of 1 year. Once the loan is approved, the member’s ATM will be surrendered and will be automatically returned to the member once the loan account is settled.', 'interest' => '13% p.a.', 'term' => 'Max. of 36 months or 60 months for buy out', 'payment' => 'Monthly', 'order' => 4, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Automatic Payroll Deduction System (APDS)', 'description' => 'This is a salary loan product for DepEd Teaching and Non-Teaching Personnel. Since it is automatically deducted on the payroll system of Deped, surrendering of ATM is no longer needed. Applicants should be more than 1 year in service and have a PERMANENT job status.', 'interest' => '7.5% p.a.', 'term' => 'Max. of 36 months', 'payment' => 'Monthly', 'order' => 5, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Outreach Loan', 'description' => 'A loan product intended for the barangay officials receiving a regular monthly honorarium. No collateral is needed for this loan but a signed MOA, Resolution, and Promissory Note signed by all council members are submitted to GSAC.', 'interest' => '14% p.a.', 'term' => 'Max. of 24 months (Loan must be paid before end of term)', 'payment' => 'Monthly', 'order' => 6, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            [
                'name' => 'Car Loan',
                'description' => 'A loan product to finance the purchase of brand-new and second-hand vehicles for qualified members. The loan amount is the selling price less the cash-out borne by the member. Any cash discount granted by the car dealer will be deducted from the selling price in favor of the member-borrower. Requirements: Signed special car loan form with 2 member references, proof of income, and complete details of the desired vehicle. Comprehensive insurance must be availed from CLIMBS.',
                'interest' => '12% per annum',
                'term' => 'Up to 60 months maximum (brand-new cars only)',
                'payment' => 'Monthly',
                'order' => 7,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            ['name' => 'Appliance Loan', 'description' => 'A loan to finance the purchase of appliances, gadgets, and construction materials. The amount of the loan shall be based on the credit limit and capacity to pay of member. A 25% down payment is required.', 'interest' => '21% p.a.', 'term' => '36 months', 'payment' => 'Monthly', 'order' => 8, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Pension Loan', 'description' => 'This is a loan product intended for those who are already receiving monthly pension thru ATM. Once the loan is approved, the ATM where the pension is received will be surrendered on the duration of the loan and will be released when the loan is fully paid.', 'interest' => '16 p.a.', 'term' => '36 months (May depend on age of member)', 'payment' => 'Monthly', 'order' => 9, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Commercial Loan', 'description' => 'This loan type requires a titled property to be offered as collateral in exchange for a substantial loan amount. It’s available to all members who have fulfilled the necessary share capital requirement. The property could be residential, commercial, or agricultural, and it should fall within the operational area of the branch. Members are responsible for handling the documentation process with the Register of Deeds (ROD) and Bureau of Internal Revenue (BIR).', 'interest' => '12 p.a.', 'term' => 'Max. of 120 months', 'payment' => 'Monthly', 'order' => 10, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Commodity Loan', 'description' => 'This loan is tailored for acquiring rice, groceries, and animal feeds by our members. The loan amount is contingent on the member’s classification and is expected to be repaid within 30 working days of the cooperative.', 'interest' => '21 p.a.', 'term' => '30 coop working days', 'payment' => 'Monthly', 'order' => 11, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Back-to-back Loan', 'description' => 'A loan product available to Savings and Time Deposit account holders of GSAC wherein the loan shall be secured by the time deposit and savings account of the member. During the term of the loan, the time deposit and savings account shall be on hold until the loan is fully paid.', 'interest' => 'Time Deposit & Savings Interest Plus 4% Mark-Up', 'term' => 'Max. of 36 months', 'payment' => 'Monthly', 'order' => 12, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Housing Loan', 'description' => 'This loan is intended for the purchase of a house, lot, condo unit, and renovation or improvement of a house. The member should have no delinquent accounts and must meet the required disposable net income. Member-borrower and his co-makers must not be more than 65 y.o. upon maturity of the loan. Net take-home pay must be P10,000 and P20,000 for married borrowers.', 'interest' => '12% p.a.', 'term' => 'Max. of 20 months', 'payment' => 'Monthly', 'order' => 13, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'OFW Loan (Show Money Loan)', 'description' => 'The loan amount is determined by the financial needs outlined by the foreign embassy. It comes with a zero interest rate and entails a filing fee of Php50.00. Additionally, there is a service fee that varies based on the chosen loan term.', 'interest' => '0% p.a.', 'term' => 'Max. of 6 months', 'payment' => 'Monthly', 'order' => 14, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'ASA Loan', 'description' => 'This loan is designed to provide financial support for a member’s business venture. While granted to a group, each individual member bears their own liability for the loan.', 'interest' => '30% p.a.', 'term' => 'Max. of 6 months', 'payment' => 'Weekly', 'order' => 15, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'SME Loan', 'description' => 'This loan is offered to individuals who already have existing businesses. The loan amount is determined based on the Cash Flow assessment, which is derived from the findings of the Credit and Background Investigations.', 'interest' => '30% p.a.', 'term' => 'Max. of 6 months', 'payment' => 'Weekly', 'order' => 16, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Agricultural Loan', 'description' => 'Let us assist you in achieving successful and productive farming. We offer loans up to PHP 40,000.00 per hectare, with a maximum coverage of four (4) hectares. This loan won’t stop you from accessing other loans within your individual limit. Our goal is to help you with farming expenses: this loan is intended to partially pay for farming costs of production: farm inputs such as seeds, fertilizers, and pesticides among others will be given in kind while the cash component will finance to cover transplanting costs.

This loan opportunity is also available for hog and cattle raising, as well as fishpond management and high-value crop farming. The loan amount will be determined based on the outcomes of your CI/BI', 'interest' => '30% p.a.', 'term' => 'Max. of 6 months', 'payment' => 'Weekly', 'order' => 17, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Cacao Loan', 'description' => 'This loan is designed to support cacao production. You’ll receive funding in the form of cacao seedlings and necessary farming supplies. Rest assured, GSAC will act as a guaranteed market for the cacao you produce as a member borrower.', 'interest' => '6% p.a.', 'term' => '7 years with 2 years as grace period', 'payment' => 'Quarterly', 'order' => 18, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Medical Loan', 'description' => 'This loan is meant to provide a 0% interest reimbursement for the medical expenses incurred by the member. It’s applicable for the member’s dependents as well. To access this loan, a minimum deposit of Php 500 and a maximum of Php 10,000 into the Damayan Health Fund is necessary. For this loan product, the member can borrow an amount up to five (5) times their deposit.', 'interest' => '0% p.a.', 'term' => '12 months', 'payment' => 'Monthly', 'order' => 19, 'is_active' => true, 'created_at' => now(), 'updated_at' => now()],
        ];

        foreach ($loans as $loan) {
            LoanProduct::updateOrCreate(
                ['name' => $loan['name']],
                Arr::except($loan, ['name', 'created_at', 'updated_at']),
            );
        }
    }
}
