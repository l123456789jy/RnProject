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
} from 'react-native';


var WINDOW_WIDTH = Dimensions.get('window').width;
var Animated = require('Animated');


class SplashScreen extends Component {


    render() {
        return this.renderSplashView();
    }

    //显示欢迎界面
    renderSplashView(){
        return (
            <View style={styles.container}>

                <Image
                    source={{uri: "http://cartoon.youth.cn/zxzx/201606/W020160624337211450624.jpg"}}
                    style={styles.thumbnail}
                />
            </View>
        );
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
});

//暴漏给其他模块调用
module.exports = SplashScreen;