import React from 'react';
import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import journalContext from '../jornalContext';

export default function CategoriesSelection() {
  useEffect(() => console.log('useEffect: Category'), []);

  const {
    state: { categories },
  } = useContext(journalContext);

  return (
    <div>
      <h2>Please Select a Category</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link to={`/entry/new/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
