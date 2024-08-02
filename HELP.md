## 项目结构

src/
├── api/                     # 存放 API 接口相关文件
│   ├── config.js            # API 配置文件
│   ├── index.js             # API 接口的入口文件
│   └── modules/             # 存放不同模块的 API 接口文件
│       ├── auth.js          # 用户认证相关 API 接口
│       └── xxx.js           # 其他（xxx）相关 API 接口
│
├── assets/                  # 存放静态资源文件
│   ├── fonts/               # 存放字体文件
│   ├── images/              # 存放图片文件
│   └── styles/              # 存放样式文件
│       ├── base.scss        # 全局基础样式
│       ├── variables.scss   # 全局变量样式
│       └── mixins/          # 存放 SCSS 混合
│
├── components/              # 存放全局组件
│   ├── common/              # 存放通用组件
│   ├── layout/              # 存放布局组件
│   └── ui/                  # 存放 UI 组件
│
├── router/                  # 存放路由相关文件
│   ├── index.js             # 路由配置文件
│   └── middleware/          # 存放路由中间件文件
│
├── store/                   # 存放 Vuex 状态管理相关文件
│   ├── index.js             # Vuex Store 的入口文件
│   └── modules/             # 存放不同模块的 Vuex Store 文件
│       ├── auth.js          # 用户认证相关 Vuex Store
│       └── xxx.js           # 其他（xxx）相关 Vuex Store
│   └── plugins/             # 存放 Vuex 插件
│       └── logger.js        # 已启用插件
│
├── utils/                   # 存放工具类相关文件
│   ├── helpers/             # 存放通用工具类
│   ├── services/            # 存放服务相关类文件
│   └── validators/          # 存放表单验证相关类文件
│   └── constants.js         # 存放常量文件
│
├── views/                   # 存放视图文件
│   ├── auth/                # 存放用户认证相关视图
│   ├── xxx/                 # 存放其他（xxx）相关视图
│   └── dashboard.vue        # 控制面板视图
│
├── App.vue                  # 应用程序入口文件
├── main.js                  # 使用程序入口文件
└── router.js                # 路由配置文件的入口文件
