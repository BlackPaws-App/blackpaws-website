import imgHero1 from '@/imports/ProjectPageTemplate/07b520834633ef8a41d86ef107c3db341e201b41.png';
import imgLogo1 from '@/imports/ProjectPageTemplate/7558ed895aaa3f206abdc81f180261131959d71e.png';
import imgContextIcon1 from '../imports/ProjectPageTemplate/Contexte.png';
import imgContextImg1 from '@/imports/ProjectPageTemplate/3de189da9d9dc08ee321ea122859c1e52e43750b.png';
import imgNeedIcon1 from '../imports/ProjectPageTemplate/Besoin.png';
import imgNeedImg1 from '@/imports/ProjectPageTemplate/c9cf790126795d1d731546779374b69ee20e2243.png';
import imgSolutionIcon1 from '../imports/ProjectPageTemplate/Solution.png';
import imgSolutionImg1 from '@/imports/ProjectPageTemplate/d165cb3f8fe7dfa59d20702ebae849df11fb421f.png';

import imgHero6 from '@/imports/RCBT_header.jpg';
import imgContextImg6 from '@/imports/image-26.png';
import imgNeedImg6 from '@/imports/image-27.png';
import imgSolutionImg6 from '@/imports/image-28.png';
import imgLogo6 from '@/imports/image-29.png';

import imgHero5 from '@/imports/image-21.png';
import imgContextImg5 from '@/imports/image-22.png';
import imgNeedImg5 from '@/imports/image-23.png';
import imgSolutionImg5 from '@/imports/image-24.png';
import imgLogo5 from '@/imports/image-25.png';

import imgHero4 from '@/imports/image-16.png';
import imgContextImg4 from '@/imports/image-17.png';
import imgNeedImg4 from '@/imports/image-18.png';
import imgSolutionImg4 from '@/imports/image-19.png';
import imgLogo4 from '@/imports/image-20.png';

import imgHero2 from '@/imports/image-3.png';
import imgHero3 from '@/imports/image-8.png';
import imgLogo3 from '@/imports/image-12.png';
import imgContextImg3 from '@/imports/image-9.png';
import imgNeedImg3 from '@/imports/image-10.png';
import imgSolutionImg3 from '@/imports/image-11.png';
import imgLogo2 from '@/imports/image-7.png';
import imgContextImg2 from '@/imports/image-4.png';
import imgNeedImg2 from '@/imports/image-5.png';
import imgSolutionImg2 from '@/imports/image-6.png';

