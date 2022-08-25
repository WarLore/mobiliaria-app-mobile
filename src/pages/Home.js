import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';

export default function HOME() {
 
 const navigation = useNavigation();

 return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{backgroundColor:'#fff'}}>
        <View style={styles.header}>
            <View style={styles.inputArea}>
                <Feather name='search' size={24} color='#000' />
                <TextInput
                 placeholder='O que está procurando'
                 style={styles.input}
                 />
            </View>
        </View>

        <View style={styles.contentNew}>
            <Text style={styles.title}>Novidades</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
            <New 
             cover={require('../assets/house1.jpg')}
             name='Casa de praia'
             description='Casa nova uma quadra do mar, lugar seguro e monitoramento 24 horas'
             onPress={()=>{navigation.navigate('detail')}}
            />
            <New 
             cover={require('../assets/house2.jpg')}
             name='Casa de campo'
             description='Casa nova uma quadra do mar, lugar seguro e monitoramento 24 horas'
             onPress={()=>{}}
            />
            <New 
             cover={require('../assets/house3.jpg')}
             name='Casa floripa'
             description='Casa nova uma quadra do mar, lugar seguro e monitoramento 24 horas'
             onPress={()=>{}}
            />
        </ScrollView>

        <View style={{flexDirection:'row', marginBottom:10, alignItems:'center'}}>
            <Text style={[styles.title, {marginTop:20}]}>Próximo de você</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
            <House 
             cover={require('../assets/house3.jpg')}
            />
            <House 
             cover={require('../assets/house4.jpg')}
            />
            <House 
             cover={require('../assets/house6.jpg')}
            />
        </ScrollView>

        <Text style={[styles.title, {marginTop:20}]}>
            Dica do dia
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Recommended
             cover={require('../assets/house1.jpg')}
             house='Casa Floripa'
             offer='25%'
            />
            <Recommended
             cover={require('../assets/house2.jpg')}
             house='Casa São Paulo'
             offer='10%'
            />
            <Recommended
             cover={require('../assets/house5.jpg')}
             house='Casa de Campo'
             offer='35%'
            />

        </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical:20
    },
    inputArea:{
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        width:'98%',
        backgroundColor:'#fff',
        elevation:2,
        paddingHorizontal:10,
        height:37,
        borderRadius:10
    },
    input:{
        fontFamily:'Montserrat_500Medium',
        paddingHorizontal:10,
        fontSize:13,
        width:'90%'
    },
    contentNew:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
    },
    title:{
        paddingHorizontal:15,
        fontFamily:'Montserrat_700Bold',
        fontSize:18,
        color:'#4f4a4a'
    }
});