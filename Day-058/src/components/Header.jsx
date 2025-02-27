import "../App.css"
import SJ from "../assets/SJJ.png"
import Aadhar from "../assets/Aadhar.png"
import Government from "../assets/Government.png"

const Header = () => (
  <div className="header">
    <img src={SJ} alt="India Logo" className="logo sj" />
    <div>
      {/* <h2>भारत सरकार</h2> */}
    <img src={Government} alt="Aadhar Logo" className="logo" />
      {/* <h2>Government of India</h2> */}
    </div>
    <img src={Aadhar} alt="Aadhar Logo" className="logo" />
  </div>
);

export default Header;
