<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index()
    {
        // Ambil data laporan beserta nama user yang melapor, urutkan dari terbaru
        $reports = Report::with('user')->latest()->get();

        return Inertia::render('Reports/Index', [
            'reports' => $reports // Kirim data $reports sebagai props ke React
        ]);
    }

    public function create()
    {
        return Inertia::render('Reports/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'reported_player' => 'required|string|max:255',
            'reason' => 'required|string',
            'chronology' => 'required|string',
            'evidence_url' => 'required|url',
        ]);

        // Simpan ke database terhubung dengan user yang sedang login
        $request->user()->reports()->create($validated);

        // Setelah simpan, lempar kembali ke halaman list report
        return redirect()->route('reports.index');
    }

    public function show(Report $report)
    {
        // Load data pelapor (user) dan semua komentar beserta usernya masing-masing
        $report->load(['user', 'comments.user']);

        return Inertia::render('Reports/Show', [
            'report' => $report
        ]);
    }

    // 5. Menyimpan Komentar / Sanggahan
    public function storeComment(Request $request, Report $report)
    {
        $request->validate([
            'body' => 'required|string',
        ]);

        $report->comments()->create([
            'user_id' => $request->user()->id,
            'body' => $request->body,
        ]);

        // Otomatis refresh halaman setelah komentar terkirim
        return back();
    }
}