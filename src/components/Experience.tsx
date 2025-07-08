import React from 'react';
import { experience, ExperienceItem } from '../data/experience';

const groupByType = (items: ExperienceItem[], type: ExperienceItem['type']) =>
  items.filter((item) => item.type === type);

const Experience: React.FC = () => {
  const work = groupByType(experience, 'work');
  const leadership = groupByType(experience, 'leadership');
  const awards = groupByType(experience, 'award');

  const renderItem = (item: ExperienceItem) => (
    <div key={item.title + item.organization} className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-900/80 rounded-lg shadow mb-4">
      {item.logo && (
        <img src={item.logo} alt={item.organization} className="w-12 h-12 object-contain rounded-full border" />
      )}
      <div>
        <div className="font-semibold text-lg flex items-center gap-2">
          {item.title}
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 underline text-sm">Link</a>
          )}
        </div>
        <div className="text-purple-700 dark:text-purple-300 font-medium">{item.organization}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {item.startDate}
          {item.endDate ? ` – ${item.endDate}` : ''}
        </div>
        <div className="text-sm mt-1">{item.description}</div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-200">Experience</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Work</h3>
        {work.map(renderItem)}
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Leadership</h3>
        {leadership.map(renderItem)}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Awards</h3>
        {awards.map(renderItem)}
      </div>
    </section>
  );
};

export default Experience; 