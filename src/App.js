import NavBar from "./components/MainNav";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import ProductListingPage from "./components/ProductListingPage";
import ProductPage from "./components/ProductPage";
import EditPage from "./components/EditPage";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import styles from "./App.css";
const App=()=>{
  return(
    <>
      <NavBar />
      <SearchBar />
      <LoginPage />
      <Footer />
    </>
  );
}

export default App;