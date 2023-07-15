import { FC } from 'react';

type ItemProps = {
  text: string;
  onRemoveItemFromList: (item: string) => void;
};

const Item: FC<ItemProps> = ({ text, onRemoveItemFromList }) => {
  const handleClick = () => {
    onRemoveItemFromList(text);
  };

  return (
    <p className="w-full text-grey-darkest" onClick={handleClick}>
      <span className="text-red cursor-pointer text-xs">❌</span>
      <span className="text-lg"> {text}</span>
    </p>
  );
};

export default Item;
