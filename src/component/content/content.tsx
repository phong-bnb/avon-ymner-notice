import { useState } from "react";
import "./content.scss";
const Content = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="content">
      <p className="content__title1">Notifications</p>
      <p className="content__text">
        Use the SCB-codes or the search bar to select areas that you want to
        receive notifications about. Notifications are sent via email when a new
        project is added in a selected area. You can limit notifications to
        research and/or innovation.
      </p>
      <div className="content__radio">
        <div>
          <input type="radio" name="radio1" /> <span>Notify on Research</span>
        </div>
        <div>
          <input type="radio" name="radio1" /> <span>Notify on Innovation</span>
        </div>
      </div>
      <div className="content__divdiv">
        <div className="content__content1">
          <div className="content__content1__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Search on an area." />
          </div>
          <button>Save</button>
        </div>
        <div className="content__table">
          <div className="content__table__table1">
            <p className="content__table__table1__title">SCB-codes</p>
            <div className="content__table__checkbox">
              <input type="checkbox" /> Social science
              <i className="fa-solid fa-chevron-down" onClick={handleClick}></i>
              {isShow ? (
                <div className="content__table__checkbox">
                  <input type="checkbox" /> APsychology{" "}
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              ) : (
                " "
              )}
            </div>
            <div className="content__table__checkbox">
              <input type="checkbox" /> Engineering and Technology
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <div className="content__table__checkbox">
              <input type="checkbox" /> Medicine and Health Sciences
              <i className="fa-solid fa-chevron-down"></i>
            </div>

            <div className="content__table__checkbox">
              <input type="checkbox" /> Agricultural Science and Veterinary
              Medicine <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="content__table__checkbox">
              <input type="checkbox" /> Social Science
              <i className="fa-solid fa-chevron-down" onClick={handleClick}></i>
              {isShow ? (
                <div className="content__table__checkbox">
                  <input type="checkbox" /> Agricultural Science and Veterinary
                  Medicine <i className="fa-solid fa-chevron-down"></i>
                </div>
              ) : (
                " "
              )}
            </div>
            <div className="content__table__checkbox">
              <input type="checkbox" /> Humanities and Arts
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};
export default Content;
