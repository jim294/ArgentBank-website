
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home.jsx"
import Login from './pages/login.jsx'
import User from "./pages/user.jsx"
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div>
       <BrowserRouter>
          <Header />
				  <Routes>
					  <Route exact path="/" element={<Home />} />
					  <Route path="/login" element={<Login />} />
					  <Route path="/user" element={<User />} />
					  {/* <Route path="*" element={<ErrorPage />} /> */}
				  </Routes>
          <Footer />
			  </BrowserRouter>

    </div>
  );
}

export default App;
