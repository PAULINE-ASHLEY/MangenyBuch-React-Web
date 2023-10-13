import {
  babylon,
  business,
  business1,
  business10,
  business2,
  business3,
  business4,
  business5,
  business6,
  business7,
  business8,
  business9,
} from 'assets/images';

const BookData = [
  {
    id: 1,
    quantity: 1,
    image: business,
    title: 'The Lean Startup',
    price: 1895,
    author: 'Eric Ries',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 2,
    quantity: 1,
    image: business1,
    title: 'Money Master the Game',
    price: 995,
    author: 'Tony Robbins',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 3,
    quantity: 1,
    image: business2,
    title: 'The Art of War',
    price: 995,
    author: 'Sun Tzu',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 4,
    quantity: 1,
    image: business3,
    title: 'The 48 Laws of Power',
    price: 2495,
    author: 'Robert Greene',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 5,
    quantity: 1,
    image: business4,
    title: 'The 4-Hour Workweek',
    price: 2495,
    author: 'Timothy Ferriss',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 6,
    quantity: 1,
    image: business5,
    title: 'Millionaire Success Habits',
    price: 2995,
    author: 'Dean Graziosi',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 7,
    quantity: 1,
    image: business6,
    title: 'The 80/20 Principle',
    price: 1795,
    author: 'Richard Koch',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 8,
    quantity: 1,
    image: business7,
    title: 'The Snowball',
    price: 1995,
    author: 'Warren Buffe',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 9,
    quantity: 1,
    image: business8,
    title: 'Nice Girls still Dont Get the Corner Office',
    price: 1295,
    author: 'Lois P. FrankeL',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 10,
    quantity: 1,
    image: business9,
    title: 'Ego is the enemy',
    price: 1695,
    author: 'Ryan Holiday',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 11,
    quantity: 1,
    image: babylon,
    title: 'The Richest Man in Babylon',
    price: 1200,
    author: 'George S. Clason',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
  {
    id: 12,
    quantity: 1,
    image: business10,
    title: 'The $100 Startup',
    price: 1495,
    author: 'Chris Guillebeau',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etvoluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas inventore ad officia vel beatae delectus, reiciendis voluptatem porro repellat, aspernatur suscipit assumenda sit labore corrupti eveniet quis eum dolore?',
  },
];

export default BookData;
