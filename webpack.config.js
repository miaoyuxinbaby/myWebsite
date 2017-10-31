/**
 * @author  wuyunfei
 * @date    2017-9-26
 * @version V 1.0
 * @email   1151815317@qq.com
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: {
		index: __dirname + '/src/js/index.js',
		myComponents: __dirname + '/src/js/myComponents.js',
		resume: __dirname + '/src/js/resume.js',
		fullpageDemo: __dirname + '/src/js/fullpageDemo.js',
		numScroll: __dirname + '/src/js/numScroll.js',
		table: __dirname + '/src/js/table.js',
		fixedSliderRight: __dirname + '/src/js/fixedSliderRight.js',
		bgFollowMouse: __dirname + '/src/js/bgFollowMouse.js',
		notice: __dirname + '/src/js/notice.js',
		aboutme: __dirname + '/src/js/aboutme.js'
	},
	output: {
		path: __dirname + '/build',  // 打包入口的路径
		publicPath: "/myWebsite/build/",   // 公共资源的路径
		// publicPath: "http://localhost:8086/myWebsite/build/",   // 公共资源的路径
		filename: 'js/[name].js'
	},
	// devServer: {
	//     historyApiFallback: true,//不跳转
	//     port: '8091',
	//     hot: true,
	//     inline: true//实时刷新
	//   }, 
	module: {
		rules: [
			{            
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: __dirname + '/node_modules',    
				include: __dirname + '/src/js',
				options: {
					presets: ['env']     // latest是ES2015以后的都转换
				}
			},
			{
				test: /\.html$/,
		      	use: {loader: 'html-loader'}
			},
			{
				test: /\.(less|css)$/,
				use: ExtractTextPlugin.extract([
					// 'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [require('autoprefixer')()]
						}
					},
					'less-loader'
				])
			},
			{
				test: /\.(png|jpg|jpeg|gif|woff|svg|svgz|eot|woff2|ttf)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							name: 'images/[name]-[hash:5].[ext]'
						}
					}
				]
			}	
		]
	},
	plugins: [
		// new webpack.ProvidePlugin({ //加载jq
	 //      $: 'jquery'
	 //    }),
	    new webpack.optimize.CommonsChunkPlugin('vendors'),  // 第二个参数是提取的数组，不写则默认所有
		new ExtractTextPlugin('css/[name].css'),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/index.html',
            template:'./src/html/index.html',  
            inject:true,
            chunks: ['vendors', 'index']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/resume.html',
            template:'./src/html/resume.html',  
            inject:true,
            chunks: ['vendors', 'resume']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/myComponents.html',
            template:'./src/html/myComponents.html',  
            inject:true,
            chunks: ['vendors', 'myComponents']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/fullpage-demo.html',
            template:'./src/html/fullpage-demo.html',  
            inject:true,
            chunks: ['vendors', 'fullpageDemo']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/numScroll.html',
            template:'./src/html/numScroll.html',  
            inject:true,
            chunks: ['vendors', 'numScroll']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/table.html',
            template:'./src/html/table.html',  
            inject:true,
            chunks: ['vendors', 'table']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/fixedSliderRight.html',
            template:'./src/html/fixedSliderRight.html',  
            inject:true,
            chunks: ['vendors', 'fixedSliderRight']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/bgFollowMouse.html',
            template:'./src/html/bgFollowMouse.html',  
            inject:true,
            chunks: ['vendors', 'bgFollowMouse']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/notice.html',
            template:'./src/html/notice.html',  
            inject:true,
            chunks: ['vendors', 'notice']
        }),
        new htmlWebpackPlugin({          
            favicon:'./src/images/favicon.ico',
            filename:'/aboutme.html',
            template:'./src/html/aboutme.html',  
            inject:true,
            chunks: ['vendors', 'aboutme']
        })
	]
}