/**
 * Routes:
 *   - ./routes/PrivateRoute.js
 */
import router from 'umi/router';
/* 
 * 约定式的通过 yaml 注释添加权限路由(注意路径配置)
*/
export default () =>
  <>
    <h1>/list</h1>
    <button onClick={() => {
      router.push('/list');
    }}>test push to self</button>
  </>
