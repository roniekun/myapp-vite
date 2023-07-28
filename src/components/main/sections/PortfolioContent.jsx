import React from 'react'
import './PortfolioContent.css';
import { ThemeContext } from '../../../context/ThemeContext';



const PortfolioContent = () => {
 
  

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <>
      <div id={`component-${theme}`} className='portfolio__first__section' >
      <div className='hero__text__container'>

      <h1 className='hero__text'>Design</h1>
      <h1 className='hero__text'>Build</h1>
      <h1 className='hero__text'>Deploy</h1>
    
      </div>
    <div>
        <p  className='portfolio__ptag'> Specialize in creating stunning website landing pages and portfolios 
                that showcase your unique brand and captivate your audience. <br/>
                With my expertise in web design and content creation, I help businesses
                and individuals establish a strong online presence that leaves a lasting impression.</p>
    </div>
      </div>

      <div id={`component-${theme}`} className='portfolio__second__section'>

      <h1 className='services'>Services</h1>
      <div className='services__container'>
      <h2>Website Landing Pages</h2>
      <p className='portfolio__ptag'>Crafts visually appealing and user-friendly landing pages that effectively communicate your message and drive conversions.<br/> 
      Whether you're launching a new product, promoting a service, or running a campaign, our landing pages will capture your audience's attention and generate measurable results.
      </p>
      </div>
      <div className='services__container'>
      <h2>Portfolio Creation</h2>
      <p className='portfolio__ptag'> Stand out from the competition with a professionally designed portfolio that showcases your skills, projects, and accomplishments.<br/>
        Tailor each portfolio to reflect your personal brand or company image, ensuring it leaves a memorable impact on potential clients and employers.
      </p>
      </div>


  

        </div>
        
      </>
        )}
        </ThemeContext.Consumer>

  )
}

export default PortfolioContent