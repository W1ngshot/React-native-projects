import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { View, ScrollView, Text, StyleSheet, Button } from "react-native";
import PostItem from "./PostItem";
import { useRootStore } from "../hooks/useRootStore";
import PostSavedItem from "./PostSavedItem";

export const PostList = observer(() => {
  const { postStore } = useRootStore();

  useEffect(() => {
    postStore.fetchPosts();
    postStore.fetchSavedPosts();
  }, [postStore]);

  const handleClearStorage = async () => {
    await postStore.removeAllSaved();
  };

  if (postStore.loading || postStore.localLoading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (postStore.error) {
    return <Text style={styles.errorText}>{postStore.error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.header}>Posts from API</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {postStore.posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.column}>
        <Text style={styles.header}>Saved Posts</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {postStore.savedPosts.map((post) => (
            <PostSavedItem key={post.id} post={post} />
          ))}
        </ScrollView>
        <Button title="Clear Saved Posts" onPress={handleClearStorage} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  column: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
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