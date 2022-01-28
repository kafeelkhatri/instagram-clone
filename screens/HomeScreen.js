import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import { firebase, db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [post, setPost] = useState([]);
  const [currentLoginUserImage, setCurrentLoginUserImage] = useState(null);
  const [currentLoginUsername, setCurrentLoginUsername] = useState(null);

  const getUsername = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_id", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoginUserImage(doc.data().profile_picture);
          setCurrentLoginUsername(doc.data().username);
        })
      );
    return unsubscribe;
  };

  useEffect(() => {
    getUsername();
  }, []);

  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPost(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })));
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Stories username={currentLoginUsername} image={currentLoginUserImage} />
      <ScrollView style={{ marginBottom: 100 }}>
        {post.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
      <View>
        <BottomTabs
          icons={bottomTabIcons}
          navigation={navigation}
          username={currentLoginUsername}
          image={currentLoginUserImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
