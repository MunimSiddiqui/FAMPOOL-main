// import React from 'react';
// import {View, Text, Touchable, TouchableOpacity} from 'react-native';

// const Login = (props) => {
//   return (
//       <View style={{alignItems: 'center', width: 400}}>
//         <Text
//           style={{
//             color: 'black',
//             fontSize: 70,
//             fontWeight: 'bold',
//             marginVertical: 20,
//           }}>
//           Login
//         </Text>
//         <View
//           style={{
//             backgroundColor: '#90ee90',
//             height: 700,
//             width: 460,
//             borderTopLeftRadius: 130,
//             paddingTop: 100,
//             alignItems: 'center',
//           }}>
//           <Text style={{fontSize: 40, fontWeight: 'bold'}}>
//             Welcome Back
//           </Text>
//           <Text
//             style={{
//               color: 'grey',
//               fontSize: 19,
//               fontWeight: 'bold',
//               marginBottom: 20,
//             }}>
//             Login to your account
//           </Text>
//           <Text
//             placeholder="Email / Username"
//             keyboardType={'email-address'}
//           />
//           <Text placeholder="Password" secureTextEntry={true} />
//           <View
//             style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
//             <Text style={{fontWeight: 'bold', fontSize: 16}}>
//               Forgot Password ?
//             </Text>
//           </View>
//           <Text textColor='white' btnLabel="Login" Press={() => alert("Logged In")} />
//           <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
//             <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
//             <TouchableOpacity onPress={() => props.navigation.navigate("Registration")}>
//             <Text style={{fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//   );
// };

// export default Login;


//version 2

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = (props) => {
  return (
    <View style={{ alignItems: 'center', width: 400 }}>
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.loginContainer}>
        <Text style={styles.welcomeBackText}>Welcome Back</Text>
        <Text style={styles.loginToYourAccountText}>Login to your account</Text>
        <TextInput 
          style={styles.inputField} 
          placeholder="Email / Username" 
          keyboardType="email-address" 
          autoCapitalize="none" 
        />
        <TextInput 
          style={styles.inputField} 
          placeholder="Password" 
          secureTextEntry={true} 
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => alert("Forgot Password?")}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => alert("Logged In")}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.dontHaveAccountText}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Registration")}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginText: {
    color: 'black',
    fontSize: 70,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  loginContainer: {
    backgroundColor: '#90ee90',
    height: 700,
    width: 460,
    borderTopLeftRadius: 130,
    paddingTop: 100,
    alignItems: 'center',
  },
  welcomeBackText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  loginToYourAccountText: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputField: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    width: '78%',
    paddingRight: 16,
    marginBottom: 200,
  },
  forgotPasswordText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
  },
  dontHaveAccountText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
  },
});

export default Login;

