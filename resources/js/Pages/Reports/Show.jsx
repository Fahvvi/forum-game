import ForumLayout from '@/Layouts/ForumLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { 
    ShieldAlert, 
    ArrowLeft, 
    Clock, 
    User, 
    ExternalLink, 
    MessageSquare, 
    Send,
    Image as ImageIcon,
    Video
} from 'lucide-react';

export default function ReportShow({ auth, report }) {
    // Form untuk mengirim komentar
    const { data, setData, post, processing, reset } = useForm({
        body: '',
    });

    const submitComment = (e) => {
        e.preventDefault();
        post(route('reports.comments.store', report.id), {
            onSuccess: () => reset('body'), // Kosongkan form jika sukses
        });
    };

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
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    // LOGIKA AUTO PREVIEW MEDIA
    const url = report.evidence_url.toLowerCase();
    const isImage = url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null || url.includes('imgur.com');
    const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');

    // Fungsi untuk memperbaiki link imgur jika user hanya copas link gallery tanpa ekstensi
    const getImageUrl = (originalUrl) => {
        if (originalUrl.includes('imgur.com') && !originalUrl.match(/\.(jpeg|jpg|gif|png|webp)$/)) {
            // Hapus '/gallery/' atau '/a/' jika ada, lalu tambah .png
            return originalUrl.replace(/\/gallery\/|\/a\//, '/') + '.png';
        }
        return originalUrl;
    };

    // Fungsi ekstrak ID Youtube
    const getYoutubeId = (youtubeUrl) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = youtubeUrl.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    return (
        <ForumLayout auth={auth} title={`Report #${report.id}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                <div className="mb-6">
                    <Link href={route('reports.index')} className="inline-flex items-center text-sm text-gray-400 hover:text-white transition mb-4">
                        <ArrowLeft size={16} className="mr-1" /> Kembali ke List Laporan
                    </Link>
                </div>

                {/* POSTINGAN UTAMA (Detail Laporan) */}
                <div className="bg-[#111111] border border-gray-800 rounded-lg shadow-xl overflow-hidden mb-6">
                    {/* Header Postingan */}
                    <div className="bg-[#161616] p-6 border-b border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center text-xl text-gray-300 font-bold">
                                {report.user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-white flex items-center gap-2">
                                    {report.user.name} 
                                    <span className="text-xs font-normal text-gray-500 bg-gray-800 px-2 py-0.5 rounded">Pelapor</span>
                                </h1>
                                <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                    <Clock size={14} />
                                    {formatDate(report.created_at)}
                                </div>
                            </div>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold border ${getStatusColor(report.status)}`}>
                            {report.status}
                        </span>
                    </div>

                    {/* Isi Postingan */}
                    <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#1a1a1a] p-4 rounded-md border border-gray-800">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Terlapor</p>
                                <p className="text-base font-bold text-red-500 flex items-center gap-2">
                                    <User size={16} /> {report.reported_player}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Jenis Pelanggaran</p>
                                <p className="text-base font-bold text-gray-200">{report.reason}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 border-b border-gray-800 pb-2">Kronologi Kejadian</h3>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {report.chronology}
                            </p>
                        </div>

                        {/* AUTO PREVIEW MEDIA SECTION */}
                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-gray-800 pb-2 flex items-center gap-2">
                                <ExternalLink size={16} className="text-gray-500" />
                                Bukti Lampiran
                            </h3>
                            
                            <div className="bg-[#161616] border border-gray-800 rounded-lg p-2 md:p-4">
                                {isImage && (
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2 px-2">
                                            <ImageIcon size={16} className="text-blue-400" /> Image Preview
                                        </div>
                                        <img 
                                            src={getImageUrl(report.evidence_url)} 
                                            alt="Bukti Laporan" 
                                            className="max-w-full rounded border border-gray-700 mx-auto"
                                            onError={(e) => {
                                                e.target.onerror = null; 
                                                e.target.src = 'https://via.placeholder.com/800x400.png?text=Gambar+Gagal+Dimuat+(Link+Mungkin+Rusak)';
                                            }}
                                        />
                                    </div>
                                )}

                                {isYoutube && getYoutubeId(report.evidence_url) && (
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2 px-2">
                                            <Video size={16} className="text-red-500" /> YouTube Preview
                                        </div>
                                        <div className="relative w-full overflow-hidden pt-[56.25%] rounded border border-gray-700">
                                            <iframe 
                                                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                                                src={`https://www.youtube.com/embed/${getYoutubeId(report.evidence_url)}`} 
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                )}

                                {/* Tombol Akses URL Asli (Selalu Muncul) */}
                                <div className="mt-4 pt-4 border-t border-gray-800/50 text-center">
                                    <a 
                                        href={report.evidence_url} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                                    >
                                        Buka URL Asli di Tab Baru <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AREA KOMENTAR / SANGGAHAN */}
                <div className="bg-[#111111] border border-gray-800 rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-[#161616] px-6 py-4 border-b border-gray-800 flex items-center gap-2">
                        <MessageSquare size={18} className="text-gray-400" />
                        <h2 className="text-base font-bold text-white">Diskusi & Sanggahan ({report.comments.length})</h2>
                    </div>

                    <div className="divide-y divide-gray-800/50">
                        {report.comments.length === 0 ? (
                            <div className="p-8 text-center text-gray-500 text-sm">
                                Belum ada tanggapan untuk laporan ini.
                            </div>
                        ) : (
                            report.comments.map((comment) => (
                                <div key={comment.id} className="p-6 flex gap-4">
                                    <div className="w-10 h-10 shrink-0 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 font-bold">
                                        {comment.user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className={`font-bold ${comment.user.id === report.user_id ? 'text-blue-400' : 'text-gray-200'}`}>
                                                {comment.user.name}
                                            </span>
                                            {comment.user.id === report.user_id && (
                                                <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded uppercase font-bold">Pelapor</span>
                                            )}
                                            <span className="text-xs text-gray-500">• {formatDate(comment.created_at)}</span>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                            {comment.body}
                                        </p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {report.status !== 'Resolved' && report.status !== 'Rejected' ? (
                        <div className="p-6 bg-[#161616] border-t border-gray-800">
                            <form onSubmit={submitComment}>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 shrink-0 rounded-md bg-gray-800 border border-red-600/30 flex items-center justify-center text-red-500 font-bold">
                                        {auth.user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-1">
                                        <textarea 
                                            rows="3"
                                            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white focus:ring-1 focus:ring-red-600 focus:border-red-600 transition outline-none resize-none mb-3 text-sm"
                                            placeholder="Tulis balasan, sanggahan, atau tambahkan bukti baru..."
                                            value={data.body}
                                            onChange={(e) => setData('body', e.target.value)}
                                            required
                                        ></textarea>
                                        <div className="flex justify-end">
                                            <button 
                                                type="submit" 
                                                disabled={processing}
                                                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-5 py-2 rounded-md font-semibold text-sm transition"
                                            >
                                                {processing ? 'Mengirim...' : 'Kirim Balasan'}
                                                <Send size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="p-4 bg-red-900/10 border-t border-red-900/20 text-center text-red-500/80 text-sm font-medium">
                            Thread ini telah dikunci karena laporan sudah diputuskan.
                        </div>
                    )}
                </div>

            </div>
        </ForumLayout>
    );
}