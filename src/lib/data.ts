import { TBasicBagInfo } from "./global-types";

export const NAVBAR_LINKS = [
    { text: 'Home', href: '/' },
    { text: 'New', href: 'new' },
    { text: 'Trending', href: 'trending' },
    { text: 'Special', href: 'special' }
];

export const DUMMY_BAGS_DATA: TBasicBagInfo[] = [
    {
        id: '1',
        name: 'Elegant Handbag',
        brand: 'louis-vu',
        category: 'handbag',
        price: 100,
        imageUrl: '/bags/1.png',
        images: ['/bags/1.png', '/bags/2.png', '/bags/3.png', '/bags/5.png', '/bags/6.png'],
        isNew: true,
        hasDiscount: {
            state: true,
            value: 20,
        },
    },
    {
        id: '2',
        name: 'Stylish Tote Bag',
        category: 'children',
        isNew: true,
        price: 80,
        imageUrl: '/bags/2.png',
        images: ['/bags/1.png', '/bags/2.png', '/bags/3.png', '/bags/5.png', '/bags/6.png'],
    },
    {
        id: '3',
        name: 'Classic Leat Satchel',
        brand: 'muskuns',
        category: 'classic',
        price: 120,
        imageUrl: '/bags/4.png',
    },
    {
        id: '4',
        name: 'Modern Backpack',
        category: 'backpack',
        price: 150,
        imageUrl: '/bags/5.png',
        images: ['/bags/1.png', '/bags/2.png', '/bags/3.png', '/bags/5.png', '/bags/6.png'],
        isNew: false,
        hasDiscount: {
            state: false,
            value: 0,
        },
    },
    {
        id: '5',
        name: 'Chic Crossbody Bag',
        category: 'children',
        brand: 'louis vu',
        isNew: true,
        price: 90,
        imageUrl: '/bags/6.png',
    },
    {
        id: '6',
        name: 'Sporty Duffel Bag',
        category: 'duffel',
        price: 80,
        imageUrl: '/bags/7.png',
    },
    {
        id: '7',
        name: 'Vintage Clutch',
        category: 'clutch',
        price: 70,
        imageUrl: '/bags/8.png',
        isNew: false,
        hasDiscount: {
            state: true,
            value: 20,
        },
    },
    {
        id: '8',
        name: 'Boho Sling Bag',
        category: 'classic',
        isNew: true,
        price: 110,
        imageUrl: '/bags/9.png',
    },
    {
        id: '10',
        name: 'Fashionable Briefcase',
        category: 'duffel',
        brand: 'mintral',
        price: 180,
        imageUrl: '/bags/10.png',
        isNew: true,
        hasDiscount: {
            state: true,
            value: 25,
        },
    },
    {
        id: '11',
        name: 'Casual Messenger Bag',
        category: 'classic',
        isNew: false,
        price: 95,
        imageUrl: '/bags/12.png',
    },
    {
        id: '12',
        name: 'Weekend Getaway Bag',
        category: 'children',
        price: 130,
        imageUrl: '/bags/1.png',
    },
];