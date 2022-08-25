import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function House({cover}) {
 return (
    <View style={styles.container}>
        <View>
            <Image 
             source={cover}
             style={styles.cover}
            />
        </View>

        <View style={styles.content}>
            <Text style={styles.description}>
                TEM UMA DESCRIÇÃO AQUI
            </Text>
            <Text style={styles.price}>
                R$ 250.450,00
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:260,
        height:70,
        backgroundColor:'#fff',
        elevation:2,
        padding:6,
        marginVertical:5,
        marginRight:20,
        marginLeft:2,
        borderRadius:10
    },
    cover:{
        borderRadius:10,
        width:60,
        height:60
    },
    content:{
        widht:'65%',
        justifyContent:'flex-end',
        paddingHorizontal:10,
        height:'100%'
    },
    description:{
        fontSize:9,
        fontFamily:'Montserrat_500Medium'
    },
    price:{
        fontSize:12,
        fontFamily:'Montserrat_700Bold'
    }
})