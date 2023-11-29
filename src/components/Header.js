
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";




function Header(props) {
    const { loginWithRedirect,logout } = useAuth0();
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
            <div>
            <button onClick={() => loginWithRedirect()}>Log In</button>
            </div>
            <div>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out</button>
            </div>
        </div>
    );
}

export default Header;
