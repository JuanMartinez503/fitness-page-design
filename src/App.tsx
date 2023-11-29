import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header.tsx'
import Trainers from './components/Trainers.tsx'

function App() {


  return (
    <>
    <Header/>
    <main>
      <Trainers />
    </main>
    </>
  )
}

export default App
