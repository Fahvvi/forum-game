<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            
            $table->string('reported_player');
            $table->string('reason');
            $table->text('chronology');
            $table->string('evidence_url');
            
            $table->enum('status', ['Pending', 'Investigating', 'Resolved', 'Rejected'])->default('Pending');
            
            // Kolom baru untuk mencatat kapan report ini ditutup/diselesaikan
            $table->timestamp('resolved_at')->nullable(); 
            
            $table->timestamps(); 
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};