import React, { useState } from 'react';
import styles from './style.less';
import img from '@/images/test.jpg';
import { Button } from 'antd';

export default function Page() {
  // hooks
  const [state, setState] = useState({
    list: [
      {
        img: img,
        title: `保镖`,
        desc: `第一话`,
      },
      {
        img: img,
        title: `保镖`,
        desc: `第一话`,
      },
      {
        img: img,
        title: `保镖`,
        desc: `第一话`,
      },
    ],
  });
  return (
    <div className={styles.main}>
      {state.list.map((item, key) => {
        return (
          <div key={key} className={styles.item}>
            <img src={item.img} className={styles.img} />
            <div className={styles.content}>
              <span className={styles.title}> {item.title}</span>
              <span className={styles.desc}> {item.desc}</span>
            </div>
            <div className={styles.button}>
              <Button>续看</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
