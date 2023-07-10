import React from 'react'
import './PortfolioContent.css';
import { ThemeContext } from '../../../context/ThemeContext';



const PortfolioContent = () => {
 
  

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
    <>
      <section id={`component-${theme}`} className='portfolio__first__section' >
      <div className='hero__text__container'>

      <h1 className='hero__text'>Plan</h1>
      <h1 className='hero__text'>Build</h1>
      <h1 className='hero__text'>Deploy</h1>
    
      </div>
    <div>
        <p className='description'> We specialize in creating stunning website landing pages and portfolios 
                that showcase your unique brand and captivate your audience. 
                With our expertise in web design and content creation, we help businesses
                and individuals establish a strong online presence that leaves a lasting impression.</p>
    </div>
      </section>

      <section id={`component-${theme}`} className='portfolio__second__section'>

      <h1 className='services'>Services</h1>

      <div>
      <h2>Website Landing Pages</h2>
      <p className='description'> We craft visually appealing and user-friendly landing pages that effectively communicate your message and drive conversions.<br/> 
      Whether you're launching a new product, promoting a service, or running a campaign, our landing pages will capture your audience's attention and generate measurable results.
      </p>
      <h2>Portfolio Creation</h2>
      <p className='description'> Stand out from the competition with a professionally designed portfolio that showcases your skills, projects, and accomplishments.<br/>
       We tailor each portfolio to reflect your personal brand or company image, ensuring it leaves a memorable impact on potential clients and employers.
      </p>
</div>

  

        </section>
        
      </>
        )}
        </ThemeContext.Consumer>

  )
}

export default PortfolioContent