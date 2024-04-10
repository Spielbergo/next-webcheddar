import { MdOutlineWeb, MdEvent, MdOutlineShoppingCart   } from "react-icons/md";
import { IoSearchCircle, IoConstructOutline, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoWordpress, IoLogoNodejs  } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNextdotjs, SiPhp } from "react-icons/si";

export const navigation = [
    {
        id: "home",
        anchor: 'Home',
        link: '/',
    },
    {
        id: "about",
        anchor: 'About',
        link: '/about',
    },
    {
        id: "services",
        anchor: 'Services',
        link: '/services',
    },
    {
        id: "tools",
        anchor: 'Tools',
        link: '/devtools',
    },
    {
        id: "blog",
        anchor: 'Blog',
        // link: 'https://www.webcheddar.ca/blog',
        link: '/blog',
    },
    {
        id: "contact",
        anchor: 'Contact',
        link: '/contact',
    },
];

export const socialIcons = [
    {
        id: "facebook",
        icon: FaFacebookF,
        link: 'https://www.facebook.com',
        title: 'Facebook',
    },
    {
        id: "github",
        icon: FaGithub,
        link: 'https://www.github.com',
        title: 'GitHub',
    },
    {
        id: "linkedin",
        icon: FaLinkedin,
        link: 'https://www.linkedin.com',
        title: 'LinkedIn',
    },
];

export const clientLogos = [
    {
        id: "uoft",
        title: "University of Toronto",
        image: "/logos/clients/uoft-logo.webp",
        alt: "University of Toronto Logo",
    },
    {
        id: "pva",
        title: "PVA",
        image: "/logos/clients/pva.png",
        alt: "PVA Logo",
    },
    {
        id: "moonrays",
        title: "Moonrays",
        image: "/logos/clients/moonrays-logo-black.png",
        alt: "Moonrays Logo",
    },
    {
        id: "yopie",
        title: "Yopie",
        image: "/logos/clients/yopie.png",
        alt: "Yopie Logo",
    },
    {
        id: "bagelplus",
        title: "Bagel Plus",
        image: "/logos/clients/bagel-plus.png",
        alt: "Bagel Logo",
    },
    {    
        id: "crocrock",
        title: "Crocodile Rock",
        image: "/logos/clients/croc-rock.png",
        alt: "Crocodile Rock Logo",
    },
    {    
        id: "orgthis",
        title: "Organize This",
        image: "/logos/clients/organize-this.png",
        alt: "Organize This Logo",
    },
];

export const servicesHome = [
    {
        id: "webdev",
        icon: MdOutlineWeb,
        title: "Website Development",
        text: "We craft unique websites that capture your brand's essence and engage your audience seamlessly.",
        path: "/services",
    },
    {
        id: "seoservices",
        icon: IoSearchCircle,
        title: "Search Engine Optimization",
        text: "Boost your site's visibility. We make sure people find you easily on popular search engines.",
        path: "/contact",
    },
    {
        id: "webmaint",
        icon: IoConstructOutline ,
        title: "Website Maintenance",
        text: "Keep your site running smoothly. We handle updates, fixes, and ensure everything works as it should.",
        path: "/about",
    },
    {
        id: "socialmedia",
        icon: TiSocialAtCircular,
        title: "Social Media Management",
        text: "Engage your audience online. We manage posts, replies, and make sure your brand shines on social.",
        path: "/services",
    },
    {
        id: "ecommerce",
        icon: MdOutlineShoppingCart,
        title: "E-commerce Solutions",
        text: "Sell with confidence online. Our secure, seo optimized and user-friendly shops make buying and selling a breeze.",
        path: "/about",
    },
    {
        id: "special events sites",
        icon: MdEvent,
        title: "Special Event Websites",
        text: "Celebrate big moments digitally. We create standout sites for weddings, reunions, and more.",
        path: "/contact",
    },
];

