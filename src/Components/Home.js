import React from 'react'
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';





export default function Home() {
  return (
    <div>
      <Row className='main'>
        <Col sm={3} className='sub1'>
        <h3>Followers</h3>
        <h1><b>120</b></h1>
        </Col>
        <Col sm={3} className='sub1'>
        <h3>Favorites</h3>
        <h1><b>545</b></h1>
        </Col>
        <Col sm={3} className='sub1'>
        <h3>Earnings</h3>
        <h1><b>$1.820</b></h1>
        </Col>
        <Col sm={3} className='sub1'>
        <h3>Wallet</h3>
        <h1><b>$80</b></h1>
        </Col>
      </Row>
      
      <Row>
      <Col sm={6} className='sub2'>
       <h3><b>Income Graph</b></h3>
     <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      height={300}
      
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}

    />
      </Col>

      <Col sm={6} className='sub2'>
      <h3><b>Growth</b></h3>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={400}
      height={300}
    />
      </Col>
        
      </Row>

     <div className='mainsub01' >
      <Row>
      <Col sm={6} className='sub3'>
      <div className='sub-main'>
      <h3><b>Expense</b></h3>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={50} />
      <Gauge width={100} height={100} value={30} valueMin={10} valueMax={60} />
      <Gauge width={100} height={100} value={100} valueMin={10} valueMax={60} />
    </Stack>
    </div>
      </Col>
      <Col sm={6} className='sub3'>
      <div className='sub-main'>
       <h4><b>Message</b></h4>
       <p>AlanWalker  [In voice]  Payment</p>
       <p>Natalia    [promaotion] Winter sale up to 50%</p>
       <p>Aurel      [Event]  New year party</p>\
       </div>
      </Col>
   
      </Row>
      </div>
    </div>
  )
}
