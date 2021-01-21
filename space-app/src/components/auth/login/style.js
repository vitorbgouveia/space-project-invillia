import styled from 'styled-components';

export const CardLogin = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    font-size: 17px;
  }

  h3 {
    color: #ffffff;
    margin-top: 12px;
  }

  .card-login {
    width: 608px;
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
    background-color: transparent;
    border-bottom: 1px solid #afafaf7a;
  }
  
  .option-login {
    cursor: pointer;
    border-radius: 8 px;
    background-color: #afafaf2e;
    border-bottom: 1px solid #ffffff;
  }

  .option-cadastrar-me:hover {
    transition: background-color 1s;
    background-color: #afafaf2e;
    border-bottom: 1px solid #ffffff;
  }

  .card-title {
    margin-top: 20px;
    font-size: 32px;
  }

  .card-form {
    margin-top: 30px;
  }
`;


