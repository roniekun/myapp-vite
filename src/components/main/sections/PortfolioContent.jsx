import React from 'react'
import './PortfolioContent.css';

const PortfolioContent = () => {
  return (
    <div className='container'>
      <section className='hero__text__container'>

      <h1 className='hero__text'>Plan, Build & Deploy</h1>


        <p className='description indent-75px'>
        We specialize in creating stunning website landing pages and portfolios that showcase your unique brand 
        and captivate your audience.<br/> 
        With our expertise in web design and content creation, 
        we help businesses and individuals establish a strong online presence that leaves a lasting impression.
        </p>

      </section>



      <section className='services__container'>

      <h2 className='services'>Services</h2>

      <ul className='service__lists'>
              
      <li>Website Landing Pages
      <p className='description indent-75px'>We craft visually appealing and user-friendly landing pages that effectively communicate your message and drive conversions.<br/> 
      Whether you're launching a new product, promoting a service, or running a campaign, our landing pages will capture your audience's attention and generate measurable results.</p>
      </li>



      <li>Portfolio Creation
      <p className='description indent-75px'> Stand out from the competition with a professionally designed portfolio that showcases your skills, projects, and accomplishments.<br/>
       We tailor each portfolio to reflect your personal brand or company image, ensuring it leaves a memorable impact on potential clients and employers.</p> 
      </li>

      </ul>

        </section>
        
      </div>

  )
}

export default PortfolioContent