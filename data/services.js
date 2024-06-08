import { MdOutlineWeb, MdEvent, MdOutlineShoppingCart, MdEmail } from "react-icons/md";
import { IoSearchCircle, IoConstructOutline, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoWordpress } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaFacebookF, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiNextdotjs, SiPhp } from "react-icons/si";

const services = [
  {
    id: 1,
    slug: 'web-development',
    icon: MdOutlineWeb,
    title: 'Web Development',
    description: 'We provide top-notch web development services using the latest technologies.',
    hero: '/services/design-and-development.webp',
    hero_alt: 'Web Development',
    image_1: '/header.webp',
    image_1_alt: 'Nuthin yet',
    image_2: '/header.webp',
    image_2_alt: 'Nuthin yet',
    content: 'Our web development services are designed to bring your vision to life with precision and expertise. Whether you need a custom-built website or want to transform your existing Figma or Photoshop designs into a fully functional site, we\'ve got you covered. Our development process ensures your website is not only visually stunning but also optimized for search engines and fully responsive across all devices.',
    content2: 'We understand that your website is a critical aspect of your business, serving as the online face of your brand. That\'s why we focus on creating websites that are tailored to your specific needs, providing a seamless user experience and achieving your business goals. From the initial concept to the final launch, we work closely with you to ensure your website reflects your brand identity and meets your expectations.',
    features: [
      'Custom website design',
      'Development from Figma/Photoshop files',
      'SEO integration',
      'Responsive design',
      'E-commerce platforms',
      'CMS integration'
    ]
  },
  {
    id: 2,
    slug: 'search-engine-optimization',
    icon: IoSearchCircle,
    title: 'Search Engine Optimization',
    description: 'Our Search Engine Optimization services ensure a seamless experience across platforms.',
    hero: '/services/search-engine-optimization.webp',
    hero_alt: 'Search Engine Optimization',
    image_1: '/header.webp',
    image_1_alt: 'Nuthin yet',
    image_2: '/header.webp',
    image_2_alt: 'Nuthin yet',
    content: 'We develop mobile apps for both Android and iOS platforms...',
    content2: '',
    features: [
      'Keyword research',
      'On-page optimization',
      'Link building',
      'Performance tracking'
    ]
  },
  {
    id: 3,
    slug: 'website-maintenance',
    icon: IoConstructOutline,
    title: 'Website Maintenance',
    description: 'Keep your site running smoothly. We handle updates, fixes, and ensure everything works as it should.',
    content: 'Our Website Maintenance services include creating user-friendly interfaces...',
    content2: '',
    hero: '/services/website-maintenance.webp',
    hero_alt: 'Website Maintenance',
    image_1: '/header.webp',
    image_1_alt: 'Nuthin yet',
    image_2: '/header.webp',
    image_2_alt: 'Nuthin yet',
    features: [
      'Regular updates',
      'Security monitoring',
      'Backup solutions',
      'Technical support'
    ]
  },
  {
    id: 4,
    slug: 'social-media-management',
    icon: TiSocialAtCircular,
    title: 'Social Media Management',
    description: 'Engage your audience online. We manage posts, replies, and make sure your brand shines on social',
    content: 'Our UI/UX design services include creating user-friendly interfaces...',
    content2: '',
    hero: '/services/social-media-management.webp',
    hero_alt: 'Social Media Management',
    image_1: '/header.webp',
    image_1_alt: 'Nuthin yet',
    image_2: '/header.webp',
    image_2_alt: 'Nuthin yet',
    features: [
      'Content creation',
      'Account management',
      'Engagement strategies',
      'Analytics reporting'
    ]
  },
  {
    id: 5,
    slug: 'e-commerce-solutions',
    icon: MdOutlineShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Sell with confidence online. Our secure, seo optimized and user-friendly shops make buying and selling a breeze.',
    content: 'Our UI/UX design services include creating user-friendly interfaces...',
    content2: '',
    hero: '/services/ecommerce.webp',
    hero_alt: 'E-commerce Solutions',
    image_1: '/header.webp',
    image_1_alt: 'Nuthin yet',
    image_2: '/header.webp',
    image_2_alt: 'Nuthin yet',
    features: [
      'Online store setup',
      'Payment gateway integration',
      'Product management',
      'Sales analytics'
    ]
  },
  {
    id: 6,
    slug: 'special-event-websites',
    icon: MdEvent,
    title: 'Special Event Websites',
    description: 'Celebrate big moments digitally. We create standout sites for weddings, reunions, and more.',
    content: 'Our UI/UX design services include creating user-friendly interfaces...',
    content2: '',
    hero: '/services/special-events.webp',
    hero_alt: 'Special Event Websites',
    image_1: '/header.webp',
    image_1_alt: 'Nuthin yet',
    image_2: '/header.webp',
    image_2_alt: 'Nuthin yet',
    features: [
      'Custom event design',
      'RSVP management',
      'Event scheduling',
      'Multimedia integration'
    ]
  },
  // Add more services as needed
];

export default services;
