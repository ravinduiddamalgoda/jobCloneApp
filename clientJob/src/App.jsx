import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './screens/LoginPage'
import { RegisterUser } from './screens/RegisterPage'
import { MainPageUser } from './screens/userPage'
import { AuthGuard, GuestGuard } from './component/AuthGuard'
import { CvGenerationPage } from './screens/CvGeneration'
import { JobReMain } from './screens/JobRecruiterMain'
// import Home from './screens/Home.jsx'
import Payment from './component/Payment'
// import Contact from './screens/contactus'
// import About from './screens/about'


import { CV_data } from './component/CV'
import { HomePage } from './screens/Home'
import { Contactus } from './screens/contactus'
import { About } from './screens/about'

function ProtectedRoutes() {
  console.log("in protected route");
  return (
    <AuthGuard>
      <Routes>
        <Route path="cv/payment" element={<Payment />} />
        <Route path="cv/link" element={<CV_data/>} />
        <Route path="cv" element={<CvGenerationPage/>} />
        <Route path="" element={<MainPageUser />} />
        <Route path="jobre" element = {<JobReMain />} />

      </Routes>
    </AuthGuard>
  );
}

function GuestRoutes() {
  console.log("in guest route");
  return (
    <GuestGuard>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="home" element={<HomePage/>} />
        <Route path="/" element={<LoginPage />} />
        <Route path="contact" element={<Contactus/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </GuestGuard>
  );
}



function App() {

  return (

    <>
    
    <Routes>
      {/* <Route path="app/" element={<ProtectedRoutes />} /> */}
      <Route path="app/*" element={<ProtectedRoutes />} />
      <Route path="*" element={<GuestRoutes />} />
      {/* <Route path="home" element={<HomePage/>} /> */}
     
    </Routes>
    </>
    
  )
}

export default App
