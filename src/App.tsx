import { Provider } from "./context/UserContext"
import Parent from "./Pages/parent"
import GrandChild from "./Pages/GrandChild"
import Child from "./Pages/Child"

const App = () => {
  return (
    <Provider>
      <GrandChild/>
    </Provider>
  );
};

export default App;
