import React from 'react';

export default function Categories({ value, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Острые', 'Гриль', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, categoryIndex) => {
          return (
            <li
              key={categoryIndex}
              onClick={() => onClickCategory(categoryIndex)}
              className={value === categoryIndex ? 'active' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
