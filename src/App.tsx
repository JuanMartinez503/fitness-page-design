import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header.tsx'
import Trainers from './components/Trainers.tsx'
import ClassesProvided from './components/ClassesProvided.tsx'
import FitnessGallery from './components/FitnessGallery.tsx'
import Instructors from './components/Instructors.tsx'
import BMICalculator from './components/BMICalbulator.tsx'
import Blogs from './components/Blogs.tsx'

function App() {


  return (
    <>
    <Header/>
    <main>
      <Trainers />
      <ClassesProvided />
    <FitnessGallery />
    <Instructors />
    <BMICalculator />
    <Blogs />
    </main>
    </>
  )
}

export default App
