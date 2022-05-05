import { StyleSheet } from 'react-native';

export default function getStyles(darkMode) {
  return StyleSheet.create({
    post: {
      marginBottom: 10,
      padding: 8,
      backgroundColor: darkMode ? 'darkblue' : '#ececec',
      borderRadius: 5,
    },
    header: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    userImage: {
      width: 48,
      height: 48,
      borderRadius: 16,
      marginRight: 12,
    },
    postImage: {
      width: 200,
      marginRight: 8,
      aspectRatio: 16 / 9,
    },
    postContent: {
      flexDirection: 'row',
    },
    postText: {
      flex: 1,
    },
    tags: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    tag: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: darkMode ? 'pink' : 'yellow',
      marginRight: 6,
      marginBottom: 4,
    },
  });
}
