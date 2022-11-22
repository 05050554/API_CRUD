import { BrowserRouter} from "react-router-dom";

import RoutersItems from "./RoutesItems";
function App() {
  const RouteName = ["Api_1", "Api_2", "Api_3", "Api_4"];
  return (
    <BrowserRouter>
      <RoutersItems />
    </BrowserRouter>
  );
}

export default App;
