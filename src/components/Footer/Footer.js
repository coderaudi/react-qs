import React, { Component } from "react";
import Appconfig from "../../constants/Appconfig";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="page-footer font-small bg-info">
        <div class="footer-copyright text-center py-3 ">
          <a href="#" className="text-dark">
            {" "}
            {Appconfig.copyRightText}
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
