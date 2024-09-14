import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Đặt món ăn yêu thích của bạn tại đây</h2>
        <p>
          Hãy thưởng thức từng món ăn đặc sắc được chế biến tỉ mỉ từ những
          nguyên liệu tinh túy và bàn tay điêu luyện của các đầu bếp tài năng.
          Sứ mệnh của chúng tôi là làm hài lòng mọi khẩu vị của bạn và nâng cao
          trải nghiệm ẩm thực của bạn, mỗi bữa ăn đều đặc biệt.
        </p>
        <button>Xem Thực Đơn</button>
      </div>
    </div>
  );
};

export default Header;
