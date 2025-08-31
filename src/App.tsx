import { Provider } from "./context/UserContext"
import Parent from "./Pages/Parent"
import GrandChild from "./Pages/GrandChild"
import Child from "./Pages/Child"

const App = () => {
  return (
    <Provider>
      <Parent/>
    </Provider>
  );
};

export default App;
