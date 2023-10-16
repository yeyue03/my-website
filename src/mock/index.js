import Mock from "mockjs";

Mock.setup({
  timeout: 100
})

Mock.mock('/user/menuList', () => {
  return Mock.mock({
    "success": true,
    "code": 200,
    "message": "操作成功",
    "data": [
      {
        name: '首页',
        path: '/home',
        children: []
      },
      {
        name: '常用功能',
        path: '',
        children: []
      },
      {
        name: '图表',
        path: '',
        children: []
      },
      {
        name: '游戏',
        path: '',
        children: [
          {
            name: '井字棋',
            path: '/tictactoe',
          }
        ]
      },
      {
        name: '关于我们',
        path: '/about',
        children: []
      }
    ]
  })
})