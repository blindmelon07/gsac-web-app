import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';

interface Loan { id: number; name: string; description: string; interest: string | null; term: string | null; payment: string | null; order: number; is_active: boolean; }
const empty = { name: '', description: '', interest: '', term: '', payment: '', order: 0, is_active: true };

export default function LoansIndex({ loans }: { loans: Loan[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Loan | null>(null);
    const { data, setData, post, put, processing, reset } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(l: Loan) { setEditing(l); setData({ name: l.name, description: l.description, interest: l.interest ?? '', term: l.term ?? '', payment: l.payment ?? '', order: l.order, is_active: l.is_active } as any); setOpen(true); }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/loans/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/loans', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete?')) router.delete(`/admin/loans/${id}`); }

    return (
        <>
            <Head title="Loan Products" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div><h1 className="text-2xl font-bold">Loan Products</h1><p className="text-sm text-muted-foreground">Manage available loan types</p></div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"><Plus className="w-4 h-4" /> Add Loan</button>
                </div>
                <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted text-muted-foreground"><tr><th className="text-left px-4 py-3">Name</th><th className="text-left px-4 py-3">Interest</th><th className="text-left px-4 py-3">Term</th><th className="text-left px-4 py-3">Payment</th><th className="text-left px-4 py-3">Status</th><th className="px-4 py-3"></th></tr></thead>
                        <tbody>
                            {loans.map(l => (
                                <tr key={l.id} className="border-t border-border hover:bg-muted/40">
                                    <td className="px-4 py-3 font-medium">{l.name}</td>
                                    <td className="px-4 py-3">{l.interest}</td>
                                    <td className="px-4 py-3">{l.term}</td>
                                    <td className="px-4 py-3">{l.payment}</td>
                                    <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${l.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>{l.is_active ? 'Active' : 'Hidden'}</span></td>
                                    <td className="px-4 py-3 flex gap-2 justify-end">
                                        <button onClick={() => openEdit(l)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                        <button onClick={() => destroy(l.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                    </td>
                                </tr>
                            ))}
                            {loans.length === 0 && <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No loan products yet.</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit' : 'New'} Loan Product</h2><button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button></div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            {[['name','Product Name',true],['interest','Interest Rate (e.g. 21% p.a.)',false],['term','Term (e.g. Max. of 36 months)',false],['payment','Payment Schedule (e.g. Monthly)',false]].map(([f,l,req]) => (
                                <div key={f as string}><label className="block text-sm font-medium mb-1">{l as string}</label><input required={!!req} value={(data as any)[f as string]} onChange={e => setData(f as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                            ))}
                            <div><label className="block text-sm font-medium mb-1">Description *</label><textarea required rows={4} value={(data as any).description} onChange={e => setData('description' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" /></div>
                            <div className="flex gap-4">
                                <div className="flex-1"><label className="block text-sm font-medium mb-1">Order</label><input type="number" value={(data as any).order} onChange={e => setData('order' as any, +e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                                <div className="flex items-end gap-2 pb-2"><input type="checkbox" id="active" checked={(data as any).is_active} onChange={e => setData('is_active' as any, e.target.checked)} className="w-4 h-4" /><label htmlFor="active" className="text-sm font-medium">Active</label></div>
                            </div>
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
LoansIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'Loan Products', href: '/admin/loans' }] };
