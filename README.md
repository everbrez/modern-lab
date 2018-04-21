# modern-lab
## 项目工具
- sass
- git
- webpack

## 项目安装
### 请确保电脑已经安装nodeJS以及git，安装地址：
[node](http://nodejs.cn/download/)
[git](https://git-scm.com/downloads)
安装完成之后打开gitBash(Windows)或者terminal.app(mac)
将命令行的位置移动至目标文件夹：
```
cd 目标文件位置(XXXX/XXX/modern-lab)
```
### 初始化git
首先使用一下命令初始化git
```
git init
```
如果还没有配置用户名和邮箱的可以使用一下命令配置：
```
git config user.name 'your name'
git config user.email 'yourEmail@example.com'
```
接下来添加远程库
```
git remote add origin git@github.com:dengyf5/modern-lab.git
```
然后使用pull命令将仓库的文件下载到本地：
```
git pull
```
### 初始化npm
将github上的代码同步到本地之后，使用一下命令初始化npm
```
cnpm install
```
也可以使用一下命令：
```
npm install
```
> 中国大陆推荐使用第一种方法

至此，项目同步完毕。

## 项目结构
项目结构主要是
modern-lab
├── README.md
├── dist
├── node_modules
├── package-lock.json
├── package.json
├── src
│   ├── images
│   │   └── icon
│   ├── index.js
│   ├── js
│   ├── style
│   │   ├── column.scss
│   │   ├── common.scss
│   │   ├── content.scss
│   │   ├── index.scss
│   │   ├── reset.scss
│   │   ├── sprites.scss
│   │   └── style.scss
│   └── view
│       ├── column.html
│       ├── content.html
│       └── index.html
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js

#### dist: 文件输出
#### node_modules: 模块所在文件夹
#### src: 源码地址,开发的html、js、css、images文件都在此文件夹
    **其中图片images文件夹区分为icon文件夹，如需使用icon文件里的图片，请看下方的icon目录**
#### 其他: 配置以及一些包的信息

## webpack的使用
### 开发中
使用以下命令进行开发
```
npm start
```
如果需要调试不同的页面在网页地址更改即可，如：
```
默认： http://localhost:8080/
栏目页： http://localhost:8080/column.html
内容页：http://localhost:8080/content.html
```
**由于使用了热更新，所以只需要更改你的源代码，网页就会自动更新**
### 输出最终文件
使用以下命令输出最后的打包的文件
```
npm run build
```
使用该命令之后，打包后的文件就会生成到dist文件夹中

### icon
此项目的icon使用sprites插件生成雪碧图，具体用法如下
- 将icon图片放到src/images/icon/文件夹之下
- 在你的sass(.scss)文件上方添加`@import 'sprites'`
- 然后在你需要使用icon的选择器使用`@include sprite($icon-name)`
实例：
```scss
//文件： tag.png
@import 'sprites';
.tag {
    @include sprite();
}
```
**已经自动为.tag设置width、height以及background**

## 上传代码至GitHub
#### 首先需要添加ssh密钥(已经添加过请跳过这一步)
```
ssh-keygen -t rsa -C "youremail@example.com"
```
然后将密钥添加至GitHub设置中，详情请看：[https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374385852170d9c7adf13c30429b9660d0eb689dd43a000]

#### 使用push上传代码
```
git push
```
## 其他
### 首页效果
现代化学实验与技术首页_ hover效果文字说明
1.	Nav：
正常：#4A78A8
Hover：#365479

2.	Content 1：
正常：无呈现带三角的横线
Hover：呈现，如图

3.	Content 2卡片图：
正常：设备无变化
Hover：设备放大，显示突出效果

4.	Content 3 icon：
正常：icon无动作
Hover：icon轻微抖动，以吸引注意力

5.	Footer文字：
正常：黑色#000000
Hover：#4A78A8