export const techStack = [
    {
        id: 'tech-1',
        icon: IoLogoHtml5,
        title: 'HTML',
        color: '#f06529',
    },
    {
        id: 'tech-2',
        icon: IoLogoCss3,
        title: 'CSS',
        color: '#264de4',
    },
    {
        id: 'tech-3',
        icon: IoLogoJavascript,
        title: 'JS',
        color: '#f0db4f',
    },
    {
        id: 'tech-4',
        icon: IoLogoReact,
        title: 'React',
        color: '#7cc5d9',
    },
    {
        id: 'tech-5',
        icon: SiNextdotjs,
        title: 'NextJS',
        color: '#fff',
    },
    {
        id: 'tech-6',
        icon: IoLogoNodejs,
        title: 'NodeJS',
        color: '#68a063',
    },
    {
        id: 'tech-7',
        icon: IoLogoWordpress,
        title: 'WordPress',
        color: '#21759b',
    },
    {
        id: 'tech-8',
        icon: SiPhp,
        title: 'PHP',
        color: '#8993be',
    },
]

export const testimonials = [
    // {
    //     id: 'testie-1',
    //     text: "This company is great!",
    //     name: "John Doe",
    //     company: "Some Company",
    //     image: "/logos/clients/bagel-plus.png"
    // },
    {
        id: 'testie-2',
        text: "Scott and his team absolutely floored us with the mock-ups and examples that he provided. We were sold on day one. The delivery of the final product was done quickly and efficiently.",
        url: 'https://www.google.com/maps?cid=1528680845624186791',
        name: "Craig Hayden",
        company: "University of Toronto",
        image: "/logos/clients/uoft-logo.webp",
    },
    {
        id: 'testie-2',
        text: "Scott is a professional who takes his work seriously. He is diligent and trustworthy. Our website was a large project with many intricacies, and Scott was very open and flexible in delivering a beautiful website that our organization is now very proud of! I would definitely recommend his services.",
        url: 'https://www.google.com/maps?cid=1528680845624186791',        
        name: "Alexandra Vincelli",
        company: "Parisella Vincelli Associates",
        image: "/logos/clients/pva.png",
    },
    // {
    //     id: 'testie-2',
    //     text: "I highly recommend them!",
    //     name: "Jane Doe",
    //     company: "Another Company",
    //     image: "/logos/clients/yopie.png",
    // },
    {
        id: 'testie-2',
        text: "Web Cheddar offers a very personable experience. Scott the lead is very tech savy with SOE, content, visuals, and web site development. Overall the experience is worth reaching out to them as their ideas and knowledge are very insightful. I strongly recommend their on line services.",
        url: 'https://www.google.com/maps?cid=1528680845624186791',
        name: "Barry McLeod",
        company: "Crocodile Rock",
        image: "/logos/clients/croc-rock.png",
    },
  ];

export const projectsHome = [
    {
        id: 'project-1',
        title: 'University of Toronto',
        text: 'Med Store',
        image: '/projects/uoft.jpg',
        alt: 'University of Toronto Med Store Website Screenshot',
    },
    {
        id: 'project-2',
        title: 'Parisella Vincelli Associates',
        text: 'Consulting Group',
        image: '/projects/pva.webp',
        alt: 'PVA Website Screenshot'
    },
    {
        id: 'project-3',
        title: 'Rosemary Hutton',
        text: 'Author',
        image: '/projects/rohutton.jpg',
        alt: 'Rosemary Hutton Website Screenshot',
    },
    {
        id: 'project-4',
        title: 'Organize This',
        text: 'Oragnizers',
        image: '/projects/org-this.webp',
        alt: 'Organize This Website Screenshot',
    },
    {
        id: 'project-5',
        title: 'Smash Pets',
        text: 'Pet Care',
        image: '/projects/smashpets.jpg',
        alt: 'Smash Pets  Website Screenshot'
    },
    {
        id: 'project-6',
        title: 'Bagel Plus',
        text: 'Local Bakery',
        image: '/projects/bagelplus.webp',
        alt: 'Bagel Plus Website Screenshot',
    }
]

export const contactDetails = [
    {
        id: 'contact-name',
        detail: 'Web Cheddar'
    },
    {   
        id: 'contact-city',
        detail: 'Toronto, Ontario'
    },
    {
        id: 'contact-email',
        detail: 'info@webcheddar.ca'
    },
    {   
        id: 'contact-phone',
        detail: '647-339-9475'
    },
]

