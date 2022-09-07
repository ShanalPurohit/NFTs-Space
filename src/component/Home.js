import './Home.css'
import { FcFlashOn ,FcFilmReel ,FcApproval,FcSportsMode,FcPicture,FcDebian,FcReddit} from 'react-icons/fc';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {BsCheckCircleFill} from 'react-icons/bs';
import Trend from './Trend';
import Shows from './Shows';
import Popular from './Popular';
import Genesis from './Genesis';
import Temple from './Temple';
import Void from './Void';
import Bayc from './Bayc';

function Home(){
    return(
        <div className='container'>

             <div className='container_1'>
                 <h1>Live Spaces</h1>
                 <h5> <BsCheckCircleFill/> NFTs on cyber either belong to or were minted by their space creator.</h5>
              </div>
              <div className='container_2'>
              <Router> 
                <Link to="/" className='subcontainer_2'><button ><FcFlashOn/>  24h Trend </button></Link>
                <Link to="/latestshows" className='subcontainer_2'><button><FcFilmReel/>  Latest Shows </button></Link>
                <Link to="/mostpopular" className='subcontainer_2'> <button><FcApproval/>  Most Popular </button></Link>
                <Link to="/ingenesis" className='subcontainer_2'><button><FcSportsMode/>  In Genesis </button></Link>
                <Link to="/intemple" className='subcontainer_2'><button><FcPicture/>  In Temple </button></Link>
                <Link to="/invoid" className='subcontainer_2'><button><FcDebian/>  In Void </button></Link>
                <Link to="/bayc" className='subcontainer_2'><button><FcReddit/>  #BAYC </button></Link> <br/>

                <Routes>
                    <Route exact path="/" element={<Trend/>}></Route>
                    <Route  path="/latestshows" element={<Shows/>}></Route>
                    <Route  path="/mostpopular" element={<Popular/>}></Route>
                    <Route  path="/ingenesis" element={<Genesis/>}></Route>
                    <Route  path="/intemple" element={<Temple/>}></Route>
                    <Route  path="/invoid" element={<Void/>}></Route>
                    <Route  path="/bayc" element={<Bayc/>}></Route>
                </Routes>
              </Router>
             </div>  
        </div>
    )
}

export default Home