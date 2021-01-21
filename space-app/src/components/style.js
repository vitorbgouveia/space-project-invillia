import styled from 'styled-components';
import img_bg from '../assets/img_bg.svg';
import img_sun from '../assets/sun.png';

import planet_left_small from '../assets/img_leftroom_small.png'
import planet_right_small from '../assets/img_rightroom_small.svg'

import planet_left_medium from '../assets/img_leftroom_medium.svg'
import planet_right_medium from '../assets/img_rightroom_medium.svg'

import planet_left_large from '../assets/img_leftroom_large.svg'
import planet_right_large from '../assets/img_rightroom_large.svg'

export const BackGroundInitial = styled.div`
  background-color: #181639 !important;
  text-align: -webkit-center;
  background: url(${img_bg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  width: 100%;
  height: 100%;

  .radial-gradient {
    background-image: radial-gradient(
      hsl(323, 92%, 42%, 0.8),
      hsl(323deg 83% 38% / 60%),
      #670f7580,
      hsl(224, 54%, 18%, 0.5),
      #17153780 70%
    );
    height: 100%;
  }

  .col-select-galaxy {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .col-select-galaxy:hover {
    .name-prox-galaxy {
      opacity: 1;
    }
  }

  .select-navigate-galaxy {
    padding: 15px
  }

  .row-select-galaxy {
    padding-top: 50px;
  }

  .name-prox-galaxy {
    color: #00EBFF;
    font: normal normal medium 16px/19px Helvetica Neue;
    letter-spacing: 2.4px;
    color: #00EBFF;
    text-transform: uppercase;
    opacity: 0.7;
  }

  .label-top-galaxy {
    font: normal normal 100 48px/57px Helvetica Neue;
    letter-spacing: 14.4px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-bottom: 0px;
  }

  .label-viajar {
    margin-bottom: 0;
    }

  .label-planet {
    font-size: 20px;
  }

  .bg-planet-left-small {
    background: url(${planet_left_small});
    background-repeat: no-repeat;
    background-position: center;
    height: 153px;
    width: 153px;
  }

  .bg-planet-left-medium {
    background: url(${planet_left_medium});
    background-repeat: no-repeat;
    background-position: center;
    height: 188px;
    width: 188px;
  }

  .bg-planet-left-large {
    background: url(${planet_left_large});
    background-repeat: no-repeat;
    background-position: center;
    height: 264px;
    width: 264px;
  }

  .bg-planet-right-small {
    background: url(${planet_right_small});
    background-repeat: no-repeat;
    background-position: center;
    height: 153px;
    width: 153px;
  }

  .bg-planet-right-medium {
    background: url(${planet_right_medium});
    background-repeat: no-repeat;
    background-position: center;
    height: 188px;
    width: 188px;
  }

  .bg-planet-right-large {
    background: url(${planet_right_large});
    background-repeat: no-repeat;
    background-position: center;
    height: 264px;
    width: 264px;
  }

  .bg-sun {
    background: url(${img_sun}) no-repeat;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    color: #ffffff;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .label-large {
    font: normal normal 100 48px/57px Helvetica Neue;
    letter-spacing: 14.4px;
    color: #FFFFFF;
    text-transform: uppercase;
  }

  .label-medium {
    font-size: 16px;
  }

  .label-title {
    font: normal normal medium 20px/25px Helvetica Neue;
    letter-spacing: 0px;
    color: #FFFFFF;
  }

  .label-desc {
    font: normal normal bold 14px/17px Helvetica Neue;
    letter-spacing: 0px;
    color: #FFFFFF;
  }

  .label-small {
    font: normal normal medium 11px/13px Helvetica Neue;
    letter-spacing: 0px;
    color: #FFFFFF;
  }

  .planet {
    div.dialogPlanet {
      opacity: 0;
    }
  }

  .planet:hover {
    div.dialogPlanet {
      transition: opacity 0.5s;
      opacity: 1;
    }
  }
`;

export const ButtonPrimary = styled.button`
  background: #ffffff;
  border-radius: 8px;
  color: #181639;
  padding: 13px;
  width: 100%;
  border-width: 1px;
`;

export const DivInputText = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  background: hsla(289, 43%, 17%, 0.402) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  font-size: 18px;

  input {
    border: 0;
    outline-width: 0;
    background: transparent;
    width: 100%;
    color: #ffffff;
    margin-left: 20px;
    margin-right: 20px;
  }

  select {
    cursor: pointer;
    border: 0;
    outline-width: 0;
    background: transparent;
    width: 100%;
    color: #ffffff;
    margin-left: 20px;
    margin-right: 20px;
  }

  option {
    border: 0;
    outline-width: 0;
    background: #65315e;
    width: 100%;
    color: #ffffff;
    margin-right: 20px;
  }

  svg {
    font-size: large;
    margin-right: 20px;
    margin-top: 5px;
    cursor: pointer;
    opacity: 0.5;
  }
`;
