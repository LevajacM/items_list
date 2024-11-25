import { useState } from 'react';
import { toast } from 'react-toastify';

function Form({ addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error('Please provide value');
      return;
    }
    addItem(newItem);
    toast.success('Item added to the list');
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Items List</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          name='item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit' className='btn'>
          add item
        </button>
      </div>
    </form>
  );
}

export default Form;
