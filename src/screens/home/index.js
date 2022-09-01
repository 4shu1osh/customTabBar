import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import axios from 'axios';


function Home() {

  const [data, setData] = React.useState()

  React.useEffect(()=> {
    axios
    .get(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=555fc1b58ba046749399a5d4332964c4',
    )
    .then(res => {
      setData(res.data.articles);
      console.log("ran")
    });
  },[])

  const _renderItem = ({item}) => {
    return(
      <View style={styles.card}>
        <Image
        source={{uri: item.urlToImage}}
        style={styles.img}
        />
        <Text>
          {item.content}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.parent}>
        <FlatList
        data={data}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        />
    </View>
  );
}

export default React.memo(Home)

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    bottom: -50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#694BF8',
  },
  img: {
    width: 300,
    height: 150,
    marginBottom: 16,
    // backgroundColor: 'red'
  },
  heading: {
    margin: 20,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    width: 330,
    height: 300,
    padding: 16,
    borderRadius: 20,
    marginVertical: 16,
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
