import Card from './Card'
import './Main.css'
import Temple1 from '../Image/Temple1.PNG'
import Temple2 from '../Image/Temple2.PNG'
import Temple3 from '../Image/Temple3.PNG'
import Temple4 from '../Image/Temple4.PNG'
import Temple5 from '../Image/Temple5.PNG'
import Temple6 from '../Image/Temple6.PNG'
function Temple(){
    return(
        <div className='temple_container'>
             <Card 
            image={Temple1}
            name="The Temple"
            id="@Halleuyeah"
            alt=""/>

             <Card 
            image={Temple2}
            name="the metaverse Home"
            id="@Halleuyeah"
            alt=""/>

             <Card 
            image={Temple3}
            name="The Pathway"
            id="@Halleuyeah"
            alt=""/>

            <Card 
            image={Temple4}
            name="Support"
            id="@Halleuyeah #2"
            alt=""/>

            <Card 
            image={Temple5}
            name="Angel of Wisdom"
            id="@Halleuyeah"
            alt=""/>

            <Card 
            image={Temple6}
            name="The Florist"
            id="@Halleuyeah"
            alt=""/>
        </div>
    )
}

export default Temple