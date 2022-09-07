import Card from './Card'
import './Main.css'
import Void1 from '../Image/Void1.PNG'
import Void2 from '../Image/Void2.PNG'
import Void3 from '../Image/Void3.PNG'
import Void4 from '../Image/Void4.PNG'
import Void5 from '../Image/Void5.PNG'
import Void6 from '../Image/Void6.PNG'
function Void(){
    return(
        <div className="Vcontainer">
             <Card 
            image={Void1}
            name="Visitor of Imma Degen"
            id="VOID-#431"
            alt=""/>

             <Card 
            image={Void2}
            name="Visitor of Imma Degen"
            id="VOID-#9048"
            alt=""/>

             <Card 
            image={Void3}
            name="Visitor of Imma Degen"
            id="VOID-#8414"
            alt=""/>

            <Card 
            image={Void4}
            name="Visitor of Imma Degen"
            id="VOID-#591"
            alt=""/>

            <Card 
            image={Void5}
            name="Visitor of Imma Degen"
            id="VOID-#6223"
            alt=""/>

            <Card 
            image={Void6}
            name="Visitor of Imma Degen"
            id="VOID-#1234"
            alt=""/>
        </div>
    )
}

export default Void