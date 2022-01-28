import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Divider } from "react-native-elements";
import { firebase, db } from "../../firebase";

export const bottomTabIcons = [
  {
    name: "Home",
    active:
      "https://img.icons8.com/fluency-systems-filled/144/ffffff/home--v1.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home--v1.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active:
      "https://img.icons8.com/fluency-systems-filled/60/ffffff/plus-2-math.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/60/ffffff/like--v1.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
  },
  // {
  //   name: "Profile",
  //   active:
  //     "https://instagram.fkhi22-1.fna.fbcdn.net/v/t51.2885-19/s150x150/263285370_581002776532117_609680500354932009_n.jpg?_nc_ht=instagram.fkhi22-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=3B4fmkCeyGkAX98W0CG&edm=AIQHJ4wBAAAA&ccb=7-4&oh=00_AT-wFCoSBHGQPfDMWDZbXA7TYEtyYvdw1sOlwDmQ1KOnpA&oe=61F810D5&_nc_sid=7b02f1",
  //   inactive:
  //     "https://instagram.fkhi22-1.fna.fbcdn.net/v/t51.2885-19/s150x150/263285370_581002776532117_609680500354932009_n.jpg?_nc_ht=instagram.fkhi22-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=3B4fmkCeyGkAX98W0CG&edm=AIQHJ4wBAAAA&ccb=7-4&oh=00_AT-wFCoSBHGQPfDMWDZbXA7TYEtyYvdw1sOlwDmQ1KOnpA&oe=61F810D5&_nc_sid=7b02f1",
  // },
];

const BottomTabs = ({ icons, navigation, username, image }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity
      onPress={() => {
        setActiveTab(icon.name);
        icon.name == "Reels" ? navigation.push("NewPostScreen") : null;
      }}
    >
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider orientation="vertical" width={1} />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
        <TouchableOpacity
          onPress={() => {
            setActiveTab("Profile");
          }}
        >
          <Image
            source={{
              uri: image,
            }}
            style={[
              styles.icon,
              styles.profilePic(),
              styles.profilePic(activeTab),
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    height: 55,
    alignItems: "center",
  },
  wrapper: {
    position: "absolute",
    width: "100%",
    zIndex: 999,
    bottom: "3%",
    backgroundColor: "#000",
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "white",
  }),
});

export default BottomTabs;
