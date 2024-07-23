import React, { useEffect, useState } from 'react';
import { parseData, aggregateDataByYear, aggregateDataByCrop } from '../public/dataProcessor';
import DataTable from './pages/DataTable';
import rawData from '../public/data.json';
import { MantineProvider, Container, Grid } from '@mantine/core';
import { theme } from './theme';
import './App.css';

const App: React.FC = () => {
  const [yearlyData, setYearlyData] = useState<any[]>([]);
  const [cropData, setCropData] = useState<any[]>([]);

  useEffect(() => {
    const data = parseData(rawData);
    const yearlyAggregated = aggregateDataByYear(data);
    const cropAggregated = aggregateDataByCrop(data);
    setYearlyData(yearlyAggregated);
    setCropData(cropAggregated);
  }, []);

  const yearlyColumns = ['year', 'maxProductionCrop', 'minProductionCrop'];
  const cropColumns = ['crop', 'avgYield', 'avgCultivationArea'];

  return (
    <MantineProvider theme={theme}>
      <div className='app'>
        <Container>
          <Grid>
            <Grid.Col span={6}>
              <h1>Yearly Crop Data</h1>
              <DataTable data={yearlyData} columns={yearlyColumns} />
            </Grid.Col>
            <Grid.Col span={6}>
              <h1>Crop Statistics</h1>
              <DataTable data={cropData} columns={cropColumns} />
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </MantineProvider>
  );
};

export default App;
