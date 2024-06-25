import React from 'react';
import about1 from "../assests/about1.webp"
// import about2 from "../assests/about2.jpg"
import vision from "../assests/vision1.webp"
import CodeBlocks from '../components/core/home/CodeBlocks';
import "../components/core/home/CodeBlock.css"
import bhairavnath from "../assests/BhairavnathIMG.jpg"

const About = () => {
  return (
    <div className="bg-richblack-900 text-white min-h-screen p-3 md:p-8">
      <div className="mx-auto w-11/12">
        <h1 className="text-4xl font-bold mb-6">About Mess Locator</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Importance of Finding the Right Mess Food</h2>
          
          
          <div className='flex flex-col md:flex-row'>
          <ul className="list-disc md:pl-6 gap-y-3 mb-4">
            <p className="mb-2">
                At Mess Locator, we understand that finding the right mess food is crucial for a healthy lifestyle. Proper nutrition is the foundation of good health and well-being. The meals we consume daily significantly impact our physical and mental health, energy levels, and overall quality of life.
            </p>

            <p className="mb-2">
            Choosing nutritious, balanced, and wholesome mess food can:
             </p>
            <li>Enhance Physical Health: Well-prepared meals provide essential nutrients that support bodily functions, strengthen the immune system, and promote growth and development.</li>
            <li>Boost Mental Well-being: A nutritious diet can improve mood, reduce stress, and enhance cognitive function, contributing to better mental health.</li>
            <li>Support Academic and Professional Success: Healthy eating habits can increase concentration, memory, and productivity, helping individuals excel in their academic and professional endeavors.</li>
            <li>Promote Long-term Wellness: Consistently making healthy food choices can prevent chronic diseases such as obesity, diabetes, and heart disease, leading to a longer, healthier life.</li>
          </ul>

          <div>
            <img src={about1} alt="img1" className='ml-3 rounded-md'/>
          </div>
          </div>
        </section>

        <section className="mb-8 flex flex-col  md:flex-row md:gap-x-4">
            <div>
            <h2 className="text-3xl font-semibold mb-4">Vision</h2>

            <img src={vision} alt="img2" className='rounded-md ml-2 w-[350px] h-[280px]' />
            </div>
            
            <div className="md:m-12 w-11/12">
                
            <p className="mb-2">
            Our vision at Mess Locator is to become the leading platform for discovering the best mess food options, 
            promoting a culture of healthy eating, and fostering communities that prioritize nutrition and well-being. 
            We envision a world where:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Accessibility and Convenience</strong>: Everyone has easy access to nutritious and delicious meals, regardless of their location or dietary preferences.</li>
            <li><strong>Educational Empowerment</strong>: Users are empowered with knowledge about healthy eating habits, ingredient transparency, and meal planning, enabling them to make informed food choices.</li>
            <li><strong>Community Engagement</strong>: Our platform cultivates vibrant communities of food enthusiasts, health advocates, and local businesses, fostering meaningful connections and collaborations.</li>
          </ul>
         
                
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Mission</h2>
          <p className="mb-2">
            Our mission is to connect individuals with the best mess food options available, providing comprehensive information, reviews, and recommendations to make informed food choices. We strive to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensure Quality and Variety: Curate a diverse selection of messes offering high-quality, nutritious meals to cater to different dietary preferences and needs.</li>
            <li>Promote Transparency: Provide detailed information about meal ingredients, preparation methods, and nutritional values to help users make educated decisions.</li>
            <li>Encourage Healthy Eating: Advocate for balanced and wholesome diets through educational content, tips, and resources on our platform.</li>
            <li>Support Local Businesses: Highlight and collaborate with local messes to boost their visibility and customer base, contributing to the local economy.</li>
          </ul>
        </section>

        
        {/* Developer Section */}

        <h2>Developer</h2>

        <div className='flex flex-col md:flex-row justify-around'>
                <div>
                
                <article class="card mt-16">

                    
                    <img
                        className="card__background rounded-md "
                        src= {bhairavnath}
                        alt="post"
                       
                    />
                    <div class="card__content | flow">
                        <div class="card__content--container | flow">
                        <h2 class="card__title">Bhairavnath</h2>
                        <p class="card__description">
                           Final Year Computer Engineering Student eager to apply Skills in field of Computer
                        </p>
                        </div>
                    
                    </div>
                </article>

                </div>

                <div>
                    <CodeBlocks
                        codeColor={"text-white"}
                        codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                    />
                </div>

        </div>
    </div>



        {/* <section>
          <h2 className="text-3xl font-semibold mb-4">Future Scope</h2>
          <p className="mb-2">
            Looking ahead, Mess Locator envisions expanding its reach and impact by:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Expanding Geographical Coverage: Extending our services to new regions and cities, ensuring more people have access to healthy mess food options.</li>
            <li>Enhancing User Experience: Continuously improving our platform with user-friendly features, personalized recommendations, and advanced search capabilities.</li>
            <li>Integrating Technology: Leveraging cutting-edge technologies like AI and machine learning to provide smarter and more tailored meal suggestions based on individual preferences and health goals.</li>
            <li>Collaborating with Health Experts: Partnering with nutritionists, dietitians, and health professionals to offer expert advice and personalized nutrition plans to our users.</li>
            <li>Promoting Sustainability: Encouraging messes to adopt sustainable practices and offering eco-friendly meal options to support environmental well-being.</li>
          </ul>
          <p>
            At Mess Locator, we are committed to guiding you towards better food choices, contributing to your journey towards a healthier and happier life. Join us in making nutritious eating a priority and discover the best mess food options for a brighter future.
          </p>
        </section> */}


      </div>
   
  );
};

export default About;
