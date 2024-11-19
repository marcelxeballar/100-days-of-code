import "./app.css";
import profileIMG from "../Assets/profile.png";

const icons = ["person", "mail", "notifications", "location_on", "groups"];
const messages = [
  "Personal Data",
  "Messages",
  "Notifications",
  "Location",
  "Community",
];

const navIcons = ["home", "bar_chart", "mail", "person"];
export default function App() {
  return (
    <div className="navigation">
      <div className="flex-row profile">
        <img src={profileIMG} alt="Profile" />
        <div className="profile-info flex-col">
          <h2>Lisa Richardson</h2>
          <p>Environmental meteorologist</p>
        </div>
      </div>
      <div className="flex-col actions">
        {messages.map((message, i) => (
          <div className="flex-row action">
            <span class="material-icons">{icons[i]}</span>
            <h2>{message}</h2>
            <span class="material-icons">chevron_right</span>
          </div>
        ))}
      </div>
      <div className="flex-col actions">
        <div className="flex-row action">
          <span class="material-icons">help</span>
          <h2>FAQ's</h2>
          <span class="material-icons">chevron_right</span>
        </div>
        <div className="flex-row action">
          <span class="material-icons">settings</span>
          <h2>FAQ's</h2>
          <span class="material-icons">chevron_right</span>
        </div>
      </div>
      <div className="navigation-bar flex-row">
        {navIcons.map((icon, i) => (
          <button key={i} className="flex-row">
            <span class={`material-icons ${icon === "person" ? "active" : ""}`}>
              {icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
