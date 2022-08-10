/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";


class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
    render() {
        return (
            <div className="mm-wrapper">
                <ul className="metismenu" ref={(el) => (this.el = el)}>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
		
		//sidebar icon Heart blast
		var handleheartBlast = document.querySelector('.heart');
		function heartBlast() {
			return handleheartBlast.classList.toggle("heart-blast");
		}
		handleheartBlast.addEventListener('click', heartBlast);
	
  }
  state = {
    loveEmoji: false,
  };
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
    
    /// Active menu
    let dashBoard = [
        "",
        "dashboard-light",
      ],
      app = [
        "ecom-product-detail",
      ],
      charts = [
        "chart-rechart",
      ],
      bootstrap = [
        "my-wallets",
      ],
      plugins = [
        "uc-select2",
      ],
        redux = [
            "todo",
        ],
      widget = ["transactions"],
      forms = [
        "form-element",
      ],
      table = [
        "table-bootstrap-basic", 
      ],
      pages = [
        "page-register",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
				<Link className="ai-icon" to="/" >
					<i className="flaticon-144-layout"></i>
					<span className="nav-text">Dashboard</span>
				</Link>
            </li>
            <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
              <Link to="/transactions" className="ai-icon" >
                <i className="flaticon-381-settings-2"></i>
                <span className="nav-text">Transactions</span>
              </Link>
            </li>
            <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="my-wallets" >
                <i className="flaticon-003-diamond"></i>
                <span className="nav-text">My Wallet</span>
              </Link>
            </li>
            <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="#" >
                <i className="flaticon-077-menu-1"></i>
                <span className="nav-text">Apps</span>
              </Link>
            </li>
            <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="#" >
                <i className="flaticon-061-puzzle"></i>
                <span className="nav-text">Charts</span>
              </Link>
            </li>

            <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="#" >
                <i className="flaticon-053-heart"></i>
                <span className="nav-text">Plugins</span>
              </Link>
            </li>
            <li className={`${redux.includes(path) ? "mm-active" : ""}`}>
                <Link className="ai-icon" to="#" >
                    <i className="flaticon-381-book"></i><span className="nav-text">Redux</span>
                </Link>
            </li>    
            <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="#" >
                <i className="flaticon-044-file"></i>
                <span className="nav-text forms">Forms</span>
              </Link>
            </li>
            <li className={`${table.includes(path) ? "mm-active" : ""}`}>
              <Link className="ai-icon" to="#" >
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Table</span>
              </Link>
            </li>
            <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
                <Link className="ai-icon" to="#" >
                    <i className="flaticon-049-copy"></i>
                    <span className="nav-text">Pages</span>
                </Link>
            </li>
          </MM>
			<div className="copyright">
				<p><strong>Zenix Crypto React Admin Dashboard</strong> © 2022 All Rights Reserved</p>
				<p className="fs-12">Made with <span className="heart"></span> by DexignZone</p>
			</div>
			</PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;
