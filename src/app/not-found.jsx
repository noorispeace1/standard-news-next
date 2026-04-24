'use client'; // Required for the useRouter hook

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 font-serif">
      <div className="max-w-2xl w-full text-center">
        
        {/* Header Section */}
        <div className="border-b-4 border-black pb-4 mb-8">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            404 Error
          </h1>
          <p className="text-xl md:text-2xl font-bold italic mt-2 text-red-700">
            Page Not Found — This story is currently developing.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold leading-tight text-gray-900">
            We searched our archives, but we couldnot find the article you are looking for.
          </h2>
          
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            The link might be broken, or the report has been retracted. Try heading back to our main feed for the latest updates.
          </p>

          {/* Navigation Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/"
              className="px-8 py-3 bg-black text-white font-bold uppercase hover:bg-gray-800 transition-all"
            >
              Back to Front Page
            </Link>
            <button
              onClick={() => router.back()}
              className="px-8 py-3 border-2 border-black text-black font-bold uppercase hover:bg-gray-100 transition-all"
            >
              Previous Page
            </button>
          </div>
        </div>

        {/* News Categories Section */}
        <div className="mt-16">
          <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-2 mb-4">
            Browse Top Sections
          </h3>
          <nav className="flex flex-wrap justify-center gap-6">
            {['World', 'Politics', 'Business', 'Technology', 'Opinion'].map((category) => (
              <Link
                key={category}
                href={`/${category.toLowerCase()}`}
                className="text-sm font-bold text-gray-800 hover:text-red-700 transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-gray-400 text-xs italic">
          © {new Date().getFullYear()} The Standard News - Journalism You Can Trust.
        </p>
      </div>
    </div>
  );
}