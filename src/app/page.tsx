import Link from 'next/link';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    summary: 'Learn the fundamentals of React Hooks and how to use them effectively in your applications.',
    content: 'React Hooks revolutionized the way we write React components...',
    featured: true
  },
  {
    id: 2,
    title: 'TypeScript Best Practices',
    summary: 'Essential TypeScript patterns and practices for better code quality.',
    content: 'TypeScript provides powerful type checking capabilities...'
  },
  {
    id: 3,
    title: 'Building Responsive Layouts',
    summary: 'Master responsive design with modern CSS techniques.',
    content: 'Creating layouts that work across all devices is crucial...'
  },
  {
    id: 4,
    title: 'Next.js Performance Tips',
    summary: 'Optimize your Next.js applications for better performance.',
    content: 'Performance optimization is key for user experience...'
  }
];

export default function HomePage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* About Me Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-900 rounded-lg h-80 flex items-center justify-center border border-gray-800 shadow-lg">
                <span className="text-gray-600 text-sm">Profile</span>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-light text-white">About</h2>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a passionate developer with expertise in modern web technologies. 
                I love building scalable applications and sharing my knowledge with the community.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With years of experience in frontend and backend development, 
                I specialize in creating intuitive user interfaces and robust server-side solutions.
              </p>
              <Link 
                href="/about"
                className="inline-block text-blue-400 hover:text-blue-300 px-6 py-3 border border-blue-400/20 rounded-md hover:border-blue-400/40 transition-all"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-light text-white mb-12">Blog</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Article */}
            <div>
              {featuredPost && (
                <div className="bg-gray-900 rounded-lg border border-gray-800 shadow-lg overflow-hidden">
                  <div className="h-48 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Featured image</span>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-light text-white">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {featuredPost.summary}
                    </p>
                    <Link 
                      href={`/blog/${featuredPost.id}`}
                      className="text-blue-400 hover:text-blue-300 font-light"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              {regularPosts.map((post) => (
                <div key={post.id} className="flex gap-4 p-6 bg-gray-900 rounded-lg transition-all">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-800 rounded w-12 h-12 flex items-center justify-center">
                      <span className="text-xs text-gray-600">•</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="text-lg font-light text-white">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {post.summary}
                    </p>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-light"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2024 dev. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
              >
                X
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
              >
                TikTok
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
