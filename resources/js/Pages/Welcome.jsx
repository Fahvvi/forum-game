import { Head, Link } from '@inertiajs/react';
import { 
    Users, 
    Zap, 
    Gamepad2, 
    Shield, 
    Briefcase, 
    Skull, 
    Coins, 
    Calendar,
    Play,
    Server
} from 'lucide-react';

export default function Welcome({ auth }) {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-['Poppins'] selection:bg-red-600/30 flex flex-col">
            <Head title="IndoLife Roleplay Evolution" />
            
            {/* Google Fonts Poppins */}
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            {/* Navbar Transparan Khusus Landing Page */}
            <header className="absolute top-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-red-600 text-white p-2 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                            <Gamepad2 size={28} />
                        </div>
                        <span className="text-2xl font-black text-white tracking-tighter">
                            IndoLife <span className="text-red-600">RP</span>
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-sm font-bold text-white border-b-2 border-red-600 pb-1">Home</a>
                        <Link href={route('forum')} className="text-sm font-medium text-gray-400 hover:text-white transition">Forums</Link>
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition">How to Play</a>
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition">Pricelist</a>
                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition">Donate</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Link href={route('forum')} className="bg-[#1a1a1a] hover:bg-gray-800 text-white px-5 py-2 rounded-md font-semibold transition border border-gray-700">
                                Go to Forums
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm font-medium text-gray-300 hover:text-white transition">Login</Link>
                                <Link href={route('register')} className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1">
                <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-[#0a0a0a] to-[#0a0a0a] z-0"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-full px-4 py-1.5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-gray-300 tracking-wider uppercase">Season 2 is Live</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
                            The Ultimate <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Roleplay Experience</span>
                        </h1>
                        
                        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Bangun ceritamu sendiri di kota yang penuh dengan intrik, bisnis, dan aksi. Bergabunglah dengan ratusan pemain lainnya di server MTA paling imersif di Indonesia.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-1">
                                <Play fill="currentColor" size={20} />
                                Play Now
                            </button>
                            <div className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#111] border border-gray-800 text-gray-300 px-8 py-4 rounded-lg font-mono text-sm">
                                <Server size={18} className="text-red-500" />
                                <span className="select-all">mta.indoliferoleplay.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section (Mockup Data) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-[#111111] border border-gray-800 p-6 rounded-xl text-center shadow-xl hover:border-red-600/30 transition group">
                            <Users className="mx-auto text-red-600 mb-3 group-hover:scale-110 transition" size={32} />
                            <div className="text-3xl font-black text-white mb-1">62<span className="text-gray-600 text-xl font-medium">/200</span></div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Players Online</div>
                        </div>
                        <div className="bg-[#111111] border border-gray-800 p-6 rounded-xl text-center shadow-xl hover:border-blue-500/30 transition group">
                            <Zap className="mx-auto text-blue-500 mb-3 group-hover:scale-110 transition" size={32} />
                            <div className="text-3xl font-black text-white mb-1">Online</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Server Status</div>
                        </div>
                        <div className="bg-[#111111] border border-gray-800 p-6 rounded-xl text-center shadow-xl hover:border-green-500/30 transition group">
                            <Gamepad2 className="mx-auto text-green-500 mb-3 group-hover:scale-110 transition" size={32} />
                            <div className="text-3xl font-black text-white mb-1">559</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Total Players</div>
                        </div>
                        <div className="bg-[#111111] border border-gray-800 p-6 rounded-xl text-center shadow-xl hover:border-purple-500/30 transition group">
                            <Shield className="mx-auto text-purple-500 mb-3 group-hover:scale-110 transition" size={32} />
                            <div className="text-3xl font-black text-white mb-1">23</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Factions</div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Kenapa <span className="text-red-600">IndoLife RP</span>?</h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-red-600/50 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition">
                                <Briefcase className="text-red-500" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Custom Jobs</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">Mekanik, Trucker, Pilot, Fisherman, dan lebih banyak lagi profesi unik untuk mengumpulkan kekayaan.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-red-600/50 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition">
                                <Skull className="text-red-500" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Gang System</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">Kuasai turf, bangun reputasi gangmu di jalanan, dan hadapi rival dalam pertempuran epik.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-red-600/50 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition">
                                <Coins className="text-red-500" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Real Economy</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">Sistem ekonomi realistis. Beli properti, kelola bisnis, dan rasakan fluktuasi harga pasar yang dinamis.</p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-red-600/50 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition">
                                <Calendar className="text-red-500" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Weekly Events</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">Event mingguan yang seru dengan hadiah eksklusif. Komunitas yang aktif dan Staff yang responsif.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer Simple Landing Page */}
            <footer className="bg-[#050505] border-t border-white/5 py-10 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <Gamepad2 size={24} className="text-red-600" />
                        <span className="text-lg font-bold text-white tracking-tight">
                            IndoLife <span className="text-red-600">RP</span>
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">© {new Date().getFullYear()} IndoLife Roleplay. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}