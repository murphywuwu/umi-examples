import { Menu } from 'antd';

export default (props) => {
  /*    
   * ["/"]根节点被所有节点共享,因此根节点生成的布局也被所有h叶子节点所共享
   * [":x"]像这种共享的结点,也可生成共享的布局，并被所有叶子节点所共享(和其上级共享节点以及根节点形成嵌套布局)
   *           [          "/"          ]
   *            |          |         |
   *     ["/:animal"]  ["/list"]  [ "/users" ]
   *           |                      |
   *  ["/:animal/animal"]         ["/users/posts"]
   *                                  |
   *                              ["/users/posts/:post"]
   *                                  |
   *                              ["/users/posts/:post/comment"]
   *
   */ 
  return (
    <div>
      {/*    * 配置菜单，可根据取到的props.param.animal的值动态渲染菜单 */}
      <header>小动物</header>
      <hr/>
      { props.children }
    </div>
  )
}