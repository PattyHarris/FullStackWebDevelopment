import React, {Component} from 'react';
import './navigation.css';

/* 
    Functional component for the navigation item.
 */
const NavItem = (props) => {
    
    const pageURI = window.location.pathname + window.location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    
    return (
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                
                {props.name}
                
                {/* Show the (current) if the link is the current link....*/}
                { (props.path === pageURI) ? (<span className="sr-only">(current)</span>) : '' }
            </a>
        </li>
    
    )
    
}


/* 
    Dropdown Component
*/

class NavDropdown extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            isToggleOn: false
        };
    }
    
    showDropdown(e) {
        e.preventDefault();
        this.setState( (prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    
    render() {
        
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '');
        return (
            /* Note the syntax for onClick - see the React documention on Interactive Component - here
                the function is passed as a prop... */
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => {this.showDropdown(e)}}>
                    {this.props.name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </li>
        )
    }
}

/*
    Navigation Bar Component
*/
class Navigation extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                        {/* The disabled state logic doesn't work if the paths are the same -
                            if paths are all / then the the disabled class doesn't work...
                        */}
                        <NavItem path="/" name="Home" />
                        <NavItem path="/page2" name="Link" />
                        <NavItem path="/page3" name="Disabled" disabled="true" />
                        
                        {/**/}
                        <NavDropdown name="Dropdown">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another Action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Some other action here</a>
                        </NavDropdown>
                        {/**/}
                        
                        {/*
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                        */}
                        
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Navigation;