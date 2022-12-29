import React from 'react';
import '../App.css';

function Login() {
    return (
        <div className="App">
            <div className="caixa">
                <section className="login-box">
                    <img className="banner" src="https://bit.ly/3vcjmXV" alt="" />

                    <form className="login-form" action="/home">
                        <h1>Login HTML</h1>

                        <div className="login-input-box">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="" id="email" />
                        </div>

                        <div className="login-input-box">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="" id="senha" />
                        </div>

                        <button type="submit">Entrar</button>
                        <a href='/cadastro'>Cadastrar-se</a>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login
