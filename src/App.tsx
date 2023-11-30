import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header.tsx'
import Trainers from './components/Trainers.tsx'
import ClassesProvided from './components/ClassesProvided.tsx'

function App() {


  return (
    <>
    <Header/>
    <main>
      <Trainers />
      <ClassesProvided />
   
    </main>
    </>
  )
}

export default App
