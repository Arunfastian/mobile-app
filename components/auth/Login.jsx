import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { AppStyles } from "../../AppStyles";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
function Login() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={[styles.title, styles.centerTitle]}>Login</Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
            navigation.navigate('Profile');
          }}
        >
          {(props) => {
            return (
              <>
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
                <Pressable
                  style={[styles.loginContainer, { marginTop: 50 }]}
                  onPress={() => props.handleSubmit(props.resetForm)}
                >
                  <Text style={styles.loginText}>Login</Text>
                </Pressable>
              </>
            );
          }}
        </Formik>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ marginTop: 5 }}>Don't Have an account? </Text>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ top: 5 }}
          >
            <Text style={{ color: AppStyles.color.tint, fontSize: 14 }}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  or: {
    color: "black",
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  centerTitle: {
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
    width: 192,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
  googleContainer: {
    width: 192,
    height: 48,
    marginTop: 30,
  },
  googleText: {
    color: AppStyles.color.white,
  },
});

export default Login;
