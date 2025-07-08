export interface ExperienceItem {
  title: string;
  organization: string;
  type: 'work' | 'leadership' | 'award';
  startDate: string;
  endDate?: string;
  description: string;
  logo?: string;
  link?: string;
}

export const experience: ExperienceItem[] = [
  {
    title: 'Founder',
    organization: 'CrushCade',
    type: 'leadership',
    startDate: '2024',
    description: 'Building a social platform for gamers to connect. Leading product vision, team, and go-to-market strategy.',
    logo: '/assets/projects/project.png',
    link: 'https://crushcade.com',
  },
  {
    title: 'Software Engineering Intern',
    organization: 'Scotiabank',
    type: 'work',
    startDate: '2024',
    endDate: '2024',
    description: 'Worked on scalable banking solutions, collaborating with cross-functional teams to deliver high-impact features.',
    logo: '/assets/history/scotiabank_logo.jpg',
    link: '',
  },
  {
    title: 'Machine Learning Intern',
    organization: 'Viable AI',
    type: 'work',
    startDate: '2023',
    endDate: '2023',
    description: 'Developed and deployed ML models for real-world business applications.',
    logo: '/assets/history/viable_ads_logo.jpg',
    link: '',
  },
  {
    title: 'Founder',
    organization: 'HackTrent',
    type: 'leadership',
    startDate: '2022',
    description: 'Founded and organized Trent University's first hackathon, fostering a culture of innovation and collaboration.',
    logo: '/assets/about/HackIcon.png',
    link: '',
  },
  {
    title: 'President',
    organization: 'Trent CS Club',
    type: 'leadership',
    startDate: '2022',
    endDate: '2023',
    description: 'Led the Computer Science Club, organizing events, workshops, and mentorship programs for students.',
    logo: '/assets/about/clubicon.png',
    link: '',
  },
  {
    title: 'Pull Shark',
    organization: 'GitHub',
    type: 'award',
    startDate: '2024',
    description: 'Awarded the Pull Shark badge for outstanding open source contributions.',
    logo: '/assets/contact/githubIcon.png',
    link: 'https://github.com/MAIDENMI',
  },
  {
    title: 'Hackathon Winner',
    organization: 'Multiple Events',
    type: 'award',
    startDate: '2022',
    endDate: '2024',
    description: 'Won several hackathons for projects in AI, accessibility, and health tech.',
    logo: '/assets/about/nsbehackimg.png',
    link: '',
  },
]; 