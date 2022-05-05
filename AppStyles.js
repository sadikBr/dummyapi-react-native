import { StyleSheet } from 'react-native';

export default function getStyles(darkMode) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? 'purple' : '#fff',
      padding: 8,
    },
    logo: {
      fontSize: 32,
      fontWeight: '900',
      textTransform: 'uppercase',
    },
    button: {
      backgroundColor: darkMode ? 'yellow' : 'purple',
      padding: 12,
      marginBottom: 8,
    },
    centeredView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: darkMode ? 'purple' : '#fff',
    },
  });
}
