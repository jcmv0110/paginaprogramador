import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-800 to-black text-gray-100">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* About Me Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-900 rounded-lg h-80 flex items-center justify-center border border-gray-800 shadow-lg">
                <span className="text-gray-600 text-sm">Perfil</span>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-light text-white">Acerca de</h2>
              <p className="text-gray-300 leading-relaxed">
                Soy un desarrollador apasionado con experiencia en tecnologías web modernas. 
                Me encanta construir aplicaciones escalables y compartir mi conocimiento con la comunidad.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Con años de experiencia en desarrollo frontend y backend, 
                me especializo en crear interfaces de usuario intuitivas y soluciones robustas del lado del servidor.
              </p>
              <Link 
                href="/about"
                className="inline-block text-blue-400 hover:text-blue-300 px-6 py-3 border border-blue-400/20 rounded-md hover:border-blue-400/40 transition-all"
              >
                Saber más →
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
                    <span className="text-gray-600 text-sm">Imagen destacada</span>
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
                      Leer más →
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
                      Leer →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
