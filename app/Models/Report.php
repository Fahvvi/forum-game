<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $fillable = [
        'reported_player',
        'reason',
        'chronology',
        'evidence_url',
        'status',
        'resolved_at', 
    ];

    // Beri tahu Laravel bahwa kolom ini adalah format Tanggal/Waktu (Carbon)
    protected $casts = [
        'resolved_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Satu laporan bisa memiliki banyak komentar/sanggahan
    public function comments()
    {
        return $this->hasMany(ReportComment::class);
    }
}