import React from 'react';
import { Input, Button } from 'antd';

export default function Page() {
  return (
    <div>
      <Input placeholder="请输入账号" />
      <Input placeholder="请输入密码" />
      <Button block>登录</Button>
    </div>
  );
}
