import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';
import ImageUpload from '@/components/image-upload';

interface Slide {
    id: number;
    title: string;
    subtitle: string | null;
    button_text: string | null;
    button_url: string | null;
    bg_class: string;
    order: number;
    is_active: boolean;
}

const BG_OPTIONS = ['slide1', 'slide2', 'slide3', 'feature3'];
const empty = { title: '', subtitle: '', button_text: '', button_url: '', bg_class: 'slide1', order: 0, is_active: true };

export default function SlidesIndex({ slides }: { slides: Slide[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Slide | null>(null);
    const { data, setData, post, put, processing, reset } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(s: Slide) {
        setEditing(s);
        setData({ title: s.title, subtitle: s.subtitle ?? '', button_text: s.button_text ?? '', button_url: s.button_url ?? '', bg_class: s.bg_class, order: s.order, is_active: s.is_active } as any);
        setOpen(true);
    }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/slides/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/slides', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete this slide?')) router.delete(`/admin/slides/${id}`); }

    return (
        <>
            <Head title="Slides" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Homepage Slides</h1>
                        <p className="text-sm text-muted-foreground">Manage the homepage carousel</p>
                    </div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                        <Plus className="w-4 h-4" /> Add Slide
                    </button>
                </div>

                <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted text-muted-foreground">
                            <tr>
                                <th className="text-left px-4 py-3 w-20">Preview</th>
                                <th className="text-left px-4 py-3">Title</th>
                                <th className="text-left px-4 py-3">Subtitle</th>
                                <th className="text-left px-4 py-3">BG</th>
                                <th className="text-left px-4 py-3">Order</th>
                                <th className="text-left px-4 py-3">Active</th>
                                <th className="px-4 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {slides.map(s => (
                                <tr key={s.id} className="border-t border-border hover:bg-muted/40">
                                    <td className="px-4 py-2">
                                        <div className={`w-14 h-14 rounded-lg ${s.bg_class} bg-cover bg-center border border-border`} />
                                    </td>
                                    <td className="px-4 py-3 font-medium max-w-xs truncate">{s.title}</td>
                                    <td className="px-4 py-3 text-muted-foreground text-xs max-w-xs truncate">{s.subtitle ?? '—'}</td>
                                    <td className="px-4 py-3"><span className="bg-muted px-2 py-1 rounded text-xs">{s.bg_class}</span></td>
                                    <td className="px-4 py-3">{s.order}</td>
                                    <td className="px-4 py-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${s.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                                            {s.is_active ? 'Active' : 'Hidden'}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2 justify-end">
                                            <button onClick={() => openEdit(s)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                            <button onClick={() => destroy(s.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {slides.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">No slides yet.</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">{editing ? 'Edit Slide' : 'New Slide'}</h2>
                            <button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            {[['title','Title *','text',true],['subtitle','Subtitle','text',false],['button_text','Button Text','text',false],['button_url','Button URL','text',false]].map(([field, label, type, req]) => (
                                <div key={field as string}>
                                    <label className="block text-sm font-medium mb-1">{label as string}</label>
                                    <input type={type as string} required={!!req} value={(data as any)[field as string]} onChange={e => setData(field as any, e.target.value)}
                                        className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium mb-1">Background Style</label>
                                <select value={(data as any).bg_class} onChange={e => setData('bg_class' as any, e.target.value)}
                                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                                    {BG_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                                <p className="text-xs text-muted-foreground mt-1">These map to CSS background classes already defined in your stylesheet.</p>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium mb-1">Order</label>
                                    <input type="number" value={(data as any).order} onChange={e => setData('order' as any, +e.target.value)}
                                        className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                                <div className="flex items-end gap-2 pb-2">
                                    <input type="checkbox" id="is_active" checked={(data as any).is_active} onChange={e => setData('is_active' as any, e.target.checked)} className="w-4 h-4" />
                                    <label htmlFor="is_active" className="text-sm font-medium">Active</label>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 mt-2">
                                <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-muted">Cancel</button>
                                <button type="submit" disabled={processing} className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50">
                                    {processing ? 'Saving…' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

SlidesIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'Slides', href: '/admin/slides' }] };
