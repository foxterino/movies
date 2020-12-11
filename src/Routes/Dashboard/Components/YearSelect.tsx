import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { years } from '../Helpers/DashboardHelpers';
import { selectYear } from '../../../State/Ducks/Movies';

const YearSelect: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (value: string) => dispatch(selectYear(value || null));

  return (
    <Select
      style={{ marginBottom: 16 }}
      defaultValue="All years"
      onChange={handleChange}
    >
      <Select.Option value="">All years</Select.Option>
      {years.map(year => (
        <Select.Option key={year} value={year}>
          {year}
        </Select.Option>
      ))}
    </Select>
  );
};

export { YearSelect };
