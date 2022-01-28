import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = ({ username, image }) => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ alignItems: "center", position: "relative" }}>
          <Image
            source={{ uri: image }}
            style={[styles.story, { borderColor: "black" }]}
          />
          <Image
            source={{
              uri: "https://googiehost.com/depends/icons8-plus-416.png",
            }}
            style={styles.loginUser}
          />
          <Text style={{ color: "white" }}>{username}</Text>
        </View>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLocaleLowerCase() + "..."
                : story.user.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  loginUser: {
    position: "absolute",
    borderWidth: 1,
    width: 25,
    height: 25,
    borderRadius: 50,
    bottom: 20,
    right: 5,
    borderColor: "white",
    backgroundColor: "white",
  },
});

export default Stories;
