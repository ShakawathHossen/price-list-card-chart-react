import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const studentMarks = [
        { 
          id: 1,
          name: "John Doe",
          physics: 75,
          chemistry: 80,
          math: 85
        },
        {
          id: 2,
          name: "Jane Doe",
          physics: 85,
          chemistry: 90,
          math: 95
        },
        {
          id: 3,
          name: "Bob Smith",
          physics: 60,
          chemistry: 65,
          math: 70
        },
        {
          id: 4,
          name: "Sara Johnson",
          physics: 95,
          chemistry: 90,
          math: 85
        },
        {
          id: 5,
          name: "Mike Johnson",
          physics: 70,
          chemistry: 75,
          math: 80
        },
        {
          id: 6,
          name: "Maggie Green",
          physics: 80,
          chemistry: 85,
          math: 90
        },
        {
          id: 7,
          name: "Tom Brown",
          physics: 75,
          chemistry: 80,
          math: 85
        },
        {
          id: 8,
          name: "Alex Wilson",
          physics: 90,
          chemistry: 95,
          math: 100
        },
        {
          id: 9,
          name: "Emily Davis",
          physics: 80,
          chemistry: 85,
          math: 90
        },
        {
          id: 10,
          name: "David Martin",
          physics: 70,
          chemistry: 75,
          math: 80
        }
      ];
      
    return (
        <div>
            <h1>Dashboard</h1>
            <LineChart
            width={1000}
            height={300}
            data={studentMarks}
            >
            <Line dataKey='physics' stroke="#8884d8"></Line>
            <Line dataKey='chemistry' stroke="#82ca9d"></Line>
            <Line dataKey='math'></Line>
            <XAxis dataKey="name" />
          <YAxis />
            <Tooltip/>
            <Legend/>
            </LineChart>
        </div>
    );
};

export default Dashboard;