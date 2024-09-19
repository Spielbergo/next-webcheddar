import { MdOutlineWeb, MdEvent, MdOutlineShoppingCart, MdEmail } from "react-icons/md";
import { IoSearchCircle, IoConstructOutline, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoWordpress } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaFacebookF, FaGithub, FaLinkedin, FaMapMarkerAlt, FaShopify } from "react-icons/fa";
import { SiNextdotjs, SiPhp, SiWoocommerce  } from "react-icons/si";

export const navigation = [
    {
        id: "home",
        anchor: 'Home',
        link: '/',
        subLinks: [], 
        subLink_class: 'subLinks__parent',
    },
    {
        id: "about",
        anchor: 'About',
        link: '/about',
        subLinks: [], 
        subLink_class: 'subLinks__parent',
    },
    {
        id: "services",
        anchor: 'Services',
        link: '/services',
        subLinks: [], 
        subLink_class: 'subLinks__parent',
    },
    // {
    //     id: "tools",
    //     anchor: 'Tools',
    //     link: '/devtools',
    // },
    {
        id: "blog",
        anchor: 'Blog',
        link: '/blog',
        subLinks: [], 
        subLink_class: 'subLinks__parent',
    },
    {
        id: "contact",
        anchor: 'Contact',
        link: '/contact',
        subLinks: [], 
        subLink_class: 'subLinks__parent',
    },
];

export const socialIcons = [
    {
        id: "facebook",
        icon: FaFacebookF,
        link: 'https://www.facebook.co/webcheddar',
        title: 'Facebook',
    },
    {
        id: "github",
        icon: FaGithub,
        link: 'https://github.com/Spielbergo',
        title: 'GitHub',
    },
    {
        id: "linkedin",
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/company/web-cheddar/',
        title: 'LinkedIn',
    },
];

export const clientLogos = [
    {
        id: "yopie",
        title: "Yopie",
        image: "/logos/clients/yopie.png",
        alt: "Yopie Logo",
    },    
    {    
        id: "crocrock",
        title: "Crocodile Rock",
        image: "/logos/clients/croc-rock.png",
        alt: "Crocodile Rock Logo",
    },
    {
        id: "uoft",
        title: "University of Toronto",
        image: "/logos/clients/uoft-logo-2.webp",
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
        image: "/logos/clients/moonrays-logo-white.webp",
        alt: "Moonrays Logo",
    },
    {    
        id: "orgthis",
        title: "Organize This",
        image: "/logos/clients/organize-this.png",
        alt: "Organize This Logo",
    },   
    {
        id: "bagelplus",
        title: "Bagel Plus",
        image: "/logos/clients/bagel-plus.png",
        alt: "Bagel Logo",
    },
];

export const techStack = [
    // {
    //     id: 'tech1',
    //     icon: IoLogoHtml5,
    //     title: 'HTML',
    //     color: '#f06529',
    // },
    // {
    //     id: 'tech2',
    //     icon: IoLogoCss3,
    //     title: 'CSS',
    //     color: '#264de4',
    // },
    // {
    //     id: 'tech3',
    //     icon: IoLogoJavascript,
    //     title: 'JavaScript',
    //     color: '#f0db4f',
    // },
    {
        id: 'tech4',
        icon: IoLogoReact,
        title: 'React',
        color: '#7cc5d9',
    },
    {
        id: 'tech5',
        icon: SiNextdotjs,
        title: 'NextJS',
        color: '#fff',
    },
    // {
    //     id: 'tech6',
    //     icon: IoLogoNodejs,
    //     title: 'NodeJS',
    //     color: '#68a063',
    // },
    {
        id: 'tech7',
        icon: IoLogoWordpress,
        title: 'WordPress',
        color: '#21759b',
    },
    {
        id: 'tech8',
        icon: SiPhp,
        title: 'PHP',
        color: '#8993be',
    },
    {
        id: 'tech9',
        icon: FaShopify,
        title: 'Shopify',
        color: 'green',
    },
    {
        id: 'tech10',
        icon: SiWoocommerce,
        title: 'WooCommerce',
        color: 'purple',
    },
]