export type CaseStudySection = {
  icon: string;
  label: string;
  text: string[];
  image: string;
  imageLeft: boolean;
};

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  clientLogo: string;
  heroImage: string;
  intro: string[];
  sections: CaseStudySection[];
  outro: string[];
  outroLink?: { text: string; href: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'project-1',
    title: 'Mobile tourism application',
    subtitle: 'Royal fortresses of Languedoc',
    tags: ['Tech consulting', 'React Native', 'Unity'],
    clientLogo: imgLogo1,
    heroImage: imgHero1,
    intro: [
      'Cathar Country, the guide supports you all throughout your stay in Aude and immerses you in the heart of Cathar Country.',
      'Thanks to the interactive map, you can prepare your stay: choose the accommodation, outdoor activities, restaurants and wine estates to discover!',
    ],
    sections: [
      {
        icon: imgContextIcon1,
        label: 'Context',
        text: [
          "BlackPaws developed an immersive Travel Guide app for Cathar Country, commissioned by the region and Small Bang to enhance tourism through an innovative digital experience. Awarded Best Mobile & Tablet Application at the 2020 Communication Awards, the app offers visitors engaging, educational content to explore the region's history, monuments, and landmarks. Available on iOS and Android, it features over 20 iconic sites—including Carcassonne and Peyrepertuse Castle—while also helping travelers plan their stay with maps of cultural sites, local cuisine, accommodations, and regional events.",
        ],
        image: imgContextImg1,
        imageLeft: true,
      },
      {
        icon: imgNeedIcon1,
        label: 'Need',
        text: [
          'The app offers tourists an immersive way to explore historic sites through augmented reality walks, interactive maps, and rich educational content. Developed by a multidisciplinary team of experts, it features fact sheets, audio guides, and interactive visuals that bring history to life. Fully accessible offline, the experience focuses on interactivity—placing visitors at the heart of the sites and allowing them to discover heritage as if they were living in the past.',
        ],
        image: imgNeedImg1,
        imageLeft: false,
      },
      {
        icon: imgSolutionIcon1,
        label: 'Solution',
        text: [
          'The application was developed by BlackPaws teams in React-Native for seamless hybrid deployment on iOS and Android stores, without additional development.',
          'It is also a hybrid application at the cutting edge of mobile technology, as it incorporates a genuine Serious Game, the magic monocle, developed in collaboration with the Kilosorus studio.',
        ],
        image: imgSolutionImg1,
        imageLeft: true,
      },
    ],
    outro: [
      "Since its launch in 2019, the app has been downloaded more than 20,000 times. It has a rating of 4.7/5 on the Apple Store and has received very positive feedback from users. An innovation that will appeal to history buffs and the whole family!",
    ],
    outroLink: {
      text: 'https://www.payscathare.org/les-applis',
      href: 'https://www.payscathare.org/les-applis',
    },
  },
  {
    id: 'project-4',
    title: 'Administration interface between rental companies and city halls',
    subtitle: "Airbnb visitor's tax",
    tags: ['Vue.js', 'Rust'],
    clientLogo: imgLogo4,
    heroImage: imgHero4,
    intro: [
      "The Airbnb Visitor's Tax Reporting Platform is a secure web application developed to help Airbnb comply with European regulations requiring the declaration of tourist tax payments to local authorities.",
      'The platform provides municipalities with a centralized portal to securely access tax reports and supporting documents while enabling Airbnb to efficiently manage regulatory compliance.',
    ],
    sections: [
      {
        icon: imgContextIcon1,
        label: 'Context',
        text: [
          'In anticipation of new European legislation, Airbnb France needed a solution to automate the reporting of tourist tax collected on behalf of French municipalities. Thousands of local authorities required secure access to declaration files generated on a regular basis. Processing and distributing these large datasets represented a significant technical challenge due to the volume of municipalities and reporting files involved. The platform also needed to support evolving regulatory requirements and adapt to different reporting processes across countries. Over time, the project expanded beyond France to support additional international markets.',
        ],
        image: imgContextImg4,
        imageLeft: true,
      },
      {
        icon: imgNeedIcon1,
        label: 'Need',
        text: [
          'Airbnb required a secure platform that would allow municipalities to access their tourist tax declarations through dedicated private accounts. The solution had to automate the upload, organization and distribution of declaration files while ensuring reliability and scalability. Administrators also needed tools to manage user accounts and permissions across thousands of municipalities. Performance was a critical requirement, as parsing the declaration files initially took several hours due to the volume of data being processed. The platform also had to remain flexible enough to accommodate future regulatory changes and country-specific requirements.',
        ],
        image: imgNeedImg4,
        imageLeft: false,
      },
      {
        icon: imgSolutionIcon1,
        label: 'Solution',
        text: [
          'The project delivered a secure web platform built with Vue.js for the user interface and Rust for the backend, providing excellent performance and scalability. Municipalities can securely access quarterly tourist tax reports and supporting documents through their dedicated portal, while administrators manage users and permissions from a dedicated back-office.',
          'By leveraging Rust for data processing, file parsing time was reduced from approximately six hours to around fifteen minutes, dramatically improving operational efficiency. The platform was later extended to support Airbnb Italy, where tax declarations are processed monthly instead of quarterly. More recently, it evolved again with the implementation of a global cookie information banner requested by Airbnb\'s San Francisco teams, ensuring compliance with corporate governance requirements across all managed applications.',
        ],
        image: imgSolutionImg4,
        imageLeft: true,
      },
    ],
    outro: [
      'The platform has become a critical compliance tool for Airbnb, serving thousands of French municipalities through a secure reporting portal. Its Rust-powered backend reduced processing time by more than 95%, enabling much faster publication of tax declarations.',
      'The solution has successfully expanded from France to Italy and continues to evolve with new regulatory and corporate compliance requirements, demonstrating its scalability and long-term maintainability.',
    ],
  },
  {
    id: 'project-5',
    title: 'Web application for international travelers',
    subtitle: 'Travel',
    tags: ['Mockup review', 'Svelte'],
    clientLogo: imgLogo5,
    heroImage: imgHero5,
    intro: [
      'The Bouygues Travel Plan Application is a lightweight web application designed to help international travelers quickly activate and manage a Bouygues Telecom SIM or eSIM plan when arriving in France.',
      'It provides easy access to mobile plan information while offering travel tips and local recommendations through a seamless user experience.',
    ],
    sections: [
      {
        icon: imgContextIcon1,
        label: 'Context',
        text: [
          'Bouygues Telecom wanted to improve the onboarding experience for travelers visiting France by providing a dedicated digital service for its travel mobile plans. International visitors often need immediate access to their mobile connectivity and clear information about their data usage and plan details. At the same time, Bouygues saw an opportunity to enrich the customer experience by providing useful travel recommendations alongside the mobile service. The solution needed to be accessible instantly without requiring users to download an application from an app store. It also had to integrate seamlessly with Bouygues\' existing systems while remaining simple and lightweight.',
        ],
        image: imgContextImg5,
        imageLeft: true,
      },
      {
        icon: imgNeedIcon1,
        label: 'Need',
        text: [
          'The project required a digital application that would allow travelers to easily access information about their SIM or eSIM travel plan directly from their smartphone. Users needed to consult their mobile plan details without navigating through multiple customer portals. The application also had to provide access to curated travel offers and recommendations to enhance their stay in France. To maximize accessibility, the solution needed to work directly in a web browser while still offering an installable experience similar to a native application. Finally, the application had to integrate with Bouygues Telecom\'s backend services to retrieve up-to-date subscription information.',
        ],
        image: imgNeedImg5,
        imageLeft: false,
      },
      {
        icon: imgSolutionIcon1,
        label: 'Solution',
        text: [
          'The project resulted in a Flutter-based Progressive Web App (PWA) that delivers a fast and intuitive experience across mobile devices. The application retrieves real-time mobile plan information from Bouygues Telecom\'s systems and presents it through a simple, user-friendly interface. A built-in WebView seamlessly integrates Bouygues\' travel recommendations and promotional content without requiring users to leave the application.',
          'Because the solution is a Progressive Web App, it can be accessed instantly through a browser link while also being installable on the user\'s home screen for quicker access. This lightweight architecture eliminates the friction of traditional app installation while providing an experience that closely resembles a native mobile application.',
        ],
        image: imgSolutionImg5,
        imageLeft: true,
      },
    ],
    outro: [
      'The Bouygues Travel Plan Application delivers a fast, installation-free experience for international travelers through a Flutter Progressive Web App.',
      'By combining real-time SIM/eSIM plan management, travel recommendations, and cross-platform accessibility in a single lightweight solution, it simplifies mobile connectivity for visitors while reducing deployment and maintenance costs compared to traditional native applications.',
    ],
  },
  {
    id: 'project-2',
    title: 'Mobile app for responsible and socially conscious mobile plans',
    subtitle: 'Source',
    tags: ['React Native'],
    clientLogo: imgLogo2,
    heroImage: imgHero2,
    intro: [
      'Source is a socially responsible mobile service developed by Bouygues Telecom that allows users to convert their unused data into donations for charities.',
      'Through a dedicated mobile app, subscribers can track their data usage, measure their environmental impact, and support causes that are important to them.',
    ],
    sections: [
      {
        icon: imgContextIcon1,
        label: 'Context',
        text: [
          'The telecommunications sector is facing growing challenges related to social and environmental responsibility. Consumers are now looking for offerings that go beyond basic connectivity services and make a positive contribution to society. In this context, Bouygues Telecom launched Source to provide a more socially responsible alternative to traditional mobile plans. The goal is to raise users\' awareness of their digital consumption while making it easier to support non-profits. The mobile app is the centerpiece of this experience, combining plan management, carbon footprint tracking, and social engagement.',
        ],
        image: imgContextImg2,
        imageLeft: true,
      },
      {
        icon: imgNeedIcon1,
        label: 'Need',
        text: [
          'The project addresses several needs at once. Users want to better understand and manage their mobile data usage so they can adopt more responsible habits. Nonprofits need a new funding channel that is simple and accessible to the general public. The experience must be intuitive so that anyone can contribute without complicated procedures or additional costs. Finally, the solution demonstrates that a mobile plan can serve as a tangible vehicle for civic and environmental engagement.',
        ],
        image: imgNeedImg2,
        imageLeft: false,
      },
      {
        icon: imgSolutionIcon1,
        label: 'Solution',
        text: [
          'The solution has created a unique ecosystem where unused gigabytes are converted into "drops" that are redistributed to charities chosen by users. The app offers detailed tracking of mobile data usage, tips for reducing one\'s digital footprint, and simplified access to more than 1,000 partner charities. Subscribers can manage their entire plan directly from their smartphone, purchase data add-ons, or temporarily pause their subscription.',
          'BlackPaws has maintained and updated the entire app.',
        ],
        image: imgSolutionImg2,
        imageLeft: true,
      },
    ],
    outro: [
      'Source has established itself as France\'s leading mobile plan that combines social responsibility with digital mindfulness. The app has a 4.4/5 rating on the App Store and allows users to support more than 1,000 nonprofit organizations through a simple mechanism that converts unused data into charitable donations.',
      'The app is available for free on:',
    ],
  },
  {
    id: 'project-6',
    title: 'Bouygues Telecom In-Store Video Application',
    subtitle: 'Bouygues Telecom',
    tags: ['Tech consulting', 'Kotlin'],
    clientLogo: imgLogo6,
    heroImage: imgHero6,
    intro: [
      'The Bouygues Telecom In-Store Video Application is a native Android TV application designed to simplify product demonstrations in retail stores.',
      'It enables sales advisors to browse and play promotional videos directly from the Bouygues TV box while managing content through a lightweight, centralized dashboard.',
    ],
    sections: [
      {
        icon: imgContextIcon1,
        label: 'Context',
        text: [
          'Bouygues Telecom retail teams regularly demonstrate internet boxes and digital services to customers in stores. Before this project, advisors had to switch between multiple devices and TV input sources to present promotional videos alongside live product demonstrations. This disrupted the customer experience and made presentations less fluid and more time-consuming. The business wanted a solution fully integrated into the Bouygues TV box without relying on third-party platforms such as YouTube. The project also aimed to minimize deployment effort by reusing proven technical components whenever possible.',
        ],
        image: imgContextImg6,
        imageLeft: true,
      },
      {
        icon: imgNeedIcon1,
        label: 'Need',
        text: [
          'Store teams needed a simple and reliable way to showcase product videos directly on the TV box they were already demonstrating. Marketing teams also required an easy-to-use dashboard to upload, organize and update video content without involving developers. The application had to be lightweight, fast and native to the Android TV environment to ensure a seamless user experience. Avoiding third-party services was essential to maintain full control over content and simplify deployment across stores. The solution therefore needed to combine ease of content management with a robust and scalable video delivery system.',
        ],
        image: imgNeedImg6,
        imageLeft: false,
      },
      {
        icon: imgSolutionIcon1,
        label: 'Solution',
        text: [
          'The project delivered a complete video management ecosystem built on existing technologies developed for the B-live Shopping platform. A content dashboard based on Airtable allows teams to manage video metadata, thumbnails and media files, while a Node.js server synchronizes the information and uploads videos to Bouygues Telecom\'s Amazon S3 storage.',
          'The native Android TV application, developed in Kotlin, automatically retrieves the available content and displays an intuitive gallery of video thumbnails. Sales advisors can instantly launch any video with a single click, creating a smoother and more engaging in-store demonstration experience. By reusing the existing backend architecture, the solution significantly reduced development time while providing a simple, maintainable and scalable platform.',
        ],
        image: imgSolutionImg6,
        imageLeft: true,
      },
    ],
    outro: [
      'The project successfully transformed an existing video management platform into a dedicated in-store demonstration solution by reusing the B-live Shopping backend.',
      'It combines an Airtable-based content dashboard, a Node.js API, Amazon S3 video hosting, and a native Kotlin Android TV application into a lightweight architecture that simplifies content management while delivering a seamless customer experience across Bouygues Telecom retail stores.',
    ],
  },
  {
    id: 'project-3',
    title: 'Business tool for a splint reconditioning solution',
    subtitle: 'Administration interface',
    tags: ['User interface (ui)', 'React'],
    clientLogo: imgLogo3,
    heroImage: imgHero3,
    intro: [
      'Gekomed is a French sustainable healthcare startup specializing in the collection, reconditioning, and eco-design of orthopedic braces.',
      'Its mission is to reduce the environmental impact of medical devices while improving access to care through a circular economy approach.',
    ],
    sections: [
      {
        icon: imgContextIcon1,
        label: 'Context',
        text: [
          'Every year, millions of orthopedic splints are discarded or stored after use, even though a large portion of them could be reused. This situation generates significant waste and contributes to the healthcare sector\'s carbon footprint, which accounts for approximately 8% of CO₂ emissions in France. In response to this situation, Gekomed was founded to establish a reuse system for orthopedic devices. The company has developed a collection network with healthcare facilities, pharmacies, and specialized clinics to recover used braces. It then sorts, repackages, and redistributes them in a secure and traceable manner.',
        ],
        image: imgContextImg3,
        imageLeft: true,
      },
      {
        icon: imgNeedIcon1,
        label: 'Need',
        text: [
          'Healthcare providers were looking for a simple solution to manage the end-of-life process for orthopedic braces while meeting their environmental goals. Patients generally had no alternative but to store or dispose of their equipment after treatment. Facilities wanted to reduce their medical waste without complicating their internal processes. For their part, public agencies are seeking to control spending on reimbursed medical devices. Gekomed therefore needed to design a solution that combined environmental impact, affordability, regulatory compliance, and ease of use.',
        ],
        image: imgNeedImg3,
        imageLeft: false,
      },
      {
        icon: imgSolutionIcon1,
        label: 'Solution',
        text: [
          'Gekomed has established a comprehensive nationwide system for the collection and reconditioning of orthopedic splints. The startup now supports numerous healthcare facilities through a ready-to-use solution that integrates collection, logistics, traceability, and repurposing.',
          'BlackPaws supported Gekomed in the creation and implementation of its admin dashboard by designing the interface\'s theme and handling its full development. We started with their prototype built using Vercel IA and transformed it into a scalable and maintainable product through a complete overhaul of the architecture and code.',
        ],
        image: imgSolutionImg3,
        imageLeft: true,
      },
    ],
    outro: [
      'A few figures illustrate the impact Gekomed has already made: 15,000 splints collected, more than 200 partner facilities, 65% of splints reconditioned, and approximately 9.1 tons of CO₂ saved.',
      'The company collaborates with major groups such as Almaviva Santé, Elsan, and Ramsay Santé, has joined the Paris Santé Campus incubator, and is contributing to the development of new standards for the reconditioning of medical devices. These results position Gekomed as one of the most innovative players in the circular economy applied to healthcare in France.',
    ],
  },
];

export function getCaseStudy(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.id === id);
}

export function getAdjacentProjects(id: string): { prev?: CaseStudy; next?: CaseStudy } {
  const idx = CASE_STUDIES.findIndex((cs) => cs.id === id);
  return {
    prev: idx > 0 ? CASE_STUDIES[idx - 1] : undefined,
    next: idx < CASE_STUDIES.length - 1 ? CASE_STUDIES[idx + 1] : undefined,
  };
}
