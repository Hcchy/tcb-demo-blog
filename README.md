#  博客小程序案例

## 自动部署
[tcb-cli初始化文档](https://github.com/TencentCloudBase/tcb-cli/blob/master/docs/init.md)

```javascript
npm i -g tcb-cli

tcb init TencentCloudBase/tcb-demo-blog
```


## 手动部署
### 下载或clone代码仓库
```javascript
git clone https://github.com/TencentCloudBase/tcb-demo-blog.git
```

### 配置小程序 id

```javascript
// project.config.json
{
    "appid": "",
}
```

### 配置环境 id

如果不填，则表示使用默认环境
```javascript
// client/app.js

wx.cloud.init({
    env: '', // 前往云控制台获取环境id
    traceUser: true
});
```

### 安装云函数依赖

```javascript
// 安装依赖
cd cloud/functions/addblog/
npm install --production
```

### 上传云函数
在IDE中，右键云函数对应的文件夹，点击“上传并部署”菜单

### 体验
点击小程序开发IDE中的“预览”，用微信扫一扫即可体验