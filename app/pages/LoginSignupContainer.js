import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import FormHeader from './../compontents/FormHeader';
import FormSelectorButton from './../compontents/FormSelectorButton';
import Login from './../compontents/Login';
import Signup from './../compontents/Signup';


function LoginSignupContainer({navigation}){
    return (
        <View style={{flex:1, paddingTop:20}}>
            <View>
                <FormHeader style={{backgroundColor:'black'}} leftHeading={'Welcome'} rightHeading={'back'} subHeading={`Let's get started!`}/>
            </View>
            <View style={{flexDirection:'row'}}>
                <FormSelectorButton title='Sign Up' bgCol='rgba(27,27,51,0.4)'/>
                <FormSelectorButton title='Login' bgCol='rgba(27,27,51,0.6)' />
            </View>
            <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                <Signup navigation={navigation}/>
                <Login navigation={navigation}/>
            </ScrollView>
        </View>
    )
}
export default LoginSignupContainer
const styles = StyleSheet.create({})