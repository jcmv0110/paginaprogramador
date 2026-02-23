import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900/30 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-light text-white">
              dev
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-light transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-light transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-light transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
