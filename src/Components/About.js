import React from 'react'
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
export default function About() {
  return (
    <div className='classes'>
      <h2><b>Sales DashBoard</b></h2>
      <Row >
      <Col sm={3} className='class1'>
      <div className='cls'>
       <h4><b> <CalendarMonthIcon />Auto date range</b></h4>
       <h5><b>This Month</b></h5>
       </div> 
       </Col>
      <Col sm={3}className='class1'>
      <div  className='cls'>
      <h4><b>Services</b></h4>
       <h5><b>All</b></h5> 
       </div>
       </Col>
      <Col sm={3} className='class1'> 
      <div  className='cls'>
      <h4><b>Posts</b></h4>
       <h5><b>All</b></h5>
       </div>
      </Col>
      <Col sm={3} className='class1'> 
      <div  className='cls'>
      <h4><b>Explore</b></h4>
       <h5><b>All</b></h5>
       </div>
      </Col>
      </Row>
      <Row>
      <Col sm={3} >
      <div className='cls1'>
        <h6><b>Total accounts</b></h6>
        <h1><b>2104</b></h1>
        <h5><ArrowUpwardRoundedIcon/>20%</h5>
        <h7>vs previous 30days</h7>

      </div>
      </Col>
      <Col sm={3} >
      <div className='cls1'>
       <h6><b>Order per Month</b></h6>
        <h1><b>37</b></h1>
        <h5><ArrowUpwardRoundedIcon/>15</h5>
        <h7>vs previous 30days</h7>

      </div>
      </Col>
      <Col sm={3} >
      <div className='cls1'>
       <h6><b>Average Contract  </b></h6>
        <h1><b>$1553</b></h1>
        <h5><ArrowUpwardRoundedIcon/>7.3%</h5>
        <h7>vs previous 30days</h7>

     </div>
      </Col>
      <Col sm={3} >
      <div className='cls1'>
       <h6><b>Growth Rate</b></h6>
        <h1><b>18.09%</b></h1>
        <h5><ArrowUpwardRoundedIcon/>1.3%</h5>
        <h7>vs previous 30days</h7>

     </div>
      </Col>
      </Row>
      <Row>
      <Col sm={6} >
      <div className='cls2'>
      <h3><b>Sales Growth by Market segment</b></h3>
      <LineChart
      width={450}
      height={450}
      series={[
        { data: pData, label: 'pv', yAxisKey: 'leftAxisId' },
        { data: uData, label: 'uv', yAxisKey: 'rightAxisId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
    />

      </div>

      </Col>
      <Col sm={6} >
      <div className='cls2'>
      <h3><b>Sales </b></h3>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={520}
      height={450}
    />

      </div>
      </Col>
      </Row>
    </div>
  )
}
