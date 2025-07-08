import React from 'react';

const socials = [
  {
    name: 'LinkedIn',
    icon: '/assets/contact/linkedinIcon.png',
    url: 'https://www.linkedin.com/in/aidenm',
  },
  {
    name: 'GitHub',
    icon: '/assets/contact/githubIcon.png',
    url: 'https://github.com/MAIDENMI',
  },
  {
    name: 'Email',
    icon: '/assets/contact/emailIcon.png',
    url: 'mailto:aidenmiah3@gmail.com',
  },
  {
    name: 'CrushCade',
    icon: '/assets/projects/project.png',
    url: 'https://crushcade.com',
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="my-12 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-200">Contact</h2>
      <form
        action="https://formspree.io/f/mwpbjvly"
        method="POST"
        className="space-y-6"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="flex justify-center gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
            title={social.name}
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-10 h-10 object-contain rounded-full border border-purple-200 dark:border-purple-700 bg-white dark:bg-gray-800 mb-1 group-hover:scale-110 transition-transform"
            />
            <span className="text-xs text-gray-700 dark:text-gray-300 group-hover:text-purple-700 dark:group-hover:text-purple-300">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact; 