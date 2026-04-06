export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const SERVICES: Service[] = [
  {
    id: 'birthday',
    title: 'Birthday Parties',
    description: 'Throwing a party for kids isn\'t just about cakes and decorations; it\'s about creating a fun atmosphere where children can play while adults don\'t need to feel the stress.',
    image: 'https://picsum.photos/seed/birthday/800/600',
    color: '#8b5cf6'
  },
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Are you planning your wedding and thinking about how to keep the children entertained? Children in your lives are bound to make for some extra special memories.',
    image: 'https://picsum.photos/seed/wedding/800/600',
    color: '#ec4899'
  },
  {
    id: 'school',
    title: 'School And Nurseries',
    description: 'We have a special discounted package for schools and nurseries. It will help your school to generate funds or you can just treat your children in the school.',
    image: 'https://picsum.photos/seed/school/800/600',
    color: '#3b82f6'
  },
  {
    id: 'fetes',
    title: 'Fetes And Festivals',
    description: 'You can hire the bus for your fetes, festivals and carnivals or any charity event on profit share. Please get in touch with us.',
    image: 'https://picsum.photos/seed/festival/800/600',
    color: '#f59e0b'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Hosting a corporate event allows you to strengthen bonds with current clients and partners while developing genuine connections and attracting future ones.',
    image: 'https://picsum.photos/seed/corporate/800/600',
    color: '#10b981'
  }
];

export const PACKAGES = [
  {
    name: 'SILVER PACKAGE',
    time: 'Monday to Thursday (Term Time Only)',
    options: [
      { duration: '1 HOUR OF BUS HIRE', price: '140', includes: ['Free Squash Drinks/Water'] },
      { duration: '90 MINUTES OF BUS HIRE', price: '160', includes: ['Free Squash Drinks/Water'] },
      { duration: '2 HOUR OF BUS HIRE', price: '190', includes: ['Free Squash Drinks/Water'] }
    ]
  },
  {
    name: 'GOLD PACKAGE',
    time: 'Friday to Sunday',
    options: [
      { duration: '90 MINUTES OF BUS HIRE', price: '200', includes: ['Free Squash Drinks and Water', 'Full access to the eating area', 'Free bubble with the bubble machine'] },
      { duration: '2 HOURS OF BUS HIRE', price: '230', includes: ['Free Squash Drinks and Water', 'Customised digital Invites', 'Balloons for all children', 'Full access to the eating area', 'Free bubbles with the bubble machine', 'Take a picture in the driver\'s seat'] }
    ]
  }
];
