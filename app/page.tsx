import React from 'react'
import "./page.css";
import Header from "./Components/Header/page"
import Footer from "./Components/Footer/footer"
import Head from 'next/head';
import Link from 'next/link';


export default function pages() {
  return (
    <>
      {/* <Head>
      {/*work sans }
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"> 
      </Head> */}
      <div > 
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

    {/* second phase sub */}
    <div className='flowdiagram'>
        <div className='flow-empty'></div>
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
        <div className='flow-empty-two'></div>
        <div className='vertical-empty'></div>
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
        <div className='vertical-empty'></div>
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
        <form>  
          <div className='subform-one'>
          <div className='subform-item1'>
            <div>
              <img src="/formuser.svg" />
              <input type='text' placeholder='Name' id='name' color='#777777' required/>
            </div>
            <div>
              <img src="/formuser.svg" />
              <input type='text' placeholder='Subject'id='subject' color='#777777'required/>
            </div>
          </div>
          <div className='subform-item2'>
            <div>
              <img src="formmail.svg" />
              <input type='email' placeholder='E-mail'id='email' color='#777777' required/>
            </div>
            <div>
              <img src="formphone.svg" />
              <input type='string' placeholder='Phone'id='phone' color='#777777' required/>
            </div>
          </div>
          <div className='subform-item3'>
            <textarea placeholder='Message' id='message' color='#777777' required></textarea>
          </div>
          </div>
          <div className='subform-two'>
          <input type='submit' value='Get in touch'/>  
          </div>
        </form>  
      </div>
    </div>

    {/*fourth phase*/}
    <div className='fourthphase'>
    <div className="accordion">
        <details className="accordion-item">
            <summary className="accordion-header">
                <span className="accordion-title">How much life insurance do I actually need?</span>
                <img src="scrolldown.svg" alt="Symbol 1" className="accordion-icon"/>
            </summary>
            <div className="accordion-content">
                <p>Determining your life insurance needs depends on various factors like your income, debts, and future expenses.</p>
                <br />
                <p>A general rule of thumb is to aim for coverage that's 5-10 times your annual income.</p>
                <br />
                <p>However, it's crucial to consider your specific circumstances, such as outstanding debts, education expenses for dependents, and future financial goals.</p>
                <br />
                <p>Consulting with our financial advisor can help tailor a policy that adequately protects your loved ones and aligns with your long-term plans.</p>
            </div>
        </details>
        <details className="accordion-item">
            <summary className="accordion-header">
                <span className="accordion-title">How can I be sure I'm getting the best rates?</span>
                <img src="scrolldown.svg" alt="Symbol 2" className="accordion-icon"/>
            </summary>
            <div className="accordion-content">
                <p>At our agency, ensuring you get the best rates is our priority.</p>
                <br />
                <p>We leverage our extensive network and expertise to scout for the most competitive offers tailored to your needs.</p>
                <br />
                <p>Our transparent approach means you'll always know you're getting the best deal available. </p>
                <br />
                <p>We continuously monitor the market to keep your rates optimized. Trust in our commitment to securing your financial future at the most favourable terms.</p>
            </div>
        </details>
        <details className="accordion-item">
            <summary className="accordion-header">
                <span className="accordion-title">How long does it take to get approved for life insurance coverage?</span>
                <img src="scrolldown.svg" alt="Symbol 3" className="accordion-icon"/>
            </summary>
            <div className="accordion-content">
                <p>The approval process for life insurance coverage typically ranges from a few days to several weeks.</p>
                <br />
                <p>Factors such as the type of policy, your health, and the insurer's underwriting process influence the timeline.</p>
                <br />
                <p>Generally, simpler policies like term life insurance may be approved more quickly, while complex policies or those requiring medical exams may take longer.</p>
                <br />
                <p>Rest assured, we strive to expedite the process while ensuring thoroughness to provide you with the best coverage efficiently.</p>
            </div>
        </details>
        <details className="accordion-item">
            <summary className="accordion-header">
                <span className="accordion-title">What happens if I outlive the term of my life insurance policy?</span>
                <img src="scrolldown.svg" alt="Symbol 4" className="accordion-icon"/>
            </summary>
            <div className="accordion-content">
                <p>If you outlive the term of your life insurance policy, there are several options available.</p>
                <br />
                <p>You can choose to renew the policy, convert it to a permanent life insurance policy if available, or simply let it expire. </p>
                <br />
                <p>It's important to review your options with your insurance provider to determine the best course of action based on your current needs and financial situation.</p>
                <br />
                <p>Additionally, some policies may offer the option to receive a pay-out of the premiums paid, though this varies depending on the terms of your policy.</p>
            </div>
        </details>
        <details className="accordion-item">
            <summary className="accordion-header">
                <span className="accordion-title">How can I ensure my life insurance policy adequately protects my loved ones?</span>
                <img src="scrolldown.svg" alt="Symbol 5" className="accordion-icon"/>
            </summary>
            <div className="accordion-content">
                <p>To ensure your life insurance adequately protects your loved ones, start by assessing your family's financial needs and future obligations.</p>
                <br />
                <p>Consider factors like mortgage payments, education expenses, and living costs. </p>
                <br />
                <p>Next, work closely with our expert advisors to tailor a policy that aligns with your unique circumstances and provides sufficient coverage. </p>
                <br />
                <p>Regularly review and update your policy to accommodate any changes in your life situation. </p>
                <br />
                <p>Rest assured, our commitment to personalized guidance ensures your loved ones are safeguarded against life's uncertainties.</p>
            </div>
        </details>
    </div>
      <div className='fourth-sub-two'>
        <h5>FREQUENTLY ASKED QUESTIONS</h5>
        <h1>Get the Answers You <br/> Need<span>.</span></h1>
        <div>
          <p>Have questions about life insurance? Explore our FAQs for clear, concise answers to help you make informed decisions about your coverage options.</p>
        </div>
        <img src="/fourthphase-man.svg" id='fourth-img'/>
      </div>
    </div>
    <div>
     {/* <Footer/> */}
    </div> 
    <script src='/Components/Form/form.js'></script>
      </div>
 
    </>
  )
}
