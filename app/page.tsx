import React from 'react'
import "./page.css";
import Header from "./Components/Header/page"
import Footer from "./Components/Footer/footer"

export default function pages() {
  return (
    <>
   <div>
    {/* first phase */}
    <div className='img1'>
      {/* <img src='/img.svg' /> */}
    <Header/>
    <div className='imagecontent'>
      <div className='imagecontent-welcome'>
        <p>WELCOM TO SKY FINANCIAL</p>
        <h1>Life's a Journey, Fly Confidently with our Protection<span className='dot'>.</span></h1>
      </div>
      <div className='imagecontent-para'>
        <p>
          At Sky Financial, we specialize in providing comprehensive life insurance and annuity options tailored to meet the unique needs of individuals across all age groups and income levels. As a licensed provider in all 50 states, we are dedicated to helping clients nationwide secure their financial futures with innovative insurance solutions.
        </p>
        <p>
          Explore our website to learn more about our products and how we can help you achieve peace of mind and financial security.
        </p>
      </div>
      <div className='buttontwo'>
        <div>
        <p>Get in touch</p>
        </div>
        <div>
        <img src="/Arrow.svg" />
        </div>
      </div>
    </div>
    </div>

    {/* second phase  */}
    <div className='secondphase'>
      <div>
        <img src='/anime1.svg'/>
      </div>
      <div className='secondphase-para'>
        <div className='secondphase-subpara-one'>
        <p >WHO WE ARE?</p>
        <h1>Your Trusted Insurance Partner<span className='dot-two'>.</span></h1>
        </div>
        <div className='secondphase-subpara-two'>
        <p>Sky Financial is a leading provider of life insurance and annuity solutions nationwide. With years of experience helping clients achieve financial security, we have earned a reputation for excellence and reliability in the insurance industry.</p>
        <p>Our dedicated team of agents is committed to providing personalized service and innovative solutions tailored to meet the unique needs of each client. We understand that every individual's financial situation is different, and we take the time to listen and recommend the best options for your needs and goals.</p>
        <p>At Sky Financial, we are passionate about helping our clients secure their financial futures and enjoy peace of mind knowing that their loved ones are protected.</p>
        </div>
      </div> 
    </div>
    <div className='flowdiagram'>
        <div></div>
        <div className='flowbox-one'>
          <img src="/flow-group.svg" />
          <p>ANNUITIES</p>
          <h2>Secure Your Retirement</h2>
          <div className='flowone-para'>
            <p>Planning for retirement is a crucial step in achieving long-term financial security. Annuities offer a reliable way to generate guaranteed income for life, ensuring that you can enjoy your retirement years with confidence.</p>
            <p>At Sky Financial, we specialize in annuity products tailored to the needs of high net worth individuals. Our exclusive offerings provide competitive returns and tax advantages, allowing you to maximize your retirement savings and enjoy a worry-free future.</p>
            <p>Whether you're looking for immediate income or a deferred annuity to supplement your retirement savings, our team of experts will help you navigate the options and find the right solution for your needs.</p>
          </div> 
        </div>
        <div className='flowbox-two'>
          <img src="/flow-hand-holding-heart.svg"/>
          <p>LIFE INSURANCE</p>
          <h2>Protecting What Matters Most</h2>
          <div className='flowtwo-para'>
            <p>Comprehensive Coverage for Peace of Mind: Our life insurance plans offer robust protection, ensuring you and your family can face life's uncertainties with confidence.</p>
            <p>Whether you're a young family just starting out or a retiree looking to leave a legacy, our experienced agents will work closely with you to understand your needs and goals, and recommend a policy that fits your budget and lifestyle.</p>
            <p>With Sky Financial, you can rest assured that your loved ones will be taken care of no matter what the future holds.</p>
          </div>
        </div>
        <div className='flowbox-three'>
          <img src="/flow-profit.svg"/>
          <p>TAX BENEFIT PROGRAMS</p>
          <h2>Maximize Your Savings</h2>
          <div className='flowthree-para'>
            <p>Life insurance and annuities offer significant tax benefits that can help you maximize your savings and minimize your tax liability. With life insurance, the death benefit is typically paid out to your beneficiaries tax-free, providing them with financial security without the burden of taxes.</p>
            <p>Similarly, annuities offer tax-deferred growth, meaning you won't pay taxes on your earnings until you start receiving income. This allows your retirement savings to grow faster and gives you more control over when you pay taxes.</p>
            <p>At Sky Financial, we can help you take advantage of these tax benefit programs and create a comprehensive financial strategy that minimizes your tax liability while maximizing your savings potential.</p>
          </div>
        </div>
    </div>

    {/* Third phase  */}
    <div className='thirdphase'>
      <div className='thirdphase-para'>
        <p>GET STARTED TODAY</p>
        <h1>Ready to take the next step towards financial security<span className='questionmark'>?</span></h1>
        <p>Contact <span className='thirdphase-subword'>SKY FINANCIAL </span>today to schedule a consultation with one of our experienced agents. We're here to answer your questions, address your concerns, and help you find the perfect insurance solutions for your needs.</p>
      </div>
      <div className='thirdphase-form'>
        <div className='subform-one'>
          <div className='subform-item1'>
            <div>
              <img src="/formuser.svg" />
              <input type='text' placeholder='Name' color='#777777'/>
            </div>
            <div>
              <img src="/formuser.svg" />
              <input type='text' placeholder='Subject' color='#777777'/>
            </div>
          </div>
          <div className='subform-item2'>
            <div>
              <img src="formmail.svg" />
              <input type='email' placeholder='E-mail'color='#777777'/>
            </div>
            <div>
              <img src="formphone.svg" />
              <input type='string' placeholder='Phone'color='#777777'/>
            </div>
          </div>
          <div className='subform-item3'>
            <input type='text' placeholder='Message'color='#777777'/>
          </div>
        </div>
        <div className='subform-two'>
          <input type='submit' value='Get in touch'/>  
        </div>
      </div>
    </div>

    {/*fourth phase*/}
    <div className='fourthphase'>
      <div className='fourth-sub-one'>
        <div className='fourth-one-item1'>
          <p>
          How much life insurance do I actually need?
          </p>
        </div>
        <div className='fourth-one-item2'>
          <p>How can I be sure I'm getting the best rates?</p>
        </div>
         <div className='fourth-one-item3'>
          <p>How long does it take to get approved for life insurance coverage?</p>
         </div>
         <div className='fourth-one-item4'>
          <p>What happens if I outlive the term of my life insurance policy?</p>
         </div>
         <div className='fourth-one-item5'>
          <p>How can I ensure my life insurance policy adequately protects my loved ones?</p>
         </div>
      </div>
      <div className='fourth-sub-two'>
        <h5>FREQUENTLY ASKED QUESTIONS</h5>
        <h1>Get the Answers You Need<span>.</span></h1>
        <div>
          <p>Have questions about life insurance? Explore our FAQs for clear, concise answers to help you make informed decisions about your coverage options.</p>
        </div>
        <img src="/fourthphase-man.svg"/>
      </div>
    </div>
    <div>
     {/* <Footer/> */}
    </div> 
    
   </div>
</>
  )
}
