import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { IOrder } from '../../../Api/Types/Movie';
import { reorderMovies } from '../../../State/Ducks/Movies';

const options = [
  { column: 'title', direction: 'asc', text: 'Name A-Z' },
  { column: 'title', direction: 'desc', text: 'Name Z-A' },
  { column: 'rating', direction: 'desc', text: 'Popularity' },
  { column: 'year', direction: 'desc', text: 'Newest first' },
  { column: 'year', direction: 'asc', text: 'Oldest first' },
];

const [defaultOption] = options;

const OrderSelect: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    const order: IOrder = JSON.parse(value);

    dispatch(reorderMovies(order));
  };

  return (
    <Select defaultValue={defaultOption.text} onChange={handleChange}>
      {options.map(({ column, direction, text }) => (
        <Select.Option key={text} value={JSON.stringify({ column, direction })}>
          {text}
        </Select.Option>
      ))}
    </Select>
  );
};

export { OrderSelect };
