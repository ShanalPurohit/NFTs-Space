import Card from './Card'
import './Main.css'
import Genesis1 from '../Image/Genesis1.PNG'
import Genesis2 from '../Image/Genesis3.PNG'
import Genesis3 from '../Image/Genesis3.PNG'
import Genesis4 from '../Image/Genesis4.PNG'
import Genesis5 from '../Image/Genesis5.PNG'
import Genesis6 from '../Image/Genesis6.PNG'


function Genesis(){
    return(
        <div className="Gcontainer">
             <Card 
            image={Genesis1}
            name="The Axum"
            id="@Utopiea"
            alt=""/>

             <Card 
            image={Genesis2}
            name="The World"
            id="@Utopiea"
            alt=""/>

             <Card 
            image={Genesis3}
            name="Free Art Felega"
            id="@Utopieai"
            alt=""/>

            <Card 
            image={Genesis4}
            name="Abstract world"
            id="@Utopiea"
            alt=""/>

            <Card 
            image={Genesis5}
            name="Arch "
            id="@Utopiea #001"
            alt=""/>

            <Card 
            image={Genesis6}
            name="Utopie Arch"
            id="#009"
            alt=""/>
        </div>
    )
}

export default Genesis