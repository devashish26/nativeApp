import React from 'react'

function FirstForm() {
  return (
    <>
        <KeyboardAvoidingView>
            <SafeAreaView style={styles.container}>
                <Image source={require('./../../assets/hms1.png')} />
                <SafeAreaView style={styles.inputBox}>
                    <Text style={styles.headingText}>Signup!</Text>
                    <TextInput style={styles.inputField} placeholder='Enter email' inputMode='email'/>
                    <TextInput style={styles.inputField} placeholder='Enter password' secureTextEntry={true} />
                    <TextInput style={styles.inputField} placeholder='Re-enter password' secureTextEntry={true}/>
                    <Button title={'Submit'}/>
                </SafeAreaView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  inputBox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightgrey',
    width:'100%',
    height:'40%'
  },
  headingText:{
    color:'black',
    fontSize:36,
    fontWeight:600,
    marginBottom:30
  },
  inputField:{
    width:'50%',
    margin:3,
    padding:5,
    fontSize:14,
    borderBottomWidth:0.5
  }
});

export default FirstForm
