/**
 * Created by Administrator on 2017/3/9.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    WebView,
    ToolbarAndroid,
} from 'react-native';


var WINDOW_WIDTH = Dimensions.get('window').width;
var Animated = require('Animated');
var aboutMeUri="https://github.com/l123456789jy";

//引入返回图标
var back_bg = require('../img/back.png');

//关于我的主页
class AboutMe extends Component {


    render() {
        return this.renderAboutMeView();
    }

    //加载关于我的界面
    renderAboutMeView(){
        return (
            <View style={styles.container}>

                <ToolbarAndroid   //标题栏
                    navIcon={back_bg}
                    onIconClicked={this.onBack.bind(this)} //左上角打开侧划栏点击方法
                    titleColor='#D6DDEF'  //只支持RGB数值，设置标题的字体颜色
                    style={styles.toolbar}
                    title="关于我"></ToolbarAndroid>


                <WebView
                    source={{uri: aboutMeUri}}
                />
            </View>
        );
    }


    //返回
    onBack(){
        //将当前界面出栈，就出现后退的效果了
        this.props.navigator.pop();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,  //总共评分布局为1份
    },
    thumbnail: {
        flex: 1,  //他自己就占了一份所以铺满全屏
        width: WINDOW_WIDTH,  //宽度设置为屏幕的宽度
        height: 1,
    },

    toolbar: {
        backgroundColor: '#efefef',
        height: 56,

    },
});

//暴漏给其他模块调用
module.exports = AboutMe;