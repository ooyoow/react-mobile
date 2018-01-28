const path = require('path');
const rootPath = path.resolve(__dirname, '../');
module.exports = {
  entry: path.resolve(rootPath, './src/index.js'), // string
  output: {
    path: path.resolve(rootPath, 'dist'), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: 'app.js', // string
    // 「入口分块(entry chunk)」的文件名模板（出口分块？）

    publicPath: '/assets/', // string
    // 输出解析文件的目录，url 相对于 HTML 页面

    library: 'MyLibrary', // string,
    // 导出库(exported library)的名称

    libraryTarget: 'umd' // 通用模块定义
    // 导出库(exported library)的类型

    /* 高级输出配置（点击显示） */
  },
  module: {
    rules: [
      // 模块规则（配置 loader、解析器等选项）

      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      }
    ]
  },
  resolve: {
    // 解析模块请求的选项
    // （不适用于对 loader 解析）

    modules: ['node_modules', path.resolve(__dirname, 'app')],
    // 用于查找模块的目录

    extensions: ['.js', '.json', '.jsx', '.css'],
    // 使用的扩展名

    alias: {
      // 模块别名列表
      // module: 'new-module',
      // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"
      // 'only-module$': 'new-module',
      // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"
      // module: path.resolve(__dirname, 'app/third/module.js')
      // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
      // 模块别名相对于当前上下文导入
    }
  },
  devtool: 'source-map', // enum
  // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
  // 牺牲了构建速度的 `source-map' 是最详细的。

  context: path.resolve(rootPath, './src'), // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

  target: 'web', // 枚举
  // externals: ['react'],
  plugins: [
    // ...
  ]
};
