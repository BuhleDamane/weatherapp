import './App.css';
import Weather from "./Weather.js";
import DayImage from "./Images/Day2.jpg";
import NightImage from "./Images/Night.jpg";

function App() {
  // Get the current hour
  const currentHour = new Date().getHours();

  // Set the background image based on the time of day
  const backgroundImage = currentHour >= 6 && currentHour < 18 ? DayImage : NightImage;

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Weather defaultCity="Carletonville"/>
      <footer>
        This Project was coded by <a href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BIuov5NWkTzeZqa0%2FH79R4Q%3D%3D'>Buhle Damane</a> and is open-sourced on <a href='https://github.com/BuhleDamane'>Github</a>.
      </footer>
    </div>
  );
}

export default App;
