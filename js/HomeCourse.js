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
    ToastAndroid,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

import Swiper from 'react-native-swiper';

//引入广告详情界面
var Advertisting = require('./Advertisting');

var WINDOW_WIDTH = Dimensions.get('window').width;
var IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

//主界面
class HomeCourse extends Component {

    constructor(props) {
        super(props);

    };

    componentDidMount() {

    }


    render() {
        return this.renderHomeCoueseView();
    }

//加载课程界面
    renderHomeCoueseView() {
        return (
            <View style={styles.container}>

                <ToolbarAndroid   //标题栏
                    titleColor='#D6DDEF'  //只支持RGB数值，设置标题的字体颜色
                    style={styles.toolbar}
                    title="主页"></ToolbarAndroid>
                <Swiper style={styles.wrapper}//轮播图
                        height={190}
                        horizontal={true}
                        autoplay={true}
                        autoplayTimeout={2.5}
                        autoplayDirection={false}
                >

                    {this.renverViewpagerview()}
                </Swiper>

            </View>
        );
    }

    //返回轮播图的图片,这里添加Key 是为了react-key-warning  警告保证dom树的唯一性
    renverViewpagerview() {
        var imageViews = [];
        for (let i = 0; i < IMGS.length; i++) {//注意这里要用let 修饰要不然，这里传递的数据一直是最后一个
            imageViews.push(
                <TouchableOpacity key={'Ti_' + i} onPress={() => this.onPressImage(IMGS[i])}>
                    <View key={'vi_' + i} style={styles.slide}>
                        <Image key={'im_' + i} resizeMode='stretch' style={styles.thumbnail} source={{uri: IMGS[i]}}/>
                    </View>
                </TouchableOpacity>
            );
        }
        return imageViews;
    }


    //获取传递过来的图片路径
    onPressImage(path) {
        //延长在执行回调方法，提高体验,打开关于我的界面，这里getResult方法和message字段都可以自己定义
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({   //将轮播图详情界面压栈
                component: Advertisting,
                message: path,//此数值传递到新打开的界面
                //通过这种回调，获取到上一个页面中传递回来的数据
                getResult: function (myMessage) {
                    ToastAndroid.show(myMessage + "", ToastAndroid.SHORT);
                }
            });
        });
        ToastAndroid.show(path + "", ToastAndroid.SHORT);
    }

}


const
    styles = StyleSheet.create({
        container: {
            flex: 1,  //总共评分布局为1份
        },
        thumbnail: {
            width: WINDOW_WIDTH,  //宽度设置为屏幕的宽度
            height: 150,
        },

        indicators: {
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            top: 180,
            //bottom: 10,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
        },

        toolbar: {
            backgroundColor: '#efefef',
            height: 56,

        },
        wrapper: {},
        slide1: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#9DD6EB',
        },
        slide2: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#97CAE5',
        },
        slide3: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#92BBD9',
        },
        text: {
            alignItems: 'center',
            color: '#E23227',
            fontSize: 15,
            fontWeight: 'bold',
        }
    });

//暴漏给其他模块调用
module.exports = HomeCourse;