import React, { useState, useEffect } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { CardLogin } from "./style";
import { BackGroundInitial } from '../style';
import { DivInputText, ButtonPrimary } from '../../style';

import { history } from "../../../history";

import archer from "../../../assets/avatars/archer.jpg";
import mage from "../../../assets/avatars/mage.jpg";
import support from "../../../assets/avatars/support.jpg";
import warrior from "../../../assets/avatars/warrior.jpeg";
import logo from "../../../assets/logo_invillia.png";

import { getAllPlanets, register } from "../../../apis/space";

import { message } from 'antd';

function Register() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [planet, setPlaneta] = useState(1);
  const [planets, setPlanets] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const avatars = [
    { img: archer, name: "Arqueiro", value: 1 },
    { img: mage, name: "Mago", value: 2 },
    { img: support, name: "Suporte", value: 3 },
    { img: warrior, name: "Guerreiro", value: 4 },
  ];

  useEffect(() => {
    (async () => {
      setPlanets((await getAllPlanets()).data);
    })();
  }, []);

  const handlerClickPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handlerClickConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleToLogin = () => {
    history.push("/login");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    register({
      nickName,
      email,
      password,
      avatar,
      planet,
    }).then(() => {
      message.success('Viajante cadastrado com sucesso!');
      handleToLogin();
    })
    .catch(() => message.error('Error ao cadastrar viajante!') );
  };

  return (
    <BackGroundInitial>
      <div className="radial-gradient">
        <CardLogin>
          <div className="row">
            <div className="card-login">
              <div className="row">
                <div
                  onClick={handleToLogin}
                  className="option-login col-sm-6 text-center"
                >
                  <h3>Login</h3>
                </div>
                <div className="option-cadastrar-me col-sm-6 text-center">
                  <h3>Cadastrar-me</h3>
                </div>
              </div>

              <form className="card-form" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <label>Nickname</label>
                    <DivInputText>
                      <input
                        type="text"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                        placeholder="Insira seu nickname"
                      />
                    </DivInputText>
                  </div>

                  <div className="col-sm-6 form-group">
                    <label for="email">Email</label>
                    <DivInputText>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Insira seu email"
                      />
                    </DivInputText>
                  </div>

                  <div className="col-sm-6 form-group">
                    <label>Senha</label>
                    <DivInputText>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Insira sua senha"
                      />
                      <div className="login-eye">
                        {showPassword ? (
                          <HiEye size={20} onClick={handlerClickPassword} />
                        ) : (
                          <HiEyeOff size={20} onClick={handlerClickPassword} />
                        )}
                      </div>
                    </DivInputText>
                    {password &&
                    confirmPassword &&
                    password !== confirmPassword ? (
                      <span className="color-red">Senhas não coincidem</span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="col-sm-6 form-group">
                    <label>Confirme sua senha</label>
                    <DivInputText>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Insira novamente sua senha"
                      />
                      <div className="login-eye">
                        {showConfirmPassword ? (
                          <HiEye
                            size={20}
                            onClick={handlerClickConfirmPassword}
                          />
                        ) : (
                          <HiEyeOff
                            size={20}
                            onClick={handlerClickConfirmPassword}
                          />
                        )}
                      </div>
                    </DivInputText>
                    {password &&
                    confirmPassword &&
                    password !== confirmPassword ? (
                      <span className="color-red">Senhas não coincidem</span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="col-sm-6 form-group">
                    <label>Selecione um planeta</label>
                    <DivInputText>
                      <select
                        type="select"
                        value={planet}
                        onChange={(e) => setPlaneta(e.target.value)}
                        placeholder="Selecione um planeta"
                      >
                        {planets?.map((planeta) => (
                          <option value={planeta.id}>{planeta.name}</option>
                        ))}
                      </select>
                    </DivInputText>
                  </div>

                  <div className="col-sm-6 form-group">
                    <label>Selecione um avatar</label>
                    <div className="div-avatar text-center">
                      {avatars.map((row) => (
                        <img
                          className={`float-right img-avatar ${
                            avatar === row.value ? "avatar-selected" : ""
                          }`}
                          onClick={() => setAvatar(row.value)}
                          src={row.img}
                          height="60px"
                          alt="40x40"
                        />
                      ))}
                    </div>
                  </div>

                </div>

                <div>
                  <ButtonPrimary>CADASTRAR-ME</ButtonPrimary>
                </div>
              </form>
            </div>
            <div>
              <img src={logo} alt="125x81" />
            </div>
          </div>
        </CardLogin>
      </div>
    </BackGroundInitial>
  );
}

export default Register;
