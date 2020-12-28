import React, { useState } from 'react';
import { Button } from 'antd';
import { history } from 'umi';
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
      {
        title: `热门推荐`,
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
      {
        title: `新品上架`,
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
      {
        title: `经典必看`,
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
      {
        title: `猜你喜欢`,
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

  // components
  function Content(props) {
    const { item } = props;
    return (
      <div
        onClick={() => {
          history.push(`/detail/1`);
        }}
      >
        <img src={item.img} style={{ width: `110px`, padding: 5 }} />
        <div style={{ paddingLeft: 5 }}>{item.title}</div>
        <div style={{ fontWeight: 100, fontSize: 12, paddingLeft: 5 }}>
          {item.desc}
        </div>
      </div>
    );
  }
  return (
    <div>
      {state.subject.map((item, key) => {
        return (
          <div
            key={key}
            style={{ marginBottom: 5, background: `#fff`, paddingBottom: 5 }}
          >
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
            <div style={{ display: `flex`, justifyContent: `space-around` }}>
              <Content {...{ item: item.list[0] }} />
              <Content {...{ item: item.list[1] }} />
              <Content {...{ item: item.list[2] }} />
            </div>
            <div style={{ display: `flex`, justifyContent: `space-around` }}>
              <Content {...{ item: item.list[3] }} />
              <Content {...{ item: item.list[4] }} />
              <Content {...{ item: item.list[5] }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
