import React from 'react';
import { Table } from 'antd';
import { IMovie } from '../../../Api/Types/Movie';

interface IInfoTable {
  movie: IMovie;
}

const InfoTable: React.FC<IInfoTable> = ({ movie }) => {
  const { rating, year, genres, producer, budget } = movie;
  const listOfGenres = genres.map(genre => genre.name).join(', ');

  const tableData = [
    {
      key: '1',
      property: 'Rating',
      value: rating,
    },
    {
      key: '2',
      property: 'Genres',
      value: listOfGenres,
    },
    {
      key: '3',
      property: 'Producer',
      value: producer,
    },
    {
      key: '4',
      property: 'Budget',
      value: budget,
    },
    {
      key: '5',
      property: 'Year',
      value: year,
    },
  ];

  return (
    <Table
      dataSource={tableData}
      bordered
      pagination={false}
      showHeader={false}
    >
      <Table.Column dataIndex="property" key="property" />
      <Table.Column dataIndex="value" key="value" />
    </Table>
  );
};

export { InfoTable };