export const testimonials = [
    {
        id: 'testimonial-1',
        text: "Scott and his team absolutely floored us with the mock-ups and examples that he provided. We were sold on day one. The delivery of the final product was done quickly and efficiently.",
        url: 'https://www.google.com/maps?cid=1528680845624186791',
        name: "Craig Hayden",
        company: "University of Toronto",
        image: "/logos/clients/uoft-logo-2.webp",
    },
    {
        id: 'testimonial-2',
        text: "Scott is a professional who takes his work seriously. He is diligent and trustworthy. Our website was a large project with many intricacies, and Scott was very open and flexible in delivering a beautiful website that our organization is now very proud of! I would definitely recommend his services.",
        url: 'https://www.google.com/maps?cid=1528680845624186791',        
        name: "Alexandra Vincelli",
        company: "Parisella Vincelli Associates",
        image: "/logos/clients/pva.png",
    },
    {
        id: 'testimonial-3',
        text: "Web Cheddar offers a very personable experience. Scott the lead is very tech savy with SOE, content, visuals, and web site development. Overall the experience is worth reaching out to them as their ideas and knowledge are very insightful. I strongly recommend their on line services.",
        url: 'https://www.google.com/maps?cid=1528680845624186791',
        name: "Barry McLeod",
        company: "Crocodile Rock",
        image: "/logos/clients/croc-rock.png",
    },
]

export const featuredBlogs = [
    {
        id: 'featuredBlog-1',
        anchor: 'Introduction to HTML',
        url: '/blog/introduction-to-html/',
    },
    {
        id: 'featuredBlog-2',
        anchor: 'Introduction to CSS',
        url: '/blog/introduction-to-css/',
    }
]

export const projectsHome = [
    {
        id: 'project-1',
        class: 'slide-right',
        title: 'University of Toronto',
        text: 'Med Store',
        image: '/projects/uoft.jpg',
        alt: 'University of Toronto Med Store Website Screenshot',
        url: 'https://medprint.webcheddar.ca',
    },
    {
        id: 'project-2',
        class: 'slide-up delay-1',
        title: 'Parisella Vincelli Associates',
        text: 'Consulting Group',
        image: '/projects/pva.webp',
        alt: 'PVA Website Screenshot',
        url: 'https://www.pva.ca',
    },
    {
        id: 'project-3',
        class: 'slide-left delay-2',
        title: 'Rosemary Hutton',
        text: 'Author',
        image: '/projects/rohutton.jpg',
        alt: 'Rosemary Hutton Website Screenshot',
        url: 'https://www.rohutton.com',
    },
    {
        id: 'project-4',
        class: 'slide-right',
        title: 'Organize This',
        text: 'Oragnizers',
        image: '/projects/org-this.webp',
        alt: 'Organize This Website Screenshot',
        url: 'https://www.organizethisto.ca/',
    },
    {
        id: 'project-5',
        class: 'slide-up delay-1',
        title: 'Smash Pets',
        text: 'Pet Care',
        image: '/projects/smashpets.jpg',
        alt: 'Smash Pets  Website Screenshot',
        url: 'https://smashpets.webcheddar.ca',
    },
    {
        id: 'project-6',
        class: 'slide-left delay-2',
        title: 'Bagel Plus',
        text: 'Local Bakery',
        image: '/projects/bagelplus.webp',
        alt: 'Bagel Plus Website Screenshot',
        url: 'https://bagelplus.ca/',
    }
]

export const contactDetails = [
    {
        id: 'contact-name',
        detail: 'Web Cheddar'
    },
    {   
        id: 'contact-city',
        detail: 'Toronto, Ontario',
        icon: FaMapMarkerAlt
    },
    {
        id: 'contact-email',
        detail: 'info@webcheddar.ca',
        icon: MdEmail
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
        class: 'shadow'
    },
    {
        id: 'about-page-03',
        title: 'Why Choose Us',
        subtitle: 'Communication and Ongoing Support',
        text: 'We are distinguished by our rigorous commitment to clear communication and extensive post-launch support. We believe in establishing long-term relationships with our clients, offering continued assistance and guidance post the launch of their websites. Throughout the development process, we engage in transparent and thorough communication.',
        image: '/about/about-us-page-03.webp',
        alt: 'A smaller Mac laptop with neon purple and blue lights',
        class: 'shadow'
    },
    {
        id: 'about-page-04',
        title: 'Why Choose Us',
        subtitle: 'Competitive Pricing and Timely Completion',
        text: 'Recognizing the importance of budgetary efficiency and prompt delivery, Web Cheddar Web Solutions is committed to providing high-quality solutions at competitive prices. Our project management strategies are designed to ensure the timely completion of projects, respecting both budgetary needs and deadlines.',
        image: '/about/about-us-page-04.webp',
        alt: 'A smaller Mac laptop with neon purple and blue lights',
        class: 'shadow'
    },    
]

