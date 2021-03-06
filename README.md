#  博客小程序案例

## 自动部署
敬请期待。


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
    env: '', // 前往云开发控制台获取环境id，如果使用默认环境则不需要填写
    traceUser: true
});
```

## 云函数配置环境 id

```javascript
cloud.init({
    env: '' // 前往云开发控制台获取环境id，如果使用默认环境则不需要填写
});
```

## 安装云函数依赖

```javascript
// 安装依赖
cd cloud/functions/addblog/
npm install --production
```

### 上传云函数
在IDE中，右键云函数对应的文件夹，点击“上传并部署”菜单

## 新建collection
在小程序开发IDE中的，[云开发控制台] -> [数据库] 中，添加集合 `blog`。
![](https://user-images.githubusercontent.com/3348398/44449753-993f6380-a621-11e8-900e-34706eb7a39b.png)

## 体验
点击小程序开发IDE中的“预览”，用微信扫一扫即可体验
