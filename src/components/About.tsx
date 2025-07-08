import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="my-12 flex flex-col md:flex-row items-center gap-8">
      <img
        src="/assets/hero/ProfileImage.png"
        alt="Aiden Miah profile"
        className="w-32 h-32 rounded-full border-4 border-purple-400 shadow-lg object-cover mb-6 md:mb-0"
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Hi! I'm <span className="font-semibold text-purple-700 dark:text-purple-300">Aiden</span>, a builder, hacker, and community leader passionate about making tech more accessible, fun, and impactful. I love working at the intersection of <span className="font-bold text-blue-600">AI</span>, <span className="font-bold text-pink-600">productivity</span>, and <span className="font-bold text-green-600">community</span>.
        </p>
        <div className="mb-4">
          <span className="font-semibold text-purple-700 dark:text-purple-300">What I'm building now:</span>
          <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">CrushCade (Founder)</span>
          <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">A social platform for gamers to connect and play, formerly known as tinder4games.</span>
        </div>
        {/* Fun Fact Placeholder */}
        <div className="mt-4 text-sm text-purple-700 dark:text-purple-300 bg-white/70 dark:bg-gray-900/70 px-4 py-2 rounded shadow inline-block">
          <span className="font-semibold">Random Fun Fact:</span> <span className="italic">(AI-generated fun fact coming soon!)</span>
        </div>
      </div>
    </section>
  );
};

export default About; 