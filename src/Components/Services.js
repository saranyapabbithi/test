import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

const data1 = [
  { label: 'Group A', value: 400 },
  { label: 'Group B', value: 300 },
  { label: 'Group C', value: 300 },
  { label: 'Group D', value: 200 },
];

const data2 = [
  { label: 'A1', value: 100 },
  { label: 'A2', value: 300 },
  { label: 'B1', value: 100 },
  { label: 'B2', value: 80 },
  { label: 'B3', value: 40 },
  { label: 'B4', value: 30 },
  { label: 'B5', value: 50 },
  { label: 'C1', value: 100 },
  { label: 'C2', value: 200 },
  { label: 'D1', value: 150 },
  { label: 'D2', value: 50 },
];


 function Services() {
  return (
    <div>
       <Row className='classes'>
       <h2><b>Comparative Analysis Dashboard</b></h2>
       <Col sm={3} className='class1'>
       <div className='cls'>
       <h4><b>$4888,008,011</b></h4>
       <h6>Current Year Sales</h6> 
       </div> 
       </Col>
       <Col sm={3} className='class1'>
       <div className='cls'>
       <h4><b>$491,063,233</b></h4>
       <h6>Budget Sales</h6>
       </div> 
       </Col>
       <Col sm={3} className='class1'>
       <div className='cls'>
       <h4><b>-0.62%</b></h4>
       <h6>Budget Variance</h6> 
       </div> 
       </Col>
       <Col sm={3} className='class1'>
       <div className='cls'>
       <h4><b>47.5%</b></h4>
       <h6>Sales Growth</h6>
       </div> 
       </Col>
       </Row>
       <Row>
       <Col sm={6} >
      <div className='cls2'>
      <h4><b>Actual vs Budget Sales</b></h4>
      <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={480}
      height={300}
    />
      </div>
      </Col>
      <Col sm={6} >
      <div className='cls2'>
      <h4><b>Current year vs Past year sales</b></h4>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={350}
      height={300}
    />
     </div>
       </Col>
       </Row>
      <Row>
      <Col sm={8} >
      <div className='cls2'>
      <h4><b>Budget vs Actual sales</b></h4>
      <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
      ]}
      width={550}
      height={300}
    />
      </div>
      </Col>
      <Col sm={4} >
      <div className='cls2'>
      <h3><b>Budget</b></h3>
      <PieChart
      series={[
        {
          innerRadius: 0,
          outerRadius: 80,
          data: data1,
        },
        {
          innerRadius: 100,
          outerRadius: 120,
          data: data2,
        },
      ]}
      width={350}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    />

      </div>
      </Col>


        </Row>   

  
    </div>
  )
}
export default Services