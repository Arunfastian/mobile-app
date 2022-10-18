import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { AppStyles } from "../../AppStyles";
function UpdateProfile() {
  return (
    <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={[styles.title, styles.leftTitle]}>Edit Profile</Text>
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
            navigation.navigate("DashBoard");
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
                  <Text style={styles.facebookText}>Submit</Text>
                </Pressable>
              </>
            );
          }}
        </Formik>
      </View>
    </ScrollView>
  );
}

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

export default UpdateProfile;
