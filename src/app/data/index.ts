import { Experience, Education, ContactInfo } from '../types';

export const experiences: Experience[] = [
  {
    role: 'Member of Workshop Pemrograman Lanjut Project',
    company: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    highlights: [
      'Creating a car speedometer with parameters such as speed, weather temperature, battery percentage using the QT platform',
      'Designing the UI/UX using Figma'
    ],
    technologies: ['C++', 'QT', 'Figma']
  },
  {
    role: 'Member of Pengembangan Perangkat Lunak Project',
    company: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    startDate: '2023-07-01',
    endDate: '2023-12-31',
    highlights: [
      'Creating a collection of PKM proposals website at PENS using programming languages (HTML, JavaScript, and PHPMyAdmin)',
      'Operating systems such as Windows 8 and Android version 8 Oreo'
    ],
    technologies: ['HTML', 'JavaScript', 'PHP', 'MySQL']
  },
  {
    role: 'Member of IoT Project',
    company: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    startDate: '2023-09-01',
    endDate: '2023-12-31',
    highlights: [
      'Creating a soil fertility measuring device with temperature, humidity, and pressure parameters using PH Meter sensors and the Ubidots platform'
    ],
    technologies: ['IoT', 'Ubidots', 'Sensors', 'Arduino']
  }
];

export const education: Education[] = [
  {
    school: 'Politeknik Elektronika Negeri Surabaya',
    degree: 'D4 Internet Engineering Technology',
    startDate: '2020',
    endDate: 'Present',
    description: [
      'Focus on web development and networking',
      'Active in campus organizations and tech events',
      'Maintained high academic performance'
    ]
  }
];

export const events = [
  {
    role: 'Staff of Equipment',
    organization: 'Association of EEPIS Telecommunication Engineering Students',
    period: '2023',
    description: [
      'Ensuring that all necessary equipment is available and in good condition for use during events',
      'Organizing the storage of equipment and ensuring proper inventory management',
      'Ensuring the cleanliness and proper functioning of all equipment'
    ]
  },
  {
    role: 'Coordinator Public Relation',
    organization: 'TRI EXPO',
    period: '2023',
    description: [
      'Managing communication with external parties including media, sponsors, partners, and the general public',
      'Handling inquiries, feedback, and complaints from the public in a timely and professional manner'
    ]
  },
  {
    role: 'Master of Ceremony',
    organization: 'Association of EEPIS Telecommunication Engineering Students',
    period: '2023',
    description: [
      'Hosting and facilitating various events organized by the Association',
      'Ensuring smooth flow and coordination of the events as the Master of Ceremony (MC)',
      'Welcoming guests, introducing speakers, and guiding the audience throughout the event'
    ]
  },
  {
    role: 'Entrepreneurial Staff',
    organization: 'Association of EEPIS Telecommunication Engineering Student',
    period: '2022 - Present',
    description: [
      'Managing budget',
      'Managing timelines and team coordination',
      'Making lanyard design'
    ]
  },
  {
    role: 'Executive Chairperson',
    organization: 'Campus EXPO',
    period: '2022',
    description: [
      'Handling inquiries and communications from the public and media outlets',
      'Building and maintaining positive relationships with external stakeholders'
    ]
  },
  {
    role: 'Staff',
    organization: 'Mojokerto PENS Student Association',
    period: '2021 - Present',
    description: [
      'Collaborated with team members to execute projects and enhance member engagement',
      'Contributed to the development and promotion of the association\'s goals',
      'Organized events, managed communications, and supported initiatives'
    ]
  },
  {
    role: 'Head of Student Council',
    organization: 'Student Council of Kutorejo State High School',
    period: '2019 - 2020',
    description: [
      'Responsible for organizing members according to their departments',
      'Implementing OSIS work programs to be carried out on time',
      'Channeling the aspirations of students of SMAN 1 Kutorejo'
    ]
  },
  {
    role: 'Deputy Head of Student Council',
    organization: 'Student Council of Kutorejo State High School',
    period: '2018 - 2019',
    description: [
      'Responsible for organizing young OSIS members before they become expert staff',
      'Assisting the performance of the OSIS chairman'
    ]
  }
];

export const skills = {
  'Programming Languages': [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'PHP', level: 75 }
  ],
  'Frameworks & Libraries': [
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'Laravel', level: 70 }
  ],
  'Tools & Technologies': [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Postman', level: 80 },
    { name: 'Docker', level: 70 },
    { name: 'MySQL', level: 75 }
  ],
  'Design & UI/UX': [
    { name: 'Figma', level: 80 },
    { name: 'Responsive Design', level: 85 },
    { name: 'UI/UX Principles', level: 75 },
    { name: 'Tailwind CSS', level: 85 }
  ],
  'Soft Skills': [
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Collaboration', level: 85 },
    { name: 'Communication', level: 85 },
    { name: 'Time Management', level: 80 },
    { name: 'Adaptability', level: 85 }
  ]
};

export const contactInfo: ContactInfo = {
  email: 'naufalfattah111@gmail.com',
  phone: '+6285608313250',
  location: 'Surabaya, Indonesia',
  socials: {
    github: 'https://github.com/serbetwarung',
    linkedin: 'https://linkedin.com/in/naufalfattah'
  }
};
