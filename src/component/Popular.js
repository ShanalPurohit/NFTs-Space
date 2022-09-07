import Card from './Card'
import './Main.css'
import Popular1 from '../Image/Popular1.PNG'
import Popular2 from '../Image/Popular2.PNG'
import Popular3 from '../Image/Popular3.PNG'
import Popular4 from '../Image/Popular4.PNG'
import Popular5 from '../Image/Popular5.PNG'
import Popular6 from '../Image/Popular6.PNG'

function Popular(){
    return(
        <div className="Pcontainer">

             <Card 
            image={Popular1}
            name="sentri"
            id="#643569"
            alt=""/>

             <Card 
            image={Popular2}
            name="Satori"
            id="#567"
            alt=""/>

             <Card 
            image={Popular3}
            name="Moonbirds"
            id="#106"
            alt=""/>

            <Card 
            image={Popular4}
            name="Mutant Ape Yacht Club"
            id="17694"
            alt=""/>

            <Card 
            image={Popular5}
            name="Doodles"
            id="#1769"
            alt=""/>

            <Card 
            image={Popular6}
            name="Sinister Squirrel Syn"
            id="#3936"
            alt=""/>
        </div>
    )
}

export default Popular