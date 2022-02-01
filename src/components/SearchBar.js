const SearchBar=()=>{
    return(
        <div className="searchbar">
            <input type="text" name="string" id="inp" placeholder="What are you looking for..."/>
            <button type="submit" id="submit"> <i className="fa fa-search"></i>Search</button>
            <button type="submit" id="cancel">Cancel</button>
        </div>
    );
}
export default SearchBar;