export const aboutPage = [
    {
        id: 'about-page-01',
        title: 'Our Start',
        subtitle: 'Excellence in Web Development Since 2019',
        text: 'Founded in 2019 by Scott Sutherland, Web Cheddar Web Solutions has established itself as a preeminent web development firm. Our collective of skilled developers, designers, and digital strategists is dedicated to delivering top-tier web solutions. Our diverse client base includes large corporations, educational institutions such as the University of Toronto, upscale restaurants, and real estate agencies.',
        image: '/about/about-us-page-01.webp',
        alt: 'A Mac laptop with bright neon purple and blue lights',
        class: 'shadow'
    },
    {
        id: 'about-page-02',
        title: 'What we Do',
        subtitle: 'Our Specialties',
        text: 'Web Cheddar Web Solutions excels in transforming digital concepts into functional realities. We specialize in revitalizing existing websites to reflect the latest technological advancements and in converting client-specific designs from formats like PSD or Figma into responsive, dynamic websites. Our portfolio is a testament to our adaptability and expertise in handling a wide array of projects.',
        image: '/about/about-us-page-02.webp',
        alt: 'Computer screen and latop screen side by side with keyboard in front. Users hands are visible and code is on both screens',
        class: 'flex-flip shadow'
    },
    {
        id: 'about-page-03',
        title: 'Why Choose Us',
        subtitle: 'Commitment to Communication and Ongoing Support',
        text: 'We are distinguished by our rigorous commitment to clear communication and extensive post-launch support. We believe in establishing long-term relationships with our clients, offering continued assistance and guidance post the launch of their websites. Throughout the development process, we engage in transparent and thorough communication, ensuring client satisfaction at every phase.',
        image: '/about/about-us-page-03.webp',
        alt: 'A smaller Mac laptop with neon purple and blue lights',
        class: 'shadow'
    },
    {
        id: 'about-page-04',
        title: 'Why Choose Us',
        subtitle: 'Competitive Pricing and Timely Completion',
        text: 'Recognizing the importance of budgetary efficiency and prompt delivery, Web Cheddar Web Solutions is committed to providing high-quality solutions at competitive prices. Our project management strategies are designed to ensure the timely completion of projects, respecting both budgetary needs and deadlines.',
        image: '/about/about-us-page-03.webp',
        alt: 'A smaller Mac laptop with neon purple and blue lights',
        class: 'flex-flip shadow'
    },    
]

export const servicePageOne = [
    {
        id: 'service-page-01',
        title: 'Web Development',
        subtitle: 'Figma/Photoshop to Web',
        text: 'Have a site designed already? We excel in transforming your Figma or Photoshop designs into fully functional, responsive websites. Our team ensures every detail of your original design is meticulously brought to life, preserving the integrity and intent of your creative vision. Whether it is a pixel-perfect replication or a flexible adaptation, we bridge the gap between design and development seamlessly.',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap',
    },
    {
        id: 'service-page-02',
        title: 'Services',
        subtitle: 'Search Engine Optimization',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed enim. Eu consequat ac felis donec et odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Fringilla est ullamcorper eget nulla.',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap flex_flip_row',
    },
    {
        id: 'service-page-03',
        title: 'Services',
        subtitle: 'Website Maintenance',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed enim. Eu consequat ac felis donec et odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Fringilla est ullamcorper eget nulla.',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap',
    },
]

export const servicePageTwo = [
    {
        id: 'service-page-04',
        title: 'Services',
        subtitle: 'Social Media Management',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed enim. Eu consequat ac felis donec et odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Fringilla est ullamcorper eget nulla.',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap',
    },
    {
        id: 'service-page-05',
        title: 'Services',
        subtitle: 'E-Commerce Solutions',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed enim. Eu consequat ac felis donec et odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Fringilla est ullamcorper eget nulla.',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap flex_flip_row',
    },
    {
        id: 'service-page-06',
        title: 'Services',
        subtitle: 'Special Events Websites',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas sed enim. Eu consequat ac felis donec et odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Fringilla est ullamcorper eget nulla.',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap',
    },
]