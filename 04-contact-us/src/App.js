import "./app.css";

import map from "./assets/Map.png";
import target from "./assets/Target.svg";

export default function App() {
  return (
    <div className="contact-us-wrapper flex-row">
      <div className="text-wrapper">
        <h1>Contact Us</h1>
        <p>
          Get in touch with us! Whether you have questions, feedback, or just
          want to say hello, we're here for you.
        </p>
        <img src={map} alt="Map" />
        <img src={target} alt="Target Location" className="locate" />
        <div className="text-bubble">
          <p>Windler, Lockman and McClure</p>
          <p>3629 N Cole Rd, Boise, Illinois</p>
          <div className="triangle"></div>
        </div>
      </div>
      <div className="form-wrapper">
        <p className="message">Send us a Message</p>
        <form className="flex-col">
          <input className="text" placeholder="Name"></input>
          <input className="email" placeholder="Email"></input>
          <input className="text" placeholder="phone"></input>
          <div>
            <p>Preferred contact method of communicaton</p>
            <label>
              <input type="radio" name="com-preferrence" value="Email"></input>
              Email
            </label>
            <label>
              <input type="radio" name="com-preferrence" value="Phone"></input>
              Phone
            </label>
          </div>
          <textarea type="text" placeholder="Message" className="textarea" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
