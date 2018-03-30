##717食品
  1、路由
        1、 创建router.config.js文件，进行搭建路由，也会有个别路由含有权限管理authorization
        2、 进行创建routerss组件封装公共路由，进行调用，首先判断是否是权限管理或没有登录，就会重定向到登录页面。否则返回的是每个路由所对应的显示组件。在调用时，利用this.props进行得到数据，把this.props得到的数据进行传下去，达到只要有数据就会进行调用
  2、页面
        1、 首页
            1.1、头部：给以获取焦点事件，进行跳转到search页面，this.props.history.push('/index/search')
            1.2、banner部分：创建个Swiper组件，下载swiper并引入，在Home组件中进行引入
            1.3、在列表部分，做接口进行请求数据，进行做接口请求数据：
                在utils/http中进行封装fetch请求方法，用于post/get
                在server.js进行做接口处理进行请求数据
                创建组件进行渲染数据，点击商品进行跳转到详情页，点击购物车添加购物车（阻止事件冒泡），渲染时下react-lazyload进行懒加载
                点击购物车时，进行判断是否有cookie，如果有就把商品的id和这个商品的数据以及cookie传到后台，在后台进行解开秘钥 require('jsonwebtoken').verify()
                解密之后把数据进行写入文件里
                添加成功后 把整个数据进行添加到store中
        2、分类列表页
            2.1、数组进行遍历渲染，给以点击事件，根据下标index请求不同的数据
            2.2、点击时加上样式，在state中定义个初始值activeIndex，在点击时改变state，使activeIndex与index是否相同，相同时加上样式，否则为空
        3、搜索页
            3.1、点击搜索，得到value，进行跳转页面
            3.2、得到本地存储的值，判断value是否存在，不存在就再保存在本地存储
            3.3、最近搜索：得到本地存储的值，把他渲染到页面
            3.4、点击清空，localStorage.removeItem()进行清空
        4、详情页
        5、购物车
            5.1、判断是否是登录状态
            5.2、从store拿到数据，进行渲染数据
            5.3、点击加减时，把数据的count和id传过去，在reducer中进行操作
            5.4、点击选中，也把选中状态selected以及id传过去，也在reducer进行操作
            5.5、编辑删除，再把更新后的数据再次渲染
            5.6、进行结算
        6、我的
            6.1、登录
                点击登录，把username和password，进行传到后台
                设置初始信息，用于记录是否登录成功信息（含有token字段和success字段），得到传过来的username和password
                进行读取user.json文件，与得到的username和password比较，重置初始信息，登录成功，改变success的值
                根据seccss的值进行jwt.sign()进行加上秘钥，赋给token字段，把token字段进行返回给前端
                在login页面得到返回的的token。使用cookie进行保存秘钥
                进行跳转页面
            6.2、注册
                点击注册，获取username和password，进行传到后台
                读取user.json文件，得到传过来的username和password，进行写入文件，并返回注册成功的信息
                在注册页面根据注册成功的信息进行跳转路由到登录页面






        
      



