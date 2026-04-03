export type MenuItem = {
  name: string;
  price: number | string;
  tag?: 'SPL' | 'NEW';
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  label: string;
  emoji: string;
  type: 'veg' | 'nonveg' | 'both';
  sections: MenuSection[];
};

export const menuData: MenuCategory[] = [
  {
    id: 'nonveg-starters',
    label: 'Non-Veg Starters',
    emoji: '🍗',
    type: 'nonveg',
    sections: [
      {
        title: 'Roast / Statur Items',
        items: [
          { name: 'Leg Piece Rost', price: 90 },
          { name: 'Kouji Kada Rost', price: 110 },
          { name: 'Chicken Boneless Rost', price: 200 },
          { name: 'Kabab Chicken Bone', price: 220 },
          { name: 'Lollipop Dry', price: 200 },
          { name: 'Fish E1 (Curry - 100)', price: 80 },
          { name: 'Mumbai Dhaba SPL', price: 330, tag: 'SPL' },
          { name: 'Boneless Pepper Chicken', price: 250 },
          { name: 'Chiken Rangila', price: 300 },
        ],
      },
    ],
  },
  {
    id: 'nonveg-fry',
    label: 'Non-Veg Fry',
    emoji: '🌶️',
    type: 'nonveg',
    sections: [
      {
        title: 'Fry Items',
        items: [
          { name: 'Lollipop Fry', price: 220 },
          { name: 'Lemon Chicken', price: 200 },
          { name: '555 Chicken', price: 250 },
          { name: 'Chicken Bone Fry', price: 180 },
          { name: 'Chicken 85 Bone Fry', price: 220 },
          { name: 'Chicken 85 Bone Less Fry', price: 200 },
          { name: 'Chilly Chicken', price: 200 },
          { name: 'Andhra Chicken Fry', price: 220 },
          { name: 'Pepper Chicken', price: 220 },
          { name: 'Chicken RR', price: 220 },
          { name: 'Kaju Chicken', price: 280 },
          { name: 'Garlic Chicken', price: 230 },
          { name: 'Chicken Manchuriya', price: 230 },
          { name: 'Chicken Dhil Khus', price: 220 },
          { name: 'Kabab Chicken Boneless', price: 220 },
          { name: 'Leg Piece Fry', price: 100 },
          { name: 'Wings Fry', price: 250 },
          { name: 'Boneless Fish Fry', price: 220 },
          { name: 'Prawn (Royal) Fry', price: 250 },
          { name: 'Egg Chilly', price: 120 },
        ],
      },
    ],
  },
  {
    id: 'nonveg-curry',
    label: 'Non-Veg Curry',
    emoji: '🍛',
    type: 'nonveg',
    sections: [
      {
        title: 'Curry Items',
        items: [
          { name: 'Leg Piece Curry', price: 120 },
          { name: 'Boneless Curry', price: 180 },
          { name: 'Chicken Maharani', price: 220 },
          { name: 'Hyderabad Chicken', price: 190 },
          { name: 'Chicken Kashmeer', price: 200 },
          { name: 'Chicken Panjabi', price: 200 },
          { name: 'Mogalai Chicken', price: 200 },
          { name: 'Butter Chicken', price: 200 },
          { name: 'Jinger Chicken', price: 190 },
          { name: 'Andhra Chicken', price: 200 },
          { name: 'Kadai Chicken', price: 220 },
          { name: 'Rambha Chicken SPL', price: 250, tag: 'SPL' },
          { name: 'Mumbai Indians Chicken SPL', price: 240, tag: 'SPL' },
          { name: 'Nottout Chicken SPL', price: 350, tag: 'SPL' },
          { name: 'Kaju Chiken Curry', price: 240 },
          { name: 'Kouji Kada Curry', price: 120 },
          { name: 'Chicken Bone Curry', price: 160 },
          { name: 'Prawns Curry', price: 240 },
        ],
      },
    ],
  },
  {
    id: 'egg',
    label: 'Egg Items',
    emoji: '🥚',
    type: 'nonveg',
    sections: [
      {
        title: 'Egg Items',
        items: [
          { name: 'Egg Bujji', price: 90 },
          { name: 'Egg Curry', price: 100 },
          { name: 'Egg Keema', price: 90 },
          { name: 'Egg Tomota', price: 100 },
          { name: 'Egg Dall', price: 110 },
          { name: 'Egg Chaman', price: 150 },
          { name: 'Egg Palak', price: 110 },
        ],
      },
    ],
  },
  {
    id: 'biryani',
    label: 'Biryani',
    emoji: '🍚',
    type: 'both',
    sections: [
      {
        title: 'Non-Veg Biriyani',
        items: [
          { name: 'Dum Biriyani', price: 160 },
          { name: 'Fry Piece Biriyani', price: 180 },
          { name: 'SPL Biriyani', price: 220, tag: 'SPL' },
          { name: 'Prawn Biriyani', price: 250 },
        ],
      },
      {
        title: 'Veg Basmathi Rice',
        items: [
          { name: 'Veg Rice', price: 140 },
          { name: 'Gobi Rice', price: 120 },
          { name: 'Kaju Rice', price: 220 },
          { name: 'Panneer Rice', price: 200 },
          { name: 'Mushroom Rice', price: 160 },
        ],
      },
      {
        title: 'SPL Basmathi Rice (Non-Veg)',
        items: [
          { name: 'Egg Rice', price: 120 },
          { name: 'Chicken Rice', price: 150 },
          { name: 'Prawn Rice', price: 200 },
        ],
      },
    ],
  },
  {
    id: 'fried-rice',
    label: 'Fried Rice',
    emoji: '🍳',
    type: 'both',
    sections: [
      {
        title: 'Fried Rice (Sonamasuri) - Non-Veg',
        items: [
          { name: 'Egg Fried Rice', price: 90 },
          { name: 'Chicken Fried Rice', price: 120 },
          { name: 'Prawn Fried Rice', price: 180 },
        ],
      },
      {
        title: 'Rice Items (Sonamasuri) - Veg',
        items: [
          { name: 'Veg Fried Rice', price: 80 },
          { name: 'Tomato Fried Rice', price: 80 },
          { name: 'Gobi Rice', price: 90 },
          { name: 'Jeera Rice', price: 110 },
          { name: 'Kaju Rice', price: 190 },
          { name: 'Mushroom Rice', price: 140 },
          { name: 'Panner Rice', price: 160 },
          { name: 'Curd Rice', price: 50 },
          { name: 'SPL Curd Rice', price: 70, tag: 'SPL' },
        ],
      },
    ],
  },
  {
    id: 'veg-starters',
    label: 'Veg Starters',
    emoji: '🥗',
    type: 'veg',
    sections: [
      {
        title: 'Veg Statur / Rosted Items',
        items: [
          { name: 'Masala Pampad', price: 50 },
          { name: 'Masala Pampad SPL', price: 120, tag: 'SPL' },
          { name: 'Veg Pakoda', price: 130 },
          { name: 'Gobi Pakoda', price: 120 },
          { name: 'Mushroom Pakoda', price: 160 },
          { name: 'Onion Pakoda', price: 120 },
          { name: 'Baby Corn Pakoda', price: 150 },
          { name: 'Chenna Roast', price: 120 },
          { name: 'Kaju Roast', price: 210 },
          { name: 'Finger Chips', price: 130 },
          { name: 'Green Salad', price: 70 },
          { name: 'Green Piece Roast', price: 120 },
        ],
      },
    ],
  },
  {
    id: 'veg-fry',
    label: 'Veg Fry',
    emoji: '🌿',
    type: 'veg',
    sections: [
      {
        title: 'Veg Fry Items',
        items: [
          { name: 'Mushroom Chilly', price: 150 },
          { name: 'Mushroom Pepper Fry', price: 180 },
          { name: 'Mushroom Manchuriya', price: 160 },
          { name: 'Panneer Manchuriya', price: 220 },
          { name: 'Panneer Chilly', price: 200 },
          { name: 'Panner Majestic', price: 260 },
          { name: 'Gobi Chilly & Manchuri', price: 120 },
          { name: 'Babycorn Chilly', price: 150 },
          { name: 'Chenna Fry & Thalim', price: 100 },
          { name: 'Babycorn Manchuriya', price: 150 },
          { name: 'Green Piece Fry', price: 100 },
        ],
      },
    ],
  },
  {
    id: 'veg-curry',
    label: 'Veg Curry',
    emoji: '🥘',
    type: 'veg',
    sections: [
      {
        title: 'Veg Curry Items',
        items: [
          { name: 'Dall Fry', price: '80 & 90' },
          { name: 'SPL Dall Fry', price: 100, tag: 'SPL' },
          { name: 'Dall Tadaka', price: 100 },
          { name: 'Dall Maharani', price: 130 },
          { name: 'Sai Panneer SPL', price: 200, tag: 'SPL' },
          { name: 'Methi Chaman SPL', price: 230, tag: 'SPL' },
          { name: 'Chenna Masala', price: 100 },
          { name: 'Batani Curry', price: 100 },
          { name: 'Mix Veg Curry', price: 120 },
          { name: 'Mix Veg Curry SPL', price: 140, tag: 'SPL' },
          { name: 'Veg Kadai SPL', price: 170, tag: 'SPL' },
          { name: 'Gobi Masala Curry', price: 120 },
          { name: 'Palak Panneer Curry', price: 140 },
          { name: 'Tomato Curry', price: 80 },
          { name: 'Jaypur Curry SPL', price: 200, tag: 'SPL' },
          { name: 'Panneer Butter Masala', price: 160 },
          { name: 'Kadai Panneer', price: 230 },
          { name: 'Plain Palak', price: 80 },
          { name: 'Mushroom Curry', price: 150 },
          { name: 'Kadai Mushroom', price: 210 },
          { name: 'Brinjal Masal Curry', price: 130 },
          { name: 'Motter Panneer', price: 180 },
          { name: 'Kaju Panneer Curry SPL', price: 230, tag: 'SPL' },
          { name: 'Kaju Tomato Curry', price: 190 },
          { name: 'Kaju Masala Curry', price: 200 },
          { name: 'Navarantha Curry SPL', price: 200, tag: 'SPL' },
          { name: 'Seo Vaji', price: 160 },
        ],
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks & More',
    emoji: '🥤',
    type: 'both',
    sections: [
      {
        title: 'Beverages',
        items: [
          { name: 'Sweet Lussi', price: 60 },
          { name: 'Butter Milk', price: 20 },
          { name: 'Kheer', price: 50 },
          { name: 'Keer', price: 50 },
          { name: 'SPL Lussy', price: 60, tag: 'SPL' },
        ],
      },
      {
        title: 'Roti',
        items: [
          { name: 'Roti (Each)', price: '8 & 10' },
          { name: 'Butter Roti', price: 20 },
        ],
      },
    ],
  },
];
