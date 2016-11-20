module.exports = {
	  entry: './js/app.js', //主程序的入口文件
    //   打包以后的文件的路径   webpack -p 打包
  output: {
    path: "./dist/",  // 路径
    publicPath : "/abc/",  //根目录   配合webpack-dev-server一块使用的
    filename: 'bundle.js'  //文件的名字
  },
  module:{
	loaders:[{
		test:/\.js$/,
		loader:'babel?presets=react'
    }]
  }
}


// localhost/a.php?a = c &  d =f