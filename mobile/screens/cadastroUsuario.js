import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon, Input } from "react-native-elements";

export default function Index({ navigation }) {

    const [getEmail, setEmail] = useState();
    const [getSenha, setSenha] = useState();
    const [getSenhaRepetida, setSenhaRepetida] = useState();
    const [getVisivel, setVisivel] = useState();
    const [getEye, setEye] = useState();
    const [getErroSenhasDiferentes, setErroSenhasDiferentes] = useState();
    const [getErroInputNuloEmail, setErroInputNuloEmail] = useState();
    const [getErroInputNuloSenha, setErroInputNuloSenha] = useState();
    const [getErroInputSenhaRepetida, setErroInputSenhaRepetida] = useState();

    function revelarSenha(visivel) {
        if (visivel) {
            setVisivel(false)
            setEye('eye-slash')
        } else {
            setVisivel(true)
            setEye('eye')
        }
    }

    var validarInput = {
        email(value) {
            setEmail(value)
            if (value.length > 0) {
                setErroInputNuloEmail(0)
            } else {
                console.log(getSenha, getSenhaRepetida)
                setErroInputNuloEmail(1)
            }
        },
        senha(value) {
            setSenha(value)
            if (value.length > 0) {
                setErroInputNuloSenha(0)

                if (getSenhaRepetida != undefined && getSenhaRepetida != value) {
                    setErroSenhasDiferentes(1)
                    setErroInputSenhaRepetida('As senhas são diferentes!')
                } else {
                    setErroSenhasDiferentes(0)
                }

            } else {
                setErroInputNuloSenha(1)
            }
        },
        senhaRepetida(value) {
            setSenhaRepetida(value)
            if (getSenha === value) {
                setErroSenhasDiferentes(0)
            } else if (value.length > 0) {
                setErroSenhasDiferentes(1)
                setErroInputSenhaRepetida('As senhas são diferentes!')
            } else {
                setErroSenhasDiferentes(1)
                setErroInputSenhaRepetida('Campo obrigatório!')
            }
        }
    }

    function salvar() {
        if (getEmail == undefined) {
            setErroInputNuloEmail(1)
        } else if (getSenha == undefined) {
            setErroInputNuloSenha(1)
        } else if (getSenhaRepetida == undefined) {
            setErroSenhasDiferentes(1)
            setErroInputSenhaRepetida('Campo obrigatório!')
        } else if (getSenha == getSenhaRepetida) {
            navigation.navigate('Index')
        }
    }

    useEffect(() => {
        setVisivel(true)
        setEye('eye')
        setErroSenhasDiferentes(0)
        setErroInputNuloEmail(0)
        setErroInputNuloSenha(0)
    }, [])

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
                        { text: 'Usuário', style: { color: '#fff', fontSize: 20 } }
                    }
                />

                <Text style={styles.texto}>Cadastro de Usuário</Text>

                <Input
                    onChangeText={value => { validarInput.email(value) }}
                    errorStyle={{ opacity: getErroInputNuloEmail }}
                    errorMessage='Campo obrigatório!'
                    placeholder="E-mail"
                    leftIcon={{ color: '#fff', type: 'font-awesome', name: 'user' }}
                    containerStyle={styles.inputs}
                    inputContainerStyle={styles.inputContainer}
                    style={styles.input}
                    keyboardType='email-address'
                />

                <Input
                    onChangeText={value => { validarInput.senha(value) }}
                    errorStyle={{ opacity: getErroInputNuloSenha }}
                    errorMessage='Campo obrigatório!'
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

                <Input
                    onChangeText={value => { validarInput.senhaRepetida(value) }}
                    errorStyle={{ opacity: getErroSenhasDiferentes }}
                    errorMessage={getErroInputSenhaRepetida}
                    placeholder="Repetir Senha"
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
                    title="Cadastrar-se"
                    buttonStyle={[styles.button, { backgroundColor: '#1D99FA' }]}
                    containerStyle={{ marginTop: 30 }}
                    onPress={() => salvar()}
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
    texto: {
        color: '#fff',
        fontSize: 20,
        marginVertical: 30
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
