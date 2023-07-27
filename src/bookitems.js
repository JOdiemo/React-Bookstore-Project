import { nanoid } from '@reduxjs/toolkit';

const bookItems = [
  {
    id: nanoid(),
    title: 'The pursuits of happiness',
    category: 'politics',
    author: 'Frank Kaso',
  },
  {
    id: nanoid(),
    title: 'Vampire Diaries',
    category: 'Horror',
    author: 'Nick KLaus',
  },
];

export default bookItems;
