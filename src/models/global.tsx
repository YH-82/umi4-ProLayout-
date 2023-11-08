// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  return {
    name,
    setName,
    test: <div style={{ color: 'red' }}>哈哈哈哈</div>
  };
};

export default useUser;
