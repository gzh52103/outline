import { useEffect, useRef } from 'react'
import logo from './logo.svg';
import './App.css';
import home from '@/assets/home.png'

// 引用echarts（全局引入）
import * as echarts from 'echarts'; // echarts没有默认导出

console.log('home', home);

function App() {
  const charts = useRef()
  useEffect(() => {
    var myChart = echarts.init(charts.current);

    const option = {
      title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: '半径模式',
          type: 'pie',
          radius: [20, 140],
          center: ['25%', '50%'],
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5
          },
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            { value: 40, name: 'rose 1' },
            { value: 33, name: 'rose 2' },
            { value: 28, name: 'rose 3' },
            { value: 22, name: 'rose 4' },
            { value: 20, name: 'rose 5' },
            { value: 15, name: 'rose 6' },
            { value: 12, name: 'rose 7' },
            { value: 10, name: 'rose 8' }
          ]
        },
        {
          name: '面积模式',
          type: 'pie',
          radius: [20, 140],
          center: ['75%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5
          },
          data: [
            { value: 30, name: 'rose 1' },
            { value: 28, name: 'rose 2' },
            { value: 26, name: 'rose 3' },
            { value: 24, name: 'rose 4' },
            { value: 22, name: 'rose 5' },
            { value: 20, name: 'rose 6' },
            { value: 18, name: 'rose 7' },
            { value: 16, name: 'rose 8' }
          ]
        }
      ]
    };

    myChart.setOption(option)
  }, [charts]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={home} className="App-logo" alt="logo" />
        <img src={require("./assets/mine_active.png").default} alt="mine" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div ref={charts}></div>
    </div>
  );
}

export default App;
