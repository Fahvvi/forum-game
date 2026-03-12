import ForumLayout from '@/Layouts/ForumLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ShieldAlert, ArrowLeft, Send, AlertTriangle } from 'lucide-react';
import { useState } from 'react'; // Import useState

export default function ReportCreate({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        reported_player: '',
        reason: '',
        chronology: '',
        evidence_url: '',
    });

    // State untuk mendeteksi pilihan "Lainnya"
    const [isOtherReason, setIsOtherReason] = useState(false);

    const handleReasonChange = (e) => {
        const value = e.target.value;
        if (value === 'Lainnya') {
            setIsOtherReason(true);
            setData('reason', ''); // Kosongkan state reason agar user bisa ngetik
        } else {
            setIsOtherReason(false);
            setData('reason', value); // Isi state dengan pilihan dari dropdown
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('reports.store')); 
    };

    return (
        <ForumLayout auth={auth} title="Create Report">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                <div className="mb-6">
                    <Link href={route('reports.index')} className="inline-flex items-center text-sm text-gray-400 hover:text-white transition mb-4">
                        <ArrowLeft size={16} className="mr-1" /> Kembali ke List Laporan
                    </Link>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        <ShieldAlert className="text-red-600" />
                        Buat Laporan Baru
                    </h1>
                </div>

                <div className="bg-red-900/20 border border-red-600/30 p-4 rounded-md flex items-start gap-3 mb-8">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <div className="text-sm text-red-200">
                        <p className="font-bold mb-1">Perhatian!</p>
                        <p className="text-red-300/80">Membuat laporan palsu (PPKO) atau mengedit bukti dapat menyebabkan akun Anda dibanned secara permanen. Pastikan semua informasi yang diberikan adalah akurat.</p>
                    </div>
                </div>

                <div className="bg-[#111111] border border-gray-800 rounded-lg shadow-xl p-6 md:p-8">
                    <form onSubmit={submit} className="space-y-6">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Nama Karakter Pelanggar (In-Game)</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2.5 text-white focus:ring-1 focus:ring-red-600 focus:border-red-600 transition outline-none"
                                    placeholder="Contoh: Udin_Petot"
                                    value={data.reported_player}
                                    onChange={(e) => setData('reported_player', e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Jenis Pelanggaran</label>
                                <select 
                                    className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2.5 text-white focus:ring-1 focus:ring-red-600 focus:border-red-600 transition outline-none appearance-none"
                                    onChange={handleReasonChange}
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>-- Pilih Pelanggaran --</option>
                                    <option value="Deathmatching (DM)">Deathmatching (DM)</option>
                                    <option value="Powergaming (PG)">Powergaming (PG)</option>
                                    <option value="Metagaming (MG)">Metagaming (MG)</option>
                                    <option value="Revenge Kills (RK)">Revenge Kills (RK)</option>
                                    <option value="Car Ramming (CR)">Car Ramming (CR)</option>
                                    <option value="Lainnya">Pelanggaran Lainnya</option>
                                </select>
                            </div>

                            {/* Form Dinamis: Hanya muncul jika pilih "Lainnya" */}
                            {isOtherReason && (
                                <div className="md:col-span-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Tuliskan Jenis Pelanggaran</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-[#1a1a1a] border border-red-600/50 rounded-md px-4 py-2.5 text-white focus:ring-1 focus:ring-red-600 focus:border-red-600 transition outline-none"
                                        placeholder="Contoh: Ninja Jacking (NJ), Troll, dll."
                                        value={data.reason}
                                        onChange={(e) => setData('reason', e.target.value)}
                                        required
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Kronologi Kejadian</label>
                            <textarea 
                                rows="5"
                                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-3 text-white focus:ring-1 focus:ring-red-600 focus:border-red-600 transition outline-none resize-none"
                                placeholder="Jelaskan secara detail bagaimana pelanggaran tersebut terjadi..."
                                value={data.chronology}
                                onChange={(e) => setData('chronology', e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Link Bukti (Wajib)</label>
                            <input 
                                type="url" 
                                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-4 py-2.5 text-white focus:ring-1 focus:ring-red-600 focus:border-red-600 transition outline-none"
                                placeholder="Masukkan URL Imgur atau YouTube"
                                value={data.evidence_url}
                                onChange={(e) => setData('evidence_url', e.target.value)}
                                required
                            />
                        </div>

                        <div className="pt-4 border-t border-gray-800 flex items-center justify-end">
                            <button 
                                type="submit" 
                                disabled={processing}
                                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-6 py-2.5 rounded-md font-semibold transition shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                            >
                                {processing ? 'Mengirim...' : 'Kirim Laporan'}
                                <Send size={16} />
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </ForumLayout>
    );
}