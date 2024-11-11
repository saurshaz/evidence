import OnboardingPage from './pages/OnboardingPage';
import EmbedWidgetPage from './pages/EmbedWidgetPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

// this shall be only seen to the orgadmin role user upon signing in
export const App = () => (
  <Router>
    <div>
      <ul>
        <li style={{ "marginLeft": "18vw", "display": "inline-grid" }}>
          <Link to="/vanna/home">Home</Link>
        </li>
        <li style={{ "marginLeft": "18vw", "display": "inline-grid" }}>
          <Link to="/vanna/init">Onboarding</Link>
        </li>
        <li style={{ "marginLeft": "18vw", "display": "inline-grid" }}>
          <Link to="/vanna/embed">Widget</Link>
        </li>
      </ul>
      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Routes>
        <Route path="/vanna/home" Component={OnboardingPage} />
        <Route path="/vanna/init" Component={OnboardingPage} />
        <Route path="/vanna/embed" Component={EmbedWidgetPage} />
      </Routes>
    </div>
  </Router>);

export default App;
