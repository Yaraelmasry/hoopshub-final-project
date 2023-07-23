import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
        <div>
            <h3>HoopsHub</h3>
            <p>Where champions are forged!</p>
          </div>
          <div>
          <a href="https://fontawesome.com/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="https://fontawesome.com/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
      
          <div>
            <h4>All Rights Reserved @2023</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

