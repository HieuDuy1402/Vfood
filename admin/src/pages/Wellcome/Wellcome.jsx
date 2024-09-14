import { assets } from "../../assets/assets";
import "./Wellcome.css";

const Wellcome = () => {
  return (
    <div className="wellcome">
      <h2 className="text">Chào Mừng Đến Với</h2>
      <img src={assets.logo} alt=""/>
    </div>
  );
};

export default Wellcome;
