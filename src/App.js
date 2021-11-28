import './App.css';
import {Card, Button} from 'react-bootstrap';
import neymar from './neymar.jpg'
import messi from './messi.jpg'
import mbape from './mbape.jpg'
function App() {
  return (
    <div className="cardtotal">
    <Card style={{ width: '18rem' }}>
  <Card.Img src={messi} />
  <Card.Body>
    <Card.Title className="messi"> lionel messi </Card.Title>
    <Card.Text>
    Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine,
     est un footballeur international argentin évoluant au poste d'attaquant au Paris Saint-Germain.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={neymar} />
  <Card.Body>
    <Card.Title className="neymar"> neymar </Card.Title>
    <Card.Text>
    Neymar da Silva Santos Júnior, dit Neymar Jr., plus couramment appelé Neymar,
     né le 5 février 1992 à Mogi das Cruzes (Brésil, État de São Paulo),
      est un footballeur international brésilien qui évolue au poste d'attaquant
       au Paris Saint-Germain. Il est également le capitaine de l'équipe nationale du Brésil depuis 2014.
    </Card.Text>
    
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mbape}  />
  <Card.Body>
    <Card.Title className="mbape">Mbappé</Card.Title>
    <Card.Text>
    Kylian Mbappé Lottin1 [kiljan m͡bape lɔtɛ̃]note 1, né le 20 
    décembre 1998 dans le 19e arrondissement de Paris, est un
     footballeur international français qui évolue au poste d'attaquant au Paris Saint-Germain, en Ligue 1.
    </Card.Text>
   
  </Card.Body>
</Card>
</div>
  );
}

export default App;
