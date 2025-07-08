export interface Project {
  name: string;
  emoji: string;
  description: string;
  techStack: string[];
  links: { github?: string; demo?: string; article?: string };
  image?: string;
  aiSummary?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'ChillBill',
    emoji: '🧊',
    description: 'A smart bill-splitting and expense tracking app for groups and friends.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    links: {
      demo: 'https://chillbill.pages.dev/',
      article: 'https://dorahacks.io/buidl/20382/'
    },
    image: '/assets/projects/chillbill.png',
    aiSummary: '',
  }
]; 