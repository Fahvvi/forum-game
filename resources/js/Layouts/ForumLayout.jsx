import { Head } from '@inertiajs/react';
import { Search, Sword } from 'lucide-react';

export default function ForumLayout({ auth, children, title }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-gray-300 font-['Poppins'] selection:bg-red-600/30">
            
            <Head title={title ? `${title} - IndoLife RP` : 'IndoLife RP'}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>

            {/* Topbar / Navbar Utama */}
            <header className="bg-[#111111] border-b border-red-600/20 sticky top-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    
                    {/* Kiri: Logo & Menu Navigasi */}
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="bg-red-600 text-white p-1.5 rounded-md shadow-[0_0_10px_rgba(220,38,38,0.4)]">
                                <Sword size={24} />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight mt-1">
                                IndoLife <span className="text-red-600">RP</span>
                            </span>
                        </div>

                        {/* Link Navbar Utama */}
                        <nav className="hidden md:flex items-center gap-6 mt-1">
                            <a href="/" className="text-sm font-medium text-gray-400 hover:text-white transition">Home</a>
                            <a href="/forum" className="text-sm font-medium text-white border-b-2 border-red-600 pb-1">Forums</a>
                            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition">Members</a>
                            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition">Donate</a>
                        </nav>
                    </div>

                    {/* Kanan: Search & User Menu */}
                    <div className="flex items-center gap-6 mt-1">
                        <div className="hidden lg:flex items-center bg-[#1a1a1a] rounded-md px-3 py-1.5 border border-gray-800 focus-within:border-red-600/50 transition-colors">
                            <Search size={16} className="text-gray-500 mr-2" />
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="bg-transparent border-none focus:ring-0 text-sm text-gray-200 w-40 placeholder-gray-600 outline-none font-['Poppins']"
                            />
                        </div>
                        
                        {/* Cek apakah user sudah login */}
                        {auth?.user ? (
                            <div className="flex items-center gap-3 border-l border-gray-800 pl-6 cursor-pointer group">
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-gray-200 group-hover:text-white transition">{auth.user.name}</div>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">Player</div>
                                </div>
                                <div className="w-9 h-9 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 font-bold group-hover:border-red-600/50 transition">
                                    {auth.user.name.charAt(0).toUpperCase()}
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4 border-l border-gray-800 pl-6">
                                <a href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition">Login</a>
                                <a href="/register" className="text-sm font-medium bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded transition">Register</a>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Konten Utama (Dinamis dari halaman yang menggunakan layout ini) */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer Area */}
            <footer className="bg-[#0a0a0a] border-t border-gray-800 mt-12 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-gray-500">
                            <Sword size={20} className="text-red-600 opacity-80" />
                            <span className="text-sm">© {new Date().getFullYear()} IndoLife Roleplay. All rights reserved.</span>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                            <a href="#" className="hover:text-red-500 transition">Terms of Service</a>
                            <a href="#" className="hover:text-red-500 transition">Privacy Policy</a>
                            <a href="#" className="hover:text-red-500 transition">Server Rules</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}