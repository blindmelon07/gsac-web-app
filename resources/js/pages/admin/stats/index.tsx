import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';

interface Stat { id: number; value: string; label: string; link: string | null; order: number; }
const empty = { value: '', label: '', link: '', order: 0 };

export default function StatsIndex({ stats }: { stats: Stat[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Stat | null>(null);
    const { data, setData, post, put, processing, reset } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(s: Stat) { setEditing(s); setData({ value: s.value, label: s.label, link: s.link ?? '', order: s.order } as any); setOpen(true); }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/stats/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/stats', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete?')) router.delete(`/admin/stats/${id}`); }

    return (
        <>
            <Head title="Home Stats" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div><h1 className="text-2xl font-bold">Home Stats</h1><p className="text-sm text-muted-foreground">Key numbers shown on the homepage</p></div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90"><Plus className="w-4 h-4" /> Add Stat</button>
                </div>
                <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted text-muted-foreground"><tr><th className="text-left px-4 py-3">Value</th><th className="text-left px-4 py-3">Label</th><th className="text-left px-4 py-3">Link</th><th className="text-left px-4 py-3">Order</th><th className="px-4 py-3"></th></tr></thead>
                        <tbody>
                            {stats.map(s => (
                                <tr key={s.id} className="border-t border-border hover:bg-muted/40">
                                    <td className="px-4 py-3 font-bold text-lg">{s.value}</td>
                                    <td className="px-4 py-3">{s.label}</td>
                                    <td className="px-4 py-3 text-muted-foreground text-xs">{s.link ?? '—'}</td>
                                    <td className="px-4 py-3">{s.order}</td>
                                    <td className="px-4 py-3 flex gap-2 justify-end">
                                        <button onClick={() => openEdit(s)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                        <button onClick={() => destroy(s.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                    </td>
                                </tr>
                            ))}
                            {stats.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">No stats yet.</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-md p-6">
                        <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-semibold">{editing ? 'Edit' : 'New'} Stat</h2><button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button></div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            {[['value','Value (e.g. 71k)',true],['label','Label (e.g. Members)',true],['link','Link URL',false]].map(([f,l,req]) => (
                                <div key={f as string}><label className="block text-sm font-medium mb-1">{l as string}</label><input required={!!req} value={(data as any)[f as string]} onChange={e => setData(f as any, e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                            ))}
                            <div><label className="block text-sm font-medium mb-1">Order</label><input type="number" value={(data as any).order} onChange={e => setData('order' as any, +e.target.value)} className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" /></div>
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
StatsIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'Home Stats', href: '/admin/stats' }] };
