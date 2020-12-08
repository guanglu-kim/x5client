import React from 'react';
import styles from './style.less';
import { Button } from 'antd';

export default function Page() {
  return (
    <div className={styles.main}>
      <div>
        您还没有收藏记录
        <br />
        <Button>去找几本看看</Button>
      </div>
    </div>
  );
}
