import fetch from 'dva/fetch';
import { Server } from 'net';
/* umi规定src目录下的app.js为运行时配置文件 */
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

let authRoutes = null;
let serveRoutes = null;

/*
 * patchRoutes:用于运行时修改路由
 * tips: 支持修改routes就好，不要返回新的路由对象
 * 参数:
 * routes: Array, 路由配置
*/
export function patchRoutes(routes) {
  console.log('routes', routes);
  routes.forEach(element => {

    serveRoutes.map(sr => {
      if (element.path === sr.path) {
        sr.addRoutes.map(srItem => {
          const newRoute = {
            path: srItem.path,
            component: require('./pages' + srItem.path).default,
          };
          // 请求服务端根据响应，动态添加路由
          element.routes && element.routes.unshift(newRoute);
        });
      }
    });

    // authRoutes: { "/": {role: 'admin'} }
    // 请求服务端根据响应，动态给特定路由注入权限数据
    Object.assign(element,authRoutes[element.path] || {})
    element.routes &&
      element.routes.forEach(route => {
        Object.assign(route,authRoutes[element.path] || {})
      });
  });
  window.g_routes = routes;
}

/*
 * 用于改写整个应用render到dom树的方法
 * 参数:
 * oldRender: Function, 原始render方法，需至少被调用一次
 */
export function render(oldRender) {
  // 渲染应用之前做权限校验，不通过则跳转到登录页
  fetch('/api/auth_routes')
    .then(res => res.json())
    .then(ret => {
      authRoutes = ret;
      console.log('authRoutes', authRoutes)
      fetch('/api/routes')
        .then(res => res.json())
        .then(data => {
          serveRoutes = data;
          console.log('serveRoutes', serveRoutes);
          oldRender();
        });
    });
}
