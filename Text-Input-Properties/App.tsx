import Raect,{useState} from 'react'
import {View, TouchableOpacity, Text, TextInput, StyleSheet, Alert, } from 'react-native'
import {Ionicons} from '@expo/vector-icons'


const keyboardType = () => {
  const [name, setName] = useState('') 
  const [last, setLast] = useState('') 
  
  const [email, setEmail] = useState('') 
  const [phone, setPhone] = useState('') 
  const [pass, setPass] = useState('') 
  

  const HandleSubmit = () => {
Alert.alert(
    'User Information',
    `First: ${name}\nLast: ${last}\nEmail: ${email}\nPhone: ${phone}`,
    [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ],
    { cancelable: false }
  );


}
  return(
    
    <View style={styles.container}>
    <View style={styles.inputContainer}>
    <Ionicons name='person'
    style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder="Enter First Name: "
          onChangeText={text => setName(text)}
          keyboardType= "default"
          onSubmitEditing={HandleSubmit}
    />
      </View>
    <View style={styles.inputContainer}>  
    <Ionicons name='person'
    style={styles.icon} />
    <TextInput
          style={styles.input}
          placeholder="Enter Last Name: "
          onChangeText={text => setLast(text)}
          keyboardType= "default"
            onSubmitEditing={HandleSubmit}
    />
    </View>

    <View style={styles.inputContainer}>  
    <Ionicons name='mail'
    style={styles.icon} />
    <TextInput
          style={styles.input}
          placeholder="Enter Email: "
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
            onSubmitEditing={HandleSubmit}
    />
    </View>
      <View style={styles.inputContainer}>  
          <Ionicons name='phone'
    style={styles.icon} />
      <TextInput
          style={styles.input}
          placeholder="Enter Phone Number: "
          onChangeText={text => setPhone(text)}
          keyboardType= "phone-pad"
            onSubmitEditing={HandleSubmit}
    />
    </View>
      <View style={styles.inputContainer}>  
  <Ionicons name='phone'
    style={styles.icon} />
       <TextInput
          style={styles.input}
          placeholder="Enter Password: "
          onChangeText={text => setPass(text)}
          secureTextEntry={true}
          onSubmitEditing={HandleSubmit}
    />
    </View>

    </View>
  )
}                                                   


const styles = StyleSheet.create({
    container: {
         height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
       height: 40,
      flex: 1,
      fontSize: 16,
    },
    inputContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       height: 40,
       marginVertical: 5,
       borderWidth: 1,
       width: "80%",
       borderRightColor: "green",
       borderRadius: 5,
       paddingHorizontal: 10,
    },
    icon: {
       marginRight: 10,
      color: 'red'
    }
})


export default keyboardType
