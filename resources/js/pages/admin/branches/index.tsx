import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';
import { Pencil, Trash2, Plus, X } from 'lucide-react';
import ImageUpload from '@/components/image-upload';

interface Branch {
    id: number;
    name: string;
    address: string;
    manager: string | null;
    contact: string | null;
    email: string | null;
    photo_path: string | null;
    order: number;
}

const empty = { name: '', address: '', manager: '', contact: '', email: '', photo_path: '', order: 0 };

export default function BranchesIndex({ branches }: { branches: Branch[] }) {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState<Branch | null>(null);
    const { data, setData, post, put, processing, reset } = useForm(empty as any);

    function openCreate() { reset(); setEditing(null); setOpen(true); }
    function openEdit(b: Branch) {
        setEditing(b);
        setData({ name: b.name, address: b.address, manager: b.manager ?? '', contact: b.contact ?? '', email: b.email ?? '', photo_path: b.photo_path ?? '', order: b.order } as any);
        setOpen(true);
    }
    function submit(e: React.FormEvent) {
        e.preventDefault();
        if (editing) put(`/admin/branches/${editing.id}`, { onSuccess: () => setOpen(false) });
        else post('/admin/branches', { onSuccess: () => setOpen(false) });
    }
    function destroy(id: number) { if (confirm('Delete this branch?')) router.delete(`/admin/branches/${id}`); }

    return (
        <>
            <Head title="Branches" />
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Branches</h1>
                        <p className="text-sm text-muted-foreground">GSAC branch offices</p>
                    </div>
                    <button onClick={openCreate} className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
                        <Plus className="w-4 h-4" /> Add Branch
                    </button>
                </div>

                <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-muted text-muted-foreground">
                            <tr>
                                <th className="text-left px-4 py-3 w-20">Photo</th>
                                <th className="text-left px-4 py-3">Name</th>
                                <th className="text-left px-4 py-3">Address</th>
                                <th className="text-left px-4 py-3">Manager</th>
                                <th className="text-left px-4 py-3">Contact</th>
                                <th className="px-4 py-3 w-20"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {branches.map(b => (
                                <tr key={b.id} className="border-t border-border hover:bg-muted/40">
                                    <td className="px-4 py-2">
                                        {b.photo_path
                                            ? <img src={b.photo_path} alt={b.name} className="w-14 h-14 object-cover rounded-lg border border-border" />
                                            : <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs">No img</div>
                                        }
                                    </td>
                                    <td className="px-4 py-3 font-medium">{b.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground text-xs max-w-xs truncate">{b.address}</td>
                                    <td className="px-4 py-3">{b.manager ?? '—'}</td>
                                    <td className="px-4 py-3">{b.contact ?? '—'}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex gap-2 justify-end">
                                            <button onClick={() => openEdit(b)} className="p-1 hover:text-primary"><Pencil className="w-4 h-4" /></button>
                                            <button onClick={() => destroy(b.id)} className="p-1 hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {branches.length === 0 && (
                                <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No branches yet.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-background rounded-xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold">{editing ? 'Edit' : 'Add'} Branch</h2>
                            <button onClick={() => setOpen(false)}><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={submit} className="flex flex-col gap-3">
                            <div>
                                <label className="block text-sm font-medium mb-2">Branch Photo</label>
                                <ImageUpload
                                    value={(data as any).photo_path}
                                    onChange={url => setData('photo_path' as any, url)}
                                    folder="branches"
                                />
                            </div>

                            {[['name','Branch Name',true],['address','Address',true],['manager','Branch Manager',false],['contact','Contact Number',false],['email','Email',false]].map(([f,l,req]) => (
                                <div key={f as string}>
                                    <label className="block text-sm font-medium mb-1">{l as string}</label>
                                    <input
                                        required={!!req}
                                        value={(data as any)[f as string]}
                                        onChange={e => setData(f as any, e.target.value)}
                                        className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium mb-1">Order</label>
                                <input
                                    type="number"
                                    value={(data as any).order}
                                    onChange={e => setData('order' as any, +e.target.value)}
                                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                />
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

BranchesIndex.layout = { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }, { title: 'Branches', href: '/admin/branches' }] };
