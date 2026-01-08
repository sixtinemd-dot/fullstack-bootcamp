import { connect } from "react-redux";
import { setDay } from "../redux/actions";

function DayPicker({ selectedDay, setDay }) {
  return (
    <input
      type="date"
      value={selectedDay}
      onChange={(e) => setDay(e.target.value)}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    selectedDay: state.selectedDay,
  };
};

export default connect(mapStateToProps, { setDay })(DayPicker);
