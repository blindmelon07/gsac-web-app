import { Head } from '@inertiajs/react';
import { LayoutGrid, Image, Megaphone, BarChart3, Users, GitBranch, HelpCircle, Briefcase, CreditCard, BookOpen } from 'lucide-react';
import { Link } from '@inertiajs/react';

interface Props {
    counts: {
        slides: number;
        announcements: number;
        boardMembers: number;
        branches: number;
        faqs: number;
        jobs: number;
        loans: number;
        yellowPages: number;
    };
}

const cards = [
    { label: 'Slides',        key: 'slides',        href: '/admin/slides',        icon: Image,      color: 'bg-blue-500'   },
    { label: 'Announcements', key: 'announcements', href: '/admin/announcements', icon: Megaphone,  color: 'bg-orange-500' },
    { label: 'Board Members', key: 'boardMembers',  href: '/admin/board',         icon: Users,      color: 'bg-purple-500' },
    { label: 'Branches',      key: 'branches',      href: '/admin/branches',      icon: GitBranch,  color: 'bg-green-500'  },
    { label: 'FAQs',          key: 'faqs',          href: '/admin/faqs',          icon: HelpCircle, color: 'bg-yellow-500' },
    { label: 'Job Postings',  key: 'jobs',          href: '/admin/jobs',          icon: Briefcase,  color: 'bg-red-500'    },
    { label: 'Loan Products', key: 'loans',         href: '/admin/loans',         icon: CreditCard, color: 'bg-teal-500'   },
    { label: 'Yellow Pages',  key: 'yellowPages',   href: '/admin/yellow-pages',  icon: BookOpen,   color: 'bg-pink-500'   },
] as const;

export default function AdminDashboard({ counts }: Props) {
    return (
        <>
            <Head title="CMS Dashboard" />
            <div className="flex flex-col gap-6 p-6">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">CMS Dashboard</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage all website content from here.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {cards.map(({ label, key, href, icon: Icon, color }) => (
                        <Link
                            key={key}
                            href={href}
                            className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
                        >
                            <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                                <Icon className="text-white w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">{counts[key]}</p>
                                <p className="text-sm text-muted-foreground">{label}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

AdminDashboard.layout = {
    breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }],
};
