import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    getDefaultSetting,

  } from "../../actions/index";

class Dashboard extends Component {

    getSettingData = () =>{
        this.props.getDefaultSetting();
    }
    render() {
        return (
            <div>
                Dashboard  page 

                <button onClick={e => this.getSettingData(e)}>LodeData_get</button>
                {this.props.AppDefaultData ? <div>
                    {this.props.AppDefaultData.def_name}
                    </div>: "NO def data "}
            </div>
        );
    }
}


const mapStateToProps = ({ appSetting }) => {


    return {
        AppDefaultData : appSetting.AppDefaultData
    };
  };
  
  export default connect(
    mapStateToProps,
    {
   getDefaultSetting
    }
  )(Dashboard);

  