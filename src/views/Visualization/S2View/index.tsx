import React from "react";
import { memo } from "react";
import {Card} from 'antd';
import S2 from "@/components/S2";


const g2Style={
    width:'100%',
    height:'100%',
}
const S2View=memo(()=>{
    return (<Card title="S2"  style={g2Style}>
        123
        {/* <S2    /> */}
    </Card>)
})
export default S2View
