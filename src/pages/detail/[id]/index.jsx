import React from 'react';
import p1 from '@/images/p1.jpg';
import p2 from '@/images/p2.jpg';
import p3 from '@/images/p3.jpg';
import p4 from '@/images/p4.jpg';
import { Button } from 'antd';
import {history} from 'umi'

export default function Page(){
    return <div>
        <div style={{display:`flex`,justifyContent:`space-between`}}>
            <Button onClick={()=>{history.push('/')}}>返回</Button>
            <p>第1话</p>
            <Button>全集</Button>
        </div>
        <img src={p1} style={{width:`100%`}}/>
        <img src={p2} style={{width:`100%`}}/>
        <img src={p3} style={{width:`100%`}}/>
        <img src={p4} style={{width:`100%`}}/>
    </div>
}
