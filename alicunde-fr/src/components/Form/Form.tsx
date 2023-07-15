import { FC, FormEvent } from 'react';

type FormProps = {
  onAddItemToList: (item: string) => void;
};

const Form: FC<FormProps> = ({ onAddItemToList }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);
    const formValues = formData.get('todo') as string;

    onAddItemToList(formValues);
    form.reset();
  };

  return (
    <div className="flex mt-4">
      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker mb-4"
          placeholder="Enter your todo item"
          required
        />
        <button
          type="submit"
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-blue-800 hover:bg-teal"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
