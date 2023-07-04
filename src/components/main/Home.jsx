import './Home.css';
import Footer from '../Footer';
// import BusyIcon from '../icons/BusyIcon';




function Home({showNavbar,isSmallScreen}) {
  

  return (
    <>  <div className='home__container'>
    <section>
  
      {/* <BusyIcon/> */}
    
    </section>
  </div>
      <Footer isSmallScreen={isSmallScreen}/>
  
  </>
  
  );
}

export default Home;
