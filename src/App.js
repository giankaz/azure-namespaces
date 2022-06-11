
import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import database from './db';
import Global from './style/global';

function App() {

  const [{ general,
           networking,
           computeAndWeb, 
           containers,
           databases,
           storage,
           aiAndMachineLearning, 
           analyticsAndIoT,
           azureVirtualDesktop,
           devTools, 
           integration,
           managementAndGovernance, 
           migration, 
           deprecatedProductName }, setGeneral] = useState(database)


  return (
    <div className="App">
      <Global/>
      <header className="App-header">
        <CardList type={general} />

      </header>
    </div>
  );
}

export default App;
