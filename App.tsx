import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import RootNavigator from "./src/Navigation";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
