import React from 'react'
import { observer } from 'mobx-react-lite'
import two2 from 'src/assets/img/home/two-right.png'
import right from 'src/assets/img/style/right.png'
import person1 from 'src/assets/img/style/person1.png'
import person2 from 'src/assets/img/home/two-left.png'
import person3 from 'src/assets/img/style/person3.png'
import person4 from 'src/assets/img/style/person4.png'
import foot from 'src/assets/img/style/foot.png'
import './index.less'


let Style = () => {
   return (
      <div className='pc-style'>
         <div className='main'>
            <div className='left'>
               <div className='border'></div>
               <p className='p1'>FAMOUS MODEL STYLE</p>
               <p className='p2'>QIN SHUPEI:</p>
               <p className='p2'>WANDERING THE <br /> WORLD ROAD</p>
               <p className='p3'>We compare life to the ocean and the continuous rhythm, while humans are like ships and dancers, each with its own unique "Flow" formed in the ups and downs of strength. For Qin Shupei, her life philosophy is to "ship to the bridge and naturally straight" without forcing, leaving more space for oneself and life, and luck can only explore.</p>
               <div className='btn'>Detailed Information</div>
            </div>
            <img src={two2} alt="two2" />
         </div>

         <div className='bg-h'>
            <div className='left'>
               <div className='border'></div>
               <div className='b-text'>IN CONVERSATION <br /> WITH DIESEL <br /> DESIGNER GLENN <br /> MARTENS</div>
               <div className='s-text'>Freedom, pleasure, experimentation, and play. DIESEL has always <br /> advocated democracy, freedom of choice, and a positive attitude <br /> towards sex.</div>
               <div className='ball'>
                  <p>Detailed </p>
                  <p>Information</p>
               </div>
            </div>
            <div className='right'>
               <div className='link-text'>
                  <div className='flex'><div className='title'>01</div> <div className='b-text'>Inspiration Source&Fun Stories on the Show</div></div>
                    <img src={right} alt="right" />
                  <p className='s-p'>DIESEL has made people accustomed to not doing classic fashion shows - DIESEL is another option. This season, democratic elements are all about positive factors of sex. There are 200000 Durex co branded condom boxes stacked in the center of the show, which people can take away after the show ends. In April, DIESEL stores around the world will give away 300000 Durex condoms for free.</p>
               </div>
               <div className='link-text'>
                  <div className='flex'><div className='title'>02</div> <div className='b-text'>What is the definition and standard of 'Sucsexful'? How can fashion express this attitude?</div></div>
                  <img src={right} alt="right" />
                  <p className='s-p'>This is DIESEL's redefinition of For Successful Living, playfully reminding positive sexual behavior, which is a very interesting thing. I remember when I was young, buying condoms was a very important thing, and it should be a simple and obvious thing. We have been discussing positive sexual behavior, reminding people to have fun, respect each other, and maintain safety, which is very important</p>
               </div>
               <div className='link-text'>
                  <div className='flex'><div className='title'>03</div> <div className='b-text'>Which moments/people have had the deepest impact on you?</div></div>
                  <img src={right} alt="right" />
                  <p className='s-p'>Every step is worth it.</p>
               </div>
            </div>
         </div>

         <div className='text-box'>
            <div className='border'></div>
            <div className='title'>Spring and Summer Street <br /> Shooting and Dressing Guide</div>
            <div className='s-title'>Even if not on the runway, these supermodels still have endless charm. Take a look at Karlie Kloss, Alessandra <br /> Ambrosio, Miranda Kerr, and other supermodels on the streets! </div>
            <div></div>
         </div>

         <div className='two1'>
            <div className='img-box'>
               <img src={person2} alt="person2" />
               <img src={person1} alt="person1" />
            </div>
            <div className='right'>
               <p>L</p>
               <p>Behati Prinsloo has taken her simplicity to new heights, with her hat and cute white rimmed sunglasses playing a great role.</p>
               <p>Timothée Chalamet：JRTimothée Chalamet：JR</p>
               <p>R</p>
               <p>Bar Refaeli was just going out for a meal, but it looked as if he had already carefully dressed up.</p>
            </div>
         </div>

         <div className='two2'>
            <div className='right'>
               <p>L</p>
               <p>Anja Rubik's black and white tuxedo style makes her look extremely cool!</p>
               <p>Brendan Fraser and Darren Aronofsky:  JR</p>
               <p>R</p>
               <p>Alessandra Ambrosio appeared on the streets of Brentwood, Los Angeles in a mint pleated long dress, wearing a refreshing Sam&Levi shirt, Ray-Ban sunglasses, and Lola James bracelet.</p>
            </div>
            <div className='img-box'>
               <img src={person3} alt="person2" />
               <img src={person4} alt="person1" />
            </div>
         </div>

         <div className='border-1'></div>

         <div className='btn'>Detailed Information</div>

         <div className='bg-h2'>
            <div className='left'>
               <div className='border'></div>
               <div className='b-text'>Li Ling: Go on stage, always prepare!</div>
               <div className='s-text'>Since her exposure to pole vault in September 2001, Li Ling has been practicing it for 22 years. Her Weibo profile is the <br /> women's pole vault champion of the World Cup and Incheon Asian Games.</div>
               <div className='foot-img'>
                  <img src={foot} alt="foot" />
               </div>
            </div>
            <div className='right'>
               <p>“</p>
               <div>
                  Anyway, it hurts too, but I can tolerate it Asking how you feel when getting a needle, the word 'endure' seems to have become a habit. Not without anxiety, Li Ling said that after multiple attempts but still unable to find a breakthrough in the pain, the feeling was like a headless fly spinning its cage around. Finally, she realized that behind every dilemma lies an opportunity for growth again, As she wrote in her confession on Weibo, "In the past 6 years, I have tried my best to maintain the same level as I did 6 years ago. Many people say that you are at this level, and I know I may be at this level. But why did you define yourself so early before the end? I have to try whether it's good or not. Everyone is not fully moving forward in their own life, fighting hard in their own difficulties, and I am just one of them.
               </div>
            </div>
         </div>

         <p className='title-1'>ETHERAL DAILY</p>
         <p className='title-2'>All the essentials: top fashion stories, editor’s picks, and celebrity style.</p>
         <div className='btn-foot'>Return to Home</div>
      </div>
   )
}

export default observer(Style)
