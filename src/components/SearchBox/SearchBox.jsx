import css from "./SearchBox.module.css";

function SearchBox({ value, handleFilter }) {
  return (
    <label className={css.searchWrapper}>
      <span className={css.label}>Find contacts by name</span>
      <input
        className={css.searchBar}
        type="text"
        name="searchBar"
        placeholder="type..."
        value={value}
        onChange={handleFilter}
      />
    </label>
  );
}

export default SearchBox;
