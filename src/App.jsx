
import './App.css';
import"bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header';
import DisplayCounter from './Components/DisplayCounter';
import Controls from './Components/Controls';
import Container from './Components/Container';
import Privacy from './Components/Privacy';
import {useSelector} from 'react-redux';

function App() {
 const privacy=useSelector((store)=>store.privacy)

  return (
    <center>
    <Container>
   <Header />
   {privacy ? <DisplayCounter />: <Privacy />}
 
   <Controls />
   </Container>

      
    </center>
  )
}

export default App
