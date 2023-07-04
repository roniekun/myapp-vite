import './Home.css';
import Footer from '../Footer';
function Home({isSmallScreen}) {
  
  return (
  <div className='home__container'>
      <Footer isSmallScreen={isSmallScreen}/>
   </div>
 
  
  );
}

export default Home;
