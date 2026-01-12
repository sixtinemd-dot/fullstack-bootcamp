import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../redux/plannerSlice";

function DatePicker() {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state) => state.planner.selectedDate
  );

  return (
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => dispatch(setSelectedDate(e.target.value))}
    />
  );
}

export default DatePicker;
