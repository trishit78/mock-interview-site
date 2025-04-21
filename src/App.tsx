import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import PublicLayout from "./layouts/public-layout"
import HomePage from "./routes/home"
import AuthLayout from "./layouts/auth-layout"

import SignInPage from "./routes/sign-in"
import SignUpPage from "./routes/sign-up"
import ProtectedRoutes from "./layouts/protected-routes"
import MainLayout from "./layouts/main-layout"

const App = ()=> {
  return (
    <Router>
      <Routes>
        {/**public route */}

        <Route element={<PublicLayout/>} >
        <Route index element={<HomePage/>}></Route>
        </Route>
        {/** Auth route */}

        <Route element={<AuthLayout/>} >
        <Route path="/signin/*" element={<SignInPage/>}></Route>
        <Route path="/signup/*" element={<SignUpPage/>}></Route>
        </Route>

        {/**private route */}
        <Route  element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}>
        
        {/** add all the  protected routes */}
        
        </Route>
      
      </Routes>
    </Router>
  )
}

export default App
