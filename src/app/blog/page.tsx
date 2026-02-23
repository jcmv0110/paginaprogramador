import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for blog posts (same as homepage)
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
  },
  {
    id: 5,
    title: 'Modern JavaScript ES6+ Features',
    summary: 'Explore the latest JavaScript features and how to use them in your projects.',
    content: 'JavaScript has evolved significantly with ES6 and beyond...'
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox',
    summary: 'Understanding when to use CSS Grid versus Flexbox for layouts.',
    content: 'Both CSS Grid and Flexbox are powerful layout tools...'
  },
  {
    id: 7,
    title: 'State Management in React',
    summary: 'Comparing different state management solutions for React applications.',
    content: 'State management is a crucial aspect of React development...'
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-900 rounded-lg h-96 flex items-center justify-center border border-gray-800 shadow-lg">
                <span className="text-gray-600 text-sm">Featured image</span>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-4xl font-light text-white">
                {featuredPost?.title}
              </h1>
              <p className="text-gray-300 leading-relaxed">
                {featuredPost?.summary}
              </p>
              <p className="text-gray-300 leading-relaxed">
                Dive deep into modern web development practices and learn how to build scalable, 
                maintainable applications using the latest technologies and frameworks.
              </p>
              <Link 
                href={`/blog/${featuredPost?.id}`}
                className="inline-block text-blue-400 hover:text-blue-300 px-6 py-3 border border-blue-400/20 rounded-md hover:border-blue-400/40 transition-all"
              >
                Read more →
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-3xl font-light text-white mb-12">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <div key={post.id} className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-800 rounded w-16 h-16 flex items-center justify-center">
                      <span className="text-xs text-gray-600">•</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-light text-white">
                      {post.title}
                    </h3>
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
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
