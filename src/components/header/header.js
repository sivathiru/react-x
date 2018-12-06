import React, { Component } from 'react';
import UserIcon from '../../assets/images/user.png';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const divStyle = {
    fontSize: '25px'
};
class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        console.log(this.props.activeTab, 'sdf');
        let howLogStyle = {
            display: 'inline'
        }
   
        return (
            <div>
                <div className="col-md-12 mb-3">
                    <div className="row header-block">
                        <div className="col-md-1 mt-2">

                            <span className="icon-hope" style={divStyle}></span>

                        </div>

                        <div className="col-md-4 offset-md-7 mt-1">
                            <div className="col">
                                <div placement="bottom-right" className="d-inline-block col-md-12 userbgcolor">
                                    <button className="btn btn-primary-outline pt-0 pb-0"><i className="fas fa-home mr-1"></i></button>
                                    <div className="col-md-7 font-14 p-0" style={howLogStyle}>Welcome <span className="ml-2">showLoginUser</span></div>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle caret id="dropdownBasic1">
                                            <img src={UserIcon} alt="user-icon" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Change Password</DropdownItem>
                                            <DropdownItem>logout</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    {/* <a className="col-md-3 ml-2 dropdown-toggle p-0" id="dropdownBasic1" ngbDropdownToggle> <img src={UserIcon} /></a>
                              <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
                                <button className="dropdown-item">Change Password</button>
                                <button className="dropdown-item cursor-pointer float-right">logout</button>
                              </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;
