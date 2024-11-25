import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Items from './components/Items';

const setStorageItems = (list) => {
  localStorage.setItem('itemsList', JSON.stringify(list));
};
const getStorageItems = () => {
  const storedList = localStorage.getItem('itemsList');
  return storedList ? JSON.parse(storedList) : [];
};
// const list = JSON.parse(localStorage.getItem('itemsList') || '[]');

const App = () => {
  const [items, setItems] = useState(getStorageItems());

  const addItem = (itemName) => {
    const newItem = {
      completed: false,
      id: nanoid(),
      name: itemName,
    };
    setItems([...items, newItem]);
    setStorageItems([...items, newItem]);
  };

  const updateChecked = (id) => {
    let selected = items.find((item) => item.id === id);

    if (selected.completed) {
      selected.completed = false;
      setItems(items);
      setStorageItems(items);
      return;
    }
    selected.completed = true;
    setItems(items);
    setStorageItems(items);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setStorageItems(newItems);
    toast.success('item removed');
  };

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items
        items={items}
        updateChecked={updateChecked}
        removeItem={removeItem}
      />
      <ToastContainer position='top-center' />
    </section>
  );
};

export default App;
