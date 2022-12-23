import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <section className="login-box">
          <img className="banner" src="https://bit.ly/3vcjmXV" alt="" />

          <form className="login-form">
            <h1>Login</h1>

            <div className="login-input-box">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="" id="email" />
            </div>

            <div className="login-input-box">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="" id="senha" />
            </div>

            <button type="submit">Entrar</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default App
