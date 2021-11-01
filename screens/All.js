import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Divider, NativeBaseProvider, Box,
  FlatList, ScrollView} from 'native-base';
import { services } from '../services/services';

export default function HomeScreen(){
    const [newsData, setNewsData] = useState([])
    useEffect(()=> {
        services('general')
        .then(data => {
            setNewsData(data)
        })
        .catch(error => {
            alert(error)
        })
    },[])
    return (
        <NativeBaseProvider>
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>All</Text>
            </View>
            <ScrollView
                 height={950}
                 >

            <FlatList
        data={newsData}
        renderItem={({ item }) => (
          <Box px={5} py={2} rounded="md" my={2} bg="primary.300">
              {item.title}
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      </ScrollView>
        </View>
        </NativeBaseProvider>
    )
}

const  styles = StyleSheet.create ({
    container: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#e0e0e0',
        border: '1px solid #bdbdbd'
    },
    text: {
        fontSize: 24
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        fontSize: 20
    },
    date: {
        fontSize: 20
    },
    description: {
        padding: 20
    }
});