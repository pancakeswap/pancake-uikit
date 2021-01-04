import React from 'react'
import TableComponent from './Table'

export default {
  title: "Components/Table",
  component: TableComponent,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <TableComponent />
  )
}