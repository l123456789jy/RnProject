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

//引入返回图标
var back_bg = require('../img/back.png');

//广告轮播图详情界面
class Advertisting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //显示从上个界面传递过来的数据的默认占位数据
            message: "",
        };
    }

    //生命周期函数  在渲染之后调用   componentWillMount 在渲染之前调用
    componentDidMount() {
        this.setState({
            message: this.props.message,
        });
    }


    render() {
        return this.renderAdvertistingView();
    }

    //加载广告轮播图界面
    renderAdvertistingView() {
        return (
            <View style={styles.container}>

                <ToolbarAndroid   //标题栏
                    navIcon={back_bg}
                    onIconClicked={this.onBack.bind(this)} //左上角打开侧划栏点击方法
                    titleColor='#D6DDEF'  //只支持RGB数值，设置标题的字体颜色
                    style={styles.toolbar}
                    title="轮播图详情界面"></ToolbarAndroid>

                <Text>上个界面传入：{this.state.message}</Text>

            </View>
        );
    }


    //返回
    onBack() {
        //给navigator设置一个回调方法，用于给第一个页面设置信息，这样就可以完成返回时数据的传递
        if(this.props.getResult){
            this.props.getResult("这是从第二个界面中传递过来的数据");
        }
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
module.exports = Advertisting;