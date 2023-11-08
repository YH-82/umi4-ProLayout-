// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '123' };
}

// export const layout = () => {
//   return {
//     logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
//     title: '1123',
//     menu: {
//       locale: false,
//     },
//     request: async (params, defaultMenuData) => {
//       // initialState.currentUser 中包含了所有用户信息
//       // const menuData = await fetchMenuData();
//       console.log('defaultMenuData', defaultMenuData);

//       return defaultMenuData;
//     },
//   };
// };
