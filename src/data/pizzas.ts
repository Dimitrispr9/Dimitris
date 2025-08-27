import { Pizza } from '../types';

export const pizzas: Pizza[] = [
  {
    id: '1',
    name: 'Margherita Classic',
  description: 'Φρέσκια μοτσαρέλα, σάλτσα ντομάτας και βασιλικός - το διαχρονικό ιταλικό αγαπημένο',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop', // was Vegetarian Delight
    category: 'Classic',
    available: true,
  ingredients: ['Φρέσκια μοτσαρέλα', 'Σάλτσα ντομάτας', 'Φρέσκος βασιλικός', 'Εξαιρετικό παρθένο ελαιόλαδο'],
  },
  {
    id: '2',
    name: 'Pepperoni Supreme',
  description: 'Πικάντικο πεπερόνι με λιωμένο τυρί και τη μοναδική μας σάλτσα ντομάτας',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=400&h=300&fit=crop', // was Margherita Classic
    category: 'Classic',
    available: true,
  ingredients: ['Πεπρονι', 'Μοτσαρέλα', 'Σάλτσα ντομάτας', 'Ρίγανη'],
  },
  {
    id: '3',
    name: 'BBQ Chicken',
  description: 'Κοτόπουλο σχάρας με BBQ σάλτσα, κόκκινα κρεμμύδια και κόλιανδρο',
    price: 16.99,
  image: '/bbq-chicken-pizza.jpg',
    category: 'Specialty',
    available: true,
  ingredients: ['Κοτόπουλο σχάρας', 'BBQ σάλτσα', 'Κόκκινα κρεμμύδια', 'Κόλιανδρος', 'Μοτσαρέλα'],
  },
  {
  id: '4',
  name: 'Vegetarian Delight',
  description: 'Φρέσκες πιπεριές, μανιτάρια, κρεμμύδια, ελιές και ντομάτες',
  price: 14.99,
  image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop', // was Hawaiian Paradise
  category: 'Vegetarian',
  available: true,
  ingredients: ['Πιπεριές', 'Μανιτάρια', 'Κρεμμύδια', 'Ελιές', 'Ντομάτες', 'Μοτσαρέλα'],
  },
  {
    id: '5',
    name: 'Hawaiian Paradise',
  description: 'Ζαμπόν και ανανάς με τέλεια ισορροπία γλυκού και αλμυρού',
    price: 15.99,
  image: '/hawaiian-pizza.jpg',
    category: 'Specialty',
    available: true,
  ingredients: ['Ζαμπόν', 'Ανανάς', 'Μοτσαρέλα', 'Σάλτσα ντομάτας'],
  },
  {
    id: '6',
    name: 'Four Cheese',
  description: 'Μοτσαρέλα, παρμεζάνα, γκοργκοντζόλα και ρικότα',
    price: 17.99,
  image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', // was Spicy Jalapeño
    category: 'Classic',
    available: true,
  ingredients: ['Μοτσαρέλα', 'Παραμεζάνα', 'Γκοργκοντζόλα', 'Ρικότα', 'Σάλτσα ντομάτας'],
  },
  {
    id: '7',
    name: 'Spicy Jalapeño',
  description: 'Πικάντικες χαλαπένιος με πεπερόνι και έξτρα τυρί για τους λάτρεις των καυτερών',
    price: 16.99,
  image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', // was Four Cheese
    category: 'Spicy',
    available: true,
  ingredients: ['Χαλαπένιος', 'Πεπρονι', 'Μοτσαρέλα', 'Σάλτσα ντομάτας', 'Νιφάδες τσίλι'],
  },
  {
    id: '8',
    name: 'Mediterranean',
  description: 'Φέτα, ελιές Καλαμών, λιαστές ντομάτες και αγκινάρες',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop',
    category: 'Specialty',
    available: true,
  ingredients: ['Φέτα', 'Ελιές Καλαμών', 'Λιαστές ντομάτες', 'Αγκινάρες', 'Μοτσαρέλα'],
  },
];

export const categories = [
  { id: '1', name: 'Classic', description: 'Traditional Italian favorites' },
  { id: '2', name: 'Specialty', description: 'Unique and creative combinations' },
  { id: '3', name: 'Vegetarian', description: 'Fresh and healthy options' },
  { id: '4', name: 'Spicy', description: 'For those who love the heat' },
];
