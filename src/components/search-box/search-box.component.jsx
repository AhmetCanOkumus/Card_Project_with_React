import "./search-box.styles.css"

const SearchBox = ({className, placeholder, onChangeHandler}) => {
    return (
    <div>
        <input type='search'
         placeholder={placeholder}
        className={'search-box ${className}'}
        onChange={onChangeHandler}
        ></input>
    </div>
    )

}
export default SearchBox