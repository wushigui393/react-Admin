import React from 'react';
// 移除未使用的 ReactDOM 导入
import { PDFViewer } from '@react-pdf/renderer';
import PdfView from '@/components/PdfView';
import { memo } from 'react';

// 为组件添加返回类型定义
const Pdf: React.FC = memo(() => (
  // 修正语法错误，去掉 return 关键字，使用隐式返回
  <PDFViewer>
    <PdfView />
  </PDFViewer>
));

export default Pdf;