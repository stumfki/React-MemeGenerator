
import './css/Header.css';
import logo from './img/logo.svg'
function Header() {
  return (
    <div className="headerCont">
      <header className="header">
        <div className="trollFace">
       <img src={logo} alt="logo"/>
       <h2>Meme Generator</h2>
       </div>
       <div className="project">
        <p>Project 3</p>
       </div>
      </header>
    </div>
  );
}

export default Header;
