import React, { useState } from 'react';
import styles from './style.less';
import { Radio } from 'antd';
import Collect from './components/collect';
import History from './components/history';

export default function Page() {
  // hooks
  const [state, setState] = useState({ tab: `collect` });

  // components
  function Content() {
    switch (state.tab) {
      case `collect`:
        return <Collect />;
      case `history`:
        return <History />;
      default:
        return <React.Fragment />;
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Radio.Group
          defaultValue="collect"
          buttonStyle="solid"
          onChange={e => setState({ ...state, tab: e.target.value })}
        >
          <Radio.Button value="collect">收藏</Radio.Button>
          <Radio.Button value="history">历史</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ flex: 1 }}>
        <Content />
      </div>
    </div>
  );
}
