export default function Footer() {
  return (
    <footer className="bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © 2024 dev. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <a 
              href="https://www.instagram.com/j_camilo__/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://www.linkedin.com/in/juan-camilo-mejia-villegas-4385973a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/jcmv0110" 
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
  );
}
