import React from 'react';

const techStack = [
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'Python', icon: '/assets/skills/pythonlogo.png' },
      { name: 'JavaScript', icon: '/assets/skills/js.png' },
      { name: 'TypeScript', icon: '/assets/skills/js.png', style: { opacity: 0.7 } },
      { name: 'Java' },
      { name: 'C#' },
      { name: 'HTML', icon: '/assets/skills/html.png' },
      { name: 'CSS', icon: '/assets/skills/css.png' },
      { name: 'React.js', icon: '/assets/skills/react.png' },
      { name: 'Next.js' },
      { name: 'React Native' },
      { name: 'Flask' },
      { name: 'Node.js', icon: '/assets/skills/node.png' },
      { name: 'GraphQL', icon: '/assets/skills/graphql.png' },
      { name: 'MongoDB', icon: '/assets/skills/mongodb.png' },
      { name: 'SQL', icon: '/assets/skills/sql.png' },
      { name: 'MediaPipe' },
    ],
  },
  {
    category: 'Software & Libraries',
    items: [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'OpenCV' },
      { name: 'YOLO' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Gemini API' },
      { name: 'OpenAI API' },
      { name: 'Auth0' },
      { name: 'REST APIs' },
      { name: 'Figma', icon: '/assets/skills/figma.png' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'GCP' },
      { name: 'Docker' },
      { name: 'Bitbucket' },
      { name: 'GitHub Actions' },
      { name: 'Jenkins' },
      { name: 'Cloudflare Workers' },
      { name: 'Terraform' },
      { name: 'Agile' },
      { name: 'CI/CD' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-200">Skills & Tech Stack</h2>
      <div className="space-y-6">
        {techStack.map((group) => (
          <div key={group.category}>
            <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="flex items-center gap-1 bg-white/80 dark:bg-gray-800/70 rounded-full px-3 py-1 text-xs font-medium shadow-sm"
                  style={item.style}
                >
                  {item.icon && (
                    <img src={item.icon} alt={item.name} className="w-5 h-5" style={item.style} />
                  )}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 