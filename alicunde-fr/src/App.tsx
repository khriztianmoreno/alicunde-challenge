import { useState } from 'react';

import Form from './components/Form';
import List from './components/List';

type ListType = string[];

function App() {
  const [list, setList] = useState<ListType>([]);

  const addItemToList = (item: string) => {
    setList([...list, item]);
  };

  const removeItemFromList = (item: string) => {
    setList(list.filter((listItem) => listItem !== item));
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Khriztianmoreno - Alicunde</h1>
          <Form onAddItemToList={addItemToList} />
        </div>
        <div>
          <List list={list} onRemoveItemFromList={removeItemFromList} />
        </div>
      </div>
    </div>
  );
}

export default App;
