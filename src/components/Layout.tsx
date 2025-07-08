import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* Header / Navbar */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-white/80 dark:bg-gray-900/80 shadow-md sticky top-0 z-50">
        <div className="font-bold text-xl tracking-tight text-purple-700 dark:text-purple-300">Aiden Miah</div>
        <nav className="space-x-4">
          {/* Add navigation links here */}
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">{children}</main>
      {/* Footer */}
      <footer className="w-full py-4 px-6 text-center text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-900/80 mt-8">
        © {new Date().getFullYear()} Aiden Miah · <a href="https://github.com/MAIDENMI" className="underline hover:text-purple-600">GitHub</a> · <a href="https://www.linkedin.com/in/aidenm" className="underline hover:text-purple-600">LinkedIn</a>
      </footer>
    </div>
  );
};

export default Layout; 