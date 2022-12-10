import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Avatar, Input, Button, Icon } from "react-native-elements";
import axios from 'axios';

import { API_HOST } from '@env';
const API_URL = `http://${API_HOST}/usuarios/login`

export default function Index({ navigation }) {

    const [getEmail, setEmail] = useState();
    const [getSenhaLogin, setSenhaLogin] = useState();
    const [getVisivel, setVisivel] = useState();
    const [getEye, setEye] = useState();

    function revelarSenha(visivel) {
        if (visivel) {
            setVisivel(false)
            setEye('eye-slash')
        } else {
            setVisivel(true)
            setEye('eye')
        }
    }

    async function login() {
        if (getEmail != undefined && getSenhaLogin != undefined) {
            await axios.post(API_URL, {
                email: getEmail,
                senha: getSenhaLogin
            }).then(function (response) {
                if (response.data.token != undefined) {
                    navigation.navigate('ListaContatos')
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        setVisivel(true)
        setEye('eye')
    }, [])

    return (
        <View style={styles.container}>
            <Avatar
                size="xlarge"
                rounded
                icon={{ size: 96, name: 'user', type: 'font-awesome' }}
                activeOpacity={1}
                containerStyle={styles.avatar}
            />

            <Text style={styles.texto}>Bem-vindo ao React Native!</Text>

            <Input
                placeholder="E-mail"
                value={getEmail}
                onChangeText={(value) => { setEmail(value) }}
                leftIcon={{ color: '#fff', type: 'font-awesome', name: 'envelope' }}
                containerStyle={styles.inputs}
                inputContainerStyle={styles.inputContainer}
                style={styles.input}
                keyboardType="email-address"
            />

            <Input
                placeholder="Senha"
                value={getSenhaLogin}
                onChangeText={(value) => { setSenhaLogin(value) }}
                leftIcon={{ color: '#fff', type: 'font-awesome', name: 'lock' }}
                rightIcon={
                    <Icon
                        name={getEye}
                        type='font-awesome'
                        iconStyle={{ color: '#fff' }}
                        onPress={() => revelarSenha(getVisivel)}
                    />

                }
                secureTextEntry={getVisivel}
                containerStyle={styles.inputs}
                inputContainerStyle={styles.inputContainer}
                style={styles.input}
            />

            <Button
                title="Entrar"
                buttonStyle={[styles.button, { backgroundColor: '#1D99FA' }]}
                containerStyle={{ marginTop: 30 }}
                onPress={() => login()}
            />

            <Button
                title="Cadastrar-se"
                type="outline"
                buttonStyle={[styles.button, { backgroundColor: 'rgba(255, 255, 255, 0.075)' }]}
                containerStyle={{ marginTop: 20 }}
                onPress={() => navigation.navigate('CadastroUsuario')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222a34',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight
    },
    avatar: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: 100,
        marginBottom: 30
    },
    texto: {
        flex: 0,
        color: '#fff',
        fontSize: 20,
        marginBottom: 30
    },
    inputs: {
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
