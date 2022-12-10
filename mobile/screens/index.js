import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Avatar, Input, Button, Icon } from "react-native-elements";

export default function Index({ navigation }) {

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
                placeholder="Usuário"
                leftIcon={{ color: '#fff', type: 'font-awesome', name: 'user' }}
                containerStyle={styles.inputs}
                inputContainerStyle={styles.inputContainer}
                style={styles.input}
            />

            <Input
                placeholder="Senha"
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
                onPress={() => navigation.navigate('ListaContatos')}
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
