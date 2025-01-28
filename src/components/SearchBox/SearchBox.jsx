import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.filters.name);

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <label className={s.searchbox}>
        Find contacts by name
        <input type="text" value={name} onChange={handleSearchChange} />
      </label>
    </div>
  );
}

export default SearchBox;
