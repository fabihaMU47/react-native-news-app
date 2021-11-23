import React, {useEffect, useState} from 'react'
import { View, Text ,StyleSheet } from 'react-native';
import { Divider, NativeBaseProvider,
  FlatList, ScrollView, Image} from 'native-base';
import { services } from '../services/services';
import moment from 'moment';

export default function HealthScreen(){
    const [newsData, setNewsData] = useState([])
    useEffect(()=> {
        services('health')
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
                <Text style={styles.text}>Health</Text>
            </View>
            <ScrollView
                     height={600}
                    >

                    <FlatList
                        data={newsData}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.newsContainer}>
                                    <Image
                                        width= {550}
                                        height = {250}
                                        resizeMode={"cover"}
                                        source={{
                                            uri: item.urlToImage ? item.urlToImage: "https://wallpaperaccess.com/full/317501.jpg",
                                        }}
                                        alt="Alternate Text"
                                    />
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.date}>
                                        {moment(item.publishedAt).format("LLL")}
                                    </Text>
                                    <Text style={styles.newsDescription}>
                                        {item.description}
                                    </Text>
                                </View>
                                <Divider my="2" bg="#e0e0e0"/>
                            </View>
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
        fontSize: 18,
        marginTop: 10,
        fontWeight: 600
    },
    newsDescription: {
        fontSize: 16,
        marginTop: 10
    },
    date: {
        fontSize: 14
    },
    description: {
        padding: 20
    },
    newsContainer: {
        padding: 10
    }

});