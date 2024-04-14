
import {Provider} from "react-redux";
import "./App.css";

import {PersistGate} from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import RouterFile from "./Routers/Route";

function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterFile />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

