import React from 'react';
import '../App.css';

function Cadastro() {
    return (
        <div className="App">
            <div className="caixa">
                <section className="login-box">
                    <img className="banner" src="https://bit.ly/3vcjmXV" alt="" />

                    <form className="login-form" action="/">
                        <h1>Cadastro de Usuário</h1>

                        <div className="login-input-box">
                            <label htmlFor="nome">Nome</label>
                            <input name="" id="nome"  />
                        </div>

                        <div className="login-input-box">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="" id="email"  />
                        </div>

                        <div className="login-input-box">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="" id="senha"  />
                        </div>

                        <div className="login-input-box">
                            <label htmlFor="confirmarSenha">Confirmar Senha</label>
                            <input type="password" name="" id="confirmarSenha"  />
                        </div>

                        <button type="submit">Cadastrar</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Cadastro