import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Header, Button, Icon, ListItem, Avatar } from "react-native-elements";
import axios from 'axios';

import { API_HOST } from '@env';
const API_URL_AUTH = `http://${API_HOST}/usuarios/auth`

export default function ListaContatos({ route, navigation }) {

    const [getToken, setToken] = useState();
    const [getData, setData] = useState([]);

    async function validarToken(token) {
        await axios.post(API_URL_AUTH, {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            if (response.data.erro) {
                navigation.navigate('Index')
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        if (route.params) {
            const { token } = route.params;
            setToken(token)
        }

        if (getToken != undefined) {
            validarToken(getToken);
        }

        async function resgatarDados() {
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
            )
            setData(result.data);
        }
        resgatarDados();
    })

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem
            bottomDivider
            containerStyle={styles.item}
            onPress={() => navigation.navigate('CadastroContato', { id: item.id, nome: item.nome, email: item.email, telefone: item.telefone })}
        >
            <Avatar
                size='medium'
                rounded
                icon={{ size: 30, name: 'user', type: 'font-awesome' }}
                activeOpacity={1}
                containerStyle={styles.avatar}
            />

            <ListItem.Content style={{ width: '100%', marginLeft: 5, alignItems: 'flex-start' }}>
                <ListItem.Title style={{ color: '#fff' }}>{item.nome}</ListItem.Title>
                <ListItem.Subtitle style={{ color: '#999' }}>{item.telefone}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )


    return (
        <Fragment>
            <View style={styles.container}>
                <Header
                    backgroundColor='#222a34'
                    containerStyle={styles.header}
                    rightComponent={
                        <Button
                            buttonStyle={{
                                backgroundColor: 'transparent',
                                paddingVertical: 0,
                                paddingHorizontal: 10
                            }}
                            icon={
                                <Icon
                                    name='plus'
                                    type='font-awesome'
                                    color='#fff'
                                    size={30}
                                />
                            }
                            onPress={() => navigation.navigate('CadastroContato')}
                        />
                    }
                    centerComponent={
                        { text: 'Lista de Contatos', style: { color: '#fff', fontSize: 20 } }
                    }
                />

                <FlatList
                    keyExtractor={keyExtractor}
                    data={getData}
                    renderItem={renderItem}
                    style={{ width: '100%' }}
                />

            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222a34',
        alignItems: 'center'
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        backgroundColor: '#222a34'
    },
    avatar: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    texto: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 30
    }
});
