import Trend1 from '../Image/Trend1.PNG'
import Trend2 from '../Image/Trend2.PNG'
import Trend3 from '../Image/Trend3.PNG'
import Trend4 from '../Image/Trend4.PNG'
import Trend5 from '../Image/Trend5.PNG'
import Trend6 from '../Image/Trend6.PNG'

import Card from './Card'
import './Main.css'

function Trend(){
    return(
        <div className="Tcontainer">
             <Card 
            image={Trend1}
            name="NFT Avatar casting"
            id="@freezeecuri"
            alt=""/>

             <Card 
            image={Trend2}
            name="Tokenisation and gaming"
            id="@tukipere"
            alt=""/>

             <Card 
            image={Trend3}
            name="Decentraland"
            id="@0X034567"
            alt=""/>

            <Card 
            image={Trend4}
            name="Music NFTs"
            id="@tefeurs"
            alt=""/>

            <Card 
            image={Trend5}
            name="Personality NFTs"
            id="@#6223"
            alt=""/>

            <Card 
            image={Trend6}
            name="Crypto punks"
            id="@free5000"
            alt=""/>
        </div>
    )
}

export default Trend