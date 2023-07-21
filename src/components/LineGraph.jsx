import React from 'react';
import { LineChart, Line } from "recharts";
import "../components/LineGraph.css"
const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

const LineGraph = () => {
  return (
    <div className="card">
  <div className='lowhigh'>
    <div className="low">
    <div className="dot1"></div>
    <p>Lower:$4.850</p>

    </div>
    <div className="high">
      <div className='dot2'></div>
    <p>Higher:$5.850</p></div>
    
  </div>
      <LineChart width={300} height={100} data={data} className='Linechart'>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
    <div className="onebtc">
      <div className='dot3'></div>
    <p>1 BTC=$5.483</p></div>

    </div>
    
  )
}

export default LineGraph






