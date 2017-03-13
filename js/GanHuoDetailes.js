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


//干活详情界面
class GanHuoDetailes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //显示从上个界面传递过来的数据的默认占位数据
            message: "",
            title: "",
        };
    }

    //生命周期函数  在渲染之后调用   componentWillMount 在渲染之前调用
    componentDidMount() {
        this.setState({
            message: this.props.message,
            title:this.props.title,
        });
    }

    render() {
        return this.renderGanHuoView();
    }

    //加载干活详情界面
    renderGanHuoView(){
        return (
            <View style={styles.container}>

                <ToolbarAndroid   //标题栏
                    navIcon={back_bg}
                    onIconClicked={this.onBack.bind(this)} //左上角打开侧划栏点击方法
                    titleColor='#D6DDEF'  //只支持RGB数值，设置标题的字体颜色
                    style={styles.toolbar}
                    title={this.state.title}></ToolbarAndroid>

                <WebView
                    source={{uri: this.state.message}}
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
module.exports = GanHuoDetailes;