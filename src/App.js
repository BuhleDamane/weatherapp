import './App.css';
import Weather from "./Weather.js"
function App() {
  return (
    <div className="App">
    <Weather defaultCity="Carletonville"/>
    <footer>
            This Project was coded by <a href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BIuov5NWkTzeZqa0%2FH79R4Q%3D%3D'>Buhle Damane</a>  and is open-sourced on <a href='https://github.com/BuhleDamane'>Github</a>.
        </footer>
    </div>
  );
}

export default App;
