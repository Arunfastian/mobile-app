import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { AppStyles } from "../../AppStyles";
function Register() {
  const sampleDetails = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age: 0,
  };
  const [details, setDetails] = useState(sampleDetails);
  const navigation = useNavigation();
  return (
    // <ScrollView
    //   style={{
    //     flex: 1,
    //     marginTop: 50,
    //     backgroundColor: "#F5F5F5",
    //   }}
    // >
    //   <View
    //     style={{
    //       padding: 20,
    //       justifyContent: "center",
    //       alignItems: "center",
    //       backgroundColor: "#F5F5F5",
    //     }}
    //   >
    //     <Text style={styles.header}>Registration Page</Text>
    //     <KeyboardAvoidingView>
    //       <View
    //         style={styles.form}
    //       >
    //         <View>
    //           <Formik
    //             initialValues={{
    //               email: "",
    //               password: "",
    //               confirmPassword: "",
    //               firstName: "",
    //               lastName: "",
    //               age: 0,
    //             }}
    //             onSubmit={(values, { resetForm }) => {
    //               console.log(values);
    //               resetForm();
    //             }}
    //           >
    //             {(props) => (
    //               <>
    //                 <TextInput
    //                   style={styles.textInput}
    //                   placeholder="Email"
    //                   onChangeText={props.handleChange("email")}
    //                   value={props.values.email}
    //                 />
    //                 <TextInput
    //                   style={styles.textInput}
    //                   placeholder="Password"
    //                   onChangeText={props.handleChange("password")}
    //                   secureTextEntry={true}
    //                   value={props.values.password}
    //                 />
    //                 <TextInput
    //                   style={styles.textInput}
    //                   placeholder="Confirm Password"
    //                   onChangeText={props.handleChange("confirmPassword")}
    //                   secureTextEntry={true}
    //                   value={props.values.confirmPassword}
    //                 />
    //                 <TextInput
    //                   style={styles.textInput}
    //                   placeholder="First Name"
    //                   onChangeText={props.handleChange("firstName")}
    //                   value={props.values.firstName}
    //                 />
    //                 <TextInput
    //                   style={styles.textInput}
    //                   placeholder="Last Name"
    //                   onChangeText={props.handleChange("lastName")}
    //                   value={props.values.lastName}
    //                 />
    //                 <TextInput
    //                   style={styles.textInput}
    //                   placeholder="Age"
    //                   keyboardType="numeric"
    //                   onChangeText={props.handleChange("age")}
    //                   value={props.values.age}
    //                 />
    //                 <Pressable
    //                   style={styles.button}
    //                   onPress={() => {
    //                     props.handleSubmit(props.resetForm);
    //                   }}
    //                 >
    //                   <Text style={styles.buttonText}>Register</Text>
    //                 </Pressable>
    //               </>
    //             )}
    //           </Formik>
    //         </View>
    //       </View>
    //     </KeyboardAvoidingView>
    //     <View style={{flex:1,flexDirection:'row',marginTop:10}}>
    //     <Text style={{marginTop:5}}>
    //       Already Have an account?{" "}
    //     </Text>
    //     <Pressable onPress={() => navigation.navigate("Login")} style={{top:5,}}>
    //         <Text style={{color:'blue',fontSize:14}}>Login</Text>
    //     </Pressable>
    //     </View>

    //   </View>
    // </ScrollView>
    <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          firstName: "",
          lastName: "",
          age: 0,
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          navigation.navigate('DashBoard')
        }}
      >
        {(props) => {
          return (
            <>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="First Name"
                  onChangeText={props.handleChange("firstName")}
                  value={props.values.firstName}
                  placeholderTextColor={AppStyles.color.grey}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="Last Name"
                  onChangeText={props.handleChange("lastName")}
                  value={props.values.lastName}
                  placeholderTextColor={AppStyles.color.grey}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="E-mail Address"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  placeholderTextColor={AppStyles.color.grey}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  placeholderTextColor={AppStyles.color.grey}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("confirmPassword")}
                  value={props.values.confirmPassword}
                  placeholderTextColor={AppStyles.color.grey}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.body}
                  placeholder="Age"
                  onChangeText={props.handleChange("age")}
                  value={props.values.age}
                  placeholderTextColor={AppStyles.color.grey}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                />
              </View>
              <Pressable
                style={[styles.facebookContainer, { marginTop: 50 }]}
                onPress={() => props.handleSubmit(props.resetForm)}
              >
                <Text style={styles.facebookText}>Sign Up</Text>
              </Pressable>
            </>
          );
        }}
      </Formik>
      <View style={{flex:1,flexDirection:'row',marginTop:10,marginBottom:10}}>
         <Text style={{marginTop:5}}>
           Already Have an account?{" "}
         </Text>
         <Pressable onPress={() => navigation.navigate("Login")} style={{top:5,}}>
             <Text style={{color:AppStyles.color.tint,fontSize:14}}>Login</Text>
         </Pressable>
         </View>
    </View>
    
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 12,
//     borderRadius: 30,
//     elevation: 3,
//     backgroundColor: "black",
//     marginTop: 20,
//   },
//   buttonText: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "white",
//   },
//   textInput: {
//     borderColor: "black",
//     borderWidth: 1,
//     width: 300,
//     paddingLeft: 5,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 20,
//     height: 40,
//     fontSize: 14,
//   },
//   header: {
//     textAlign: "center",
//     fontSize: 32,
//     fontWeight: "bold",
//   },
//   form: {
//     padding: 25,
//     backgroundColor: "#DEDEDE",
//     borderRadius: 15,
//     marginTop: 15,
//     elevation: 5,
//   },
// });

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "center",
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: "red",
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
});

export default Register;
