import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import getStyles from './PostStyles';

const Post = ({
  text,
  tags,
  image,
  username,
  userImage,
  publishDate,
  darkMode,
}) => {
  const styles = getStyles(darkMode);

  return (
    <TouchableOpacity style={styles.post}>
      <View style={styles.header}>
        <Image style={styles.userImage} source={{ uri: userImage }} />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: darkMode ? 'white' : 'black',
            }}
          >
            {username}
          </Text>
          <Text style={{ color: darkMode ? 'white' : 'black' }}>
            {publishDate}
          </Text>
        </View>
      </View>
      <View style={styles.postContent}>
        <Image style={styles.postImage} source={{ uri: image }} />
        <View style={styles.postText}>
          <Text
            style={{ marginBottom: 12, color: darkMode ? 'white' : 'black' }}
          >
            {text}
          </Text>
          <View style={styles.tags}>
            {tags.map((tag) => (
              <TouchableOpacity key={tag} style={styles.tag}>
                <Text style={{ color: darkMode ? 'white' : 'black' }}>
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
