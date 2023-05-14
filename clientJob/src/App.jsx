import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './screens/LoginPage'
import { RegisterUser } from './screens/RegisterPage'
import { MainPageUser } from './screens/userPage'
import { AuthGuard, GuestGuard } from './component/AuthGuard'
import { CvGenerationPage } from './screens/CvGeneration'
import { JobReMain } from './screens/JobRecruiterMain'
import Home from './screens/Home'


function ProtectedRoutes() {
  console.log("in protected route");
  return (
    <AuthGuard>
      <Routes>
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
        <Route path="home" element={<Home />} />
        <Route path="/" element={<LoginPage />} />
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
     
    </Routes>
    </>
    
  )
}

export default App
