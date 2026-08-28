import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-orbitron text-6xl md:text-8xl font-black text-[#ff1744] mb-4 drop-shadow-[0_0_15px_rgba(255,23,68,0.5)]">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl text-white font-orbitron font-bold tracking-widest mb-6">
        PAGE NOT FOUND
      </h2>
      <p className="text-gray-400 max-w-md mb-10 text-sm md:text-base">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link 
          href="/"
          className="px-8 py-3 bg-[#ff1744] text-white font-orbitron font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition-colors"
        >
          Return Home
        </Link>
        <Link 
          href="/#services"
          className="px-8 py-3 border border-[#ff1744] text-[#ff1744] font-orbitron font-bold uppercase tracking-wider rounded-lg hover:bg-[#ff1744]/10 transition-colors"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
}
