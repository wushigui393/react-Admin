/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-18 15:54:42
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-23 09:26:19
 * @FilePath: \react-xs-admin\src\views\Functions\WaterMark\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { memo } from "react";
import React from 'react';
import { Watermark } from 'antd';

const Text=()=>{
    return(
        <div>
            我是水印
        </div>
    )
}
const WaterMark=memo(()=>{
    return(
        <Watermark content="我是水印">
            <div style={{ height: 500 }} >
                <Text/>
            </div>
        </Watermark>
    )

})
export default WaterMark