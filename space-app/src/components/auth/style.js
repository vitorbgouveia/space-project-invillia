import styled from 'styled-components';
import img_bg from '../../assets/img_bg.svg';

export const BackGroundInitial = styled.div`
  background-color: #181639 !important;
  text-align: -webkit-center;
  background: url(${img_bg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: absolute;

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
`;
