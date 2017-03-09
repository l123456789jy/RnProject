/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator, //存放界面你的栈的容器
} from 'react-native';

//引入主界面
var Home = require('./js/TabBottom');
//相当于application,Navigatory一定要在应用启动的时候初始化
class RnProject extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Navigator style={styles.container}
                       initialRoute={{
                           component: Home   //将根界面压栈
                       }}
                       renderScene={(route, navigator) => { // 用来渲染navigator栈顶的route里的component页面
                           return <route.component navigator={navigator} {...route} {...route.passProps}/>// {...route.passProps}即就是把passProps里的键值对全部以给属性赋值的方式展开 如：test={10}
                       }}/>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
AppRegistry.registerComponent('RnProject', () => RnProject);
