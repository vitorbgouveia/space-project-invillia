import styled from 'styled-components';

export const CardLogin = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    font-size: 17px;
  }

  .color-red {
    color: red;
  }

  h3 {
    color: #ffffff;
    margin-top: 12px;
  }

  .card-login {
    width: 750px;
    height: auto;
    color: white;
    background-color: #ffff;
    background: radial-gradient(
      circle,
      rgba(120, 4, 131, 0.7),
      rgba(119, 55, 103, 0.9),
      hsl(291, 20%, 39%, 0.8)
    );
    border: 0.1px solid #6d6d6d5e;
    border-radius: 16px;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);

    padding: 20px 45px 30px 45px;
    text-align: left;
    margin-top: 50px;
  }

  .option-cadastrar-me {
    cursor: pointer;
    border-radius: 8 px;
    background-color: #afafaf2e;
    border-bottom: 1px solid #ffffff;
  }
  
  .option-login {
    cursor: pointer;
    border-radius: 8 px;
    background-color: transparent;
    border-bottom: 1px solid #afafaf7a;
  }

  .option-login:hover {
    cursor: pointer;
    transition: background-color 1s;
    background-color: #afafaf2e;
    border-bottom: 1px solid #ffffff;
  }

  .card-title {
    font-size: 32px;
  }

  .card-form {
    margin-top: 30px;
  }

  .div-avatar {
    margin-left: 11px;
  }

  .img-avatar {
    margin-right: 11px;
    border-radius: 15px;
    opacity: 0.4;
    cursor: pointer;
  }

  .img-avatar:hover {
    opacity: 1;
  }

  .avatar-selected {
    border: 2px solid rgb(255 255 255 / 47%);
    opacity: 1;
  }
`;
