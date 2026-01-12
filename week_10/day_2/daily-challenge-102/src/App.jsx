// App.jsx
// This is the root component of the Age Tracker application.
// It does not contain Redux logic directly.
// Redux Toolkit and Thunk are configured in the store and used inside child components.

import AgeDisplay from "./components/AgeDisplay";
import AgeControls from "./components/AgeControls";

function App() {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      {/* 
        AgeDisplay component:
        - Uses useSelector to read the current age and loading state
        - Displays a loading indicator while async actions are running
        - Gets its data from the Redux store
      */}
      <AgeDisplay />

      {/* 
        AgeControls component:
        - Uses useDispatch to dispatch async thunk actions
        - Triggers ageUpAsync and ageDownAsync
        - Async logic is handled via Redux Toolkit createAsyncThunk
      */}
      <AgeControls />
    </div>
  );
}

export default App;
