import { createButton } from './Button';
import './card.css';

export const createCard = ({
  title = 'Card Title',
  description = 'This is a card description that explains the content of the card.',
  imageUrl,
  size = 'medium',
  variant = 'default',
  actions = [],
  onClick,
}) => {
  const card = document.createElement('div');
  card.className = [
    'storybook-card',
    `storybook-card--${size}`,
    variant !== 'default' ? `storybook-card--${variant}` : ''
  ].filter(Boolean).join(' ');

  // カードがクリック可能な場合のスタイル
  if (onClick) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', onClick);
  }

  // 画像がある場合は追加
  if (imageUrl) {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;
    img.className = 'storybook-card__image';
    card.appendChild(img);
  }

  // カードのコンテンツ部分
  const content = document.createElement('div');
  content.className = 'storybook-card__content';

  // タイトル
  const titleElement = document.createElement('h3');
  titleElement.className = 'storybook-card__title';
  titleElement.textContent = title;
  content.appendChild(titleElement);

  // 説明文
  const descriptionElement = document.createElement('p');
  descriptionElement.className = 'storybook-card__description';
  descriptionElement.textContent = description;
  content.appendChild(descriptionElement);

  // アクション部分
  if (actions.length > 0) {
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'storybook-card__actions';

    actions.forEach(action => {
      const button = createButton({
        label: action.label,
        primary: action.primary || false,
        size: 'small',
        onClick: action.onClick
      });
      actionsContainer.appendChild(button);
    });

    content.appendChild(actionsContainer);
  }

  card.appendChild(content);

  return card;
};
