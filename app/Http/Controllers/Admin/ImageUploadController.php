<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageUploadController extends Controller
{
    // Strict allowlist — no user-controlled path segments
    private const ALLOWED_FOLDERS = ['board', 'branches', 'slides', 'uploads', 'yellow-pages'];

    public function upload(Request $request)
    {
        $request->validate([
            'image'  => 'required|file|mimes:jpg,jpeg,png,gif,webp|max:5120',
            'folder' => 'nullable|string|in:' . implode(',', self::ALLOWED_FOLDERS),
        ]);

        $folder = $request->input('folder', 'uploads');

        // Re-encode the image to strip any embedded malicious payloads
        $file       = $request->file('image');
        $extension  = $file->extension();
        $filename   = Str::uuid() . '.' . $extension;
        $path       = $file->storeAs($folder, $filename, 'public');

        return response()->json([
            'url' => '/storage/' . $path,
        ]);
    }

    public function delete(Request $request)
    {
        $request->validate(['url' => 'required|string']);

        $url = $request->url;

        // Must start with /storage/ — reject anything else
        if (!Str::startsWith($url, '/storage/')) {
            abort(422, 'Invalid file URL.');
        }

        // Strip /storage/ prefix and resolve the storage path
        $relativePath = Str::after($url, '/storage/');

        // Prevent path traversal: no dots-dot sequences allowed
        if (Str::contains($relativePath, ['..', "\0", '\\'])) {
            abort(422, 'Invalid file path.');
        }

        // Only allow deletion within allowed folders
        $folder = explode('/', $relativePath)[0];
        if (!in_array($folder, self::ALLOWED_FOLDERS, true)) {
            abort(403, 'Cannot delete files outside of managed folders.');
        }

        if (Storage::disk('public')->exists($relativePath)) {
            Storage::disk('public')->delete($relativePath);
        }

        return response()->json(['ok' => true]);
    }
}
