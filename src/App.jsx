import React, { useState } from 'react';
import './App.css';

function App() {
  // Definindo os estados para armazenar os valores do formulário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  // Função que lida com o envio do formulário
  const handleLogin = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Validando os campos
    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos');
      return;
    }

    // Exemplo de validação simples (você pode substituir por uma lógica real)
    if (email === 'teste@exemplo.com' && senha === 'senha123') {
      alert('Login bem-sucedido!');
    } else {
      setErro('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {erro && <p className="error">{erro}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
}

export default App;
