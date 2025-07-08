import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function RubiksCube() {
  // Simple colored cube for Rubik's Cube effect
  return (
    <mesh rotation={[0.4, 0.6, 0]} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      {/* 6 colored faces */}
      {["#ff3d3d", "#ffd600", "#4caf50", "#1976d2", "#fff", "#ff9800"].map((color, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          color={color}
        />
      ))}
    </mesh>
  );
}

const funFacts = [
  { icon: '🏃', text: 'Ran a marathon' },
  { icon: '☕', text: 'Love coffee' },
  { icon: '📚', text: 'Avid reader' },
  { icon: '🧩', text: "Rubik's Cube enthusiast" },
];

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] text-center py-16 gap-10">
      {/* 3D Rubik's Cube */}
      <div className="w-64 h-64 flex-shrink-0 bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 rounded-2xl shadow-lg">
        <Canvas camera={{ position: [4, 4, 4] }} shadows>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} />
          <RubiksCube />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 dark:text-purple-200 mb-2">
          Mohammed Aiden Miah
        </h1>
        <div className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
          Building with <span className="font-bold text-purple-600">AI</span>, <span className="font-bold text-blue-600">React</span>, and <span className="font-bold text-pink-600">Community</span>
        </div>
        <div className="mb-6 text-base text-gray-600 dark:text-gray-400 italic">
          "Let's make tech more accessible, fun, and impactful!"
        </div>
        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://drive.google.com/file/d/1BbrGQzKUTxpGd2ibzTiQrRDCZXqzNChz/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a href="mailto:aidenmiah3@gmail.com" title="Email">
            <img src="/assets/contact/emailIcon.png" alt="Email" className="w-8 h-8 hover:scale-110 transition" />
          </a>
        </div>
        {/* Fun Facts Card */}
        <div className="mt-4 bg-white/80 dark:bg-gray-900/80 px-6 py-4 rounded-xl shadow flex flex-wrap gap-4 items-center justify-center md:justify-start">
          {funFacts.map((fact, i) => (
            <div key={i} className="flex flex-col items-center text-lg font-medium text-purple-700 dark:text-purple-300">
              <span className="text-2xl mb-1 animate-bounce">{fact.icon}</span>
              <span className="text-xs text-gray-700 dark:text-gray-300">{fact.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 