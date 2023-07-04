import './Home.css';
import Footer from '../Footer';
import HomeContent from './sections/HomeContent';
// import BusyIcon from '../icons/BusyIcon';




function Home({showNavbar,isSmallScreen}) {
  

  return (
    <>  <div className='home__container'>
    <section>
      <HomeContent/>
  
      {/* <BusyIcon/> */}
    
    </section>
  </div>
      <Footer isSmallScreen={isSmallScreen}/>
  
  </>
  
  );
}

export default Home;
