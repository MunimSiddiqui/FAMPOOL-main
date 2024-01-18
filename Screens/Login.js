//version 1

// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const Login = (props) => {
//   return (
//     <View style={{ alignItems: 'center', width: 400 }}>
//       <Text style={styles.loginText}>Login</Text>
//       <View style={styles.loginContainer}>
//         <Text style={styles.welcomeBackText}>Welcome Back</Text>
//         <Text style={styles.loginToYourAccountText}>Login to your account</Text>
//         <TextInput 
//           style={styles.inputField} 
//           placeholder="Email / Username" 
//           keyboardType="email-address" 
//           autoCapitalize="none" 
//         />
//         <TextInput 
//           style={styles.inputField} 
//           placeholder="Password" 
//           secureTextEntry={true} 
//         />
//         <View style={styles.forgotPasswordContainer}>
//           <TouchableOpacity onPress={() => alert("Forgot Password?")}>
//             <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.loginButton} onPress={() => alert("Logged In")}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//         <View style={styles.signupContainer}>
//           <Text style={styles.dontHaveAccountText}>Don't have an account ?</Text>
//           <TouchableOpacity onPress={() => props.navigation.navigate("Registration")}>
//             <Text style={styles.signupText}>Signup</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   loginText: {
//     color: 'black',
//     fontSize: 70,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   loginContainer: {
//     backgroundColor: '#90ee90',
//     height: 700,
//     width: 460,
//     borderTopLeftRadius: 130,
//     paddingTop: 100,
//     alignItems: 'center',
//   },
//   welcomeBackText: {
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
//   loginToYourAccountText: {
//     color: 'grey',
//     fontSize: 19,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputField: {
//     height: 50,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   forgotPasswordContainer: {
//     alignItems: 'flex-end',
//     width: '78%',
//     paddingRight: 16,
//     marginBottom: 200,
//   },
//   forgotPasswordText: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   loginButton: {
//     backgroundColor: 'blue',
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   loginButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   signupContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: "center",
//   },
//   dontHaveAccountText: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   signupText: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: 'blue',
//   },
// });

// export default Login;

//Version 2

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo icons or replace with your own

const Login = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.loginContainer}>
        <Ionicons name="ios-person-circle-outline" size={120} color="white" />
        <Text style={styles.welcomeBackText}>Welcome Back</Text>
        <Text style={styles.loginToYourAccountText}>Login to your account</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={24} color="gray" />
          <TextInput 
            style={styles.inputField} 
            placeholder="Email / Username" 
            keyboardType="email-address" 
            autoCapitalize="none" 
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="key-outline" size={24} color="gray" />
          <TextInput 
            style={styles.inputField} 
            placeholder="Password" 
            secureTextEntry={true} 
          />
        </View>
        <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => alert("Forgot Password?")}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => alert("Logged In")}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.dontHaveAccountText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Registration")}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  loginText: {
    color: '#333',
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  loginContainer: {
    backgroundColor: '#32cd32',
    width: '90%',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  welcomeBackText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  loginToYourAccountText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  inputField: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dontHaveAccountText: {
    color: 'white',
    fontSize: 16,
  },
  signupText: {
    color: '#1e90ff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Login;
