import { StyleSheet, View, ScrollView, Animated, Dimensions } from 'react-native'
import React, {useRef, useState} from 'react'
import FormHeader from './../compontents/FormHeader';
import FormSelectorButton from './../compontents/FormSelectorButton';
import Login from './../compontents/Login';
import Signup from './../compontents/Signup';

const {width} = Dimensions.get('window') 

function LoginSignupContainer({navigation, route}){

    const [bgActive, setBgActive] = useState('#A0D8B3')
    const [bgInactive, setBgInactive] = useState('#A2A378')

    const handlePressToggle = ()=>{//serious rework needed
        if(bgActive === '#A0D8B3' && bgInactive === '#A2A378'){
            setBgActive('#A2A378')
            setBgInactive('#A0D8B3')
        }else if(bgActive === '#A2A378' && bgInactive === '#A0D8B3'){
            setBgActive('#A0D8B3')
            setBgInactive('#A2A378')
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