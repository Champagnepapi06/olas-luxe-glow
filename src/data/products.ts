import hairSerum from '@/assets/hair-serum.jpg';
import faceCream from '@/assets/face-cream.jpg';
import shampooSet from '@/assets/shampoo-set.jpg';
import facialSerum from '@/assets/facial-serum.jpg';
import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Hair Growth Serum',
    price: 89.00,
    image: hairSerum,
    category: 'hair',
    description: 'Advanced hair growth formula with natural botanicals and peptides. Clinically proven to strengthen and revitalize hair follicles.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Hydrating Face Cream',
    price: 125.00,
    image: faceCream,
    category: 'skin',
    description: 'Rich, nourishing face cream with hyaluronic acid and vitamin E. Perfect for all skin types, providing deep hydration and anti-aging benefits.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Premium Shampoo & Conditioner Set',
    price: 158.00,
    image: shampooSet,
    category: 'hair',
    description: 'Sulfate-free luxury hair care duo infused with argan oil and keratin. Repairs, strengthens, and adds brilliant shine to all hair types.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Brightening Facial Serum',
    price: 95.00,
    image: facialSerum,
    category: 'skin',
    description: 'Vitamin C serum with niacinamide and botanical extracts. Reduces dark spots, evens skin tone, and provides radiant, youthful-looking skin.',
    inStock: true,
  },
  {
    id: '5',
    name: 'Restorative Hair Mask',
    price: 75.00,
    image: hairSerum,
    category: 'hair',
    description: 'Deep conditioning treatment for damaged and chemically treated hair. Restores moisture and elasticity for silky, manageable hair.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Anti-Aging Night Cream',
    price: 145.00,
    image: faceCream,
    category: 'skin',
    description: 'Intensive overnight treatment with retinol and peptides. Reduces fine lines, improves skin texture, and promotes cellular renewal.',
    inStock: true,
  },
];

export const featuredProducts = products.slice(0, 4);
export const hairCareProducts = products.filter(p => p.category === 'hair');
export const skinCareProducts = products.filter(p => p.category === 'skin');