import React from 'react';
import { Carousel, Space, Button } from 'antd';
import img1 from '@/images/1.jpg';
import img2 from '@/images/2.jpg';
import img3 from '@/images/3.jpg';
import img4 from '@/images/4.jpg';
import img5 from '@/images/5.jpg';
import banner from '@/images/banner.png';
import b1 from '@/images/b1.png';
import b2 from '@/images/b2.png';
import b3 from '@/images/b3.png';
import b4 from '@/images/b4.png';

const contentStyle = {
  width: `100%`,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Page() {
  return (
    <div style={{ backgroundColor: `#fff`, marginBottom: 5 }}>
      <Carousel autoplay style={{ height: 215 }}>
        <img style={contentStyle} src={img1} />
        <img style={contentStyle} src={img2} />
        <img style={contentStyle} src={img3} />
        <img style={contentStyle} src={img4} />
        <img style={contentStyle} src={img5} />
      </Carousel>
      <img
        src={banner}
        style={{
          width: `100%`,
          position: `relative`,
          left: `0px`,
          top: `-30px`,
        }}
      />
      <div
        style={{
          backgroundColor: `#fff`,
          height: 70,
          position: `relative`,
          left: `0px`,
          top: `-30px`,
          display: `flex`,
        }}
      >
        <Button type={`text`} onClick={() => console.log(`click`)}>
          <img src={b1} style={{ width: 54 }} />
          <br />
          充值
        </Button>
        <Button type={`text`} onClick={() => console.log(`click`)}>
          <img src={b2} style={{ width: 54 }} />
          <br />
          排行
        </Button>
        <Button type={`text`} onClick={() => console.log(`click`)}>
          <img src={b3} style={{ width: 54 }} />
          <br />
          免费
        </Button>
        <Button type={`text`} onClick={() => console.log(`click`)}>
          <img src={b4} style={{ width: 54 }} />
          <br />
          分类
        </Button>
      </div>
    </div>
  );
}
