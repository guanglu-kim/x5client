import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import img from '@/images/test.jpg';

export default function Page() {
  const [state, setState] = useState({
    subject: [
      {
        title: `大家都在看`,
        list: [
          {
            img: img,
            title: `闺蜜的姐妹`,
            desc: `更新到26话`,
          },
          {
            img: img,
            title: `闺蜜的姐妹`,
            desc: `更新到26话`,
          },
          {
            img: img,
            title: `闺蜜的姐妹`,
            desc: `更新到26话`,
          },
          {
            img: img,
            title: `闺蜜的姐妹`,
            desc: `更新到26话`,
          },
          {
            img: img,
            title: `闺蜜的姐妹`,
            desc: `更新到26话`,
          },
          {
            img: img,
            title: `闺蜜的姐妹`,
            desc: `更新到26话`,
          },
        ],
      },
    ],
  });
  return (
    <div style={{ backgroundColor: `#fff` }}>
      {state.subject.map((item, key) => {
        return (
          <div key={key}>
            <div style={{ display: `flex`, justifyContent: `space-between` }}>
              <div
                style={{
                  textAlign: `center`,
                  lineHeight: `30px`,
                  paddingLeft: `10px`,
                }}
              >
                {item.title}
              </div>
              <Button type="text">更多</Button>
            </div>
            <Row>
              <Col
                span={8}
                style={{ display: `flex`, flexDirection: `column` }}
              >
                <img
                  src={item.list[0].img}
                  style={{ width: `110px`, padding: 5 }}
                />
                <div style={{ paddingLeft: 5 }}>{item.list[0].title}</div>
                <div style={{ fontWeight: 100, fontSize: 12, paddingLeft: 5 }}>
                  {item.list[0].desc}
                </div>
              </Col>
              <Col
                span={8}
                style={{ display: `flex`, flexDirection: `column` }}
              >
                <img
                  src={item.list[0].img}
                  style={{ width: `110px`, padding: 5 }}
                />
                {item.list[1].title}
              </Col>
              <Col
                span={8}
                style={{ display: `flex`, flexDirection: `column` }}
              >
                <img
                  src={item.list[0].img}
                  style={{ width: `110px`, padding: 5 }}
                />
                {item.list[2].title}
              </Col>
            </Row>
            <Row>
              <Col
                span={8}
                style={{ display: `flex`, flexDirection: `column` }}
              >
                <img
                  src={item.list[0].img}
                  style={{ width: `110px`, padding: 5 }}
                />
                {item.list[3].title}
              </Col>
              <Col
                span={8}
                style={{ display: `flex`, flexDirection: `column` }}
              >
                <img
                  src={item.list[0].img}
                  style={{ width: `110px`, padding: 5 }}
                />
                {item.list[4].title}
              </Col>
              <Col
                span={8}
                style={{ display: `flex`, flexDirection: `column` }}
              >
                <img
                  src={item.list[0].img}
                  style={{ width: `110px`, padding: 5 }}
                />
                {item.list[5].title}
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}
