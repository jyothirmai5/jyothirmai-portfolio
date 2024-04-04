import project1 from '../assets/seven-bird-travel.png';
import project2 from '../assets/studio-seven-web.png';
import project3 from '../assets/ethicaletix.png';
import project4 from '../assets/complyhub.png';
import project5 from '../assets/drivecenter.png';
import project6 from '../assets/mind-master.png';
import project7 from '../assets/builds.jpg';
import project8 from '../assets/datum.png';
import project9 from '../assets/domo-connectors.jpeg';
import point2 from '../assets/about/learner.png';
import point3 from '../assets/about/help.png';
import point4 from '../assets/about/conversation.png';
import point5 from '../assets/about/project-management.png';
import point6 from '../assets/about/digital-services.png';
import point7 from '../assets/about/achievement.png';
import point8 from '../assets/about/reading-book.png';

export const aboutMe = [
    {
        imageUrl: point2,
        title: 'Adaptable and Quick Learner',
        description: 'Skilled at learning and implementing new technologies efficiently to ensure clean and effective code.'
    },
    {
        imageUrl: point3,
        title: 'Team Player',
        description: 'Proficient in collaborating with cross - functional teams, addressing technical challenges, and fostering teamwork to achieve project goals.'
    },
    {
        imageUrl: point4,
        title: 'Effective Communication',
        description: 'Capable of facilitating client communication to gather and understand project requirements, ensuring clarity and alignment throughout the development process.'
    },
    {
        imageUrl: point5,
        title: 'Project Management',
        description: 'Demonstrated ability to manage multiple projects simultaneously, showcasing strong multitasking skills and effective project management abilities.'
    },
    {
        imageUrl: point6,
        title: 'Technical Expertise',
        description: 'Proficient in a variety of programming languages including React, Next.js, Angular, HTML, CSS, JavaScript, and TypeScript, along with experience in AWS S3 Buckets and backend development using Node.js & Firebase.'
    },
    {
        imageUrl: point7,
        title: 'Quality Assurance',
        description: 'Experienced in conducting thorough code reviews to maintain coding standards and best practices'
    },
    {
        imageUrl: point8,
        title: 'Continuous Learning',
        description: 'Demonstrated rapid learning capabilities by acquiring proficiency in new technologies within a short timeframe, showcasing versatility and adaptability as a developer.'
    },
];

