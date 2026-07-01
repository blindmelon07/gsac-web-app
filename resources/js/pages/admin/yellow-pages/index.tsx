import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';

interface Listing { id: number; name: string; category: string; address: string | null; phone: string | null; email: string | null; description: string | null; }
const CATEGORIES = ['agriculture','healthcare','retail','hospitality','financial','education'];
const empty = { name: '', category: 'agriculture', address: '', phone: '', email: '', description: '' };

export default function YellowPagesIndex({ listings }: { listings: Listing[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Listing | null>(null);
    const { data, setData, post, put, processing, reset } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(l: Listing) { setEditing(l); setData({ name: l.name, category: l.category, address: l.address ?? '', phone: l.phone ?? '', email: l.email ?? '', description: l.description ?? '' } as any); setOpen(true); }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/yellow-pages/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/yellow-pages', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete?')) router.delete(`/admin/yellow-pages/${id}`); }

    return (
        <>
            <Head title="Yellow Pages" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div><h1 className="text-2xl font-bold">Yellow Pages</h1><p className="text-sm text-muted-foreground">Business directory listings</p></div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"><Plus className="w-4 h-4" /> Add Listing</button>
                </div>
                <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted text-muted-foreground"><tr><th className="text-left px-4 py-3">Name</th><th className="text-left px-4 py-3">Category</th><th className="text-left px-4 py-3">Phone</th><th className="text-left px-4 py-3">Email</th><th className="px-4 py-3"></th></tr></thead>
                        <tbody>
                            {listings.map(l => (
                                <tr key={l.id} className="border-t border-border hover:bg-muted/40">
                                    <td className="px-4 py-3 font-medium">{l.name}</td>
                                    <td className="px-4 py-3"><span className="bg-muted px-2 py-1 rounded text-xs capitalize">{l.category}</span></td>
                                    <td className="px-4 py-3 text-muted-foreground">{l.phone ?? '—'}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{l.email ?? '—'}</td>
                                    <td className="px-4 py-3 flex gap-2 justify-end">
                                        <button onClick={() => openEdit(l)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                        <button onClick={() => destroy(l.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                    </td>
                                </tr>
                            ))}
                            {listings.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">No listings yet.</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit' : 'New'} Listing</h2><button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button></div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            <div><label className="block text-sm font-medium mb-1">Business Name *</label><input required value={(data as any).name} onChange={e => setData('name' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                            <div><label className="block text-sm font-medium mb-1">Category</label>
                                <select value={(data as any).category} onChange={e => setData('category' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                                    {CATEGORIES.map(c => <option key={c} value={c} className="capitalize">{c}</option>)}
                                </select>
                            </div>
                            {[['address','Address',false],['phone','Phone',false],['email','Email',false]].map(([f,l,req]) => (
                                <div key={f as string}><label className="block text-sm font-medium mb-1">{l as string}</label><input required={!!req} value={(data as any)[f as string]} onChange={e => setData(f as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                            ))}
                            <div><label className="block text-sm font-medium mb-1">Description</label><textarea rows={3} value={(data as any).description} onChange={e => setData('description' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" /></div>
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
YellowPagesIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'Yellow Pages', href: '/admin/yellow-pages' }] };
