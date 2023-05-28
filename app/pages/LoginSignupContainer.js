import { StyleSheet, View, ScrollView, Animated, Dimensions } from 'react-native'
import React, {useRef, useState} from 'react'
import FormHeader from './../compontents/FormHeader';
import FormSelectorButton from './../compontents/FormSelectorButton';
import Login from './../compontents/Login';
import Signup from './../compontents/Signup';

const {width} = Dimensions.get('window') 
const green = '#A0D8B3'
const brown = '#A2A378'


function LoginSignupContainer({navigation, route}){

    const [bgActive, setBgActive] = useState(green)
    const [bgInactive, setBgInactive] = useState(brown)

    const handlePressToggle = ()=>{//serious rework needed
        if(bgActive === green && bgInactive === brown){
            setBgActive(brown)
            setBgInactive(green)
        }else if(bgActive === brown && bgInactive === green){
            setBgActive(green)
            setBgInactive(brown)
        }
    }


    // console.log(route.params.setisSignedIn)
    const animation = useRef(new Animated.Value(0)).current
    const scroll = useRef()
    const rightHeaderOpacity = animation.interpolate({
        inputRange:[0, width],
        outputRange: [0,1]
    })
    const leftHeaderTranslateX = animation.interpolate({
        inputRange:[0, width],
        outputRange: [40,0]
    })
    const rightHeaderTranslateY = animation.interpolate({
        inputRange:[0, width],
        outputRange: [-20,0]
    })
    return (
        <View style={{flex:1, paddingTop:20, backgroundColor:'#E5F9DB'}}>
            <View>
                <FormHeader style={{backgroundColor:'black'}} rightHeaderOpacity={rightHeaderOpacity} rightHeaderTranslateY={rightHeaderTranslateY} leftHeaderTranslateX={leftHeaderTranslateX} leftHeading={'Welcome'} rightHeading={'back'} subHeading={`Let's get started!`}/>
            </View>
            <View style={{flexDirection:'row'}}>
                <FormSelectorButton title='Sign Up' bgCol={bgActive} onPress={()=>{scroll.current.scrollTo({x:0}); handlePressToggle()}}/>
                <FormSelectorButton title='Login' bgCol={bgInactive} onPress={()=>{scroll.current.scrollTo({x:width}); handlePressToggle()}} />
            </View>
            <ScrollView ref={scroll} horizontal pagingEnabled scrollEventThrottle={16} showsHorizontalScrollIndicator={false} onScroll={Animated.event([{nativeEvent:{contentOffset:{x:animation}}}], {useNativeDriver:false})}>
                <ScrollView>
                    <Signup navigation={navigation} />
                </ScrollView>
                <ScrollView>
                    <Login navigation={navigation} changeStatus={route.params.setloginDetails}/>
                </ScrollView>
            </ScrollView>
        </View>
    )
}
export default LoginSignupContainer
const styles = StyleSheet.create({})