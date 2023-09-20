import { Route } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import AllMeetup from "./pages/AllMeetup";
import Favorite from "./pages/Favorite";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorite />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
