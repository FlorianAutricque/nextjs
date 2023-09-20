import { Route } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

import AllMeetup from "./pages/AllMeetup";
import Favorite from "./pages/Favorite";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
