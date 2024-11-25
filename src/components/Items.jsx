import SingleItem from './SingleItem';

function Items({ items, updateChecked, removeItem }) {
  return (
    <section className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            updateChecked={updateChecked}
            removeItem={removeItem}
          />
        );
      })}
    </section>
  );
}

export default Items;
