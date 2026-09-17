export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our approach', href: '#approach' },
  { label: 'Team', href: '#team' },
] as const;

export const HERO = {
  headline: 'BlackPaws turn your ideas into powerful, tailor-made web and mobile apps.',
  subheadline:
    'From strategy to design and development, we create high-performance digital experiences.',
  cta: "Let's talk",
  ctaHref: '/contact',
};

export const CLIENTS = [
  { name: 'Airbnb' },
  { name: 'Greenerwave' },
  { name: 'Bouygues Télécom' },
  { name: "Département de l'Aude" },
  { name: 'FDJ' },
  { name: 'MEA Source' },
  { name: 'Gekomed' },
];

export const PROJECTS = [
  {
    id: 'project-1',
    title: 'Mobile tourism application',
    client: 'Royal fortresses of Languedoc',
    tags: ['Tech consulting', 'react native', 'Unity'],
    image: 'https://images.unsplash.com/photo-90a1b58e7e9c?w=950&h=822&fit=crop&auto=format',
    large: true,
  },
  {
    id: 'project-2',
    title: 'Mobile app for responsible and socially conscious mobile plans',
    client: 'Source',
    tags: ['React Native'],
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=480&h=822&fit=crop&auto=format',
    large: false,
  },
  {
    id: 'project-3',
    title: 'Business tool for a splint reconditioning solution',
    client: 'Administration interface',
    tags: ['User interface (ui)', 'React'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&h=822&fit=crop&auto=format',
    large: false,
  },
  {
    id: 'project-4',
    title: 'Administration interface between rental companies and city halls',
    client: 'Airbnb visitor\'s tax',
    tags: ['Vue.js', 'Rust'],
    image: null,
    large: false,
  },
  {
    id: 'project-5',
    title: 'Web application for international travelers',
    client: 'Travel',
    tags: ['Mockup review', 'Svelte'],
    image: null,
    large: false,
  },
  {
    id: 'project-6',
    title: 'Bouygues Telecom In-Store Video Application',
    client: 'Bouygues Telecom',
    tags: ['Tech consulting', 'Kotlin'],
    image: null,
    large: false,
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Very competent, very friendly, very responsive, very reliable, and always available. In short, very professional. Working with the Blackpaws team is so smooth.',
    author: 'Laurent Sauvage',
    role: 'Responsable Lab Innovation Bouygues Telecom',
  },
  {
    quote: 'We’ve been fortunate to collaborate with BlackPaws for several years on behalf of one of our key clients; we’ve built a strong relationship based on trust, and I enjoy working with them every day because BlackPaws combines expertise, agility, and a solution-oriented approach.',
    author: 'Agathe Saint-Jean',
    role: 'Partner at A2 Consulting',
  },
];

export const SERVICES = [
  {
    id: 'consulting',
    title: 'Consulting',
    summary:
      'Strategic guidance to transform your vision into actionable roadmaps and technical specifications.',
    items: [
      {
        title: 'Workshops',
        description:
          'Organization of workshops and seminars with key stakeholders involved in the creation of your product in order to align different visions.',
        image: 'src/imports/DesktopBlackPaws/Workshop.png',
      },
      {
        title: 'Technical review',
        description:
          'Audit of your product and proposals for concrete improvements in the short, medium, and long term.',
        image: 'src/imports/DesktopBlackPaws/Technical review.png',
      },
      {
        title: 'Requirement analysis',
        description:
          "Before launching production, study the technical and functional feasibility of the product's ambitions in order to create a roadmap that will be followed and ensure development without any unpleasant surprises.",
        image: 'src/imports/DesktopBlackPaws/Requirement analysis.png',
      },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    summary:
      'Crafting intuitive, beautiful interfaces that users love and that drive engagement.',
    items: [
      {
        title: 'Ideation',
        description:
          'Supporting teams in concept creation: from a blank sheet of paper to writing the backlog.',
        image: 'src/imports/DesktopBlackPaws/Ideation.png',
      },
      {
        title: 'Production',
        description:
          'Creating the solution\'s interfaces in-house or in a control room, from user flows and wireframes to mock-ups and prototypes.',
        image: 'src/imports/DesktopBlackPaws/Production.png',
      },
      {
        title: 'Quality control',
        description:
          "The design team remains present and active in supporting the development teams, proposing solutions where necessary and then stamping each demo with its seal of quality.",
        image: 'src/imports/DesktopBlackPaws/Quality control.png',
      },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    summary:
      'High-performance web and mobile applications built with cutting-edge technologies and best practices.',
    items: [
      {
        title: 'Web Application Development',
        description:
          'Building dynamic and responsive web applications for optimal performance and user experience.',
        image: 'src/imports/DesktopBlackPaws/Web Application Development.png',
      },
      {
        title: 'Mobile Application Development',
        description:
          'Creating cross-platform mobile applications using hybrid languages, ensuring seamless performance on iOS and Android.',
        image: 'src/imports/DesktopBlackPaws/Mobile Application Development.png',
      },
      {
        title: 'API Development',
        description:
          "Developing robust and scalable APIs to power your applications and integrate with third-party services.",
        image: 'src/imports/DesktopBlackPaws/API Development.png',
      },
    ],
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    summary:
      'Rapid interactive prototypes to validate ideas and align stakeholders before development.',
    items: [
      {
        title: 'Fundraising',
        description:
          'Get a prototype quickly to demo your product and convince your investors.',
        image: 'src/imports/DesktopBlackPaws/Fundraising.png',
      },
      {
        title: 'Users tests',
        description:
          'Test your product with users to validate the user journey quickly and inexpensively before launching development.',
        image: 'src/imports/DesktopBlackPaws/Users tests.png',
      },
      {
        title: 'Accelerated development',
        description:
          "A complete prototype significantly speeds up development: clarity of links, states, interactions, and expected animations. Enables a smoother transition between the design and development phases.",
        image: 'src/imports/DesktopBlackPaws/Accelerated development.png',
      },
    ],
  },
];

export const APPROACH_STEPS = [
  {
    number: '00',
    titleSans: 'Hello,',
    titleSerif: '“enchanté”',
    subtitle: 'Video call',
    description:
      'Meeting and presentation of your project and BlackPaws. We gather your requirements, taking into account your constraints and elements already available in the project, in order to tailor our support to your needs. We then identify the team you need.',
  },
  {
    number: '01',
    titleSans: 'Deconstruction',
    titleSerif: 'workshop',
    subtitle: '2-hour workshop',
    description:
      'After reviewing the information you have provided, BlackPaws will organize, facilitate, and lead a reframing workshop with your designated teams, led by a technical expert and a design expert. The purpose of this workshop is to present and challenge the elements that have been understood and assimilated, as well as to work with you to complete the elements necessary for the smooth running of the rest of the project.',
  },
  {
    number: '02',
    titleSans: 'Project',
    titleSerif: 'Roadmap',
    subtitle: 'Rituals and milestones',
    description:
      'Thanks to the information gathered, we can now establish a precise roadmap for the project. Together, we will establish the necessary rituals with the identified stakeholders, as well as the key milestones for validating each stage.',
  },
  {
    number: '03',
    titleSans: 'Production and',
    titleSerif: 'validation',
    subtitle: 'We build together, as a team!',
    description:
      'Thorough QA across devices and browsers, performance optimisation, and a supervised go-live. We stay by your side during the critical launch window.',
  },
  {
    number: '04',
    titleSans: 'Delivery of the',
    titleSerif: 'baby',
    subtitle: 'Handover and key delivery',
    description:
      'Once the project is complete, we organize a comprehensive handover that includes a detailed briefing for your teams to ensure a smooth transition after we leave. You get everything back, and we remain available to answer any questions you may have. The goal: your independence! If you call us back, it\'s because we\'re nice and friendly, not because we\'ve made you technically dependent on us.',
  },
];

export const TEAM = [
  {
    id: 'member-1',
    name: 'Nicolas Thing-Leoh',
    role: 'Founder & CEO',
    handle: 'Chef de meute',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=430&h=430&fit=crop&auto=format',
    linkedin: 'https://www.linkedin.com/in/nicolas-thing-leoh-3b60a753/',
    large: true,
  },
  {
    id: 'member-2',
    name: 'Leslie Moinet',
    role: 'Lead Designer',
    handle: 'Aristochatte',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=430&fit=crop&auto=format',
    linkedin: 'https://www.linkedin.com/in/leslie-moinet-a8927b88/',
    large: false,
  },
  {
    id: 'member-3',
    name: 'Lucas Petit',
    role: 'Senior Developer',
    handle: '@lucaspetit',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=430&fit=crop&auto=format',
    linkedin: 'https://linkedin.com',
    large: false,
  },
  {
    id: 'member-4',
    name: 'Camille Vidal',
    role: 'UX Researcher',
    handle: '@camvidal',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=430&fit=crop&auto=format',
    linkedin: 'https://linkedin.com',
    large: false,
  },
  {
    id: 'member-5',
    name: 'Mathieu Durand',
    role: 'Product Strategist',
    handle: '@mathdurand',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=430&fit=crop&auto=format',
    linkedin: 'https://linkedin.com',
    large: false,
  },
  {
    id: 'member-6',
    name: 'Elisa Fontaine',
    role: 'Mobile Developer',
    handle: '@elisa_f',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=430&fit=crop&auto=format',
    linkedin: 'https://linkedin.com',
    large: false,
  },
];

export const FOOTER = {
  contact: {
    headline: 'Bring your project to life together?',
    subheadline: "Let's discuss how we can help you create exceptional experiences.",
    cta: 'Brief us on your project',
    ctaHref: '/contact',
  },
  nav: [
    { label: 'Our services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Our approach', href: '#approach' },
  ],
  address: '122 Rue Amelot, 75011 Paris, France',
  github: 'https://github.com/BlackPaws-App',
  legal: 'BlackPaws® — All rights reserved',
};
