import React from 'react'
import styled from 'styled-components'
import { TableProps } from './types'
import Cell from './Cell'
import { columnsDef } from './const'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 0.9rem;
  overflow: hidden;
  background: #FFFFFF;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 0px 1px rgba(25, 19, 38, 0.15);
  border-radius: 32px;
  text-align: center;
`

export const TableHead = styled.thead`
  & tr {
    background-color: #EFF4F5;
    border-radius: 4px;
    color: #8F80BA;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;

    & th,
    td {
      padding: 12px 15px;
    }
  }

  & input {
    font-weight: 700;
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 4px;
    width: 80%;
    outline-width: 0;
  }

  & .bold {
    color: #7645D9;
  }
`

export const TableBody = styled.tbody`
  & tr {
    border-bottom: 1px solid #dddddd;

    & th,
    td {
      padding: 12px 15px;

      & .alert {
        color: ${props => props?.theme?.colors?.alert}
      }
    }
  }

  & tr:nth-of-type(2n) {
    background-color: ${(props) => props?.theme?.colors?.background};
  }

  & tr:hover {
    transition: 0.3s;
    color: #457b9d;
  }
`

const TableComponent:React.FC<TableProps> = () => {
  return (
    <Table>
      <TableHead>
          <tr>
            {columnsDef.map((column, key) => (
              <Cell
                key={`head-${column.id}`}
                keyId={`head-${key}`}
                isHeader
              >
                <span className="bold">
                  {column.bold}{' '}
                </span>
                {column.normal}
              </Cell>
            ))}
          </tr>
        </TableHead>
    </Table>
  )
}

TableComponent.propTypes = {

}

TableComponent.defaultProps = {

}

export default TableComponent