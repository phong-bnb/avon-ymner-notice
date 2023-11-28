import PersonIcon from "@mui/icons-material/Person";
import "./header.scss";
import { CaretDownOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <div className="header">
      <div className="header__header2">
      <img src="src/assets/img/logo.png" alt="logo" />

       <div className="header__header2__div">
       <PersonIcon />
        <p>Profile</p>
        <CaretDownOutlined className="header__header2__div__icon" />
       </div>
      </div>
    </div>
  );
};
export default Header;
