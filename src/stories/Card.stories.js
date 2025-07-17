import { fn } from 'storybook/test';

import { createCard } from './Card';

export default {
  title: 'Example/Card',
  tags: ['autodocs'],
  render: ({ title, description, imageUrl, size, variant, actions, onClick }) => {
    return createCard({ title, description, imageUrl, size, variant, actions, onClick });
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'flat', 'outlined'],
    },
    onClick: { action: 'card-clicked' },
  },
  args: {
    title: 'Sample Card',
    description: 'This is a sample card description that demonstrates the card component functionality.',
    onClick: fn(),
  },
};

// 基本的なカード
export const Default = {
  args: {
    title: 'Default Card',
    description: 'This is a default card with standard styling.',
  },
};

// 画像付きカード
export const WithImage = {
  args: {
    title: 'Card with Image',
    description: 'This card includes an image at the top.',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Sample+Image',
  },
};

// アクション付きカード
export const WithActions = {
  args: {
    title: 'Card with Actions',
    description: 'This card includes action buttons at the bottom.',
    actions: [
      {
        label: 'Primary Action',
        primary: true,
        onClick: fn(),
      },
      {
        label: 'Secondary',
        primary: false,
        onClick: fn(),
      },
    ],
  },
};

// 完全なカード（画像とアクション両方）
export const Complete = {
  args: {
    title: 'Complete Card',
    description: 'This card has both an image and action buttons, demonstrating all features.',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Complete+Card',
    actions: [
      {
        label: 'Learn More',
        primary: true,
        onClick: fn(),
      },
      {
        label: 'Share',
        primary: false,
        onClick: fn(),
      },
    ],
  },
};

// 小さいサイズのカード
export const Small = {
  args: {
    title: 'Small Card',
    description: 'This is a small-sized card.',
    size: 'small',
    imageUrl: 'https://via.placeholder.com/280x200/555ab9/ffffff?text=Small+Card',
  },
};

// 大きいサイズのカード
export const Large = {
  args: {
    title: 'Large Card',
    description: 'This is a large-sized card with more space for content.',
    size: 'large',
    imageUrl: 'https://via.placeholder.com/450x200/555ab9/ffffff?text=Large+Card',
  },
};

// 浮き上がったスタイル
export const Elevated = {
  args: {
    title: 'Elevated Card',
    description: 'This card has an elevated appearance with enhanced shadow.',
    variant: 'elevated',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Elevated+Card',
  },
};

// フラットスタイル
export const Flat = {
  args: {
    title: 'Flat Card',
    description: 'This card has a flat appearance with a subtle border.',
    variant: 'flat',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Flat+Card',
  },
};

// アウトラインスタイル
export const Outlined = {
  args: {
    title: 'Outlined Card',
    description: 'This card has a prominent outline border.',
    variant: 'outlined',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Outlined+Card',
  },
};

// クリック可能なカード
export const Clickable = {
  args: {
    title: 'Clickable Card',
    description: 'This card can be clicked and will trigger an action.',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Click+Me',
    onClick: fn(),
  },
};
