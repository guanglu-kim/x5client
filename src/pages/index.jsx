import React, { useState } from 'react';
import styles from './index.less';
import { Row, Col, Button } from 'antd';
import { BookOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import Book from './components/book';
import Home from './components/home';
import My from './components/my';

export default () => {
  // hooks

  const [state, setState] = useState({ tab: `home` });

  // components

  function Content() {
    switch (state.tab) {
      case `book`:
        return <Book />;
      case `home`:
        return <Home />;
      case `my`:
        return <My />;
      default:
        return <React.Fragment />;
    }
  }
  return (
    <div className={styles.main}>
      <div style={{ flex: 1 }}>
        <Content />
      </div>

      <Row className={styles.row}>
        <Col span={8}>
          <Button
            type="text"
            className={styles.button}
            onClick={() => setState({ ...state, tab: `book` })}
          >
            <BookOutlined
              style={{ color: state.tab === `book` ? `#ff6666` : `black` }}
            />
            书架
          </Button>
        </Col>
        <Col span={8}>
          <Button
            type="text"
            className={styles.button}
            onClick={() => setState({ ...state, tab: `home` })}
          >
            <HomeOutlined
              style={{ color: state.tab === `home` ? `#ff6666` : `black` }}
            />
            首页
          </Button>
        </Col>
        <Col span={8}>
          <Button
            type="text"
            className={styles.button}
            onClick={() => setState({ ...state, tab: `my` })}
          >
            <UserOutlined
              style={{ color: state.tab === `my` ? `#ff6666` : `black` }}
            />
            我的
          </Button>
        </Col>
      </Row>
    </div>
  );
};
