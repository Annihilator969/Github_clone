import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <h1 style={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}></h1>
      </div>
      <div className="footer3">
        <div className="social_media">
          <div className="heading">Contact_US</div>
          <div className="div">Email : kumarmanikanta808@gmail.com</div>
          <div className="div">Phone : +91 8660089848</div>
          <div className="div"><address>National Institute Of Technology Delhi</address></div>
          <div className="wrapper">
            <a href="https://www.facebook.com/profile.php?id=100071880831182&mibextid=LQQJ4d" className="icon facebook">
              <div className="tooltip">Facebook</div>
              <span><i className="fab fa-facebook-f"></i></span>
            </a>
            <a href="https://twitter.com/manikanta1922?s=11&t=VUKOrecp24SIw5wzyEGi1g" className="icon twitter">
              <div className="tooltip">Twitter</div>
              <span><i className="fab fa-twitter"></i></span>
            </a>
            <a href="https://instagram.com/soy_yo_manikanta?igshid=MzRlODBiNWFlZA==" className="icon instagram">
              <div className="tooltip">Instagram</div>
              <span><i className="fab fa-instagram"></i></span>
            </a>
            <a href="https://github.com/soyyomani" className="icon github">
              <div className="tooltip">Github</div>
              <span><i className="fab fa-github"></i></span>
            </a>
            <a href="https://www.linkedin.com/in/manikanta-manikanta-662b3322b/" className="icon Linkedln">
              <div className="tooltip">Linkedln</div>
              <span><i className="fab fa-Linkedln"></i></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
