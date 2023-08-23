import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/useLogin";

export default function FormLogin() {
  const navigate = useNavigate();
  const { setLogin } = useLogin();

  const [senha, setSenha] = useState("");

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <form
          autoComplete="off"
          className="col-lg-5 col-md-8 p-4 rounded-3 shadow"
          onSubmit={(e) => {
            e.preventDefault();
            setLogin(true);
            navigate("/mapa");
          }}
          style={{ backgroundColor: "#f8f9fa" }} // Adjust background color
        >
          <div className="mb-4 text-center">
            <img
              src="https://managementbi.files.wordpress.com/2020/03/uslogin.jpg" // Replace with your logo
              alt="Logo"
              className="mb-3"
              style={{ width: "100px", height: "100px" }} // Adjust width and height
            />

            <h3 className="mb-0">Faça Login para acessar o site</h3>
            <small className="text-muted">
              Insira seus dados para continuar
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              required
              placeholder="Digite o seu e-mail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputSenha" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="inputSenha"
              required
              placeholder="Digite a sua senha"
              pattern="^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,30}$"
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="mb-4 text-center">
            <p className="mb-1">
              <b>Sua senha deve conter pelo menos:</b>
            </p>
            <p className="mb-1">
              {senha.length >= 8 ? "✅" : "❌"} 8 caracteres
            </p>
            <p className="mb-1">
              {senha.search(/[a-z]/) !== -1 ? "✅" : "❌"} 1 letra
            </p>
            <p className="mb-2">
              {senha.search(/[0-9]/) !== -1 ? "✅" : "❌"} 1 número
            </p>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
