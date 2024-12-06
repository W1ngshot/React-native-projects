import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Post } from '../types/Post';
import { useRootStore } from '../hooks/useRootStore';

interface PostItemProps {
    post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const { postStore } = useRootStore();

    const handleSavePost = () => {
      postStore.setSavedPost(post);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
            <Button title="Save to storage" onPress={handleSavePost} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    body: {
        fontSize: 14,
        color: '#555',
    },
});

export default PostItem;