import './App.css';
import Card from '../ProjectsSection/Card/Card';
import { projects } from '../../Data/projectsData';

function App() {

  return (
    <div className="App">

      { projects.map( project => 
        <Card projectObject = {project} />) }
        
    </div>
  );
}

export default App;
