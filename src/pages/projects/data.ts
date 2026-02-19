import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: 'Human Centered AI Research',
    projects: [
      {
        text: 'Smart Glass for Low Vision',
        description: 'First Author: AR/Audio interaction patterns to reduce cognitive load for low-vision users using LLMs.',
        icon: 'i-carbon-glasses',
        href: 'https://github.com/alexgurung',
      },
      {
        text: 'Hospital Readmission ML',
        description: 'Predicting 30-day readmissions using SHAP-interpretable Machine Learning models & Streamlit.',
        icon: 'i-carbon-data-class',
        href: 'https://github.com/alexgurung',
      },
      {
        text: 'Mental Wellbeing in Digital Solutions',
        description: 'Presented at IEEE FIE 2025: Mixed-methods analysis on digital health technology.',
        icon: 'i-carbon-book',
        href: 'https://ieeexplore.ieee.org/document/11328367', // General profile
        paperHref: 'https://ieeexplore.ieee.org/document/11328367',
      },
    ],
  },
  {
    title: 'Engineering & Development',
    projects: [
      {
        text: 'MedCubes EHR',
        description: 'Frontend for Austrian Electronic Health Records used in 10+ hospitals (Vue.js).',
        icon: 'i-carbon-hospital',
        href: 'https://github.com/alexgurung',
      },
      {
        text: 'Canvas VR Gamification',
        description: 'Virtual Reality system integrated with Canvas LMS to boost student engagement.',
        icon: 'i-carbon-game-console',
        href: 'https://github.com/alexgurung',
      },
      {
        text: 'Content Management Dashboard',
        description: 'Custom WordPress CMS & C# dashboard for Empathy IT Club.',
        icon: 'i-carbon-dashboard',
        href: 'https://github.com/alexgurung',
      },
    ],
  },
  {
    title: 'Creative Works',
    projects: [
      {
        text: 'Unsplash Portfolio',
        description: 'Photography with over 5 million downloads worldwide.',
        icon: 'i-carbon-camera',
        href: 'https://unsplash.com/@YOUR_HANDLE',
      },
      {
        text: 'University of Michigan | Content Creation',
        description: 'Social media campaigns reaching 10k+ views for College of Innovation & Technology.',
        icon: 'i-carbon-video',
        href: 'https://instagram.com',
      },
    ],
  },
]
