import logo from "../assets/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
