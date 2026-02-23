import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-900 rounded-lg h-96 flex items-center justify-center border border-gray-800 shadow-lg">
                <span className="text-gray-600 text-sm">Foto de perfil</span>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-4xl font-light text-white">Acerca de Mí</h1>
              <p className="text-gray-300 leading-relaxed">
                Soy un desarrollador apasionado con experiencia en tecnologías web modernas. 
                Me encanta construir aplicaciones escalables y compartir mi conocimiento con la comunidad.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Con años de experiencia en desarrollo frontend y backend, 
                me especializo en crear interfaces de usuario intuitivas y soluciones robustas del lado del servidor.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Mi enfoque se centra en escribir código limpio, mantenible y eficiente. 
                Siempre estoy aprendiendo nuevas tecnologías y buscando las mejores prácticas 
                para ofrecer soluciones innovadoras.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cuando no estoy programando, disfruto contribuir a proyectos de código abierto, 
                escribir artículos técnicos y mentorear a otros desarrolladores en su camino profesional.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-light text-white mb-12">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg">
              <h3 className="text-xl font-light text-white mb-4">Frontend</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• React / Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• HTML5 / CSS3</li>
                <li>• JavaScript ES6+</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg">
              <h3 className="text-xl font-light text-white mb-4">Backend</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• REST APIs</li>
                <li>• GraphQL</li>
                <li>• Base de Datos SQL/NoSQL</li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg">
              <h3 className="text-xl font-light text-white mb-4">Herramientas</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Git / GitHub</li>
                <li>• Docker</li>
                <li>• CI/CD</li>
                <li>• Testing (Jest, RTL)</li>
                <li>• Agile/Scrum</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
