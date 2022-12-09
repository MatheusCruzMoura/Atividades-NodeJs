import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon, Input } from "react-native-elements";
import axios from 'axios';

export default function CadastroContato({ navigation }) {

    const [getNome, setNome] = useState();
    const [getEmail, setEmail] = useState();
    const [getTelefone, setTelefone] = useState();

    async function inserirDados() {
        await axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        }).then(function (response) {
            console.log(response);
            navigation.navigate('ListaContatos')
        }).catch(function (error) {
            console.log(error);
        });
    }

    function salvar() {
        navigation.navigate('ListaContatos')
    }

    return (
        <Fragment>
            <View style={styles.container}>
                <Header
                    backgroundColor='#222a34'
                    containerStyle={styles.header}
                    leftComponent={
                        <Button
                            buttonStyle={{
                                backgroundColor: 'transparent',
                                paddingVertical: 0,
                                paddingHorizontal: 10
                            }}
                            icon={
                                <Icon
                                    name='angle-left'
                                    type='font-awesome'
                                    color='#fff'
                                    size={30}
                                />
                            }
                            onPress={() => navigation.goBack()}
                        />
                    }
                    centerComponent={
                        { text: 'Cadastro de Contato', style: { color: '#fff', fontSize: 20 } }
                    }
                />

                <Input
                    placeholder="Nome"
                    onChangeText={(text) => setNome(text)}
                    value={getNome}
                    leftIcon={{ color: '#fff', type: 'font-awesome', name: 'user' }}
                    containerStyle={[styles.inputs, { paddingTop: 50 }]}
                    inputContainerStyle={styles.inputContainer}
                    style={styles.input}
                />

                <Input
                    placeholder="E-mail"
                    onChangeText={(text) => setEmail(text)}
                    value={getEmail}
                    leftIcon={{ color: '#fff', type: 'font-awesome', name: 'envelope' }}
                    containerStyle={styles.inputs}
                    inputContainerStyle={styles.inputContainer}
                    style={styles.input}
                    keyboardType='email-address'
                />

                <Input
                    placeholder="Telefone"
                    onChangeText={(text) => setTelefone(text)}
                    value={getTelefone}
                    leftIcon={{ color: '#fff', type: 'font-awesome', name: 'phone' }}
                    containerStyle={styles.inputs}
                    inputContainerStyle={styles.inputContainer}
                    style={styles.input}
                    keyboardType='phone-pad'
                />

                <Button
                    title="Salvar"
                    buttonStyle={[styles.button, { backgroundColor: '#1D99FA' }]}
                    containerStyle={{ marginTop: 30 }}
                    onPress={() => inserirDados()}
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
    inputs: {
        paddingBottom: 5,
        alignItems: 'center'
    },
    inputContainer: {
        width: 300
    },
    input: {
        marginLeft: 10,
        color: '#fff'
    },
    button: {
        width: 250
    }
});
