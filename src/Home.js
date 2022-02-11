import React from "react";
import "./Home.css";
import Data from "./Data";
import Collection from "./Collection";
import Information from "./Information";
import Mission from "./Mission";
import Carousel from "./Carousel";
import FAQ from "./FAQ";

function Home() {
  return (
    <div className="home">
      <Carousel />
      <div className="home__row">
        <Data
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7fuhxMYRX3KbPP4Ou64pZmHMcyh2D3Lnfg&usqp=CAU"
          title="You Can Help Millions by Supporting Our Campaign"
          text="Donate"
        />
        <Data
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoC9Lh_stUWxP4NG9g_pMwYuqFlXhZHwziEQ&usqp=CAU"
          title="Create Impact by  motivating your friends and family to involve in the cause you believe in."
        />
      </div>
      <hr />
      <div className="home__row2">
        <Collection
          image="https://iiflinsurance.com/images/separate-health-plan.jpg"
          content="We cannot treat our way out of these problems. We are never going to build enough medical services. Our goal is to create a community where everybody has opportunity to thrive."
        />
        <Collection
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyma9ju5BkJ2CurHxxL6fFIE8GrG0YkhD8Fw&usqp=CAU"
          content="The pandemic reinforces what we already know. We can’t keep people healthy if they don’t have a roof over their head and food on the table."
        />
        <Collection
          image="https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg"
          content="COVID is a funhouse mirror that is amplifying issues that have existed forever. People are not dying of COVID. They are dying of racism, of economic inequality and it is not going to stop with COVID."
        />
      </div>
      <hr />
      <div className="home__row3">
        <div className="row__right">
          <Information
            image="donate.png"
            text="donate"
            content="No one has ever become poor by giving"
          />
          <Information
            image="media.png"
            text="Share"
            content="It takes both sides to build a bridge"
          />
        </div>
        <div className="row__left">
          <Information
            image="folder.png"
            text="Resources"
            content="We try to bring everything together"
          />
          <Information
            image="news.png"
            text="Media"
            content="The power of media forces necessary changes"
          />
        </div>
      </div>
      <br />
      <hr />
      <div id="funds" className="lp-heading primary-font">
        COVID MISSION
      </div>
      <div className="home__row4">
        <Mission />
      </div>
      <hr />
      <div id="faqs" className="lp-heading primary-font">
        FAQ
      </div>
      <div className="faq-content" id="FAQs">
        <FAQ
          number="1"
          question="IS COVID-19 WORSE THAN FLU?"
          answer="COVID-19 has a higher rate of severe disease and mortality in nearly every age group, compared with influenza (flu)."
        />
        <FAQ
          number="2"
          question="I AM AN INDIVIDUAL, HOW CAN I HELP?"
          answer="Donating to our missions and supporting the underprivileged cope with Coronavirus. Spread the word about our mission on your social media and within your network."
        />
        <FAQ
          number="3"
          question="HOW EFFECTIVE ARE MASKS AND DO THEY ALSO NEED TO COVER MY NOSE?"
          answer="Mask wearing is a very simple and effective way to reduce transmission and save lives. The degree of protection depends on the type of mask, how well they worn and on other factors such as the behaviour of people wearing them and the behaviour of air droplets in different settings."
        />
        <FAQ
          number="4"
          question=" HOW CAN WE TRUST VACCINES THAT HAVE BEEN DEVELOPED SO FAST?"
          answer="COVID-19 vaccines have been developed and produced in record time, but it’s also involved unprecedented levels of funding and global cooperation to tackle a global threat. So far, all approved COVID-19 vaccines have undergone large clinical trials with rigorous safety protocols, and without major safety concerns raised."
        />
        <FAQ
          number="5"
          question="SHOULD I BE CONCERNED THAT THE SAMPLE SIZES IN VACCINE CLINICAL TRIALS WEREN’T BIGGER?"
          answer="A small sample size in clinical trials doesn’t necessarily reduce the importance of the findings. The more efficacious the intervention, the smaller the number of clinical outcomes needed to demonstrate its efficacy because the benefit of the intervention is so clear. You would expect larger sample sizes when there are more grey areas about how effective an intervention is."
        />
        <FAQ
          number="6"
          question="WHAT ARE THE RISKS OF RE-INFECTION?"
          answer="As with other coronaviruses, such as those that cause the common cold, SARS-CoV-2 can reinfect people. There have been multiple reports of reinfection, including a 25-year-old man in the US who tested positive twice. The Lancet reported that “the second infection was symptomatically more severe than the first.”"
        />
        <FAQ
          number="7"
          question="WHY SHOULD WE USE THIS WEBSITE?"
          answer="Our major goal is to spread awareness and reach maximum people who need help. To help reach our goal we need people from all over the world to support us "
        />
        <FAQ
          number="8"
          question="HOW DOES COVID-19 COMPARE TO OTHER PUBLIC HEALTH THREATS?"
          answer="This depends very much on where people live and how old they are, with some parts of the world hit harder than others, and some age groups being affected more, such as older people. However, even in countries where the COVID-19 death rate seems relatively low, the indirect impact on reduced health services, vaccine supply shortages, and reluctance to seek medical treatment for fear of infection is having a drastic impact and putting tens of millions of people at risk – including children and newborns."
        />
      </div>
    </div>
  );
}

export default Home;
