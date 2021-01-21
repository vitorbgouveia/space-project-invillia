import axios from "axios";

const spaceUrl = "http://localhost:3000";

const register = async (formRegister) => {
  return await axios.post(`${spaceUrl}/traveler/create`, formRegister)
};

const getAllPlanets = async () => {
  return await axios.get(`${spaceUrl}/planet`);
}

const getAllGalaxys = async () => {
  return await axios.get(`${spaceUrl}/galaxy`, { headers: {
    'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`
  }});
}

const navigateToPlanet = async planet => {
  return await axios.patch(`${spaceUrl}/traveler/${localStorage.getItem('userId')}`, { planet }, { headers: {
    'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`
  }});
}

const ingressMeeting = async idPlanet => {
  return await axios.get(`${spaceUrl}/planet/meeting?planet=${idPlanet}`, { headers: {
    'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`
  }})
    .then(async meeting => {
      return await axios.post(`${spaceUrl}/planet/meeting/join`,
        { link: meeting.data[0].link, planet: idPlanet, traveler: Number(localStorage.getItem('userId')) }, { headers: {
        'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}`
      }})
        .then(() => window.location.href = meeting.data[0].link )
    })
}

export { register, getAllPlanets, getAllGalaxys, navigateToPlanet, ingressMeeting };
