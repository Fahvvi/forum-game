import ForumLayout from '@/Layouts/ForumLayout';
import { Head, Link, router } from '@inertiajs/react';
import { ShieldAlert, Plus, Clock, MessageSquare, ChevronRight, User } from 'lucide-react';

export default function ReportIndex({ auth, reports }) { 
    
    const getStatusColor = (status) => {
        switch(status) {
            case 'Pending': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
            case 'Investigating': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
            case 'Resolved': return 'text-green-500 bg-green-500/10 border-green-500/20';
            case 'Rejected': return 'text-red-500 bg-red-500/10 border-red-500/20';
            default: return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
        }
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        // Output mirip kaskus: 12-03-2026 14:30
        return new Date(dateString).toLocaleDateString('id-ID', options).replace(/\./g, ':');
    };

    return (
        <ForumLayout auth={auth} title="Player Reports">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 bg-[#111111] p-6 rounded-lg border border-gray-800 shadow-lg">
                    <div>
                        <h1 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight">
                            <div className="p-2 bg-red-600/10 rounded-lg">
                                <ShieldAlert className="text-red-600" size={28} />
                            </div>
                            Player Reports Center
                        </h1>
                        <p className="text-sm text-gray-500 mt-2">Laporkan pelanggaran rules server. Thread ini bersifat publik untuk transparansi.</p>
                    </div>
                    <Link 
                        href={route('reports.create')} 
                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-md font-bold transition shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] shrink-0"
                    >
                        <Plus size={18} />
                        Buat Laporan
                    </Link>
                </div>

                {/* Feed Section (Kaskus / Social Media Style) */}
                <div className="space-y-4">
                    {reports.length === 0 ? (
                        <div className="bg-[#111111] border border-gray-800 rounded-lg p-12 text-center shadow-xl">
                            <ShieldAlert className="mx-auto text-gray-700 mb-4" size={48} />
                            <h3 className="text-lg font-bold text-gray-300">Belum Ada Laporan</h3>
                            <p className="text-sm text-gray-500 mt-1">Server sedang aman terkendali. Jadilah yang pertama melapor jika ada pelanggaran.</p>
                        </div>
                    ) : (
                        reports.map((report) => (
                            <div 
                                key={report.id} 
                                onClick={() => router.visit(route('reports.show', report.id))}
                                className="bg-[#111111] border border-gray-800 rounded-lg p-5 shadow-lg hover:border-gray-600 transition duration-200 cursor-pointer group relative overflow-hidden"
                            >
                                {/* Efek highlight merah tipis di sebelah kiri saat di-hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                {/* Bagian Meta / Header (Mirip Kaskus TS) */}
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-300 border border-gray-700">
                                            {report.user?.name.charAt(0).toUpperCase() || '?'}
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-none">
                                            <span className="text-xs font-bold text-blue-400">
                                                {report.user?.name || 'Unknown'}
                                            </span>
                                            <span className="hidden sm:inline text-gray-600 text-xs">•</span>
                                            <span className="text-[11px] text-gray-500 mt-1 sm:mt-0 flex items-center gap-1">
                                                <Clock size={10} /> {formatDate(report.created_at)}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Status Badge */}
                                    <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${getStatusColor(report.status)}`}>
                                        {report.status}
                                    </div>
                                </div>

                                {/* Main Content / Judul Thread */}
                                <h2 className="text-lg sm:text-xl font-bold text-gray-200 group-hover:text-red-500 transition mb-2 leading-tight">
                                    [Report] Pelanggaran <span className="text-red-500">{report.reason}</span> oleh {report.reported_player}
                                </h2>

                                {/* Snippet Kronologi (Dipotong max 2 baris) */}
                                <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                                    {report.chronology}
                                </p>

                                {/* Footer Card */}
                                <div className="flex items-center justify-between border-t border-gray-800/60 pt-3 mt-2">
                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 group-hover:text-gray-300 transition">
                                        <span className="flex items-center gap-1.5">
                                            <MessageSquare size={14} /> 
                                            Buka Thread Laporan
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-gray-600 font-mono tracking-wider">
                                            REPORT-ID: #{report.id.toString().padStart(4, '0')}
                                        </span>
                                        <ChevronRight size={14} className="text-gray-600 group-hover:text-red-500 transition translate-x-0 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Pagination Placeholder */}
                {reports.length > 0 && (
                    <div className="mt-8 text-center text-xs text-gray-500">
                        Menampilkan {reports.length} laporan terbaru.
                    </div>
                )}

            </div>
        </ForumLayout>
    );
}