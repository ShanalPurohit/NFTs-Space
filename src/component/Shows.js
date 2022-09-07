import Card from './Card'
import './Main.css'
import Show1 from '../Image/Show1.PNG'
import Show2 from '../Image/Show2.PNG'
import Show3 from '../Image/Show3.PNG'
import Show4 from '../Image/Show4.PNG'
import Show5 from '../Image/Show5.PNG'
import Show6 from '../Image/Show6.PNG'

function Shows(){
    return(
        <div className="Scontainer">
             <Card 
            image={Show1}
            name="Pixel Apes On Fire"
            id="Public JUL 20. 05:30 ~ DEC 25. 05:30"
            alt=""/>

             <Card 
            image={Show2}
            name="CryptoNose"
            id="Public JUL 21. 01:30 ~ SEP 21. 01:30"
            alt=""/>

             <Card 
            image={Show3}
            name="PokerLook -Play To Earn"
            id="Public JUL 22. 05:30 ~ DEC 28. 05:30"
            alt=""/>

            <Card 
            image={Show4}
            name="Joker Snake"
            id="Public AUG 2. 17:30 ~ OCT 2. 17:30"
            alt=""/>

            <Card 
            image={Show5}
            name="LasengGO!"
            id="Public AUG 6. 15:30 ~ DEC 12. 15:30"
            alt=""/>

            <Card 
            image={Show6}
            name="Chitose"
            id="Public AUG 20. 11:30 ~ SEP 30. 11:30"
            alt=""/>
        </div>
    )
}

export default Shows