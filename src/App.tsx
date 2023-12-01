import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header.tsx'
import Trainers from './components/Trainers.tsx'
import ClassesProvided from './components/ClassesProvided.tsx'
import FitnessGallery from './components/FitnessGallery.tsx'
import Instructors from './components/Instructors.tsx'

function App() {


  return (
    <>
    <Header/>
    <main>
      <Trainers />
      <ClassesProvided />
    <FitnessGallery />
    <Instructors />
    </main>
    </>
  )
}

export default App
