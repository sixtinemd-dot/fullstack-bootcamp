// App component renders UserData,
// which is connected to Redux store via useSelector and useDispatch

import React from "react";
import UserData from "./components/UserData";

function App() {
  return (
    <div>
      <h1>Redux Thunk User Fetch Example</h1>
      <UserData />
    </div>
  );
}

export default App;
