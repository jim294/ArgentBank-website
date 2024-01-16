import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home.jsx"
import Login from './pages/login.jsx'
import User from "./pages/user.jsx"
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer';
import { Provider } from "react-redux";
import store from './redux/store'
import { ErrorPage } from "./pages/error.jsx";
import Transactions from "./pages/transactions.jsx";

function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
          <Header />
				  <Routes>
					  <Route exact path="/" element={<Home />} />
					  <Route path="/login" element={<Login />} />
					  <Route path="/user" element={<User />} />
					  <Route path="/transactions" element={<Transactions />} />
					  <Route path="*" element={<ErrorPage />} />
				  </Routes>
          <Footer />
			  </BrowserRouter>
    </Provider>
  );
}

export default App;
