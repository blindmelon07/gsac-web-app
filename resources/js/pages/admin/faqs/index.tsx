import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';

interface Faq { id: number; question: string; answer: string; order: number; is_active: boolean; }
const empty = { question: '', answer: '', order: 0, is_active: true };

export default function FaqsIndex({ faqs }: { faqs: Faq[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Faq | null>(null);
    const { data, setData, post, put, processing, reset } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(f: Faq) { setEditing(f); setData({ question: f.question, answer: f.answer, order: f.order, is_active: f.is_active } as any); setOpen(true); }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/faqs/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/faqs', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete?')) router.delete(`/admin/faqs/${id}`); }

    return (
        <>
            <Head title="FAQs" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div><h1 className="text-2xl font-bold">FAQs</h1><p className="text-sm text-muted-foreground">Frequently asked questions</p></div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"><Plus className="w-4 h-4" /> Add FAQ</button>
                </div>
                <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted text-muted-foreground"><tr><th className="text-left px-4 py-3">Question</th><th className="text-left px-4 py-3">Order</th><th className="text-left px-4 py-3">Status</th><th className="px-4 py-3"></th></tr></thead>
                        <tbody>
                            {faqs.map(f => (
                                <tr key={f.id} className="border-t border-border hover:bg-muted/40">
                                    <td className="px-4 py-3 font-medium max-w-md truncate">{f.question}</td>
                                    <td className="px-4 py-3">{f.order}</td>
                                    <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${f.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>{f.is_active ? 'Active' : 'Hidden'}</span></td>
                                    <td className="px-4 py-3 flex gap-2 justify-end">
                                        <button onClick={() => openEdit(f)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                        <button onClick={() => destroy(f.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                    </td>
                                </tr>
                            ))}
                            {faqs.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No FAQs yet.</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-lg p-6">
                        <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit' : 'New'} FAQ</h2><button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button></div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            <div><label className="block text-sm font-medium mb-1">Question *</label><input required value={(data as any).question} onChange={e => setData('question' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                            <div><label className="block text-sm font-medium mb-1">Answer *</label><textarea required rows={5} value={(data as any).answer} onChange={e => setData('answer' as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" /></div>
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
FaqsIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'FAQs', href: '/admin/faqs' }] };
