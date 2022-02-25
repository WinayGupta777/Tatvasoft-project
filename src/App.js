import NavBar from "./components/MainNav";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ProductListingPage from "./components/ProductListingPage";
import ProductPage from "./components/ProductPage";
import EditPage from "./components/EditPage";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import TableListing from "./components/ProList_table";
import styles from "./App.css";
const App=()=>{
  return(
    <>
      <Router>
        <NavBar />
        <SearchBar />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/editpage" element={<EditPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/productlisting" element={<ProductListingPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;