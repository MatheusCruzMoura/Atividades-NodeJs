import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Button, Icon, Input } from "react-native-elements";
import axios from 'axios';

export default function CadastroContato({ route, navigation }) {

    const [getId, setId] = useState();
    const [getNome, setNome] = useState();
    const [getEmail, setEmail] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getAcao, setAcao] = useState();
    const [getExiste, setExiste] = useState();

    async function inserirDados() {
        await axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        }).then(function (response) {
            navigation.navigate('ListaContatos')
        }).catch(function (error) {
            console.log(error);
        });
    }

    async function alterarDados() {
        await axios.put("http://professornilson.com/testeservico/clientes/" + getId, {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        }).then(function (response) {
            // console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    function excluirDados() {
        axios.delete("http://professornilson.com/testeservico/clientes/" + getId)
            .then(function (response) {
                navigation.navigate('ListaContatos')
            }).catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        setAcao('Cadastrar Contato');
        setExiste(false)

        if (route.params) {
            const { id } = route.params;
            const { nome } = route.params;
            const { email } = route.params;
            const { telefone } = route.params;

            setNome(nome);
            setId(id);
            setEmail(email);
            setTelefone(telefone);
            setAcao('Editar Contato');
            setExiste(true)
        }
    }, []);

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
                        { text: getAcao, style: { color: '#fff', fontSize: 20 } }
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

                {getExiste ? (
                    <Fragment>
                        <Button
                            title="Editar"
                            onPress={() => alterarDados()}
                            buttonStyle={styles.button}
                            containerStyle={{ marginTop: 20 }}
                        />
                        <Button
                            title="Excluir"
                            onPress={() => excluirDados()}
                            buttonStyle={[styles.button, { backgroundColor: '#ff3933' }]}
                            containerStyle={{ marginTop: 20 }}
                        />
                    </Fragment>
                ) : (
                    <Button
                        title="Salvar"
                        onPress={() => inserirDados()}
                        buttonStyle={styles.button}
                        containerStyle={{ marginTop: 20 }}
                    />
                )
                }

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
        width: 250,
        backgroundColor: '#1D99FA'
    }
});
