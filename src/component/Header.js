import './Header.css'
import logo from '../Image/logo.PNG'
function Header(){
    return(
        <div className="header">
            <img src={logo} alt="" />
            <h1>NFTs SPACE</h1>
        </div>
    )
}

export default Header