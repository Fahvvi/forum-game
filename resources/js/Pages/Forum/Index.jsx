import { Link } from '@inertiajs/react';
import ForumLayout from '@/Layouts/ForumLayout';
import { 
    MessageSquare, 
    ShieldAlert, 
    Users, 
    Clock, 
    Server,
    ChevronRight,
    MessageCircle
} from 'lucide-react';

export default function ForumIndex({ auth }) {
    return (
        <ForumLayout auth={auth} title="Community Forums">
            
            {/* Header Banner */}
            <div className="bg-[#141414] border-b border-gray-900 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600/5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between relative z-10">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-1">Community Forums</h1>
                        <p className="text-sm text-gray-500">Welcome to IndoLife Roleplay Evolution official boards.</p>
                    </div>
                    <div className="hidden md:flex items-center text-xs font-medium text-gray-500 gap-2">
                        <span className="hover:text-red-500 cursor-pointer transition">Home</span>
                        <ChevronRight size={14} />
                        <span className="text-gray-300">Forums</span>
                    </div>
                </div>
            </div>

            {/* Layout List & Sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-6">
                
                {/* Bagian Kiri: List Kategori Forum */}
                <div className="flex-1 space-y-6">
                    {/* --- KATEGORI 1: Official Information --- */}
                    <div className="bg-[#111111] border border-gray-800 rounded-md overflow-hidden shadow-lg">
                        <div className="bg-[#161616] px-4 py-3 border-b border-gray-800 border-l-2 border-l-red-600 flex items-center gap-2">
                            <ShieldAlert size={18} className="text-red-600" />
                            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Official Information</h2>
                        </div>
                        <div className="divide-y divide-gray-800/50">
                            {/* Announcements Node */}
                            <div className="px-4 py-4 flex items-center hover:bg-[#141414] transition cursor-pointer group">
                                <div className="p-3 bg-gray-900 rounded-full group-hover:bg-red-600/10 group-hover:text-red-500 text-gray-600 transition">
                                    <MessageSquare size={24} />
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className="text-base font-bold text-gray-200 group-hover:text-red-500 transition">Announcements</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">Berita terbaru dan update script dari developer.</p>
                                </div>
                                <div className="hidden md:block text-right w-32 mr-8">
                                    <div className="text-sm text-gray-300 font-medium">1,204</div>
                                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">Messages</div>
                                </div>
                                <div className="hidden sm:block w-48 text-right">
                                    <div className="text-sm text-gray-300 hover:text-red-500 truncate">Update V1.5: New Job...</div>
                                    <div className="text-xs text-gray-500 flex items-center justify-end gap-1 mt-0.5">
                                        <Clock size={12} /> Just now by Admin
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- KATEGORI 2: Player Zone --- */}
                    <div className="bg-[#111111] border border-gray-800 rounded-md overflow-hidden shadow-lg">
                        <div className="bg-[#161616] px-4 py-3 border-b border-gray-800 border-l-2 border-l-gray-500 flex items-center gap-2">
                            <Users size={18} className="text-gray-400" />
                            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Player Zone</h2>
                        </div>
                        <div className="divide-y divide-gray-800/50">
                            {/* General Discussion */}
                            <div className="px-4 py-4 flex items-center hover:bg-[#141414] transition cursor-pointer group">
                                <div className="p-3 bg-gray-900 rounded-full group-hover:bg-gray-800 text-gray-600 transition">
                                    <MessageSquare size={24} />
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className="text-base font-bold text-gray-200 group-hover:text-white transition">General Discussion</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">Diskusi bebas seputar server dan komunitas.</p>
                                </div>
                                <div className="hidden md:block text-right w-32 mr-8">
                                    <div className="text-sm text-gray-300 font-medium">5,432</div>
                                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">Messages</div>
                                </div>
                                <div className="hidden sm:block w-48 text-right">
                                    <div className="text-sm text-gray-300 hover:text-red-500 truncate">Tips beli rumah di Vinewood</div>
                                    <div className="text-xs text-gray-500 flex items-center justify-end gap-1 mt-0.5">
                                        <Clock size={12} /> 2 mins ago by Player123
                                    </div>
                                </div>
                            </div>

                            {/* Player Reports */}
                            <Link href={route('reports.index')} className="px-4 py-4 flex items-center hover:bg-[#141414] transition cursor-pointer group w-full text-left">
                                <div className="p-3 bg-gray-900 rounded-full group-hover:bg-red-600/10 group-hover:text-red-500 text-gray-600 transition">
                                    <ShieldAlert size={24} />
                                </div>
                                <div className="ml-4 flex-1">
                                    <h3 className="text-base font-bold text-gray-200 group-hover:text-red-500 transition">Player Reports</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">Laporkan pelanggaran rules (DM, PG, MG) di sini.</p>
                                </div>
                                <div className="hidden md:block text-right w-32 mr-8">
                                    <div className="text-sm text-gray-300 font-medium">890</div>
                                    <div className="text-[11px] text-gray-500 uppercase tracking-wider">Messages</div>
                                </div>
                                <div className="hidden sm:block w-48 text-right">
                                    <div className="text-sm text-gray-300 hover:text-red-500 truncate">[Report] Udin_Petot (DM)</div>
                                    <div className="text-xs text-gray-500 flex items-center justify-end gap-1 mt-0.5">
                                        <Clock size={12} /> 15 mins ago by Helper
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bagian Kanan: Sidebar Widget */}
                <div className="w-full lg:w-80 space-y-6">
                    
                    {/* Widget Server Status */}
                    <div className="bg-[#111111] border border-gray-800 rounded-md overflow-hidden shadow-lg">
                        <div className="bg-[#161616] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                            <span className="text-sm font-bold text-white uppercase tracking-wider">Server Status</span>
                            <Server size={16} className="text-gray-500" />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-400">IP Address</span>
                                <span className="text-sm font-mono text-white bg-gray-900 px-2 py-1 border border-gray-700 rounded select-all">play.indoliferp.com</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm text-gray-400">Players Online</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                    <span className="text-sm font-bold text-white">124 <span className="text-gray-500 font-normal">/ 200</span></span>
                                </div>
                            </div>
                            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition text-sm shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)]">
                                Connect via MTA
                            </button>
                        </div>
                    </div>

                    {/* Widget User Info Mini */}
                    <div className="bg-[#111111] border border-gray-800 rounded-md p-4 flex items-center gap-4 shadow-lg hover:border-gray-700 transition cursor-pointer group">
                        <div className="w-12 h-12 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center text-xl text-gray-300 font-bold group-hover:border-red-600/50 transition">
                            {auth.user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">{auth.user.name}</div>
                            <div className="text-xs text-red-500 font-medium">Administrator</div>
                        </div>
                        <ChevronRight size={16} className="text-gray-600 ml-auto group-hover:text-white transition" />
                    </div>

                    {/* Discord Widget */}
                    <div className="bg-[#111111] border border-[#5865F2]/30 rounded-md overflow-hidden relative group shadow-[0_0_15px_rgba(88,101,242,0.05)] hover:shadow-[0_0_20px_rgba(88,101,242,0.1)] transition-all">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/10 to-transparent pointer-events-none"></div>
                        <div className="bg-[#161616] px-4 py-3 border-b border-[#5865F2]/20 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <MessageCircle size={18} className="text-[#5865F2]" />
                                <span className="text-sm font-bold text-white uppercase tracking-wider">Join Discord</span>
                            </div>
                        </div>
                        <div className="p-4 relative z-10">
                            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                                Ngobrol bareng player lain, dapatkan info update tercepat, dan hubungi Staff jika butuh bantuan di server Discord resmi kami.
                            </p>
                            <a 
                                href="https://discord.gg/indoliferp" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center justify-center gap-2 w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-2 px-4 rounded transition text-sm shadow-md"
                            >
                                <MessageCircle size={16} />
                                Connect to Discord
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            
        </ForumLayout>
    );
}