export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
    }],
  ],
  /* 此配置项存在时，则不会对src/pages目录做约定式的解析 */
  routes: [
    {
      path: '/',
      exact: true,
      component: 'a',
    },
    {
      path: '/list',
      component: 'b',
      /* 权限路由：生成非共享布局节点供/list节点使用 */
      Routes: ['./routes/PrivateRoute.js']
    },
    {
      /* 路由重定向 */
      path: '/redirect',
      redirect: '/users/guanguan',
    },
    {
      path: '/users/:name',
      exact: true,
      component: 'c',
    },
    {
      component: 'd',
    },
  ],
};
