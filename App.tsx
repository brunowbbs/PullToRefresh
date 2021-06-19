import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    getData();
  }, [])


  const getData = () => {
    let apiURL = 'https://jsonplaceholder.typicode.com/posts';
    setIsLoading(true);
    fetch(apiURL).then((res) => res.json()).then((res) => {
      setItens(res);
    }).finally(() => {
      setIsLoading(false);
    })
  }

  const renderRow = ({ item }: any) => {
    return (
      <View style={{ padding: 10, borderBottomColor: '#CCC', borderBottomWidth: 1 }}>
        <Text>{item.id} - {item.title}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={itens}
        renderItem={renderRow}
        keyExtractor={(_, k) => k.toString()}
        refreshing={isLoading}
        onRefresh={getData}
      />
    </SafeAreaView>
  )
}

export default App
