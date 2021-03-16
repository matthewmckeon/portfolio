import RoundsPic from './images/RoundsPic.png';
import SwansonPic from './images/SwansonPic.png';

const projectData = [
  {
    title: 'Rounds App',
    info:
      'This app allows golfers to log their past rounds. It is developed with the MERN (MongoDB, Express.js, React, Node.js) stack and showcases the CRUD (Create, Read, Update, Delete) operations. It also features a leaderboard, so that golfers can see how their scores compare with other users.',
    img: RoundsPic,
    alt: 'RoundsApp',
    url: 'https://rounds-golf-app.heroku.app',
    repo: 'https://github.com/matthewmckeon/rounds',
  },
  {
    title: 'Ron Swanson Quote Generator',
    info:
      'This single-page app utilizes the Ron-Swanson-Quote API to showcase random Ron Swanson quotes with the press of a button. It is developed with React.js and makes use of the Fetch API to call endpoints.',
    img: SwansonPic,
    alt: 'Ron Swanson',
    url: 'https://ron-swanson-quote.herokuapp.com/',
    repo: 'https://github.com/matthewmckeon/ron-swanson-quote-generator',
  },
];

export default projectData;
