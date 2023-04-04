import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './screens/LoginPage'
import { RegisterUser } from './screens/RegisterPage'



function App() {

  return (
    <Routes>
      <Route path='login' element = {<LoginPage/>}/>
      <Route path= 'register' element = {<RegisterUser/>}/>
    </Routes>
  )
}

export default App