export const projects = [
    {
        id: 1,
        name: 'Seven Bird Travel',
        imageUrl: project1,
        location: 'Humber College',
        timeline: 'Feb 2024 - 2 Weeks',
        skills: ['Angular', 'TypeScript', 'Mapbox', 'Geolocation', 'POI', 'Bootstrap'],
        description: `Seven Bird Travel is a personal project I developed using Angular. This platform enables users to explore various travel destinations effortlessly. Leveraging the Mapbox API, users can search for destinations, accessing detailed location information seamlessly.

        In addition to destination exploration, Seven Bird Travel provides users with the ability to search for travel-related websites and access essential metadata such as phone numbers. I implemented this feature to enhance user convenience and streamline their travel planning process.
        
        A significant aspect of this project was the development of an interactive map user interface (UI). By integrating interactive elements into the map UI, users can engage with the platform dynamically, fostering an immersive travel experience.
        
        Through Seven Bird Travel, I honed my skills in Angular development, API integration, and user interface design. This project not only showcases my technical abilities but also highlights my passion for creating user-centric applications that simplify complex tasks like travel planning.`
    },
    {
        id: 2,
        name: 'Studio Seven',
        imageUrl: project2,
        location: 'Humber College',
        website: 'frabjous-beignet-7fd00c.netlify.app',
        timeline: 'Nov 2023 - 2 Weeks',
        skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Material-UI'],
        description: `Excited to share about Studio Seven, an innovative e-commerce venture revolutionizing the furniture shopping experience. As the Project Manager, I spearheaded the development of this dynamic platform, where users immerse themselves in a curated collection of exquisite furniture items.
        
        One of the standout features of Studio Seven is its personalized functionality. Users can effortlessly add their favorite items to a dedicated favorites list for future reference. Additionally, our intuitive interface enables smooth navigation and streamlined checkout processes, enhancing user satisfaction and retention.
        
        Leading a dedicated team of developers and designers, I ensured that Studio Seven met stringent quality standards and delivered a user-friendly interface. By leveraging cutting-edge technologies and best practices, we optimized performance and reliability, ensuring a seamless shopping experience for our customers.`
    },
    {
        id: 2,
        name: 'Javascript Developer',
        imageUrl: project9,
        location: 'Upwork Freelance Contract at Stratorsoft',
        client: 'United States',
        website: 'https://www.stratorsoft.com/about-us',
        timeline: 'August 2023 - April 2024',
        skills: ['Domo API', 'JavaScript', 'Connector Development', 'Data Integration', 'DOMO IDE', 'RESTful APIs'],
        description: `During my tenure at Stratorsoft, I was involved in a project focused on system integration using JavaScript. The project aimed to enhance data connectivity and streamline processes for clients by integrating APIs from PDK and Feenics into Domo connectors.
        Developed custom integration solutions using JavaScript to facilitate system connectivity.
        Integrated APIs from PDK and Feenics into Domo connectors to enable seamless data transmission.
        Utilized DOMO IDE to design and implement efficient integration workflows.
        Collaborated closely with team members to understand client requirements and ensure successful project execution.
        Through my contributions at Stratorsoft, 
        clients experienced improved system interoperability and enhanced data accessibility. The integration solutions implemented facilitated smoother data exchange between platforms, ultimately improving operational efficiency and enabling informed decision-making.
        `
    },
    {
        id: 3,
        name: 'EthicalEtix',
        imageUrl: project3,
        timeline: 'Feb 2023 - Jun 2023',
        location: 'Aubergine Solutions - Global UX Design and Development Company',
        client: 'United States',
        skills: ['React', 'Stripe Connect', 'TypeScript', 'Redux', 'scss', 'HTML5', 'Code Review', 'Software Documentation', 'Progress Notes', 'Retrospectives', 'SVG Rendering', 'Stadium View'],
        description: `I led a project where we built a website for buying and selling national sports tickets. We started from scratch, using React with Typescript and following a Scrum framework. We successfully added features like login, buying and selling, stadium map view with seat selection, and secure payments using Stripe Connect.

        This project taught me to work well under pressure and communicate effectively with clients. I also learned to write better code, review code more thoroughly, and collaborate better with my team.
        
        Rendering the stadium view using SVG paths, implementing seat selection and streamlining the checkout process were key highlights. These additions improved user experience and ensured a smooth journey from ticket selection to purchase. Overall, it proved my ability to deliver good results while keeping clients happy.`
    },
    {
        id: 4,
        name: 'ComplyHub',
        timeline: 'Sep 2022 - Jan 2023',
        imageUrl: project4,
        website: 'https://complyhubportal.retina-labs.com/auth/login',
        location: 'Aubergine Solutions - Global UX Design and Development Company',
        client: 'Montreal, Canada',
        skills: ['Angular', 'TypeScript', 'Syncfusion', 'Keycloak', 'angular calendar', 'RxJS'],
        description: `My involvement in the ComplyHub project centered on implementing Keycloak authentication and managing Keycloak files. Additionally, I developed the user interface (UI) for data analytics, incorporating line charts, pie charts, bar graphs, and various graph types using the Syncfusion package within Angular.

        Furthermore, I implemented scheduling functionalities such as scheduling, rescheduling, and canceling appointments using the Angular Calendar package. This allowed for efficient appointment management within the ComplyHub platform.
        
        This experience enhanced my proficiency in authentication systems, data visualization, and calendar functionalities within Angular. It reinforced the importance of user-friendly design and effective communication in delivering successful project outcomes.`
    },
    {
        id: 5,
        name: 'Safeway Driving',
        imageUrl: project5,
        timeline: 'Nov 2021 - Jun 2022',
        website: 'https://drivecenter.safewaydriving.com/',
        location: 'AppIt Ventures',
        client: 'United States',
        skills: ['Angular', 'TypeScript', 'Material-UI', 'RxJS', 'NgRx', 'angular calendar'],
        description: `I contributed to the Safeway Driving website redesign project where we rebuilt the website with improved user interfaces while maintaining the functionalities of the old website. We utilized Angular as the coding framework for development.

        My role involved active participation in team discussions to brainstorm ideas for better development. I focused on enhancing user experience by allowing users to sign up, schedule, reschedule, and cancel appointments. Additionally, I worked on implementing the calendar view feature to facilitate appointment management. Through this project, I gained valuable experience in Angular development and collaboration within a team environment.`
    },
    {
        id: 6,
        name: 'MindMaster',
        timeline: 'Jan 2021 - Feb 2021',
        imageUrl: project6,
        website: 'https://www.mindmaster.app/how-to-use-mind-master',
        location: 'AppIt Ventures',
        client: 'United States',
        skills: ['React', 'TypeScript', 'Material-UI', 'CSS', 'HTML5'],
        description: `I contributed to the Mindmaster project by developing the admin portal using Angular and TypeScript. My responsibilities included creating a user-friendly interface for uploading audio affirmations, motivational text, and images. Despite the challenges, I successfully completed the project within a tight deadline of less than two months.

        This experience allowed me to sharpen my skills in Angular and TypeScript, as well as my ability to design intuitive user interfaces. Working on the Mindmaster project provided valuable insights into project management and the importance of meeting deadlines while delivering quality results.`
    },
    {
        id: 7,
        name: 'Secure Builds',
        timeline: 'Apr 2021 - Aug 2021',
        imageUrl: project7,
        location: 'AppIt Ventures',
        client: 'Internal Project',
        skills: ['React', 'TypeScript', 'CSS', 'HTML5'],
        description: `I contributed to the Secure Builds project, an internal initiative primarily focused on uploading project builds and ensuring their accessibility to clients. In this project, my role involved developing a system to securely upload project builds and manage permissions effectively. This included ensuring that clients could access the builds they needed.`
    },
    {
        id: 8,
        name: 'Datum',
        timeline: 'Jun 2020 - Nov 2020',
        imageUrl: project8,
        location: 'AppIt Ventures',
        client: 'United States',
        skills: ['React', 'Redux', 'Redux saga', 'Fabric js', 'canvas', 'JavaScript', 'stripe'],
        description: `In the Datum project, I played a significant role in developing floor plans using the Fabric.js package and incorporating various user interface features using React, Redux, and Redux Saga. Additionally, I contributed to backend code implementation.

        This project provided hands-on experience in crafting interactive floor plans and enhancing user experience through seamless UI functionalities. It honed my skills in frontend development and backend integration, enabling me to contribute effectively to the project's success.
        
        The Datum project showcased my ability to collaborate within a team, adapt to diverse technologies, and deliver solutions aligned with project objectives.`
    }
]