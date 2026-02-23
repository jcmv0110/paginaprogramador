import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for blog posts (same as homepage)
const blogPosts = [
  {
    id: 1,
    title: 'Primeros Pasos con React Hooks',
    summary: 'Aprende los fundamentos de React Hooks y cómo usarlos efectivamente en tus aplicaciones.',
    content: 'React Hooks revolutionized the way we write React components...',
    featured: true
  },
  {
    id: 2,
    title: 'Mejores Prácticas de TypeScript',
    summary: 'Patrones esenciales de TypeScript y prácticas para mejor calidad de código.',
    content: 'TypeScript provides powerful type checking capabilities...'
  },
  {
    id: 3,
    title: 'Construyendo Layouts Responsivos',
    summary: 'Domina el diseño responsivo con técnicas modernas de CSS.',
    content: 'Creating layouts that work across all devices is crucial...'
  },
  {
    id: 4,
    title: 'Consejos de Rendimiento para Next.js',
    summary: 'Optimiza tus aplicaciones Next.js para mejor rendimiento.',
    content: 'Performance optimization is key for user experience...'
  },
  {
    id: 5,
    title: 'Características Modernas de JavaScript ES6+',
    summary: 'Explora las últimas características de JavaScript y cómo usarlas en tus proyectos.',
    content: 'JavaScript has evolved significantly with ES6 and beyond...'
  },
  {
    id: 6,
    title: 'CSS Grid vs Flexbox',
    summary: 'Entiende cuándo usar CSS Grid versus Flexbox para layouts.',
    content: 'Both CSS Grid and Flexbox are powerful layout tools...'
  },
  {
    id: 7,
    title: 'Manejo de Estado en React',
    summary: 'Comparando diferentes soluciones de manejo de estado para aplicaciones React.',
    content: 'State management is a crucial aspect of React development...'
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-800 to-black text-gray-100">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-900 rounded-lg h-96 flex items-center justify-center border border-gray-800 shadow-lg">
                <span className="text-gray-600 text-sm">Imagen destacada</span>
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
                Sumérgete profundamente en las prácticas modernas de desarrollo web y aprende cómo construir aplicaciones escalables y mantenibles usando las últimas tecnologías y frameworks.
              </p>
              <Link 
                href={`/blog/${featuredPost?.id}`}
                className="inline-block text-blue-400 hover:text-blue-300 px-6 py-3 border border-blue-400/20 rounded-md hover:border-blue-400/40 transition-all"
              >
                Leer más →
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="text-3xl font-light text-white mb-12">Últimos Posts</h2>
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
                      Leer →
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
