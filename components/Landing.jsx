import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppStyles } from "../AppStyles";

function Landing() {
  const [isLoading,setIsLoading] = useState(false);
  const navigation = useNavigation();
  
  if (isLoading === true) {
    return (
      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color={AppStyles.color.tint}
      />
    );
  }
  return (
    // <View style={{flex: 1,justifyContent: 'center'}}>
    //     <Button
    //         title='Register'
    //         onPress={()=>{navigation.navigate("Register")}}
    //     />
    //     <Button
    //         title='Login'
    //         onPress={()=>{navigation.navigate("Login")}}
    //     />
    // </View>
    
    <View style={styles.container}>
      <Text style={styles.title}>Idea Pop</Text>
      <Pressable style={styles.loginContainer} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <Pressable style={styles.signupContainer} onPress={()=>navigation.navigate("Register")}>
        <Text style={styles.signupText}>Register</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
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
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15,
  },
  signupText: {
    color: AppStyles.color.tint,
  },
  spinner: {
    marginTop: 200,
  },
});

export default Landing;
