import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import './styles/utilities.css';

const App: React.FC<{}> = () => {
  return (
    <div className="container">
      <p>
        Dette er FG's gui-bibelotek. Dersom du ønsker å se komponentene vi har
        laget følg denne oppskriften:
      </p>
      <ol>
        <li>Last ned prosjektet fra denne linken: </li>
        <li>> npm install</li>
        <li>> npm run storybook</li>
      </ol>
      <p>
        Det var det og værre var det ikke! Om litt havner også dette bibeloteket
        på npm, så da blir det superlett å bruke!{' '}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
