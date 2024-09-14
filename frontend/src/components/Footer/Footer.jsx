import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo"/>
          <p>
          Hãy thưởng thức từng món ăn đặc sắc được chế biến tỉ mỉ từ những nguyên liệu tinh túy và bàn tay điêu luyện của các đầu bếp tài năng. Sứ mệnh của chúng tôi là làm hài lòng mọi khẩu vị của bạn và nâng cao trải nghiệm ẩm thực của bạn, mỗi bữa ăn đều đặc biệt.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>CÔNG TY</h2>
          <ul>
            <li>Trang Chủ</li>
            <li>Chúng Tôi</li>
            <li>Vận Chuyển</li>
            <li>Chính Sách</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>LIÊN HỆ</h2>
          <ul>
            <li>+84-000-000</li>
            <li>vfoodisgood@example.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Vfood.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
