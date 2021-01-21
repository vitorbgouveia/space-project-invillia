import React, { useState, useEffect } from 'react';
import { BackGroundInitial } from '../style';
import { Row, Col } from 'antd';
import bottom_galaxy_selected from '../../assets/effect_bottom_galaxy_selected.png';
import select_left from '../../assets/ic_travel_left.svg';
import select_right from '../../assets/ic-travel-right.svg';

import archer from '../../assets/avatars/archer.jpg'
import mage from "../../assets/avatars/mage.jpg";
import support from "../../assets/avatars/support.jpg";
import warrior from "../../assets/avatars/warrior.jpeg";
import img_sun from '../../assets/sun.png';

import logo from '../../assets/logo_invillia.png'

import { AiOutlinePoweroff } from "react-icons/ai";

import { getAllGalaxys, navigateToPlanet, ingressMeeting } from '../../apis/space';
import { logout } from '../../apis/auth';

const Planet = props => <p style={{ marginTop: props.value }}>{props.children}</p>;

function Space() {
  const [galaxys, setGalaxys] = useState([]);
  const [galaxy, setGalaxy] = useState("");
  const [separetPlanets, setSeparetPlanets] = useState([]);
  const [beforeGalaxy, setBeforeGalaxy] = useState("");
  const [afterGalaxy, setAfterGalaxy] = useState("");

  const avatars = [
    { img: archer, name: "Arqueiro", value: 1 },
    { img: mage, name: "Mago", value: 2 },
    { img: support, name: "Suporte", value: 3 },
    { img: warrior, name: "Guerreiro", value: 4 },
  ];

  const valueSeparetPlanets = [];
  const formatSeparetPlanets = galaxySelected => {
    let sequence = [];
    const qtdBySequence = galaxySelected.planets.length < 5 ? 2 : 4;
    galaxySelected.planets.map((planet, index) => {
      sequence.push(planet)
      if (((index + 1) % qtdBySequence === 0) || (index + 1) === galaxySelected.planets.length) {
        valueSeparetPlanets.push(sequence);
        sequence = [];
      }
      return planet;
    });
    setSeparetPlanets(valueSeparetPlanets);
  }

  const getNameAbbreviation = name => {
    const result = name.trim().split(' ');
    return result[0].substr(0, 1) + result[result.length - 1].substr(0, 1);
  }

  const getSizePlanet = travelersLenght => {
    if (travelersLenght <= 4) {
      return 'small';
    }

    if (travelersLenght <= 6) {
      return 'medium';
    }

    return 'large';
  }

  const formatArrayTravelersBySizePlanet = travelers => {
    const sizePlanet = getSizePlanet(travelers.length);

    const qtdBySequence = sizePlanet === 'small' ? 2 : (sizePlanet === 'medium' ? 3 : 4);
    let separetTraveler = [];
    let sequence = [];
    travelers.map((traveler, index) => {
      sequence.push(traveler)
      if (((index + 1) % qtdBySequence === 0) || (index + 1) === travelers.length) {
        separetTraveler.push(sequence);
        sequence = [];
      }
      return traveler;
    });
    return separetTraveler;
  }

  const changeGalaxy = galaxySelected => {
    if (!galaxySelected) {
      return;
    }
    setGalaxy(galaxySelected);
    
    const indexGalaxySelected = galaxys.findIndex(galax => galax.id === galaxySelected.id);
    setBeforeGalaxy(galaxys[indexGalaxySelected - 1]);
    setAfterGalaxy(galaxys[indexGalaxySelected + 1]);

    formatSeparetPlanets(galaxySelected)
  };

  const goToPlanet = planet => {
    navigateToPlanet(planet)
      .then(() => resetGalaxys())
  }

  const getIndexGalaxyTraveler = resultGalaxys => {
    return resultGalaxys.findIndex(galax =>
      galax.planets.some(plane =>
        plane.travelers.some(traver =>
          traver.id === Number(localStorage.getItem('userId')) 
        )
      )
    );
  }

  const getPlanetTraveler = () => {
    let planet;
    galaxys.map(galax =>
      galax.planets.map(plane => {
        if (plane.travelers.some(traver => traver.id === Number(localStorage.getItem('userId')))) {
          planet = plane;
        }
        return plane;
      })
    );
    return planet;
  }

  const resetGalaxys = async () => {
    const resultGalaxys = ((await getAllGalaxys()).data).sort((a, b) => a.ordination - b.ordination );
      setGalaxys(resultGalaxys);

      const indexGalaxyTraveler = getIndexGalaxyTraveler(resultGalaxys);

      setBeforeGalaxy(resultGalaxys[indexGalaxyTraveler - 1]);
      setGalaxy(resultGalaxys[indexGalaxyTraveler]);
      setAfterGalaxy(resultGalaxys[indexGalaxyTraveler + 1]);

      formatSeparetPlanets(resultGalaxys[indexGalaxyTraveler])
  }

  useEffect(() => {
    resetGalaxys();
  }, []);

  return (
    <BackGroundInitial>
      <div className="radial-gradient">
        <div 
          style={{
            'background': `url(${galaxy.name !== 'Via Láctea' ? galaxy.imageLink : img_sun}) no-repeat center`,
            'width': '100%',
            'height': '100%',
            'opacity': 0.8,
            'color': '#ffffff' }}>
          <Row className="row-select-galaxy">
            <Col span={5} offset={2} onClick={() => changeGalaxy(beforeGalaxy)} className="col-select-galaxy">
              { beforeGalaxy 
                ? (
                  <>
                    <Col>
                      <label className="cursor-pointer select-navigate-galaxy">
                        <img className="cursor-pointer" src={ select_left } alt="35x25"/>
                      </label>
                    </Col>
      
                    <Col className="m-l-15 text-left cursor-pointer">
                      <Col>
                        <label className="label-viajar cursor-pointer">
                          Viajar para
                        </label>
                      </Col>
                      <Col>
                        <label className="name-prox-galaxy cursor-pointer">
                          { beforeGalaxy?.name }
                        </label>
                      </Col>
                    </Col>
                  </>
                )
                : ''
              }
            </Col>

            <Col span={9} className="d-flex">
              <label className="label-top-galaxy">{galaxy.name}</label>
              <span>
                <img src={ bottom_galaxy_selected } alt="30x30"/>
              </span>
            </Col>

            <Col span={5} offset={2} onClick={() => changeGalaxy(afterGalaxy)} className="col-select-galaxy">
            { afterGalaxy 
              ? (
                <>
                  <Col className="m-l-15 text-right">
                    <Col>
                      <label className="label-viajar cursor-pointer">
                        Viajar para
                      </label>
                    </Col>
                    <Col>
                      <label className="name-prox-galaxy cursor-pointer">
                        { afterGalaxy?.name }
                      </label>
                    </Col>
                  </Col>

                  <Col>
                    <label className="select-navigate-galaxy cursor-pointer">
                      <img className="cursor-pointer" src={ select_right } alt="30x30"/>
                    </label>
                  </Col>
                </>
              )
              : ''
            }
            </Col>

            <Col span={1} onClick={logout}>
              <AiOutlinePoweroff className="cursor-pointer"
                size={35}
                onClick={logout}
              />
            </Col>
          </Row>

          <div className="h-100" justify="space-around" align="middle">
            {separetPlanets?.map(row => (
              <Row justify="space-around" align="middle">

                {row.map((planet, index) => (
                  <Col span={5} offset={1} className="planet">
                    <Planet value={40}>
                      <Row justify="space-around" align="middle" className={`bg-planet-${((index + 1) * 2) > row.length ? 'right' : 'left'}-${getSizePlanet(planet.travelers.length)}`}>

                        {formatArrayTravelersBySizePlanet(planet.travelers).map(row => (
                          <Col>
                            {row.map(traveler => {
                              return (
                                <>
                                  <Col>
                                    <img style={{ border: '2px solid rgb(250, 0, 192)', borderRadius: 45}} src={avatars.find(avatar => avatar.value === traveler.avatar).img} width="28" alt="28x28"/>
                                  </Col>
                                  <Col>
                                    {getNameAbbreviation(traveler.nickName)}
                                  </Col>
                                </>
                              )
                            })}
                          </Col>
                        ))}
                        
                      </Row>
                      <Col>
                        <label className="label-planet">
                          {planet.name}
                        </label>
                      </Col>
                      <Col className="text-left dialogPlanet" style={{
                        width: 280, height: getPlanetTraveler().id !== planet.id ? 55 : 100,
                        backgroundColor: 'rgb(255, 255, 255, 0.22)', borderRadius: 12, marginLeft: 100, paddingTop: 15}}>
                        <div style={{ paddingLeft: 25 }}>
                          <p className="label-medium cursor-pointer" onClick={() => goToPlanet(planet)}><b>{'Viajar para o planeta >'}</b></p>
                          { getPlanetTraveler().id !== planet.id
                            ? ('')
                            : (<p className="label-medium cursor-pointer" onClick={() => ingressMeeting(planet.id)}><b>{'Ingressar na video conferencia >'}</b></p>)
                          }
                        </div>
                      </Col>
                    </Planet>
                  </Col>
                ))}

              </Row>
            ))}
            <Row justify="space-around" align="middle">
              <Col>
                <img src={ logo } alt="125x81" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </BackGroundInitial>
  )
}

export default Space;