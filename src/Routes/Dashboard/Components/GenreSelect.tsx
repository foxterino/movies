import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { genres } from '../Helpers/DashboardHelpers';
import { selectGenre } from '../../../State/Ducks/Movies';

const GenreSelect: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (value: string) => dispatch(selectGenre(value || null));

  return (
    <Select
      style={{ marginBottom: 16 }}
      defaultValue="All genres"
      onChange={handleChange}
    >
      <Select.Option value="">All genres</Select.Option>
      {genres.map(genre => (
        <Select.Option key={genre} value={genre}>
          {genre}
        </Select.Option>
      ))}
    </Select>
  );
};

export { GenreSelect };