export const servicePageOne = [
    {
        id: 'service-page-01',
        title: 'Design & Development',
        subtitle: 'Figma/Photoshop to Web',
        text: 'Have a site designed already? We excel in transforming your Figma or Photoshop designs into fully functional, responsive websites. Our team ensures every detail of your original design is meticulously brought to life, preserving the integrity and intent of your creative vision. Whether it is a pixel-perfect replication or a flexible adaptation, we bridge the gap between design and development seamlessly.',
        image: '/services/design-and-development.webp',
        alt: 'Design to web services - Photoshop Figma to Web',
        class: 'flex flex_nowrap',
    },
    {
        id: 'service-page-02',
        title: 'Services',
        subtitle: 'Search Engine Optimization',
        text: 'Elevate your online visibility with Web Cheddar Web Solutio\' expert Search Engine Optimization (SEO) services. Our proactive approach ensures that your website ranks higher in search engine results, driving increased traffic and engagement. Through comprehensive keyword research, strategic content optimization, and continuous monitoring, we optimize your digital presence to attract your target audience effectively. Work with us to advance your business to the forefront of search engine rankings, securing sustainable growth and continual success.',
        image: '/services/search-engine-optimization.webp',
        alt: 'Search Engine Optimization',
        class: 'flex flex_nowrap flex_flip_row',
    },
    {
        id: 'service-page-03',
        title: 'Services',
        subtitle: 'E-Commerce Solutions',
        text: 'Unlock the full potential of your online store with Web Cheddar Web Solutions\' robust e-commerce solutions. Our approach ensures seamless integration, intuitive user experience, and secure payment processing, empowering you to maximize sales and streamline operations. From customizing your storefront to implementing advanced inventory management systems, we tailor our solutions to meet your unique business needs. Trust us to elevate your e-commerce platform, drive revenue growth, and deliver unparalleled customer satisfaction for lasting success in the digital marketplace.',
        image: '/services/ecommerce.webp',
        alt: 'E-commerce Solutions',
        class: 'flex flex_nowrap',
    },
]

export const servicePageTwo = [
    {
        id: 'service-page-04',
        title: 'Services',
        subtitle: 'Special Events Websites',
        text: 'Celebrate life\'s special moments with our bespoke Special Events website services. Whether it\'s a wedding, anniversary, birthday, reunion, or any other memorable occasion, we specialize in crafting customized template sites to perfectly complement your event. Our intuitive designs and user-friendly interfaces ensure that your guests can easily access event details, RSVP, and share memories. From elegant themes for weddings to vibrant designs for birthdays, we create tailored solutions that capture the essence of your special event and leave a lasting impression on your guests. Let us help you make every moment unforgettable with our Special Events website services.',
        image: '/services/special-events.webp',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap',
    },
    {
        id: 'service-page-05',
        title: 'Services',
        subtitle: 'Website Maintenance',
        text: 'Keep your website running smoothly with Web Cheddar Web Solutions\' website maintenance services. Our dedicated team ensures that your site stays secure, up-to-date, and optimized for peak performance. From regular backups and security patches to content updates and software upgrades, we handle all aspects of website maintenance so you can focus on growing your business. With our active approach, we identify and resolve issues before they impact your site\'s functionality, providing peace of mind and uninterrupted online presence for your visitors. Trust us to safeguard your website and keep it operating at its best.',
        image: '/services/website-maintenance.webp',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap flex_flip_row',
    },    
    {
        id: 'service-page-06',
        title: 'Services',
        subtitle: 'Social Media Management',
        text: 'Maximize your brand\'s online presence with our social media management services. Our dedicated team crafts engaging content, schedules posts, and interacts with your audience across various social media platforms to boost engagement and drive traffic to your website. From strategic planning and content creation to performance tracking and optimization, we handle all aspects of social media management to elevate your brand\'s visibility and foster meaningful connections with your audience. Let us take your social media presence to the next level and amplify your brand\'s impact in the digital landscape.',
        image: '/services/social-media-management.webp',
        alt: 'Lorem Ipsum',
        class: 'flex flex_nowrap',
    },
]