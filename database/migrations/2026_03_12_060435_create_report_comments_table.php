<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('report_comments', function (Blueprint $table) {
            $table->id();
            // Relasi ke Laporan mana komentar ini berada
            $table->foreignId('report_id')->constrained()->onDelete('cascade');
            // Relasi ke User siapa yang berkomentar (Bisa Admin, Pelapor, atau Terlapor)
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
            
            // Isi sanggahan/komentar
            $table->text('body');
            
            $table->timestamps(); // Mencatat waktu komentar dikirim
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('report_comments');
    }
};
