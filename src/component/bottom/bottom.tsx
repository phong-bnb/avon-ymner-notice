import "./bottom.scss";
const Bottom1 = () => {
  return (
    <div className="bottom">
      <div className="bottom__bottom2">
        <img src="src/assets/img/logo.png" alt="logo" />

        <div className="bottom__bottom2__table">
          <div className="bottom__bottom2__table__div">
            <p>Available funding</p>
            <p>Funding insights</p>
          </div>
          <div className="bottom__bottom2__table__div">
            <p>About Ymner</p>
            <p>About FinSight</p>
          </div>
          <div className="bottom__bottom2__table__div">
            <p>The databasse</p>
            <p>Cookies & GDPR</p>
            <p>Contact: hello@ymner.com</p>
          </div>
        </div>
      </div>
      <div className="bottom__bottom1">
        <div className="bottom__bottom1__left">
          <img alt="co nuoc anh" src="src/assets/img/flag.png" />
          <p>English</p>
        </div>
        <div className="bottom__bottom1__right">
          <p>
            {" "}
            © COPYRIGHT THE YMNER SOCIETY AB 2020. ALLA RÄTTIGHETER FÖRBEHÅLLNA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bottom1;
