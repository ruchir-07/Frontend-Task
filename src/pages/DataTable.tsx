import React, { useState } from 'react';
import { Table, Pagination } from '@mantine/core';
import styles from './DataTable.module.css';

interface DataTableProps {
  data: Array<{ [key: string]: any }>;
  columns: Array<string>;
  rowsPerPage?: number;
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, rowsPerPage = 10 }) => {
  const [activePage, setPage] = useState(1);

  // Calculate the current rows to display based on the active page and rows per page
  const startRow = (activePage - 1) * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const currentRows = data.slice(startRow, endRow);

  return (
    <div className={styles['data-table-container']}>
      <Table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={styles.page }>
        <Pagination 
          total={Math.ceil(data.length / rowsPerPage)}
          value={activePage}
          onChange={setPage}
          siblings={3}
          
        />
      </div>
    </div>
  );
};

export default DataTable;
