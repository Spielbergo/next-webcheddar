import { MdOutlineWeb, MdEvent, MdOutlineShoppingCart   } from "react-icons/md";
import { IoSearchCircle, IoConstructOutline } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

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
    },
    {
        id: "github",
        icon: FaGithub,
        link: 'https://www.github.com',
    },
    {
        id: "linkedin",
        icon: FaLinkedin,
        link: 'https://www.linkedin.com',
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
        title: "Website Design and Development",
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
        title: 'Smash Pets',
        text: 'Pet Care',
        image: '/projects/smashpets.jpg',
        alt: 'Smash Pets  Website Screenshot'
    },
    {
        id: 'project-3',
        title: 'Rosemary Hutton',
        text: 'Author',
        image: '/projects/rohutton.jpg',
        alt: 'Rosemary Hutton Website Screenshot',
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
        title: 'About',
        subtitle: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/about/about-us-page-01.webp',
        alt: 'A Mac laptop with bright neon purple and blue lights',
        class: 'shadow'
    },
    {
        id: 'about-page-02',
        title: 'About',
        subtitle: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/about/about-us-page-02.webp',
        alt: 'Computer screen and latop screen side by side with keyboard in front. Users hands are visible and code is on both screens',
        class: 'flex-flip shadow'
    },
    {
        id: 'about-page-03',
        title: 'About',
        subtitle: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: '/about/about-us-page-03.webp',
        alt: 'A smaller Mac laptop with neon purple and blue lights',
        class: 'shadow'
    },
    
]