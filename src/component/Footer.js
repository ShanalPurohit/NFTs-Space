import footer from '../Image/footer.PNG'
import './Footer.css'

function Footer(){
    return(
        <div>
            <div className='footer_container'>
            <img src={footer} alt="NFts"/>
            <h1>NFTs SPACE<br/>
            Live Spaces of NFTs</h1>
            <h6>TERMS AND CONDITIONS | PRIVACY | LEGEL NOTICE</h6>
            </div>
        </div>
    )
}

export default Footer