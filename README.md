# 开箱即用的React Native应用，避免复杂的配置和踩坑。
#### RN版本0.63.0-rc.0。
#### 集成NativeBase组件库。
#### 使用react-redux管理状态
#### 使用react-navigation导航页面

![首页](http://acuario.cn/screenshot/rn_homePage.png)

## 项目启动
#### 1. 进入项目根目录安装依赖
```
yarn install
```
#### 2. 开启安卓虚拟机Genymotion或Android Studio自带的(建议使用Genymotion)

#### 3.使用Android Studio打开根目录android/app目录，运行一次，编译过程中不报错，提示安装成功即可（可选）

#### 4. 启动服务（根目录运行）
```
yarn react-native start
```

#### 5. 安装app到虚拟机（根目录运行）

```
yarn android
```

注意：如报错可尝试将第4步和第五步可互换顺序运行，如还保存请先用Android Studio启动一次。启动方法：使用Android Studio打开项目目录中的 android/app目录，点击运行

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

## 附:

### React Native中使用Redux

包:

```
    "react-redux": "^7.2.0",
    "redux": "^4.0.5",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0"
```

#### 1. 最基本的集成redux的配置

首先，在App.js项目入口文件引入redux和react-redux

```
    import {createStore} from 'redux';
    import {Provider} from 'react-redux';
```

然后使用createStore创建应用总store，并在应用最外层包裹Provider组件

```
    const store = createStore(todoApp);
    
    export default class App extends React.Component {
      render() {
        return (
          <Provider store={store}>
            <App />
          </Provider>
        );
      }
    }
```

2. 加入异步action支持

加入异步action的支持，需要加入redux的中间件redux-thunk，应用中间件的方法是使用redux提供的 applyMiddleware

```
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
```

3. store持久化配置 (可选)

如果想要持久保存一部分应用状态，需要引入另一个中间件redux-persist


```
import React from 'react';
import {AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import AppReducer from './reducers/index';
import AppWithNavigationState from './navigators/AppNavigator';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const config = {
    key: 'Root',
    storage:AsyncStorage,
    whitelist: ['login'] //配置想要持久化的部分store
};

function configureStore(){
    let reducer = persistReducer(config, AppReducer);
    let store = createStore(reducer, applyMiddleware(thunkMiddleware));
    let persistor = persistStore(store);
    return { persistor, store }
}

export default class App extends React.Component {
  render() {
    const { persistor, store } = configureStore();
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}
```

更多的详细配置信息可以去官方文档查看

react-redux: https://react-redux.js.org/

redux-thunk: https://github.com/reduxjs/redux-thunk

redux-persist: https://github.com/rt2zz/redux-persist

参考知乎文章：https://zhuanlan.zhihu.com/p/48560902
