import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';

interface Announcement { id: number; title: string; content: string; is_published: boolean; published_at: string | null; }
const empty = { title: '', content: '', is_published: false, published_at: '' };

export default function AnnouncementsIndex({ announcements }: { announcements: Announcement[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Announcement | null>(null);
    const { data, setData, post, put, processing, reset, errors } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(a: Announcement) {
        setEditing(a);
        setData({ title: a.title, content: a.content, is_published: a.is_published, published_at: a.published_at ?? '' } as any);
        setOpen(true);
    }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/announcements/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/announcements', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete?')) router.delete(`/admin/announcements/${id}`); }

    return (
        <>
            <Head title="Announcements" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div><h1 className="text-2xl font-bold">Announcements</h1><p className="text-sm text-muted-foreground">News and notices for the website</p></div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"><Plus className="w-4 h-4" /> New Announcement</button>
                </div>
                <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted text-muted-foreground"><tr><th className="text-left px-4 py-3">Title</th><th className="text-left px-4 py-3">Status</th><th className="text-left px-4 py-3">Published</th><th className="px-4 py-3"></th></tr></thead>
                        <tbody>
                            {announcements.map(a => (
                                <tr key={a.id} className="border-t border-border hover:bg-muted/40">
                                    <td className="px-4 py-3 font-medium">{a.title}</td>
                                    <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${a.is_published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{a.is_published ? 'Published' : 'Draft'}</span></td>
                                    <td className="px-4 py-3 text-muted-foreground">{a.published_at ? new Date(a.published_at).toLocaleDateString() : '—'}</td>
                                    <td className="px-4 py-3 flex gap-2 justify-end">
                                        <button onClick={() => openEdit(a)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                        <button onClick={() => destroy(a.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                    </td>
                                </tr>
                            ))}
                            {announcements.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No announcements yet.</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-lg p-6">
                        <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit' : 'New'} Announcement</h2><button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button></div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            <div><label className="block text-sm font-medium mb-1">Title *</label><input required value={(data as any).title} onChange={e => setData('title' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                            <div><label className="block text-sm font-medium mb-1">Content *</label><textarea required rows={6} value={(data as any).content} onChange={e => setData('content' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" /></div>
                            <div className="flex items-center gap-2"><input type="checkbox" id="pub" checked={(data as any).is_published} onChange={e => setData('is_published' as any, e.target.checked)} className="w-4 h-4" /><label htmlFor="pub" className="text-sm font-medium">Publish immediately</label></div>
                            <div className="flex justify-end gap-2 mt-2">
                                <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-muted">Cancel</button>
                                <button type="submit" disabled={processing} className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50">{processing ? 'Saving…' : 'Save'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
AnnouncementsIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'Announcements', href: '/admin/announcements' }] };
