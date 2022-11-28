import React, { useState } from 'react';

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Острые', 'Гриль', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, categoryIndex) => {
          return (
            <li
              key={categoryIndex}
              onClick={() => setActiveIndex(categoryIndex)}
              className={activeIndex === categoryIndex ? 'active' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
