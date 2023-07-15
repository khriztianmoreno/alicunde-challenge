import { FC } from 'react';

import Item from '../Item';

type ListProps = {
  list: string[];
  onRemoveItemFromList: (item: string) => void;
};

const List: FC<ListProps> = ({ list = [], onRemoveItemFromList }) => {
  return (
    <ul className="">
      {list.map((item, index) => (
        <Item
          key={index}
          onRemoveItemFromList={onRemoveItemFromList}
          text={item}
        />
      ))}
    </ul>
  );
};

export default List;
