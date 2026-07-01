import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';
import ImageUpload from '@/components/image-upload';

interface Member { id: number; name: string; position: string; category: string; photo_path: string | null; order: number; }
const CATEGORIES = ['board','audit','election','mediation','ethics','keypersons'];
const empty = { name: '', position: '', category: 'board', photo_path: '', order: 0 };

export default function BoardIndex({ members }: { members: Member[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Member | null>(null);
    const { data, setData, post, put, processing, reset } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(m: Member) {
        setEditing(m);
        setData({ name: m.name, position: m.position, category: m.category, photo_path: m.photo_path ?? '', order: m.order } as any);
        setOpen(true);
    }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/board/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/board', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete this member?')) router.delete(`/admin/board/${id}`); }

    const grouped = CATEGORIES.map(cat => ({ cat, items: members.filter(m => m.category === cat) })).filter(g => g.items.length > 0);

    return (
        <>
            <Head title="Board Members" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Board Members</h1>
                        <p className="text-sm text-muted-foreground">Manage BOD and committee members</p>
                    </div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                        <Plus className="w-4 h-4" /> Add Member
                    </button>
                </div>

                {grouped.map(({ cat, items }) => (
                    <div key={cat} className="rounded-xl border border-border overflow-hidden">
                        <div className="bg-muted px-4 py-2 text-sm font-semibold capitalize text-muted-foreground">{cat}</div>
                        <table className="w-full text-sm">
                            <tbody>
                                {items.map(m => (
                                    <tr key={m.id} className="border-t border-border hover:bg-muted/40">
                                        <td className="px-4 py-2 w-16">
                                            {m.photo_path
                                                ? <img src={m.photo_path} alt={m.name} className="w-12 h-12 object-cover rounded-full border border-border" />
                                                : <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-semibold text-muted-foreground">{m.name[0]}</div>
                                            }
                                        </td>
                                        <td className="px-4 py-3 font-medium">{m.name}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{m.position}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{m.order}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex gap-2 justify-end">
                                                <button onClick={() => openEdit(m)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                                <button onClick={() => destroy(m.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
                {members.length === 0 && <p className="text-center text-muted-foreground py-8">No members yet.</p>}
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">{editing ? 'Edit' : 'Add'} Member</h2>
                            <button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            <div>
                                <label className="block text-sm font-medium mb-2">Photo</label>
                                <ImageUpload
                                    value={(data as any).photo_path}
                                    onChange={url => setData('photo_path' as any, url)}
                                    folder="board"
                                />
                            </div>

                            {[['name','Full Name',true],['position','Position / Title',true]].map(([f,l,req]) => (
                                <div key={f as string}>
                                    <label className="block text-sm font-medium mb-1">{l as string}</label>
                                    <input required={!!req} value={(data as any)[f as string]} onChange={e => setData(f as any, e.target.value)}
                                        className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium mb-1">Category</label>
                                <select value={(data as any).category} onChange={e => setData('category' as any, e.target.value)}
                                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                                    {CATEGORIES.map(c => <option key={c} value={c} className="capitalize">{c}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Order</label>
                                <input type="number" value={(data as any).order} onChange={e => setData('order' as any, +e.target.value)}
                                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
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

BoardIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'Board Members', href: '/admin/board' }] };
