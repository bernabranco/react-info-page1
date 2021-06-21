
import './App.css';
import Information1  from './components/Info1/Info';
import Information2  from './components/Info2/Info';
import Information3 from './components/Info3/Info';
import Threejs from './components/Threejs.js'


function App() {
  return (
    <div className="App">
      <Information1
      heading = "Who we are"
      text1 = "It's easy to create a standard: it's a precautionary measure, a safety valve, a shield against devastating, subversive genius. Art however is an invincible force. It opens up your inner self completely, because creativity nurtures the soul."
      text2 = "We are a digital studio from Porto, Portugal interested in creating digital and interactive experiences for brands, individuals and the arts in general."
      />;
      <Information2
      heading = "Our beliefs"
      text1 = "We believe in creative thinking and the power of exploration, in going beyond our restrictive habits by tearing apart everything that is taken for granted and taught as absolute truth."
      text2 = "We believe in the power of communication and feedback, the power of the group over the individual. In every project we try to go beyond the standards."
      />
      <Information3
      heading = "Contacts"
      text1 = "my-email@email.com"
      />
      <Threejs/>
    </div>
  );
}

export default App;
