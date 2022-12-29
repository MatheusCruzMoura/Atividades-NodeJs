import React from 'react';
import '../App.css';

function Login() {
    return (
        <div className="App">
            <div className="caixa">
                <section className="login-box">
                    <img className="banner" src="https://bit.ly/3vcjmXV" alt="" />

                    <form className="login-form" action="/loginBootstrap">
                        <h1>Login HTML</h1>

                        <div className="login-input-box">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="" id="email" required />
                        </div>

                        <div className="login-input-box">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="" id="senha" required />
                        </div>

                        <button type="submit">Entrar</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Login
