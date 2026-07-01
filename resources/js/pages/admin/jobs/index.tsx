import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';

interface Job { id: number; title: string; department: string | null; description: string; requirements: string | null; is_active: boolean; created_at: string; }
const empty = { title: '', department: '', description: '', requirements: '', is_active: true };

export default function JobsIndex({ jobs }: { jobs: Job[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Job | null>(null);
    const { data, setData, post, put, processing, reset } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(j: Job) { setEditing(j); setData({ title: j.title, department: j.department ?? '', description: j.description, requirements: j.requirements ?? '', is_active: j.is_active } as any); setOpen(true); }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/jobs/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/jobs', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete?')) router.delete(`/admin/jobs/${id}`); }

    return (
        <>
            <Head title="Job Postings" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div><h1 className="text-2xl font-bold">Job Postings</h1><p className="text-sm text-muted-foreground">Manage career opportunities</p></div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"><Plus className="w-4 h-4" /> Post Job</button>
                </div>
                <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted text-muted-foreground"><tr><th className="text-left px-4 py-3">Title</th><th className="text-left px-4 py-3">Department</th><th className="text-left px-4 py-3">Status</th><th className="text-left px-4 py-3">Posted</th><th className="px-4 py-3"></th></tr></thead>
                        <tbody>
                            {jobs.map(j => (
                                <tr key={j.id} className="border-t border-border hover:bg-muted/40">
                                    <td className="px-4 py-3 font-medium">{j.title}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{j.department ?? '—'}</td>
                                    <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${j.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>{j.is_active ? 'Open' : 'Closed'}</span></td>
                                    <td className="px-4 py-3 text-muted-foreground">{new Date(j.created_at).toLocaleDateString()}</td>
                                    <td className="px-4 py-3 flex gap-2 justify-end">
                                        <button onClick={() => openEdit(j)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                        <button onClick={() => destroy(j.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                    </td>
                                </tr>
                            ))}
                            {jobs.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">No job postings yet.</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit' : 'New'} Job Posting</h2><button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button></div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            {[['title','Job Title',true],['department','Department',false]].map(([f,l,req]) => (
                                <div key={f as string}><label className="block text-sm font-medium mb-1">{l as string}</label><input required={!!req} value={(data as any)[f as string]} onChange={e => setData(f as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                            ))}
                            <div><label className="block text-sm font-medium mb-1">Description *</label><textarea required rows={4} value={(data as any).description} onChange={e => setData('description' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" /></div>
                            <div><label className="block text-sm font-medium mb-1">Requirements</label><textarea rows={3} value={(data as any).requirements} onChange={e => setData('requirements' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" /></div>
                            <div className="flex items-center gap-2"><input type="checkbox" id="active" checked={(data as any).is_active} onChange={e => setData('is_active' as any, e.target.checked)} className="w-4 h-4" /><label htmlFor="active" className="text-sm font-medium">Open for applications</label></div>
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
JobsIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'Job Postings', href: '/admin/jobs' }] };
