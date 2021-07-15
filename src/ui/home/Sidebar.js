import React, {useContext} from 'react';
import {Context} from "../../store";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Link} from 'react-router-dom';
const SideBar = () => {
    const [state, dispatch] = useContext(Context)

    return (
        <div className="container">
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <Link to={`/`}>
                        Home
                        </Link>
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Category
                    </NavText>
                    <NavItem eventKey="Category/BOOKS">
                        <NavText>
                            <Link to={`/category/BOOKS`} className="nav-link">
                                BOOKS
                            </Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Category/ELECTRONICS">
                        <NavText>
                            <Link to={`/category/ELECTRONICS`} className="nav-link">
                                ELECTRONICS
                            </Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Category/FURNITURE">
                        <NavText>
                            <Link to={`/category/FURNITURE`} className="nav-link">
                                FURNITURE
                            </Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Category/OTHER">
                        <NavText>
                            <Link to={`/category/OTHER`} className="nav-link">
                                OTHER
                            </Link>
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        </div>
    );
};

export default SideBar;