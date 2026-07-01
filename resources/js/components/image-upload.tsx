import { useRef, useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';

interface Props {
    value: string;
    onChange: (url: string) => void;
    folder?: string;
}

export default function ImageUpload({ value, onChange, folder = 'uploads' }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        setError('');

        const csrf = (document.cookie.match(/XSRF-TOKEN=([^;]+)/) || [])[1];
        const form = new FormData();
        form.append('image', file);
        form.append('folder', folder);

        try {
            const res = await fetch('/admin/upload-image', {
                method: 'POST',
                headers: { 'X-XSRF-TOKEN': decodeURIComponent(csrf || '') },
                body: form,
            });
            const json = await res.json();
            if (json.url) {
                onChange(json.url);
            } else {
                setError('Upload failed.');
            }
        } catch {
            setError('Upload failed.');
        } finally {
            setUploading(false);
            if (inputRef.current) inputRef.current.value = '';
        }
    }

    return (
        <div className="flex flex-col gap-2">
            {value && (
                <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-border">
                    <img src={value} alt="preview" className="w-full h-full object-cover" />
                    <button
                        type="button"
                        onClick={() => onChange('')}
                        className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-0.5 hover:bg-black"
                    >
                        <X className="w-3 h-3" />
                    </button>
                </div>
            )}

            <div className="flex gap-2 items-center">
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    disabled={uploading}
                    className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 text-sm hover:bg-muted disabled:opacity-50"
                >
                    {uploading
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading…</>
                        : <><Upload className="w-4 h-4" /> {value ? 'Change Image' : 'Upload Image'}</>
                    }
                </button>

                {!value && (
                    <>
                        <span className="text-xs text-muted-foreground">or</span>
                        <input
                            type="text"
                            placeholder="Paste URL…"
                            className="flex-1 border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            onBlur={e => { if (e.target.value) onChange(e.target.value); }}
                        />
                    </>
                )}
            </div>

            {error && <p className="text-xs text-destructive">{error}</p>}

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFile}
            />
        </div>
    );
}
