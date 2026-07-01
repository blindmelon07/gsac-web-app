import { Link } from '@inertiajs/react';
import {
    LayoutGrid,
    Megaphone,
    Users,
    GitBranch,
    HelpCircle,
    Briefcase,
    CreditCard,
    BookOpen,
    Image,
    BarChart3,
} from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    { title: 'Dashboard',      href: dashboard(),              icon: LayoutGrid  },
    { title: 'Slides',         href: '/admin/slides',          icon: Image       },
    { title: 'Announcements',  href: '/admin/announcements',   icon: Megaphone   },
    { title: 'Home Stats',     href: '/admin/stats',           icon: BarChart3   },
    { title: 'Board Members',  href: '/admin/board',           icon: Users       },
    { title: 'Branches',       href: '/admin/branches',        icon: GitBranch   },
    { title: 'FAQs',           href: '/admin/faqs',            icon: HelpCircle  },
    { title: 'Job Postings',   href: '/admin/jobs',            icon: Briefcase   },
    { title: 'Loan Products',  href: '/admin/loans',           icon: CreditCard  },
    { title: 'Yellow Pages',   href: '/admin/yellow-pages',    icon: BookOpen    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
