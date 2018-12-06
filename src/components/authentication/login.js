import React, {Component} from 'react';
import logo from '../../assets/images/Hurix-Logo.png';
import Dashboard from '../dashboard/dashboard';
import axios from 'axios';
import { Base64 } from 'js-base64';
import { browserHistory } from 'react-router-dom'



class Login extends Component {
    constructor(props){
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
        username:'',
        password:''
        }
        
       }
       onChangeUserName(e) {
           console.log(e, 'e');
            this.setState({
                username: e.target.value
            });
        }
        onChangePassword(e) {
            console.log(e, 'e1');
            this.setState({
                password: e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();
            const serverport = {
                username: this.state.username,
                password: this.state.password
            }
            console.log(serverport, 'storeLocsdsdalData e1');
            const userEncodedData = Base64.encode(`${serverport.username}+#+${serverport.password}`);
            console.log(userEncodedData, storeLocalData, 'storeLodcalData e1');
            const storeLocalData = localStorage.setItem('storeUser', userEncodedData);
            console.log(userEncodedData, storeLocalData, 'storeLocalData e1');
            axios.post(`http://eproof.hurix.com/hope_webapi/authenticateuser/QXJjaGFuYSsjK3Rlc3Q=`)
            .then(res => {
                if (!res) {
                    alert('Incorrect Username or password');
                  } else {
                    console.log(res, 'data user');
                   // browserHistory.push('/dashboard')
                    this.props.history.push("/dashboard")


                   // this.router.navigate(['dashboard']);
                   // this.toastrService.success('Login Successfully', 'Success!');
                  }
                console.log(res.data)
            });
            console.log(`name is ${this.state.username} and port is ${this.state.password}`);
            this.setState({
                username: '',
                password: ''
            })
        }
       
    render() {
        console.log(this.state, 'e');
        return (
            <div>
                <div className="col-md-12 login-bg-img">
                    <img className="hurix-logo-right" src={logo} alt="logo"/>
                    <div className="col-md-12">
                        <div className="mt-0">
                            <div className="col-md-4 offset-2 col-8 col-sm-8 offset-sm-2 offset-md-4">
                                <div className="row">
                                    <div className="col-md-10 offset-1 pt-1 pb-4 transparent-form-bg mt-5">
                                        <span className="icon-hope"></span>
                                        
                                        <h5 className="text-center mt-5">Sign In</h5>
                                        <hr></hr>
                                        <form className="form-horizontal col-md-10 offset-md-1" onSubmit={this.onSubmit}>
                                            <div className="form-group mb-1">
                                                <label className="control-label required mb-0">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control login-input-box" value={this.state.username}  onChange={this.onChangeUserName} required/>

                                            </div>
                                            <div className="form-group mb-4">
                                                <label className="control-label mb-0">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control login-input-box" value={this.state.password}  onChange={this.onChangePassword} required/>

                                            </div>
                                            <button type="submit" className="btn btn-editor tag-center mt-1">Sign In</button>
                                            <a className="tag-center mt-3 forgot-password-link cursor-pointer">Forgot Password?</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     

            </div>
        );
    }
}

export default Login;