import { Product, User, Order, Review } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    email: 'arjun@example.com',
    role: 'customer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-15T10:00:00Z',
    phone: '+91 98765 43210',
    address: {
      fullName: 'Arjun Sharma',
      street: '123 MG Road',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India',
    }
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya@example.com',
    role: 'seller',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    createdAt: '2024-01-10T08:00:00Z',
    phone: '+91 87654 32109',
    businessName: 'Patel Electronics',
  },
];

export const mockProducts: Product[] = [
  // Electronics - Smartphones
  {
    id: '1',
    name: 'OnePlus Nord CE 3 Lite 5G',
    description: 'Premium smartphone with 108MP camera, 67W SUPERVOOC charging, and 120Hz display. Perfect for photography enthusiasts and power users.',
    price: 19999,
    originalPrice: 24999,
    category: 'Electronics',
    brand: 'OnePlus',
    images: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.5,
    reviewCount: 2847,
    inStock: 45,
    sellerId: '2',
    tags: ['smartphone', '5g', 'camera', 'fast-charging'],
    createdAt: '2024-02-01T10:00:00Z',
    specifications: {
      'Display': '6.72" FHD+ 120Hz',
      'Processor': 'Snapdragon 695 5G',
      'RAM': '8GB',
      'Storage': '128GB',
      'Camera': '108MP Triple Camera',
      'Battery': '5000mAh'
    }
  },
  {
    id: '21',
    name: 'iPhone 15 Pro Max',
    description: 'The ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system. Professional photography and videography capabilities.',
    price: 134900,
    originalPrice: 139900,
    category: 'Electronics',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.8,
    reviewCount: 1567,
    inStock: 23,
    sellerId: '2',
    tags: ['iphone', 'premium', 'titanium', 'pro-camera'],
    createdAt: '2024-03-01T10:00:00Z',
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Processor': 'A17 Pro',
      'RAM': '8GB',
      'Storage': '256GB',
      'Camera': '48MP Pro Camera System',
      'Battery': 'All-day battery life'
    }
  },
  {
    id: '22',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Flagship Android smartphone with S Pen, 200MP camera, and AI-powered features. Built for productivity and creativity.',
    price: 124999,
    originalPrice: 129999,
    category: 'Electronics',
    brand: 'Samsung',
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.7,
    reviewCount: 2134,
    inStock: 34,
    sellerId: '2',
    tags: ['samsung', 's-pen', 'flagship', 'ai-features'],
    createdAt: '2024-03-05T10:00:00Z',
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': '200MP Quad Camera',
      'Battery': '5000mAh'
    }
  },
  {
    id: '23',
    name: 'Google Pixel 8 Pro',
    description: 'AI-powered smartphone with exceptional computational photography and pure Android experience. Magic Eraser and Best Take features.',
    price: 84999,
    originalPrice: 89999,
    category: 'Electronics',
    brand: 'Google',
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 1876,
    inStock: 28,
    sellerId: '2',
    tags: ['pixel', 'ai-camera', 'pure-android', 'computational-photography'],
    createdAt: '2024-03-08T10:00:00Z',
    specifications: {
      'Display': '6.7" LTPO OLED',
      'Processor': 'Google Tensor G3',
      'RAM': '12GB',
      'Storage': '128GB',
      'Camera': '50MP Pro Camera',
      'Battery': '5050mAh'
    }
  },

  // Electronics - Audio
  {
    id: '2',
    name: 'Sony WH-1000XM4 Wireless Headphones',
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology. Premium sound quality with 30-hour battery life.',
    price: 24990,
    originalPrice: 29990,
    category: 'Electronics',
    brand: 'Sony',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.7,
    reviewCount: 1256,
    inStock: 23,
    sellerId: '2',
    tags: ['wireless', 'noise-cancelling', 'premium', 'sony'],
    createdAt: '2024-02-05T14:00:00Z',
    specifications: {
      'Type': 'Over-ear Wireless',
      'Battery': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Features': 'Active Noise Cancellation',
      'Weight': '254g'
    }
  },
  {
    id: '24',
    name: 'Apple AirPods Pro (2nd Gen)',
    description: 'Advanced noise cancellation, spatial audio, and adaptive transparency. Personalized listening experience with H2 chip.',
    price: 24900,
    originalPrice: 26900,
    category: 'Electronics',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.8,
    reviewCount: 3456,
    inStock: 67,
    sellerId: '2',
    tags: ['airpods', 'wireless', 'noise-cancellation', 'spatial-audio'],
    createdAt: '2024-03-10T10:00:00Z',
    specifications: {
      'Type': 'True Wireless',
      'Battery': '6 hours + 24 hours case',
      'Connectivity': 'Bluetooth 5.3',
      'Features': 'Active Noise Cancellation',
      'Water Resistance': 'IPX4'
    }
  },
  {
    id: '25',
    name: 'JBL Charge 5 Portable Speaker',
    description: 'Powerful portable Bluetooth speaker with 20 hours of playtime. IP67 waterproof and dustproof design for outdoor adventures.',
    price: 12999,
    originalPrice: 15999,
    category: 'Electronics',
    brand: 'JBL',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.5,
    reviewCount: 2345,
    inStock: 89,
    sellerId: '2',
    tags: ['bluetooth-speaker', 'portable', 'waterproof', 'outdoor'],
    createdAt: '2024-03-12T10:00:00Z',
    specifications: {
      'Type': 'Portable Bluetooth Speaker',
      'Battery': '20 hours',
      'Water Resistance': 'IP67',
      'Power Output': '40W',
      'Connectivity': 'Bluetooth 5.1'
    }
  },

  // Electronics - Laptops
  {
    id: '3',
    name: 'Apple MacBook Air M2',
    description: 'Supercharged by M2 chip. Incredibly thin and light design with all-day battery life. Perfect for professionals and students.',
    price: 114900,
    originalPrice: 119900,
    category: 'Electronics',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.8,
    reviewCount: 892,
    inStock: 12,
    sellerId: '2',
    tags: ['laptop', 'apple', 'm2-chip', 'premium'],
    createdAt: '2024-02-10T09:00:00Z',
    specifications: {
      'Processor': 'Apple M2 8-core CPU',
      'Memory': '8GB Unified Memory',
      'Storage': '256GB SSD',
      'Display': '13.6" Liquid Retina',
      'Battery': 'Up to 18 hours',
      'Weight': '1.24 kg'
    }
  },
  {
    id: '26',
    name: 'Dell XPS 13 Plus',
    description: 'Premium ultrabook with 12th Gen Intel processors and stunning InfinityEdge display. Perfect for professionals and creators.',
    price: 89999,
    originalPrice: 94999,
    category: 'Electronics',
    brand: 'Dell',
    images: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 1234,
    inStock: 18,
    sellerId: '2',
    tags: ['laptop', 'ultrabook', 'intel', 'premium'],
    createdAt: '2024-03-15T10:00:00Z',
    specifications: {
      'Processor': 'Intel Core i7-1260P',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Display': '13.4" OLED Touch',
      'Battery': 'Up to 12 hours',
      'Weight': '1.26 kg'
    }
  },
  {
    id: '27',
    name: 'ASUS ROG Strix G15 Gaming Laptop',
    description: 'High-performance gaming laptop with RTX 4060 graphics and AMD Ryzen processor. Built for serious gamers and content creators.',
    price: 84999,
    originalPrice: 89999,
    category: 'Electronics',
    brand: 'ASUS',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.7,
    reviewCount: 1876,
    inStock: 25,
    sellerId: '2',
    tags: ['gaming-laptop', 'rtx', 'amd-ryzen', 'high-performance'],
    createdAt: '2024-03-18T10:00:00Z',
    specifications: {
      'Processor': 'AMD Ryzen 7 7735HS',
      'Graphics': 'NVIDIA RTX 4060',
      'Memory': '16GB DDR5',
      'Storage': '1TB SSD',
      'Display': '15.6" FHD 144Hz',
      'Weight': '2.3 kg'
    }
  },

  // Electronics - Smartwatches
  {
    id: '4',
    name: 'Samsung Galaxy Watch 6',
    description: 'Advanced health monitoring with sleep tracking, heart rate monitoring, and GPS. Stylish design for everyday wear.',
    price: 32999,
    originalPrice: 36999,
    category: 'Electronics',
    brand: 'Samsung',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.4,
    reviewCount: 567,
    inStock: 34,
    sellerId: '2',
    tags: ['smartwatch', 'fitness', 'samsung', 'health'],
    createdAt: '2024-02-15T16:00:00Z',
    specifications: {
      'Display': '1.3" Super AMOLED',
      'Battery': 'Up to 40 hours',
      'Water Resistance': '5ATM + IP68',
      'Connectivity': 'Bluetooth 5.3',
      'Sensors': 'Heart Rate, SpO2, GPS'
    }
  },
  {
    id: '28',
    name: 'Apple Watch Series 9',
    description: 'Most advanced Apple Watch with S9 chip, double tap gesture, and precision finding. Health and fitness tracking redefined.',
    price: 41900,
    originalPrice: 44900,
    category: 'Electronics',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.8,
    reviewCount: 2345,
    inStock: 45,
    sellerId: '2',
    tags: ['apple-watch', 'health-tracking', 'fitness', 'premium'],
    createdAt: '2024-03-20T10:00:00Z',
    specifications: {
      'Display': '1.9" Always-On Retina',
      'Processor': 'S9 SiP',
      'Battery': 'Up to 18 hours',
      'Water Resistance': '50 meters',
      'Health Features': 'ECG, Blood Oxygen, Temperature'
    }
  },

  // Fashion - Clothing
  {
    id: '5',
    name: 'Levi\'s 511 Slim Fit Jeans',
    description: 'Classic slim fit jeans made from premium denim. Comfortable and stylish for everyday wear.',
    price: 3499,
    originalPrice: 4999,
    category: 'Fashion',
    brand: 'Levi\'s',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.3,
    reviewCount: 1234,
    inStock: 89,
    sellerId: '2',
    tags: ['jeans', 'denim', 'slim-fit', 'casual'],
    createdAt: '2024-02-18T12:00:00Z',
    specifications: {
      'Fit': 'Slim',
      'Material': '99% Cotton, 1% Elastane',
      'Rise': 'Mid Rise',
      'Leg Opening': '14.5"',
      'Care': 'Machine Wash'
    }
  },
  {
    id: '29',
    name: 'H&M Oversized Cotton T-Shirt',
    description: 'Comfortable oversized t-shirt made from 100% organic cotton. Perfect for casual wear and layering.',
    price: 799,
    originalPrice: 1299,
    category: 'Fashion',
    brand: 'H&M',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.2,
    reviewCount: 3456,
    inStock: 156,
    sellerId: '2',
    tags: ['t-shirt', 'cotton', 'oversized', 'casual'],
    createdAt: '2024-03-22T10:00:00Z',
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Oversized',
      'Neckline': 'Round neck',
      'Sleeve': 'Short sleeve',
      'Care': 'Machine wash cold'
    }
  },
  {
    id: '30',
    name: 'Adidas Originals Hoodie',
    description: 'Classic pullover hoodie with iconic 3-Stripes design. Soft fleece interior for ultimate comfort.',
    price: 4999,
    originalPrice: 6999,
    category: 'Fashion',
    brand: 'Adidas',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.5,
    reviewCount: 2134,
    inStock: 78,
    sellerId: '2',
    tags: ['hoodie', 'adidas', 'streetwear', 'comfortable'],
    createdAt: '2024-03-25T10:00:00Z',
    specifications: {
      'Material': '70% Cotton, 30% Polyester',
      'Fit': 'Regular',
      'Features': 'Kangaroo pocket, Drawstring hood',
      'Style': 'Pullover',
      'Care': 'Machine wash warm'
    }
  },

  // Fashion - Footwear
  {
    id: '6',
    name: 'Nike Air Force 1 \'07',
    description: 'Iconic basketball shoe with classic design. Premium leather upper with Air-Sole unit for comfort.',
    price: 7995,
    originalPrice: 8995,
    category: 'Fashion',
    brand: 'Nike',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 2156,
    inStock: 67,
    sellerId: '2',
    tags: ['sneakers', 'basketball', 'classic', 'nike'],
    createdAt: '2024-02-20T14:00:00Z',
    specifications: {
      'Upper': 'Leather',
      'Sole': 'Rubber',
      'Closure': 'Lace-up',
      'Technology': 'Air-Sole unit',
      'Style': 'Low-top'
    }
  },
  {
    id: '31',
    name: 'Adidas Ultraboost 22',
    description: 'Premium running shoes with responsive Boost midsole and Primeknit upper. Engineered for performance and comfort.',
    price: 16999,
    originalPrice: 18999,
    category: 'Fashion',
    brand: 'Adidas',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.7,
    reviewCount: 1876,
    inStock: 45,
    sellerId: '2',
    tags: ['running-shoes', 'boost', 'performance', 'adidas'],
    createdAt: '2024-03-28T10:00:00Z',
    specifications: {
      'Upper': 'Primeknit',
      'Midsole': 'Boost',
      'Outsole': 'Continental Rubber',
      'Drop': '10mm',
      'Weight': '310g'
    }
  },
  {
    id: '32',
    name: 'Converse Chuck Taylor All Star',
    description: 'Timeless canvas sneakers with iconic design. Perfect for casual wear and self-expression.',
    price: 3999,
    originalPrice: 4999,
    category: 'Fashion',
    brand: 'Converse',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.4,
    reviewCount: 3456,
    inStock: 123,
    sellerId: '2',
    tags: ['canvas-shoes', 'classic', 'casual', 'converse'],
    createdAt: '2024-03-30T10:00:00Z',
    specifications: {
      'Upper': 'Canvas',
      'Sole': 'Rubber',
      'Closure': 'Lace-up',
      'Style': 'High-top',
      'Iconic': 'Since 1917'
    }
  },

  // Fashion - Formal Wear
  {
    id: '7',
    name: 'Zara Oversized Blazer',
    description: 'Elegant oversized blazer perfect for office wear or casual outings. Premium fabric with modern cut.',
    price: 4999,
    originalPrice: 6999,
    category: 'Fashion',
    brand: 'Zara',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.2,
    reviewCount: 456,
    inStock: 23,
    sellerId: '2',
    tags: ['blazer', 'formal', 'oversized', 'office-wear'],
    createdAt: '2024-02-22T11:00:00Z',
    specifications: {
      'Fit': 'Oversized',
      'Material': 'Polyester blend',
      'Closure': 'Button',
      'Pockets': '2 front pockets',
      'Care': 'Dry clean only'
    }
  },
  {
    id: '33',
    name: 'Arrow Formal Shirt',
    description: 'Classic formal shirt with wrinkle-free fabric. Perfect for office wear and formal occasions.',
    price: 1999,
    originalPrice: 2999,
    category: 'Fashion',
    brand: 'Arrow',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.3,
    reviewCount: 2345,
    inStock: 89,
    sellerId: '2',
    tags: ['formal-shirt', 'office-wear', 'wrinkle-free', 'classic'],
    createdAt: '2024-04-01T10:00:00Z',
    specifications: {
      'Material': 'Cotton blend',
      'Fit': 'Regular',
      'Collar': 'Spread collar',
      'Cuff': 'Barrel cuff',
      'Care': 'Machine wash'
    }
  },

  // Home & Kitchen
  {
    id: '8',
    name: 'Prestige Deluxe Alpha Pressure Cooker',
    description: 'Premium stainless steel pressure cooker with unique alpha base for faster cooking. Perfect for Indian cooking.',
    price: 2499,
    originalPrice: 3299,
    category: 'Home & Kitchen',
    brand: 'Prestige',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.5,
    reviewCount: 3456,
    inStock: 156,
    sellerId: '2',
    tags: ['pressure-cooker', 'kitchen', 'stainless-steel', 'cooking'],
    createdAt: '2024-02-25T10:00:00Z',
    specifications: {
      'Capacity': '5 Litres',
      'Material': 'Stainless Steel',
      'Base': 'Alpha Base',
      'Safety': 'Controlled Gasket Release',
      'Warranty': '5 years'
    }
  },
  {
    id: '9',
    name: 'Philips Air Fryer HD9252/90',
    description: 'Healthy cooking with Rapid Air technology. Cook with little to no oil while maintaining great taste.',
    price: 12995,
    originalPrice: 15995,
    category: 'Home & Kitchen',
    brand: 'Philips',
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.4,
    reviewCount: 1876,
    inStock: 45,
    sellerId: '2',
    tags: ['air-fryer', 'healthy-cooking', 'kitchen-appliance', 'philips'],
    createdAt: '2024-02-28T15:00:00Z',
    specifications: {
      'Capacity': '4.1 Litres',
      'Technology': 'Rapid Air',
      'Temperature': 'Up to 200°C',
      'Timer': '60 minutes',
      'Power': '1400W'
    }
  },
  {
    id: '34',
    name: 'Bajaj Majesty RX11 Mixer Grinder',
    description: 'Powerful 750W mixer grinder with 3 jars. Perfect for Indian cooking with superior grinding performance.',
    price: 3999,
    originalPrice: 5499,
    category: 'Home & Kitchen',
    brand: 'Bajaj',
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.3,
    reviewCount: 2876,
    inStock: 78,
    sellerId: '2',
    tags: ['mixer-grinder', 'kitchen-appliance', 'grinding', 'bajaj'],
    createdAt: '2024-04-02T10:00:00Z',
    specifications: {
      'Power': '750W',
      'Jars': '3 Stainless Steel Jars',
      'Speed': '3 Speed Control',
      'Safety': 'Overload Protection',
      'Warranty': '2 years'
    }
  },
  {
    id: '35',
    name: 'Hawkins Contura Hard Anodised Cookware Set',
    description: 'Premium hard anodised cookware set with non-stick coating. Durable and efficient for everyday cooking.',
    price: 6999,
    originalPrice: 8999,
    category: 'Home & Kitchen',
    brand: 'Hawkins',
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 1234,
    inStock: 34,
    sellerId: '2',
    tags: ['cookware-set', 'non-stick', 'hard-anodised', 'kitchen'],
    createdAt: '2024-04-05T10:00:00Z',
    specifications: {
      'Material': 'Hard Anodised Aluminium',
      'Coating': 'Non-stick',
      'Set Includes': '5 pieces',
      'Heat Distribution': 'Even heating',
      'Warranty': '3 years'
    }
  },

  // Furniture
  {
    id: '10',
    name: 'Urban Ladder Sheesham Wood Dining Table',
    description: 'Handcrafted solid sheesham wood dining table. Perfect for 6 people with elegant finish.',
    price: 24999,
    originalPrice: 32999,
    category: 'Furniture',
    brand: 'Urban Ladder',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 234,
    inStock: 8,
    sellerId: '2',
    tags: ['dining-table', 'sheesham-wood', 'furniture', 'handcrafted'],
    createdAt: '2024-03-01T12:00:00Z',
    specifications: {
      'Material': 'Solid Sheesham Wood',
      'Seating': '6 People',
      'Dimensions': '180 x 90 x 75 cm',
      'Finish': 'Natural Wood',
      'Assembly': 'Required'
    }
  },
  {
    id: '36',
    name: 'IKEA POÄNG Armchair',
    description: 'Comfortable armchair with bentwood frame and cushion. Modern Scandinavian design for living room.',
    price: 8999,
    originalPrice: 10999,
    category: 'Furniture',
    brand: 'IKEA',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.4,
    reviewCount: 1876,
    inStock: 23,
    sellerId: '2',
    tags: ['armchair', 'scandinavian', 'comfortable', 'living-room'],
    createdAt: '2024-04-08T10:00:00Z',
    specifications: {
      'Material': 'Bentwood, Cotton',
      'Dimensions': '68 x 83 x 100 cm',
      'Weight Capacity': '120 kg',
      'Style': 'Scandinavian',
      'Assembly': 'Required'
    }
  },
  {
    id: '37',
    name: 'Godrej Interio Steel Almirah',
    description: 'Durable steel wardrobe with multiple compartments. Perfect for bedroom storage with anti-rust coating.',
    price: 12999,
    originalPrice: 15999,
    category: 'Furniture',
    brand: 'Godrej',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.2,
    reviewCount: 987,
    inStock: 15,
    sellerId: '2',
    tags: ['wardrobe', 'steel', 'storage', 'bedroom'],
    createdAt: '2024-04-10T10:00:00Z',
    specifications: {
      'Material': 'Cold Rolled Steel',
      'Doors': '2 Door',
      'Shelves': '4 Adjustable Shelves',
      'Coating': 'Anti-rust',
      'Dimensions': '91 x 46 x 183 cm'
    }
  },

  // Books
  {
    id: '11',
    name: 'The Alchemist by Paulo Coelho',
    description: 'International bestseller about following your dreams. A philosophical book that has inspired millions.',
    price: 299,
    originalPrice: 399,
    category: 'Books',
    brand: 'HarperCollins',
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.7,
    reviewCount: 5678,
    inStock: 234,
    sellerId: '2',
    tags: ['fiction', 'philosophy', 'bestseller', 'inspirational'],
    createdAt: '2024-03-05T09:00:00Z',
    specifications: {
      'Author': 'Paulo Coelho',
      'Pages': '163',
      'Language': 'English',
      'Publisher': 'HarperCollins',
      'ISBN': '9780062315007'
    }
  },
  {
    id: '12',
    name: 'NCERT Mathematics Class 12',
    description: 'Official NCERT textbook for Class 12 Mathematics. Essential for CBSE board exam preparation.',
    price: 185,
    originalPrice: 220,
    category: 'Books',
    brand: 'NCERT',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.8,
    reviewCount: 1234,
    inStock: 567,
    sellerId: '2',
    tags: ['textbook', 'mathematics', 'ncert', 'education'],
    createdAt: '2024-03-08T11:00:00Z',
    specifications: {
      'Class': '12th',
      'Subject': 'Mathematics',
      'Board': 'CBSE',
      'Publisher': 'NCERT',
      'Edition': '2024-25'
    }
  },
  {
    id: '38',
    name: 'Atomic Habits by James Clear',
    description: 'Practical guide to building good habits and breaking bad ones. Transform your life with tiny changes.',
    price: 399,
    originalPrice: 499,
    category: 'Books',
    brand: 'Random House',
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.8,
    reviewCount: 4567,
    inStock: 156,
    sellerId: '2',
    tags: ['self-help', 'habits', 'productivity', 'bestseller'],
    createdAt: '2024-04-12T10:00:00Z',
    specifications: {
      'Author': 'James Clear',
      'Pages': '320',
      'Language': 'English',
      'Publisher': 'Random House',
      'ISBN': '9780735211292'
    }
  },
  {
    id: '39',
    name: 'Think and Grow Rich by Napoleon Hill',
    description: 'Classic personal development book about achieving success and wealth through positive thinking.',
    price: 249,
    originalPrice: 349,
    category: 'Books',
    brand: 'Penguin',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 3456,
    inStock: 234,
    sellerId: '2',
    tags: ['self-help', 'success', 'wealth', 'classic'],
    createdAt: '2024-04-15T10:00:00Z',
    specifications: {
      'Author': 'Napoleon Hill',
      'Pages': '238',
      'Language': 'English',
      'Publisher': 'Penguin',
      'First Published': '1937'
    }
  },

  // Sports & Fitness
  {
    id: '13',
    name: 'Decathlon Domyos Yoga Mat',
    description: 'Non-slip yoga mat with excellent grip and cushioning. Perfect for yoga, pilates, and fitness exercises.',
    price: 799,
    originalPrice: 999,
    category: 'Sports',
    brand: 'Decathlon',
    images: [
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.3,
    reviewCount: 892,
    inStock: 123,
    sellerId: '2',
    tags: ['yoga', 'fitness', 'exercise', 'mat'],
    createdAt: '2024-03-10T14:00:00Z',
    specifications: {
      'Thickness': '8mm',
      'Material': 'PVC',
      'Dimensions': '183 x 61 cm',
      'Weight': '1.2 kg',
      'Features': 'Non-slip surface'
    }
  },
  {
    id: '14',
    name: 'Cosco Hi-Grip Cricket Bat',
    description: 'Professional grade cricket bat made from premium English willow. Perfect for serious players.',
    price: 3499,
    originalPrice: 4299,
    category: 'Sports',
    brand: 'Cosco',
    images: [
      'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.5,
    reviewCount: 456,
    inStock: 34,
    sellerId: '2',
    tags: ['cricket', 'bat', 'sports', 'willow'],
    createdAt: '2024-03-12T16:00:00Z',
    specifications: {
      'Material': 'English Willow',
      'Weight': '1.1-1.2 kg',
      'Size': 'Short Handle',
      'Grade': 'Grade 1',
      'Handle': 'Cane Handle'
    }
  },
  {
    id: '40',
    name: 'Adidas Football Size 5',
    description: 'Official size football with durable construction. Perfect for matches and training sessions.',
    price: 1299,
    originalPrice: 1799,
    category: 'Sports',
    brand: 'Adidas',
    images: [
      'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.4,
    reviewCount: 1876,
    inStock: 89,
    sellerId: '2',
    tags: ['football', 'soccer', 'sports', 'adidas'],
    createdAt: '2024-04-18T10:00:00Z',
    specifications: {
      'Size': '5 (Official)',
      'Material': 'Synthetic Leather',
      'Bladder': 'Butyl',
      'Construction': 'Machine Stitched',
      'Certification': 'FIFA Quality'
    }
  },
  {
    id: '41',
    name: 'Reebok Adjustable Dumbbells Set',
    description: 'Space-saving adjustable dumbbells with quick weight change system. Perfect for home workouts.',
    price: 8999,
    originalPrice: 11999,
    category: 'Sports',
    brand: 'Reebok',
    images: [
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 1234,
    inStock: 23,
    sellerId: '2',
    tags: ['dumbbells', 'home-gym', 'fitness', 'adjustable'],
    createdAt: '2024-04-20T10:00:00Z',
    specifications: {
      'Weight Range': '2.5kg to 24kg each',
      'Adjustment': 'Quick-change system',
      'Material': 'Cast Iron with Rubber Coating',
      'Handle': 'Ergonomic Grip',
      'Space Saving': 'Compact Design'
    }
  },

  // Beauty & Personal Care
  {
    id: '15',
    name: 'Lakme Absolute Perfect Radiance Foundation',
    description: 'Long-lasting foundation with SPF 20. Provides flawless coverage with a natural radiant finish.',
    price: 1299,
    originalPrice: 1599,
    category: 'Beauty',
    brand: 'Lakme',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.2,
    reviewCount: 1567,
    inStock: 89,
    sellerId: '2',
    tags: ['foundation', 'makeup', 'beauty', 'spf'],
    createdAt: '2024-03-15T10:00:00Z',
    specifications: {
      'Coverage': 'Medium to Full',
      'Finish': 'Radiant',
      'SPF': '20',
      'Volume': '30ml',
      'Skin Type': 'All skin types'
    }
  },
  {
    id: '16',
    name: 'Himalaya Herbals Face Wash',
    description: 'Natural face wash with neem and turmeric. Gentle cleansing for all skin types.',
    price: 149,
    originalPrice: 199,
    category: 'Beauty',
    brand: 'Himalaya',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.4,
    reviewCount: 2345,
    inStock: 234,
    sellerId: '2',
    tags: ['face-wash', 'natural', 'neem', 'turmeric'],
    createdAt: '2024-03-18T13:00:00Z',
    specifications: {
      'Volume': '150ml',
      'Key Ingredients': 'Neem, Turmeric',
      'Skin Type': 'All skin types',
      'Benefits': 'Deep cleansing',
      'Paraben Free': 'Yes'
    }
  },
  {
    id: '42',
    name: 'Mamaearth Vitamin C Face Serum',
    description: 'Brightening face serum with Vitamin C and Turmeric. Reduces dark spots and gives glowing skin.',
    price: 599,
    originalPrice: 799,
    category: 'Beauty',
    brand: 'Mamaearth',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.5,
    reviewCount: 3456,
    inStock: 156,
    sellerId: '2',
    tags: ['face-serum', 'vitamin-c', 'brightening', 'natural'],
    createdAt: '2024-04-22T10:00:00Z',
    specifications: {
      'Volume': '30ml',
      'Key Ingredients': 'Vitamin C, Turmeric',
      'Benefits': 'Brightening, Anti-aging',
      'Skin Type': 'All skin types',
      'Toxin Free': 'Yes'
    }
  },
  {
    id: '43',
    name: 'The Body Shop Tea Tree Oil',
    description: 'Pure tea tree oil for blemish treatment. Natural antiseptic properties for clear skin.',
    price: 895,
    originalPrice: 1095,
    category: 'Beauty',
    brand: 'The Body Shop',
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.3,
    reviewCount: 1876,
    inStock: 67,
    sellerId: '2',
    tags: ['tea-tree-oil', 'blemish-treatment', 'natural', 'antiseptic'],
    createdAt: '2024-04-25T10:00:00Z',
    specifications: {
      'Volume': '20ml',
      'Purity': '100% Pure',
      'Benefits': 'Blemish treatment',
      'Application': 'Spot treatment',
      'Cruelty Free': 'Yes'
    }
  },

  // Automotive
  {
    id: '17',
    name: 'Bosch Car Battery 12V 65Ah',
    description: 'High-performance car battery with long life and reliable starting power. Suitable for most Indian cars.',
    price: 6999,
    originalPrice: 8499,
    category: 'Automotive',
    brand: 'Bosch',
    images: [
      'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 567,
    inStock: 23,
    sellerId: '2',
    tags: ['car-battery', 'automotive', 'bosch', '12v'],
    createdAt: '2024-03-20T11:00:00Z',
    specifications: {
      'Voltage': '12V',
      'Capacity': '65Ah',
      'Type': 'Maintenance Free',
      'Warranty': '36 months',
      'Compatibility': 'Most Indian cars'
    }
  },
  {
    id: '18',
    name: 'Michelin City Pro Motorcycle Tyre',
    description: 'Premium motorcycle tyre with excellent grip and durability. Perfect for city riding conditions.',
    price: 2899,
    originalPrice: 3299,
    category: 'Automotive',
    brand: 'Michelin',
    images: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.5,
    reviewCount: 234,
    inStock: 45,
    sellerId: '2',
    tags: ['motorcycle-tyre', 'michelin', 'city-riding', 'grip'],
    createdAt: '2024-03-22T15:00:00Z',
    specifications: {
      'Size': '100/90-17',
      'Type': 'Tubeless',
      'Pattern': 'City Pro',
      'Load Index': '55',
      'Speed Rating': 'P'
    }
  },
  {
    id: '44',
    name: 'Castrol GTX Engine Oil 5W-30',
    description: 'Premium engine oil with advanced protection against sludge buildup. Suitable for petrol and diesel engines.',
    price: 1899,
    originalPrice: 2299,
    category: 'Automotive',
    brand: 'Castrol',
    images: [
      'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.4,
    reviewCount: 1876,
    inStock: 89,
    sellerId: '2',
    tags: ['engine-oil', 'automotive', 'castrol', 'protection'],
    createdAt: '2024-04-28T10:00:00Z',
    specifications: {
      'Viscosity': '5W-30',
      'Volume': '4 Litres',
      'Type': 'Semi-Synthetic',
      'Engine Type': 'Petrol & Diesel',
      'Protection': 'Anti-sludge'
    }
  },
  {
    id: '45',
    name: 'Philips H4 LED Headlight Bulbs',
    description: 'Bright LED headlight bulbs with 6000K white light. Easy installation and long-lasting performance.',
    price: 2499,
    originalPrice: 2999,
    category: 'Automotive',
    brand: 'Philips',
    images: [
      'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.3,
    reviewCount: 987,
    inStock: 56,
    sellerId: '2',
    tags: ['led-headlights', 'automotive', 'philips', 'bright'],
    createdAt: '2024-04-30T10:00:00Z',
    specifications: {
      'Type': 'H4 LED',
      'Color Temperature': '6000K',
      'Brightness': '4000 Lumens',
      'Lifespan': '12 years',
      'Installation': 'Plug & Play'
    }
  },

  // Toys & Games
  {
    id: '19',
    name: 'LEGO Creator 3-in-1 Deep Sea Creatures',
    description: 'Build and rebuild 3 different sea creatures with this creative LEGO set. Perfect for imaginative play.',
    price: 3999,
    originalPrice: 4999,
    category: 'Toys',
    brand: 'LEGO',
    images: [
      'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.7,
    reviewCount: 345,
    inStock: 67,
    sellerId: '2',
    tags: ['lego', 'building-blocks', 'creative', 'toys'],
    createdAt: '2024-03-25T12:00:00Z',
    specifications: {
      'Pieces': '230',
      'Age': '7-12 years',
      'Models': '3-in-1',
      'Theme': 'Deep Sea Creatures',
      'Skills': 'Creativity, Problem solving'
    }
  },
  {
    id: '20',
    name: 'Funskool Monopoly India Edition',
    description: 'Classic board game with Indian cities and landmarks. Perfect for family game nights.',
    price: 1299,
    originalPrice: 1599,
    category: 'Toys',
    brand: 'Funskool',
    images: [
      'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.4,
    reviewCount: 789,
    inStock: 123,
    sellerId: '2',
    tags: ['board-game', 'monopoly', 'family', 'strategy'],
    createdAt: '2024-03-28T14:00:00Z',
    specifications: {
      'Players': '2-8',
      'Age': '8+ years',
      'Duration': '60-180 minutes',
      'Edition': 'India Edition',
      'Components': 'Board, tokens, cards, money'
    }
  },
  {
    id: '46',
    name: 'Hot Wheels Track Builder Mega Set',
    description: 'Ultimate track building set with loops, curves, and launchers. Includes 5 die-cast cars.',
    price: 2999,
    originalPrice: 3999,
    category: 'Toys',
    brand: 'Hot Wheels',
    images: [
      'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 1234,
    inStock: 45,
    sellerId: '2',
    tags: ['hot-wheels', 'track-builder', 'cars', 'racing'],
    createdAt: '2024-05-02T10:00:00Z',
    specifications: {
      'Track Pieces': '20+ pieces',
      'Cars Included': '5 die-cast cars',
      'Age': '4+ years',
      'Features': 'Loops, curves, launchers',
      'Compatibility': 'Hot Wheels cars'
    }
  },
  {
    id: '47',
    name: 'Barbie Dreamhouse Playset',
    description: 'Three-story dollhouse with furniture and accessories. Perfect for imaginative storytelling and play.',
    price: 8999,
    originalPrice: 10999,
    category: 'Toys',
    brand: 'Barbie',
    images: [
      'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.5,
    reviewCount: 876,
    inStock: 23,
    sellerId: '2',
    tags: ['barbie', 'dollhouse', 'imaginative-play', 'accessories'],
    createdAt: '2024-05-05T10:00:00Z',
    specifications: {
      'Stories': '3 stories',
      'Rooms': '8 rooms',
      'Accessories': '70+ pieces',
      'Age': '3+ years',
      'Dimensions': '109 x 41 x 109 cm'
    }
  },

  // Additional Electronics - Tablets
  {
    id: '48',
    name: 'iPad Air 5th Generation',
    description: 'Powerful tablet with M1 chip and stunning Liquid Retina display. Perfect for creativity and productivity.',
    price: 59900,
    originalPrice: 64900,
    category: 'Electronics',
    brand: 'Apple',
    images: [
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.8,
    reviewCount: 1567,
    inStock: 34,
    sellerId: '2',
    tags: ['ipad', 'tablet', 'm1-chip', 'creativity'],
    createdAt: '2024-05-08T10:00:00Z',
    specifications: {
      'Display': '10.9" Liquid Retina',
      'Processor': 'Apple M1',
      'Storage': '64GB',
      'Camera': '12MP Wide',
      'Battery': 'Up to 10 hours',
      'Weight': '461g'
    }
  },
  {
    id: '49',
    name: 'Samsung Galaxy Tab S9',
    description: 'Premium Android tablet with S Pen included. Perfect for work, creativity, and entertainment.',
    price: 72999,
    originalPrice: 79999,
    category: 'Electronics',
    brand: 'Samsung',
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.6,
    reviewCount: 987,
    inStock: 28,
    sellerId: '2',
    tags: ['samsung-tablet', 's-pen', 'android', 'premium'],
    createdAt: '2024-05-10T10:00:00Z',
    specifications: {
      'Display': '11" Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 2',
      'RAM': '8GB',
      'Storage': '128GB',
      'S Pen': 'Included',
      'Battery': '8400mAh'
    }
  },

  // Additional Fashion - Accessories
  {
    id: '50',
    name: 'Ray-Ban Aviator Classic Sunglasses',
    description: 'Iconic aviator sunglasses with crystal lenses. Timeless style with 100% UV protection.',
    price: 8999,
    originalPrice: 10999,
    category: 'Fashion',
    brand: 'Ray-Ban',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    ],
    rating: 4.7,
    reviewCount: 2345,
    inStock: 67,
    sellerId: '2',
    tags: ['sunglasses', 'aviator', 'ray-ban', 'classic'],
    createdAt: '2024-05-12T10:00:00Z',
    specifications: {
      'Frame': 'Metal',
      'Lens': 'Crystal',
      'UV Protection': '100%',
      'Style': 'Aviator',
      'Size': '58mm'
    }
  }
];

export const mockOrders: Order[] = [
  {
    id: '1',
    userId: '1',
    items: [
      {
        id: '1',
        productId: '1',
        quantity: 1,
        product: mockProducts[0],
      },
    ],
    total: 19999,
    status: 'delivered',
    shippingAddress: {
      fullName: 'Arjun Sharma',
      street: '123 MG Road',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India',
    },
    paymentMethod: 'UPI',
    createdAt: '2024-02-20T10:00:00Z',
    updatedAt: '2024-02-23T15:00:00Z',
  },
];

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userId: '1',
    userName: 'Arjun Sharma',
    rating: 5,
    comment: 'Excellent phone! Great camera quality and fast charging. Highly recommended for the price.',
    createdAt: '2024-02-25T14:00:00Z',
  },
  {
    id: '2',
    productId: '1',
    userId: '3',
    userName: 'Rahul Kumar',
    rating: 4,
    comment: 'Good value for money. Battery life is impressive and performance is smooth.',
    createdAt: '2024-02-24T09:00:00Z',
  },
];

export const categories = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Furniture',
  'Books',
  'Sports',
  'Beauty',
  'Automotive',
  'Toys',
];

export const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry'
];