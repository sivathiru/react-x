import React, { Component } from 'react';
import Header from '../header/header';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { Base64 } from 'js-base64';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            persons:  [] 
          };
           this.singleJournal = this.singleJournal.bind(this);
       
    }
    
    componentDidMount() {
        let currentComponent = this;
        const directUrlAccessDenied = localStorage.getItem('storeUser');
        const decodeUrlUseraccess = Base64.decode(directUrlAccessDenied);
        const decodeUrlUseraccessSplit = decodeUrlUseraccess.split('+');
        // const removeUrlAccess = decodeUrlUseraccessSplit.indexOf('#');
        console.log(directUrlAccessDenied, 'data available');
        axios.get(`http://eproof.hurix.com/hope_webapi/GetListbyUser/${directUrlAccessDenied}`)
        .then(function (response) {
            currentComponent.setState({persons: response.data})
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    singleJournal = (event) => {
        console.log(event, 'event');
    }
     
    render() {
        const btnChangeDefaultStyle = {
        backgroundColor :"transparent",
        border: "none"
        }
        // const elementDash = <button  onClick={()=>this.singleJournal(this)} target="blank" style={ btnChangeDefaultStyle } ><i className="fas fa-external-link-alt"></i></button>     
        let itemLists = this.state.persons.map(function(name, index){
            console.log(name, index, 'name, index');
        //let actionArt =
        
                return <tr key={ index }>
                        <td>{name.Jcode}</td>
                        <td>{name.ARTID}</td>
                        <td>{name.TaskName}</td>
                        <td>{name.Date_Assign}</td>
                        <td>{name.Date_Complete}</td>
                        <td>{name.Date_Complete}</td>
                        <td>{name.ArtStatus}</td>
                        <td>{name.MSPages}</td>
                        <td><button onClick={() => this.singleJournal(name)} target="blank" style={ btnChangeDefaultStyle } ><i className="fas fa-external-link-alt"></i></button></td>
                        {/* <td>{elementDash<button style={ btnChangeDefaultStyle } target="blank" ><i onClick={this.state.singleJournal} className="fas fa-external-link-alt"></i></button></td> */}
                       </tr>;
              })
         console.log(itemLists);
        return (
            <div className="font12">
                <Header userName={this.props.activeTab} />
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Journal
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            GDP
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                            <table className="table table-striped table-sm mt-2">
                        <thead className="card-text">
                        <tr>
                            <th>
                                Journal
                            </th>
                            <th>
                                Artist ID
                            </th>
                            <th>
                                Task Name
                            </th>
                            <th>
                                Date Assigned
                            </th>
                            <th>
                                Due Date
                            </th>
                            <th>
                                Date Completed
                            </th>
                            <th>
                                Status 
                            </th>
                            
                            <th>
                                MS Pages
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {itemLists}
                        
                            {/* <td>{this.state.persons}</td> */}
                            {/* <td>{}</td> */}
                            {/* <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>                            
                            <td>1</td> */}
                            {/* <td><a target="blank"><i className="fas fa-external-link-alt"></i></a></td> */}
                        
                        </tbody>
                        <tfoot>
                        <tr>
                            <td>
                                {/* <mfBootstrapPaginator ></mfBootstrapPaginator> */}
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                   
                                </Card>
                            </Col>
                            
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Dashboard;