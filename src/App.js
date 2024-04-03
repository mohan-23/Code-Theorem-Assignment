import React from "react";
import "./App.css";

import { FaBorderAll } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const App = () => {
  return (
    <div>
      <div className="body-container">
        <nav className="nav-bar-container">
          <div>
            <div className="logo-container">
              <h1 className="logo-heading">
                track
                <span className="span">
                  <FaAngleUp />
                </span>
                Inc
              </h1>
            </div>
            <hr className="line" />
            <div className="tabs-setting-section">
              <div>
                <ul className="tabs-items-container">
                  <li className="tab-color">
                    <FaBorderAll className="tab-icon" />
                    <p className="tab-name" style={{ color: "#1cd2ad" }}>
                      Dashboard
                    </p>
                  </li>
                  <li className="tab">
                    <FaFileInvoiceDollar className="tab-icon" />
                    <p className="tab-name">Invoices</p>
                  </li>
                  <li className="tab">
                    <FaFileLines className="tab-icon" />
                    <p className="tab-name">Proposals</p>
                  </li>
                  <li className="tab">
                    <FaScroll className="tab-icon" />
                    <p className="tab-name">Services</p>
                  </li>
                  <li className="tab">
                    <FaWallet className="tab-icon" />
                    <p className="tab-name">Transactions</p>
                  </li>
                  <li className="tab">
                    <FaRegFolder className="tab-icon" />
                    <p className="tab-name">Projects</p>
                  </li>
                  <li className="tab">
                    <FaUsers className="tab-icon" />
                    <p className="tab-name">Customers</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="setting-section">
              <hr className="line" />
              <ul className="tabs-items-container">
                <li className="tab">
                  <FaCog className="tab-icon" />
                  <p className="tab-name">Settings</p>
                </li>
                <li className="tab">
                  <FaArrowRightFromBracket className="tab-icon" />
                  <p className="tab-name">Log out</p>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="body-section">
          <div className="header-bg-container">
            <div className="name-search-section">
              <h1 className="body-section-name">
                Hi, Welcome to <span style={{ color: "#1cd2ad" }}>Robert</span>
              </h1>
              <div className="search-image">
                <div className="input-container">
                  <FaSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input"
                  />
                </div>
                <div className="notification">
                  <FaBell className="tab-icon" />
                </div>
                <img
                  src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712052400/photo11_fvl5ly.jpg"
                  className="robert-img"
                  alt="Robert"
                />
              </div>
            </div>
            <p className="finance-overview">Finance Overview</p>
            <ul className="finance-list-container">
              <li className="finance-list-item">
                <p className="amount">
                  $ 2,77,120
                  <br />
                  <span className="value">Sales</span>
                </p>
                <div className="align-photo">
                  <img
                    src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712078973/insights_smikyy.png"
                    alt="logo"
                    className="photo"
                  />
                </div>
              </li>
              <li className="finance-list-item">
                <p className="amount">
                  $ 60,100
                  <br />
                  <span className="value">Expense</span>
                </p>
                <div className="align-photo">
                  <img
                    src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712079895/Union_kdp9k0.png"
                    alt="logo"
                    className="photo"
                  />
                </div>
              </li>
              <li className="finance-list-item">
                <p className="amount">
                  $ 57,230
                  <br />
                  <span className="value">Profit</span>
                </p>
                <div className="align-photo">
                  <img
                    src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712080159/trending_up_nfw72z.png"
                    alt="logo"
                    className="photo"
                  />
                </div>
              </li>
              <li className="finance-list-item">
                <p className="amount">
                  $ 1,60,124
                  <br />
                  <span className="value">Income</span>
                </p>
                <div className="align-photo">
                  <img
                    src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712080272/Union_1_o54mhq.png"
                    alt="logo"
                    className="photo"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="current-body">
            <div className="current-project-container">
              <div className="project-and-create">
                <p className="create-project-name">Create Project</p>
                <button className="create-button">Create</button>
              </div>
              <table border="0" cellpadding="10">
                <thead>
                  <tr>
                    <td width="290" className="name">
                      Project Name
                    </td>
                    <td width="220" className="name">
                      Customer
                    </td>
                    <td width="220" className="name">
                      Sent Date
                    </td>
                    <td width="140  " className="name">
                      Amount
                    </td>
                  </tr>
                </thead>
                <tr>
                  <td width="290" className="details">
                    Travel app design
                  </td>
                  <td width="220" className="details">
                    Jacab Jones
                  </td>
                  <td width="220" className="details">
                    28 Oct 2022
                  </td>
                  <td width="140" className="details">
                    $ 240.90
                  </td>
                  <td width="160" className="blue-style">
                    SENT
                  </td>
                </tr>
                <tr className="row-style">
                  <td width="290" className="details">
                    UX Research for Event management app
                  </td>
                  <td width="220" className="details">
                    Wade warren
                  </td>
                  <td width="220" className="details">
                    18 Oct 2022
                  </td>
                  <td width="140" className="details">
                    $ 120.00
                  </td>
                  <td width="160" className="yash-style">
                    DRAFT
                  </td>
                </tr>
                <tr>
                  <td width="290" className="details">
                    Redesign - Food delivery app
                  </td>
                  <td width="220" className="details">
                    Annette Black
                  </td>
                  <td width="220" className="details">
                    15 Oct 2022
                  </td>
                  <td width="140" className="details">
                    $ 351.00
                  </td>
                  <td width="160" className="green-style">
                    PAID
                  </td>
                </tr>
                <tr className="row-style">
                  <td width="290" className="details">
                    Web App - Online Learning
                  </td>
                  <td width="220" className="details">
                    Cameron Williamson
                  </td>
                  <td width="220" className="details">
                    15 Oct 2022
                  </td>
                  <td width="140" className="details">
                    $ 240.90
                  </td>
                  <td width="160" className="green-style">
                    PAID
                  </td>
                </tr>
                <tr>
                  <td width="290" className="details">
                    Railway web casestudy
                  </td>
                  <td width="220" className="details">
                    Robert Fox
                  </td>
                  <td width="220" className="details">
                    13 Oct 2022
                  </td>
                  <td width="140" className="details">
                    $ 153.00
                  </td>
                  <td width="160" className="blue-style">
                    SENT
                  </td>
                </tr>
                <tr className="row-style">
                  <td width="290" className="details">
                    Responsive web design
                  </td>
                  <td width="220" className="details">
                    Floyd Miles
                  </td>
                  <td width="220" className="details">
                    06 Oct 2022
                  </td>
                  <td width="140" className="details">
                    $ 140.90
                  </td>
                  <td width="160" className="red-style">
                    REJECTED
                  </td>
                </tr>
                <tr>
                  <td width="290" className="details">
                    Music app design
                  </td>
                  <td width="220" className="details">
                    Theresa Webb
                  </td>
                  <td width="220" className="details">
                    04 Oct 2022
                  </td>
                  <td width="140" className="details">
                    $ 345.90
                  </td>
                  <td width="160" className="yash-style">
                    DRAFT
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="events-container">
            <h1 className="events-names">Events</h1>
            <div className="events-blocks">
              <div className="event-person">
                <div className="logo-name">
                  <img
                    src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712074152/photo33_eyoyde.png"
                    className="event-logo"
                    alt="logo"
                  />
                  <div className="event-person-block">
                    <p className="event-person-name">Wade Warren</p>
                    <p className="wishes-cart">
                      🎂 Birthday<span style={{ color: "black" }}> .Today</span>
                    </p>
                  </div>
                </div>
                <button className="wish-button">Wish</button>
              </div>
              <div className="event-person">
                <div className="logo-name">
                  <img
                    src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712074007/photo22_phzz3w.png"
                    className="event-logo"
                    alt="logo"
                  />
                  <div className="event-person-block">
                    <p className="event-person-name">Wade Warren</p>
                    <p className="wishes-cart">
                      🎉 Joining Us
                      <span style={{ color: "black" }}> .Today</span>
                    </p>
                  </div>
                </div>
                <button className="wish-button">Congratulations</button>
              </div>
              <div className="event-person">
                <div className="logo-name">
                  <img
                    src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712074219/photo44_hr1fhn.png"
                    className="event-logo"
                    alt="logo"
                  />
                  <div className="event-person-block">
                    <p className="event-person-name">Wade Warren</p>
                    <p className="wishes-cart" style={{ color: "black" }}>
                      💼 Work Anniversary
                      <span style={{ color: "black" }}>
                        . 7 September, 2022
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="event-person">
                <div className="logo-name">
                  <img
                    src="https://res.cloudinary.com/dlfh1lcc2/image/upload/v1712052400/photo11_fvl5ly.jpg"
                    className="event-logo"
                    alt="logo"
                  />
                  <div className="event-person-block">
                    <p className="event-person-name">Wade Warren</p>
                    <p className="wishes-cart" style={{ color: "black" }}>
                      🎉 Hi All
                      <span style={{ color: "black" }}>
                        . 8 September, 2022
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
