import { useSelector, useDispatch } from "react-redux";
import { selectCategories, selectSelectedCategoryId } from "../redux/selectors";
import { selectCategory } from "../redux/categoriesSlice";

function CategorySelector() {
  const categories = useSelector(selectCategories);
  const selectedCategoryId = useSelector(selectSelectedCategoryId);
  const dispatch = useDispatch();

  return (
    <select
      value={selectedCategoryId || ""}
      onChange={(e) => dispatch(selectCategory(Number(e.target.value)))}
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c.id} value={c.id}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default CategorySelector;
