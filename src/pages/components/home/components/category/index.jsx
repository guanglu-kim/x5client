import React, { useState } from 'react';
import img from '@/images/test.jpg';
import { Button } from 'antd';

export default function Page() {
  // hooks
  const [state, setState] = useState({
    list: [
      {
        img: img,
        title: `逆天神剑`,
        desc: `泱泱天道，强者无敌，上古丹法，照破山河万朵，焚天宝剑，湮灭宇宙轮回，修罗`,
      },
    ],
  });

  // components
  function Content(props) {
    const { item } = props;
    return (
      <div style={{ display: `flex` }}>
        <img src={item.img} style={{ width: `88px`, padding: 5 }} />
        <div style={{ flex: 1 }}>
          <div style={{ paddingLeft: 5 }}>{item.title}</div>
          <div style={{ fontWeight: 100, fontSize: 12, paddingLeft: 5 }}>
            {item.desc}
          </div>
        </div>
        <Button>立即阅读</Button>
      </div>
    );
  }

  return (
    <div style={{ background: `#fff` }}>
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        <div>免费专区</div>
        <div>更多</div>
      </div>
      {state.list.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <Content {...{ item: item }} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
