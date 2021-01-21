import React, { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { CardLogin } from './style';
import { BackGroundInitial } from '../style';
import { DivInputText, ButtonPrimary } from '../../style';
import { login } from '../../../apis/auth';

import logo from '../../../assets/logo_invillia.png'

import { history } from '../../../history';

import { message } from 'antd';

function Login() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ show, setShow ] = useState(false);

  const handlerClick = (e) => {
    e.preventDefault();
    setShow(!show);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    login({ login: email, password })
      .then(() => {
        history.push('/');
      })
      .catch(() => message.error('Error ao realizar login') );
  }

  const handleToRegister = () => {
    history.push('/cadastro');
  }

  return (
    <BackGroundInitial>
      <div className="radial-gradient">
        <CardLogin>
          <div className="row">
            <div className="card-login">
              
              <div className="row">
                <div className="option-login col-sm-6 text-center">
                  <h3>Login</h3>
                </div>
                <div onClick={handleToRegister} className="option-cadastrar-me col-sm-6 text-center">
                  <h3>Cadastrar-me</h3>
                </div>
              </div>

              <p className="card-title">Seja bem-vindo</p>

              <form className="card-form" onSubmit={onSubmit}>
                
                <div className="form-group">
                  <label for="email">Email</label>
                  <DivInputText>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Insira seu email"/>
                  </DivInputText>
                </div>

                <div className="form-group">
                  <label for="senha">Senha</label>
                  <DivInputText>
                    <input type={show ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Insira sua senha"/>
                    <div className="login-eye">
                      {show ? (
                        <HiEye
                          size={20}
                          onClick={handlerClick}
                        />
                      ) : (
                        <HiEyeOff
                          size={20}
                          onClick={handlerClick}
                        />
                      )}</div>
                  </DivInputText>
                </div>

                <div>
                  <ButtonPrimary>
                    ENTRAR
                  </ButtonPrimary>
                </div>

              </form>
            </div>
            <div>
              <img src={ logo } alt="125x81" />
            </div>
          </div>
        </CardLogin>

      </div>
    </BackGroundInitial>
  )
}

export default Login;