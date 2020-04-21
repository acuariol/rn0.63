#### 开箱即用的React Native应用，避免无需复杂的配置和踩坑。
#### RN版本0.63.0-rc.0。
#### 集成NativeBase组件库。

![首页](http://acuario.cn/screenshot/rn_homePage.png)

## 项目启动
#### 1. 进入项目根目录安装依赖
```
yarn install
```
#### 2. 开启安卓虚拟机Genymotion或Android Studio自带的(建议使用Genymotion)

#### 3. 启动服务
```
yarn react-native start
```

#### 4. 安装app到虚拟机

```
yarn android
```

注意：如果执行第4步报错，请先用Android Studio启动一次。启动方法：使用Android Studio打开项目目录中的 android/app目录，点击运行

## 完整流程（从新建项目开始,过程相对复杂）

如歌你想从零开始搭建一个react native应用，这会是一个不错的指导

该教程官网有详细的介绍，这里就不赘述了。提几点遇到的坑和注意的事项。

官网： https://reactnative.cn/docs/getting-started.html

当所有配置都按照官网的提示配置好后，先不要运行yarn react-native run-android命令启动项目，
如果启动会发现报错，正确的做法是使用Android Studio打开项目目录中的 android/app目录，
此时Android Studio会构建应用，主要是gradle,此时需要从国外下载文件，如果下载缓慢说明网络不通畅。


等待构建完成后，点击Android Studio上的运行按钮，等待Android Studio构建，构建完后会启动安卓模拟器，
此时会报错，该错主要是未启动服务导致的。终止印象，在项目根目录下打开
命令行窗口执行yarn react-native start待服务启动后，再点击Android Studio上的运行，或再开一个命令行窗口执行
yarn android即可。

另外需要注意的是，如果在启动时报错了，大多是安装了新的依赖
仔细查看依赖的安装说明，无误后同样的使用Android Studio打开项目目录中的 android/app目录，
等待gradle构建，等待构建完成后，点击Android Studio上的运行按钮，继续等待完成编译即可。
重新按顺序分开执行yarn react-native start和yarn android命令

如果要在Android Studio上运行应用：
1.使用Android Studio打开项目下的android/app目录
2.在目录下执行yarn react-native start启动服务后再点击运行

