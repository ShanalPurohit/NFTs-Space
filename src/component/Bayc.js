import Card from './Card'
import './Main.css'
import Bayc1 from '../Image/Bayc1.PNG'
import Bayc2 from '../Image/Bayc2.PNG'
import Bayc3 from '../Image/Bayc3.PNG'
import Bayc4 from '../Image/Bayc4.PNG'
import Bayc5 from '../Image/Bayc5.PNG'
import Bayc6 from '../Image/Bayc6.PNG'
function Bayc(){
    return(
        <div className="Bcontainer">
             <Card 
            image={Bayc1}
            name="Bored Ape Yacht Club"
            id="@YugaLabs-#9477"
            alt=""/>

             <Card 
            image={Bayc2}
            name="Bored Ape Yacht Club"
            id="@YugaLabs-#9357"
            alt=""/>

             <Card 
            image={Bayc3}
            name="Bored Ape Yacht Club"
            id="@YugaLabs-#7230"
            alt=""/>

            <Card 
            image={Bayc4}
            name="Bored Ape Yacht Club"
            id="@YugaLabs-#5002"
            alt=""/>

            <Card 
            image={Bayc5}
            name="Bored Ape Yacht Club"
            id="@YugaLabs-#1702"
            alt=""/>

            <Card 
            image={Bayc6}
            name="Bored Ape Yacht Club"
            id="@YugaLabs-#4591"
            alt=""/>
        </div>
    )
}

export default Bayc