import { useState } from 'react';

function SingleItem({ completed, id, name, updateChecked, removeItem }) {
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <article className='single-item'>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          updateChecked(id);
        }}
      />
      <p
        style={
          // { textDecoration: isChecked && 'line-through' }
          isChecked
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {name}
      </p>
      <button className='btn remove-btn' onClick={() => removeItem(id)}>
        remove
      </button>
    </article>
  );
}

export default SingleItem;
