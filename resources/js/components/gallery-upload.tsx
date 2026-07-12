import { useRef, useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';

interface Props {
    value: string[];
    onChange: (urls: string[]) => void;
    folder?: string;
    max?: number;
}

export default function GalleryUpload({ value, onChange, folder = 'uploads', max = 20 }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    async function uploadOne(file: File): Promise<string | null> {
        const csrf = (document.cookie.match(/XSRF-TOKEN=([^;]+)/) || [])[1];
        const form = new FormData();
        form.append('image', file);
        form.append('folder', folder);

        const res = await fetch('/admin/upload-image', {
            method: 'POST',
            headers: { 'X-XSRF-TOKEN': decodeURIComponent(csrf || '') },
            body: form,
        });
        const json = await res.json();
        return json.url ?? null;
    }

    async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
        const files = Array.from(e.target.files ?? []);
        if (!files.length) return;

        setUploading(true);
        setError('');

        const uploaded: string[] = [];
        for (const file of files.slice(0, max - value.length)) {
            try {
                const url = await uploadOne(file);
                if (url) uploaded.push(url);
                else setError('Some images failed to upload.');
            } catch {
                setError('Some images failed to upload.');
            }
        }

        onChange([...value, ...uploaded]);
        setUploading(false);
        if (inputRef.current) inputRef.current.value = '';
    }

    function removeAt(idx: number) {
        onChange(value.filter((_, i) => i !== idx));
    }

    return (
        <div className="flex flex-col gap-2">
            {value.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                    {value.map((url, idx) => (
                        <div key={idx} className="relative w-full aspect-square rounded-lg overflow-hidden border border-border">
                            <img src={url} alt={`photo ${idx + 1}`} className="w-full h-full object-cover" />
                            <button
                                type="button"
                                onClick={() => removeAt(idx)}
                                className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5 hover:bg-black"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {value.length < max && (
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    disabled={uploading}
                    className="flex items-center justify-center gap-2 border border-border rounded-lg px-3 py-2 text-sm hover:bg-muted disabled:opacity-50 w-fit"
                >
                    {uploading
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading…</>
                        : <><Upload className="w-4 h-4" /> Add Photos</>
                    }
                </button>
            )}

            {error && <p className="text-xs text-destructive">{error}</p>}

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFiles}
            />
        </div>
    );
}
