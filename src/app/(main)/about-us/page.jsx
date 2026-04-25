import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import { getCategories } from "@/lib/data";
import Image from "next/image";
import { FaBullseye, FaHistory, FaUsers, FaAward, FaGlobe } from "react-icons/fa";

export const metadata = {
  title: "Standard News- About Us",
  description: "Standard News: The most trusted news portal in Bangladesh. Get real-time updates on politics, economy, sports, technology, and breaking news from across the globe.",
};
const AboutUsPage = async () => {
    const categories = await getCategories();

    return (
        <div className="bg-[#F9FAFB] min-h-screen py-12">
            <div className="w-11/12  mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-12 gap-10">
                    
                    {/* Left Sidebar (3 Columns) */}
                    <aside className="col-span-3 ">
                        <div className="sticky top-10 space-y-8">
                            <LeftSidebar categories={categories} />
                            
                            {/* Pro-Level Sidebar Widget */}
                           
                        </div>
                    </aside>

                    {/* About Us Content (9 Columns) */}
                    <main className="col-span-6">
                        <div className="bg-white rounded-[3rem] border border-gray-100 p-6 md:p-16 shadow-2xl shadow-gray-200/50">
                            
                            {/* --- Section 1: Hero --- */}
                            <div className="max-w-3xl mb-20">
                                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                                    </span>
                                    <span className="text-[11px] font-black uppercase tracking-widest">Our Legacy</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
                                    We tell stories that <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">matter.</span>
                                </h1>
                                <p className="text-xl text-gray-500 leading-relaxed font-medium">
                                    Dragon News isnot just a news portal; its a commitment to journalism that holds power accountable and gives voice to the unheard.
                                </p>
                            </div>

                            {/* --- Section 2: Banner with Stats --- */}
                            <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden mb-20 group">
                                <Image 
                                    src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2070" 
                                    alt="Newsroom" 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                                
                                {/* Overlay Stats */}
                                <div className="absolute bottom-0 w-full p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                                    {[
                                        { label: "Active Readers", val: "2.5M+" },
                                        { label: "Global Offices", val: "14" },
                                        { label: "Awards Won", val: "85+" },
                                        { label: "Journalists", val: "300+" },
                                    ].map((stat, i) => (
                                        <div key={i} className="text-white">
                                            <h4 className="text-3xl font-black mb-1 tracking-tighter">{stat.val}</h4>
                                            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* --- Section 3: Core Values (The 3-Grid) --- */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <FaHistory className="text-4xl text-red-600 mb-6" />
                                    <h3 className="font-black text-xl mb-4">Integrity</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Two decades of unfiltered reporting that people trust across the globe.</p>
                                </div>
                                <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <FaGlobe className="text-4xl text-orange-500 mb-6" />
                                    <h3 className="font-black text-xl mb-4">Global Reach</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">From local corners to global summits, we are present where news happens.</p>
                                </div>
                                <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <FaAward className="text-4xl text-blue-600 mb-6" />
                                    <h3 className="font-black text-xl mb-4">Excellence</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">Recognized by the International Press for investigative journalism.</p>
                                </div>
                            </div>

                            {/* --- Section 4: Editorial Content --- */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <div className="prose prose-lg">
                                    <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">Journalism for the <br/> Digital Age.</h2>
                                    <p className="text-gray-600 mb-6 font-medium">
                                        We utilize AI-driven analytics to understand what matters to our audience, without ever compromising on the human touch that defines real reporting.
                                    </p>
                                    <ul className="space-y-4 list-none p-0">
                                        {["Verified Fact-Checking", "24/7 Global Desk", "Unbiased Editorial Voice"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 font-bold text-gray-800">
                                                <span className="w-6 h-6 bg-red-600 text-white flex items-center justify-center rounded-full text-[10px]">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative h-[400px] bg-gray-100 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                                    <Image 
                                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070" 
                                        alt="Team working" 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* --- Section 5: The Extreme CTA --- */}
                            <div className="mt-24 relative p-12 md:p-20 bg-red-600 rounded-[3.5rem] overflow-hidden group">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                    <div className="text-center md:text-left">
                                        <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Want to Join Us?</h3>
                                        <p className="text-red-100 font-medium max-w-md">We are always looking for fearless journalists and creative storytellers.</p>
                                    </div>
                                    <button className="bg-white text-red-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-2xl">
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    </main>
                     <div className=" col-span-3 relative overflow-hidden mr-20 p-8 bg-gray-900 rounded-[2rem]  justify-end text-white shadow-2xl">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-50"></div>
                                <h4 className="relative z-10 font-black text-2xl mb-4 leading-tight">Be Part of the <span className="text-red-500">Truth.</span></h4>
                                <p className="relative z-10 text-sm text-gray-400 mb-6 font-medium">Join 50k+ readers who get exclusive investigative reports.</p>
                                <button className="relative z-10 w-full bg-red-600 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;