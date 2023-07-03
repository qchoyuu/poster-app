import React from 'react'
import { observer } from 'mobx-react-lite'
import main1 from 'src/assets/img/home/home-main-1.png'
import text from 'src/assets/img/home/text.png'
import text2 from 'src/assets/img/home/text2.png'
import right from 'src/assets/img/home/right.png'
import two1 from 'src/assets/img/home/two-left.png'
import two2 from 'src/assets/img/home/two-right.png'
import bg1 from 'src/assets/img/home/bottom-main.png'
import btom from 'src/assets/img/home/bottom-img.png'
import './index.less'


let Home = () => {
   return (
      <div className='pc-home'>
         <div className='main-box'>
            <p className='top'>DAILY</p>
            <img src={main1} alt="main1" />
            <p className='bottom'>ETHERAL</p>
            <p className='s-bottom-1'>Daily discussions on fashion trends, check out the latest fashion news</p>
            <p className='s-bottom-2'><img src={text} alt="text" /></p>
         </div>

         <p className='left-p'>Still worrying about dressing style?</p>
         <p className='left-p'>Come and see how the model dresses up</p>

         <div className='link-text'>
            Qin Shupei: Wandering the world's roads, following one's heart and flowing freely <img src={right} alt="right" />

            <p className='s-p'>I am sincerely grateful for having a lucky life</p>
         </div>

         <div className='link-text'>
            Spring and Summer Street Shooting Guide <img src={right} alt="right" />

            <p className='s-p'>They may be the warm and spicy mothers who pick up their children home; Perhaps it's the queen of street photography while shopping. Come and learn how to dress and match</p>
         </div>

         <div className='two'>
            <img src={two1} alt="two1" />
            <img src={two2} alt="two2" />
         </div>

         <div className='ball'>
            <div className='text'>Would a unified green <br /> clothing label be a more <br /> environmentally <br /> friendly choice?</div>
            <p className='p-text'>As Allbirds and Adidas launch the world's lowest carbon emitting sports shoes, we <br /> cannot help but ask whether standardized labeling systems can help consumers clearly <br /> grasp what they are purchasing and cause broader changes in the fashion industry</p>
            <div className='bg-ball'>
               <p>Detailed </p>
               <p>Information</p>
            </div>
         </div>

         <div className='bottom-bg'>
            <img src={bg1} alt="bg1" />
            <p className='b-p1'>Fashion View</p>
            <p className='b-p2'>Trends</p>
         </div>

         <div className='bottom-text1'>
            <p>
               Want to learn about the latest fashion perspectives and trends Take a look here
            </p>
            <div className='s-text'>
               This can make us more aware of the latest information and viewpoints in the current situation
            </div>
            <img src={text2} alt="text2" />
         </div>

         <div className='two-link-div'>
            <div className='link-text'>
               6 highlights you should know about the release of the Gimaguas 2021 Spring/Summer series <img src={right} alt="right" />

               <p className='s-p'>From the miniskirt with complicated printing to the minimalist dress inspired by the 1990s - here are 7 things you need to know about the summer cooperation series of this popular brand</p>
            </div>

            <div className='link-text'>
               Jonathan Cohen, the designer of Jill Biden, the first lady of the United States <img src={right} alt="right" />

               <p className='s-p'>This New York brand, known for its upgraded and redesigned designs, has made groundbreaking progress in the past year, establishing a new business model with a more eco-conscious approach and customizing clothing for Dr. Jill Biden.</p>
            </div>


            <div className='link-text'>
               Artist Cindy Sherman on Self Portrait in the Digital Media Era <img src={right} alt="right" />

               <p className='s-p'>American artist Cindy Sherman has recently released a series of tapestry works - her first non photographic works in nearly 40 years. In this interview, she expressed her desire to create tangible works, talked about why she had shed her dependence on Instagram and switched to books, and shared the benefits of being alone.</p>
            </div>
         </div>

         <div className='foot'>
            <img src={btom} alt="btom" />
            <div className='right'>
               <div>Fashion is not only about fashion, but you may also be interested in makeup, jewelry, and fashion brands</div>
               <div>This Y2K women's group makeup has been popular for 20 years</div>
               <div className='btn'>Detailed Information</div>
            </div>
         </div>

         <div className='foot-title'>
            <p className='title'>
               ETHERAL DAILY
               <br />
               <span>All the essentials: top fashion stories, editor’s picks, and celebrity style.</span>
            </p>

            <div className='search'>
               <input type="text" />
               <div className='s-btn'>SEARCH</div>
            </div>
         </div>

      </div>
   )
}

export default observer(Home)
