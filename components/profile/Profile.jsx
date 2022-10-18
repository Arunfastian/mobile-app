import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { AppStyles } from "../../AppStyles";
import { useNavigation } from "@react-navigation/native";

function Profile() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View
            style={{ flexDirection: "row", marginTop: 40, marginLeft: -20 }}
          >
            <Avatar.Image
              source={require("../../assets/icons/default_user.png")}
              size={100}
            />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 20,
                    marginBottom: 5,
                  },
                ]}
              >
                John Doe
              </Title>
              <Caption style={styles.caption}>22 Years</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            {<Icon name="email" color={AppStyles.color.tint} size={20} />}
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              john_doe@email.com
            </Text>
          </View>
        </View>
        <View style={{alignItems:'center'}}>
          <Pressable
            style={styles.loginContainer}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.loginText}>Edit Profile</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
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
    textAlign:'center'
  },
});

export default Profile;
