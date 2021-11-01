import "./header.css";
import logo from './logo.png';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
      <img src={logo} className="w-25"/>
        <span className="h8">The official Publication</span>
        <span className="h1">PUBLICATION</span>
      </div>
      <img
        className="headerImg img-thumbnail"
        src="https://www.rmt.org/plasdwbl/wp-content/uploads/sites/6/2016/06/dummy-home-header.png"
        alt=""
      />
    </div>
  );
}
