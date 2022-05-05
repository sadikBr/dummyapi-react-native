import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  StatusBar,
  Modal,
  Switch,
} from 'react-native';

import { Post } from './components';
import getStyles from './AppStyles';
import axios from 'axios';

const APP_ID = '62743898ae8c78530d13bdb5';
const BASE_URL = 'https://dummyapi.io/data/v1/';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const styles = getStyles(darkMode);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: `${BASE_URL}post?page=${pageNumber}&limit=30`,
      headers: {
        'app-id': APP_ID,
      },
    }).then((response) => {
      const posts = response.data.data;
      setPosts((prev) => [...prev, ...posts]);
      setLoading(false);
      setFirstLoad(false);
    });
  }, [pageNumber]);

  const getMoreData = () => {
    if (loading) return;
    setPageNumber((prev) => prev + 1);
  };

  function handleModalSubmit() {
    console.log('modal info submitted!');
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Modal
        visible={modalVisible}
        animationType='slide'
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Text style={{ color: darkMode ? 'white' : 'black' }}>
            this is a modal
          </Text>
          <Pressable style={styles.button} onPress={handleModalSubmit}>
            <Text style={{ color: darkMode ? 'black' : 'white' }}>
              Submit Post
            </Text>
          </Pressable>
        </View>
      </Modal>
      <View style={{ marginBottom: 16 }}>
        <Text style={styles.logo}>Instagram</Text>
      </View>
      <View style={{ marginBottom: 8, flexDirection: 'row' }}>
        <Pressable
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{ color: darkMode ? 'black' : 'white' }}>
            Create Post
          </Text>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
          }}
        >
          <Text style={{ color: darkMode ? 'white' : 'black' }}>Dark Mode</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={() => setDarkMode((prev) => !prev)}
            value={darkMode}
            testID='Dark Mode'
          />
        </View>
      </View>
      <View style={{ marginBottom: 98 }}>
        {firstLoad ? (
          <Text style={{ color: darkMode ? 'white' : 'black' }}>
            Loading ...
          </Text>
        ) : (
          <FlatList
            data={posts}
            renderItem={({ item }) => (
              <Post
                text={item.text}
                tags={item.tags}
                darkMode={darkMode}
                image={item.image}
                username={`${item.owner.firstName} ${item.owner.lastName}`}
                userImage={item.owner.picture}
                publishDate={item.publishDate}
              />
            )}
            keyExtractor={(item) => item.id}
            onEndReached={getMoreData}
          />
        )}
      </View>
    </View>
  );
}
