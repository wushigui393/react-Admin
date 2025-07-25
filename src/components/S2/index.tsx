import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { LayoutWidthType, S2DataConfig } from '@antv/s2';
import { SheetComponent, SheetComponentOptions } from '@antv/s2-react';
import '@antv/s2-react/dist/s2-react.min.css';
import insertCSS from 'insert-css';

// 定义 PALETTE_COLORS 类型
type PaletteColor = {
  limit: number;
  background: string;
};

const PALETTE_COLORS: PaletteColor[] = [
  { limit: 10, background: '#b8e1ff' },
  { limit: 20, background: '#b4d3fb' },
  { limit: 30, background: '#7daaff' },
  { limit: 40, background: '#5b8ff9' },
  { limit: 50, background: '#3d76dd' },
  { limit: 60, background: '#085ec0' },
  { limit: 70, background: '#085ec0cc' },
  { limit: 80, background: '#0047a5' },
  { limit: 90, background: '#00318a' },
  { limit: 100, background: '#001d70' },
];

// 明确参数类型
const getTargetColor = (value: string | number): string => {
  const numValue = Number(value);
  if (Number.isNaN(numValue)) {
    return PALETTE_COLORS[0].background;
  }
  const index = Math.floor(numValue / 10);
  return PALETTE_COLORS[Math.min(index, PALETTE_COLORS.length - 1)].background;
};

const PaletteLegend: React.FC = () => {
  return (
    <div className="palette-legend">
      <div className="palette-limit">0%</div>
      {PALETTE_COLORS.map((color) => (
        <span
          key={color.background}
          className="palette-color"
          style={{ background: color.background }}
        />
      ))}
      <div className="palette-limit">100%</div>
    </div>
  );
};

// 封装数据获取逻辑并添加错误处理
const fetchData = async (url: string): Promise<{ data: any[] }> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};

const S2: React.FC = () => {
  const [s2DataConfig, setS2DataConfig] = useState<S2DataConfig | null>(null);
  const [s2Options, setS2Options] = useState<SheetComponentOptions | null>(null);

  useEffect(() => {
    const main = async () => {
      try {
        const { data } = await fetchData('https://assets.antv.antgroup.com/s2/single-population-proportion.json');

        const newS2DataConfig: S2DataConfig = {
          fields: {
            rows: ['type', 'job'],
            columns: ['age', 'city'],
            values: ['count'],
            valueInCols: true,
          },
          meta: [
            { field: 'type', name: '类别' },
            { field: 'job', name: '职业' },
            { field: 'age', name: '年龄分布' },
            { field: 'city', name: '所在城市' },
            { field: 'count', name: '数值' },
          ],
          data,
        };

        const newS2Options: SheetComponentOptions = {
          width: 800,
          height: 600,
          tooltip: {
            enable: true,
            operation: {
              hiddenColumns: true,
            },
          },
          interaction: {
            selectedCellsSpotlight: false,
            hoverHighlight: false,
          },
          style: {
            layoutWidthType: LayoutWidthType.ColAdaptive,
            colCell: {
              hideValue: true,
            },
            dataCell: {
              width: 100,
            },
          },
          conditions: {
            text: [
              {
                field: 'count',
                mapping: (value: number) => ({
                  fill: value >= 50 ? '#fff' : '#282b32',
                }),
              },
            ],
            background: [
              {
                field: 'count',
                mapping: (value: number) => ({
                  fill: getTargetColor(value),
                }),
              },
            ],
          },
        };

        setS2DataConfig(newS2DataConfig);
        setS2Options(newS2Options);
      } catch (error) {
        console.error('Failed to initialize S2 component:', error);
      }
    };

    main();

    // 插入 CSS
    insertCSS(`
      .root{
        display: inline-block;
      }

      .palette-legend {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 8px;
      }

      .palette-color {
        width: 12px;
        height: 12px;
      }

      .palette-limit{
        font-size: 12px;
        color: rgb(94,94,94);
      }

      .palette-color + .palette-limit {
        margin-left: 5px;
      }

      .palette-limit + .palette-color {
        margin-left: 5px;
      }

      .antv-s2-header {
        margin:0px !important;
      }
    `);

    return () => {
      // 组件卸载时的清理逻辑
    };
  }, []);

  if (!s2DataConfig || !s2Options) {
    return <div>Loading...</div>;
  }

  return (
    <div className="root">
      <SheetComponent
        dataCfg={s2DataConfig}
        options={s2Options}
        sheetType="pivot"
        adaptive={false}
        header={{
          title: '单人群占比表',
          extra: <PaletteLegend />,
        }}
      />
    </div>
  );
};

export default S2;