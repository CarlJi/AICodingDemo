import { useState } from 'react'
import Login from './components/Login'
import CourseList from './components/CourseList'
import { Student } from './types'
import './App.css'

function App() {
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null)

  const handleLogin = (student: Student) => {
    setCurrentStudent(student)
  }

  const handleLogout = () => {
    setCurrentStudent(null)
  }

  return (
    <div className="app">
      {!currentStudent ? (
        <Login onLogin={handleLogin} />
      ) : (
        <CourseList student={currentStudent} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
