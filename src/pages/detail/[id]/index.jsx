import React from 'react';
import p1 from '@/images/p1.jpg';
import p2 from '@/images/p2.jpg';
import p3 from '@/images/p3.jpg';
import p4 from '@/images/p4.jpg';
import { Button } from 'antd';
import { history } from 'umi';
import md5 from 'md5';

export default function Page() {
  function Pay() {
    const pid = `pid=973474`;
    const type = `type=alipay`;
    const no = `out_trade_no=1001`;
    const notifyUrl = `notify_url=http://39.102.36.212:5000/notify_url`;
    const returnUrl = `return_url=http://39.102.36.212/return_url`;
    const name = `name=vip`;
    const site = `sitename=漫画`;
    const money = `money=1`;

    const key = md5(
      `${money}&${name}&${notifyUrl}&${no}&${pid}&${returnUrl}&${site}&${type}` +
        `0C9CDF75E33F3A916D2C365572EAEC87`,
    );
    console.log(key);
    const sign = `sign=${key}`;

    const href =
      `http://youyunzf.cn/submit.php?${pid}&${type}` +
      `&${no}&${notifyUrl}&${returnUrl}&${name}&${money}&${site}&${sign}&sign_type=MD5`;
    console.log(href);
    return;
    window.location.href =
      `http://youyunzf.cn/submit.php?${pid}&${type}` +
      `&${no}&${notifyUrl}&${returnUrl}&${name}&${money}&${site}&${sign}&sign_type=MD5`;
  }
  return (
    <div>
      <div>
        <Button onClick={Pay}>支付</Button>
      </div>

      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          返回
        </Button>
        <p>第1话</p>
        <Button>全集</Button>
      </div>
      <img src={p1} style={{ width: `100%` }} />
      <img src={p2} style={{ width: `100%` }} />
      <img src={p3} style={{ width: `100%` }} />
      <img src={p4} style={{ width: `100%` }} />
    </div>
  );
}

/*
http://39.102.36.212/return_url?money=1&name=vip&out_trade_no=1001&pid=973474&trade_no=2020122314083598362&trade_status=TRADE_SUCCESS&type=alipay&sign=6b0e67865272667e5a88a0aa2c5b31c4&sign_type=MD5
*/