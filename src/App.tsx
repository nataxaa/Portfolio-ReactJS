import { Contato } from "./components/Contato";
import { Experencia } from "./components/Experiencia";
import { HomePage } from "./components/HomePage";
import { Projetos } from "./components/Projetos";


function App() {
  return (
    <div className="App">
     <HomePage/>
     <Experencia/>
     <Projetos/>
     <Contato/>
    </div>
  );
}

export default App;
