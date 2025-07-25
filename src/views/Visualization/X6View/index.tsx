import React from "react";
import { memo } from "react";
import {Card} from 'antd';
import G2 from "@/components/G2";
import { Transform } from '@antv/g2';



const g2Style={
    width:'100%',
    height:'100%',
}
const G2View=memo(()=>{
    const chartConfig = {
        width: 800,
        height: 500
    };
    const encodeConfig = {
        x: '月份',
        y: '月均降雨量',
        color: 'name'
    };
    const transformConfig: Transform = { type: 'stackY' };
    const interactionConfig = {
        type: 'elementHighlight',
        options: { background: true }
    };
    const chartData=[
        { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
        { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
        { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
        { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
        { name: 'London', 月份: 'May', 月均降雨量: 47 },
        { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
        { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
        { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
        { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
        { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
        { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
        { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
        { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
        { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
        { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
        { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
    ]   
    return (<Card title="基础图表"  style={g2Style}>
        <G2   data={chartData}
        chartConfig={chartConfig}
        encodeConfig={encodeConfig}
        transformConfig={transformConfig}
        interactionConfig={interactionConfig} />
    </Card>)
})
export default G2View