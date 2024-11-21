import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ScrollView, Text, StyleSheet } from "react-native";
import PostItem from "./PostItem";
import { useRootStore } from "../hooks/useRootStore";

export const PostList = observer(() => {
  const { postStore } = useRootStore();

  useEffect(() => {
    postStore.fetchPosts();
  }, [postStore]);

  if (postStore.loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (postStore.error) {
    return <Text style={styles.errorText}>{postStore.error}</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {postStore.posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  loadingText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
});