import Header from '../components/header'
import NavigationBar from "@/components/navigation-bar";
import dynamic from 'next/dynamic'
import ProductListing from "@/components/product-listing";

const GameBarNoSSR = dynamic(() => import('@/components/game-bar'), { ssr: false })

const navigationItems = [
    {
        label: 'By Category',
        links: ['User Experience', 'User Interface', 'User Real Piece of Sh*t'],
    },
    {
        label: 'By Author',
        links: ['Mona Lott', 'Ava P. Encil', 'Hu-Ann Contrast'],
    },
];

// todo - fetch from json
const products = [
    {
        id: 1,
        name: 'Mastering UX Design',
        description: 'A comprehensive guide to creating user-centered designs that delight users and drive product success.',
        price: 12.99,
        imageUrl: '/images/ux-book-1.png',
        author: 'J. Avascript'
    },
    {
        id: 2,
        name: 'Colour Theory in Action',
        description: 'Learn React JS from scratch and build powerful web applications with this hands-on guide.',
        price: 19.99,
        imageUrl: '/images/colour-book-1.png',
        author: 'Hu-Ann Colour'
    },
    {
        id: 3,
        name: 'UI Design Essentials',
        description: 'Unlock the secrets of effective UI design, from wireframing to prototyping, with real-world examples.',
        price: 5.99,
        imageUrl: '/images/ui-book-1.png',
        author: 'Ava Pencil'
    },
    {
        id: 4,
        name: 'The Art of React Components',
        description: 'Explore the art and science of creating reusable React components for scalable web development.',
        price: 8.49,
        imageUrl: '/images/react-book-1.png',
        author: 'Rhi Axe'
    },
    {
        id: 5,
        name: 'Responsive Web Design Mastery',
        description: 'Achieve pixel-perfect responsive web design and make your websites look great on all devices.',
        price: 14.95,
        imageUrl: '/images/react-book-1.png',
        author: 'L. Ement'
    },
    {
        id: 6,
        name: 'Nature-Inspired UI',
        description: 'Learn how to create stunning UI designs by drawing inspiration from the beauty of nature.',
        price: 22.99,
        imageUrl: '/images/ui-book-2.png',
        author: 'Fig Ma'
    },
    {
        id: 7,
        name: 'Food for Thought: UI Design',
        description: 'A delicious journey into UI design principles, served with mouth-watering examples.',
        price: 7.29,
        imageUrl: '/images/ui-book-1.png',
        author: 'Craig Williams'
    },
    {
        id: 8,
        name: 'Abstract UI Artistry',
        description: 'Dive into the world of abstract UI design and create visually stunning and innovative interfaces.',
        price: 10.99,
        imageUrl: '/images/ui-book-2.png',
        author: 'A. B. Stracter'
    },
    {
        id: 9,
        name: 'Sports App Development',
        description: 'Score big in the world of sports app development with this playbook for React JS enthusiasts.',
        price: 16.79,
        imageUrl: '/images/react-book-1.png',
        author: 'I. O. Ess'
    },
    {
        id: 10,
        name: 'Transportation UX Revolution',
        description: 'Revolutionize transportation UX with cutting-edge techniques and innovative solutions.',
        price: 6.49,
        imageUrl: '/images/ux-book-1.png',
        author: 'Gethin Mivan'
    },
    {
        id: 11,
        name: 'Fashionable UI Trends',
        description: 'Stay ahead of the fashion curve in UI design with this trendsetting guide to the latest styles.',
        price: 9.99,
        imageUrl: '/images/ui-book-2.png',
        author: 'Dolce Delatte'
    },
    {
        id: 12,
        name: 'Architecting React Apps',
        description: 'Architect robust and scalable React applications with this masterclass in modern web development.',
        price: 11.29,
        imageUrl: '/images/react-book-1.png',
        author: 'Yousef Eckt '
    },
];

export default function Home() {
  return (
    <div id="main">
        <Header />
        <NavigationBar items={navigationItems}/>
        {/*<GameBarNoSSR />*/}
        <ProductListing products={products} />
    </div>
  )
}
