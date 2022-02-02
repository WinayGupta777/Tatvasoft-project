import NavBar from "./components/MainNav";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import EditPage from "./components/EditPage";
import styles from "./App.css";
const App=()=>{
  return(
    <>
      <NavBar />
      <SearchBar />
      <EditPage />
      <Footer />
    </>
  );
}

export default App;