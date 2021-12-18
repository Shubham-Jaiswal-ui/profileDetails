import React from "react";
import TableData from "./component/ProfileDetails";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import AppRouting from "./component/AppRouting";

function App() {
  return (
    <Provider store={configureStore}>
      <div className="App"> 
        <AppRouting />
      </div>
    </Provider>
  );
}

export default App;
