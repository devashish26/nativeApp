import { StyleSheet, View, ScrollView, Animated, Dimensions } from 'react-native'
import React, {useRef} from 'react'
import FormHeader from './../compontents/FormHeader';
import FormSelectorButton from './../compontents/FormSelectorButton';
import Login from './../compontents/Login';
import Signup from './../compontents/Signup';

const {width} = Dimensions.get('window') 

function LoginSignupContainer({navigation, route}){
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
        <View style={{flex:1, paddingTop:20}}>
            <View>
                <FormHeader style={{backgroundColor:'black'}} rightHeaderOpacity={rightHeaderOpacity} rightHeaderTranslateY={rightHeaderTranslateY} leftHeaderTranslateX={leftHeaderTranslateX} leftHeading={'Welcome'} rightHeading={'back'} subHeading={`Let's get started!`}/>
            </View>
            <View style={{flexDirection:'row'}}>
                <FormSelectorButton title='Sign Up' bgCol='rgba(27,27,51,0.4)' onPress={()=>{scroll.current.scrollTo({x:0})}}/>
                <FormSelectorButton title='Login' bgCol='rgba(27,27,51,0.6)' onPress={()=>{scroll.current.scrollTo({x:width})}} />
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