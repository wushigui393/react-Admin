import { memo, useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';
import { useG2Context } from '@/views/Visualization/G2View';
// 自定义 Transform 类型
type Transform = {
  type: string;
  [key: string]: any; // 允许其他可选属性
};

// 定义组件的 props 类型
type G2Props = {
  // data: any[];
  chartConfig: {
    width: number;
    height: number;
  };
  encodeConfig: {
    x: string;
    y: string;
    color: string;
  };
  transformConfig:Transform;
  interactionConfig: {
    type: string;
    options: { background: boolean };
  };
};

// 定义 useG2Context 返回值的类型
type G2ContextType = {
  chartData?: any[]; // 假设 chartData 是数组类型，可按需调整
};

const G2 = memo((props:G2Props ) => {
    const { width, height } = props.chartConfig;

  // 使用 useRef 来引用图表容器
  const chartContainerRef = useRef<HTMLDivElement>(null);
  // 使用 useRef 来保存 Chart 实例
  const chartRef = useRef<Chart | null>(null);
  const { chartData = [] } = useG2Context() as G2ContextType;

  useEffect(() => {
    if (chartContainerRef.current) {
      // 创建 Chart 实例
      const chart = new Chart({ 
        container: chartContainerRef.current,
        width: width,
        height:height
       });
      chartRef.current = chart;
      chart
        .interval()
        .data(chartData)
        // 应用从父组件传递的编码配置
        .encode('x', props.encodeConfig.x)
        .encode('y', props.encodeConfig.y)
        .encode('color', props.encodeConfig.color)
        // 应用从父组件传递的变换配置
        .transform(props.transformConfig)
        // 应用从父组件传递的交互配置
        .interaction(props.interactionConfig.type, props.interactionConfig.options);
        
      // 渲染图表
      chart.render();
    }

    // 组件卸载时销毁图表
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [props.data]);

  return (
    <div >
      <div style={{width:width,height:height}} ref={chartContainerRef} />
    </div>
  );
});

export default G2;