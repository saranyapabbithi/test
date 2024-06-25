import React from 'react'
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];
  
  const size = {
    width: 400,
    height: 200,
  };
  
export default function Home() {
  return (
    <div>
    <Row>
    <Col sm={6} className='sub1'>
    <h2><b>CS Industies</b></h2>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
    
    </Col>

    <Col sm={6} className='sub2'>
    <h2><b>CS Industies</b></h2>
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </Col>
    </Row> 
     <Row>
     <Col sm={6} className='sub3'>
     <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
      ]}
      width={600}
      height={350}
    />
     </Col>
     <Col sm={6} className='sub4'>
     <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
     </Col>
     </Row>
    </div>
   
    
    

  )
}
