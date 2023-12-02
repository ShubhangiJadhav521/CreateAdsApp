import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Box, Typography, Toolbar } from '@mui/material';
import "./dashboard.css";

const DoughnutChart = () => {
  const [chartData, setChartData] = useState([40, 35, 25]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const handleSelect = (e) => {
    let newData;
    if (e.target.value === '1') {
      newData = [45, 40, 30];
    } else if (e.target.value === '2') {
      newData = [30, 50, 45];
    } else if (e.target.value === '3') {
      newData = [40, 40, 20];
    } else {
      newData = [40, 35, 25];
    }

    setChartData(newData);
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
  };

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const mychartRef = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(mychartRef, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female', 'Unknown'],
        datasets: [
          {
            data: chartData,
            backgroundColor: ['rgba(254,130,58,255)', 'rgba(0,150,255,255)', 'rgba(50,60,70,255)']
          }
        ]
      },
      options: {
        cutout: '60%',
        plugins: {
          legend: {
            position: 'right',
            labels: {
              padding: 20,
              usePointStyle: false,
              generateLabels: function (chart) {
                const labels = chart.data.labels;
                const data = chart.data.datasets[0].data;
                const backgroundColor = chart.data.datasets[0].backgroundColor;

                return labels.map((label, index) => ({
                  text: `${data[index]} % ${label} `,
                  fillStyle: backgroundColor[index],
                  hidden: isNaN(data[index]) || data[index] === 0,
                  boxWidth: 20,
                  borderRadius: 3,
                  borderColor: 'rgba(0, 0, 0, 0)',
                  borderWidth: 0,
                  x: 20, // Left margin
                  line: { width: 20, align: 'start' },
                }));
              },
            },
          },
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData]);

  return (<>
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0' }}>
      <Typography variant="h6" id="tableTitle" component="div" >
        Ad Insight
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <select name="cars" id="cars" onChange={(e) => handleSelect(e)}>
          <option >Click</option>
          <option value="1">Matric1</option>
          <option value="2">Matric2</option>
          <option value="3">Matric3</option>
        </select>
        <HelpOutlineOutlinedIcon sx={{ color: '#e5e5e5' }} />
      </Box>
    </Toolbar>
    <hr />
    <div className='chartcontent' >
      <canvas ref={chartRef} className='chart' />;
    </div>
  </>
  )
};

export default DoughnutChart;
