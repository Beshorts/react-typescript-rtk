import React from 'react';


interface ListProps<T> extends React.ComponentPropsWithoutRef<"section"> {
  items: T[],
  render: (item: T) => React.ReactNode,
}

interface IdProps {
  id: string | number,
}

const List = <T extends IdProps>({ items, render }: ListProps<T>) => {

  console.count("LIST IS RENDERING")
  return (
      <>
        {items && items.map((item) => (
          < div className="itemList" key={item.id}>
            {render(item)}
          </div>
        ))}
      </>
  )
};

export default List;