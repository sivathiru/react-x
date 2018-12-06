import React, {Component} from 'react';
import Header from '../header/header';
import axios from 'axios';
import { Base64 } from 'js-base64';

class Task extends Component {
    constructor(props) {
        super(props);
        
        // this.toggle = this.toggle.bind(this);
        // this.state = {
        //     activeTab: '1',
        //     persons:  [] 
        //   };
        //   this.singleJournal = this.singleJournal.bind(this);
        
    }
    componentDidMount() {
        // let currentComponent = this;
        // const getAccessFjd = localStorage.getItem('fjd');
        // const directUrlAccessDenied = localStorage.getItem('storeUser');
        // const decodeUrlUseraccess = Base64.decode(directUrlAccessDenied);
        // const decodeUrlUseraccessSplit = decodeUrlUseraccess.split('+');
        // console.log(directUrlAccessDenied, 'data available');
        // axios.get(`http://eproof.hurix.com/hope_webapi/GetListbyTaskid/${directUrlAccessDenied}`)
        // .then(function (response) {
        //     currentComponent.setState({persons: response.data})
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
    }
    render() {
        return (
            <div>
                <Header />
                <div className = "mt-3">
                    <form className="add-contact-form">  
                                <div className="col-md-12 mt-0 offset-2 col-8 col-sm-8 offset-sm-2 offset-md-0">
                                    <div className="row">
                                        <div className="col-md-12 pt-1 pb-2 mt-1 pr-0 pl-0 transparent-form-bg task-block">
                                            <div className="col-md-4 offset-md-0 font-12 task-block">
                                                <div className="mb-1 row">
                                                        <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold">
                                                            Task Name: 
                                                        </div>
                                                        <div className="ml-0 col-md-8">TaskName </div>
                                                </div>
                                                <div className="mb-1 row">
                                                        <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold">
                                                            Journal:
                                                        </div>
                                                        <div className="ml-0 col-md-8">Jcode</div>
                                                </div>
                                                <div className="mb-1 row">
                                                        <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold">
                                                            Article ID: 
                                                        </div>
                                                        <div className="ml-0 col-md-8">ARTID </div>
                                                </div>
                                                <div className="mb-3 row">
                                                        <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold">
                                                            No of Pages:
                                                        </div>
                                                        <div className="ml-0 col-md-8">MSPages</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 offset-md-0 font-12 task-block">
                                                    <div className="mb-1 row">
                                                        <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold">
                                                            Date Assigned:
                                                        </div>
                                                        <div className="ml-0 col-md-8">Date_Assign</div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                            <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold">
                                                                Date Completed:
                                                            </div>
                                                            <div className="ml-0 col-md-8">singleUserData</div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold">
                                                            Status:
                                                        </div>
                                                        <span className="ml-0 col-md-8">ArtStatus</span>
                                                    </div>
                                            </div>
                                            <div className="col-md-4 task-block">
                                                <button className="form-group mb-1 col-md-3 d-flex flex-column cursor-pointer dowmload-file mr-0"><a className="btn btn-success font-14" id="download-ids" target="_self"><i className="fas fa-cloud-download-alt"></i> Download</a></button>
                                                <div className="form-group mb-1 col-md-3 d-flex cursor-pointer txtlink font-weight-bold">
                                                    <input type="file" className="hideUpload" />
                                                    <button className="inputselectfile btn btn-success font-14">Choose File to Upload</button>
                                                    <button className="inputselectfile btn btn-success font-14" > <i className="fas fa-cloud-upload-alt"></i> Upload File</button>
                                                    <span>name</span>                                                    
                                                </div>
                                               
                                                <div className="form-group mb-1 col-md-12 d-flex cursor-pointer font-14">
                                                    <input type="checkbox" className="mt-1 mr-1" name="changelock" id="changelock" />
                                                    <label>lock user</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 row">
                                            <h5>Special Instructions:</h5>
                                            <textarea className="form-control font-12 spec-instr-content" value="specialInstruction" disabled></textarea>
                                            <div className="col-md-12 row">
                                                <div className="form-inline form-group mt-3 mb-3 col-md-4 font-12 p-0">
                                                    <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold p-0">
                                                        Comments:
                                                    </div>
                                                    <span className="ml-2 col-md-7"><textarea id="comment" className="form-control font-12"></textarea></span>
                                                </div>
                                                <div className="form-inline mt-3 mb-3 col-md-4 pr-0 font-12">
                                                    <div className="control-label col-md-4 pr-0 mb-0 font-weight-bold required">
                                                        Status:
                                                    </div>
                                                    <select className="form-control col-md-7 pr-0 font-12" id="journalStatus">
                                                        <option disabled selected hidden>-- select --</option>
                                                    </select>
                                                </div>
                                            </div>  
                                            <button type="submit"  className="float-right form-group mb-1 d-flex flex-column cursor-pointer dowmload-file mr-2 offset-md-6 text-white"><a className="btn btn-success font-14"  target="self"> Submit</a></button>  
                                    </div>
                                </div>
                                               
                    <div className = "col-md-12">
                            <button className="form-group mb-1 d-flex flex-column cursor-pointer dowmload-file text-white"><a className="btn btn-success font-14"> History</a></button>  
                        <div>
                                <h5>History:</h5>
                            <table className="table table-striped table-sm mt-2">
                                    <thead className="card-text">
                                    <tr>
                                        <th>
                                            Workname
                                        </th>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Date Assigned
                                        </th>
                                        <th>
                                            Due Date
                                        </th>
                                        <th>
                                            Status 
                                        </th>
                                        <th>
                                            Comments
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Workname</td>
                                        <td>UserName</td>
                                        <td>StartTime</td>
                                        <td>StartTime</td>
                                        <td>Status</td>
                                        <td>Comments</td>                            
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </form>
                </div>
            </div>
        )
    }
}

export default Task;