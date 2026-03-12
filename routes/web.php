<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ==========================================
// 1. PUBLIC ROUTES (Bisa diakses tanpa login)
// ==========================================
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');


// ==========================================
// 2. AUTHENTICATED ROUTES (Wajib Login)
// ==========================================
Route::middleware(['auth', 'verified'])->group(function () {
    
    // --- Halaman Utama Forum ---
    Route::get('/forum', function () {
        return Inertia::render('Forum/Index');
    })->name('forum');

    // --- Profile Management (Bawaan Breeze) ---
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // ----------------------------------------------------
    // LEVEL 1: RUTE USER BIASA (Bisa diakses semua staff & user)
    // Fitur: Melihat, membuat, dan mengedit laporan miliknya sendiri
    // ----------------------------------------------------
    Route::prefix('reports')->name('reports.')->group(function() {
        Route::get('/', [ReportController::class, 'index'])->name('index');
        Route::get('/create', [ReportController::class, 'create'])->name('create');
        Route::post('/', [ReportController::class, 'store'])->name('store');
        Route::get('/{report}', [ReportController::class, 'show'])->name('show');
        Route::post('/{report}/comments', [ReportController::class, 'storeComment'])->name('comments.store');
    });

    // ----------------------------------------------------
    // LEVEL 2: RUTE STAFF (Hanya Helper & Admin)
    // Fitur: Handle Livechat & Eskalasi Report
    // ----------------------------------------------------
    Route::middleware(['role:helper,admin'])->prefix('staff')->name('staff.')->group(function () {
        Route::get('/livechat', function () {
            // return Inertia::render('staff/Livechat');
        })->name('livechat');
    });

    // ----------------------------------------------------
    // LEVEL 3: RUTE ADMINISTRATOR (Hanya Admin)
    // Fitur: Command Center, Full CRUD Forum, Manajemen Kategori
    // ----------------------------------------------------
    Route::middleware(['role:admin'])->prefix('admin')->name('admin.')->group(function () {
        Route::get('/dashboard', function () {
            // return Inertia::render('admin/Dashboard');
        })->name('dashboard');

        // Contoh endpoint CRUD untuk kategori forum nantinya
        Route::post('/forum/categories', function() { /* Logic create kategori */ })->name('categories.store');
    });

});

// Auth bawaan Laravel Breeze (Login, Register, Reset Password)
require __DIR__.'/auth.php';