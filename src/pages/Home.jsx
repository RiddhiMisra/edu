import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import HighLightText from '../components/core/HomePage/HighLightText'
import Button from '../components/core/HomePage/Button'
import banner1 from '../assets/Images/banner1.jpg'
import banner2 from '../assets/Images/banner2.jpg'
import banner3 from '../assets/Images/banner3.jpg'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div>
        {/* Section 1 */}
        <div className='relative mx-auto flex flex-col text-white w-11/12 justify-between items-center max-w-maxContent'>
            <NavLink to={'/signup'}>
                <div className='group mx-auto rounded-full bg-richblack-800 text-richblack-200 font-bold transition-all duration-200 hover:scale-95 mt-16 p-1 w-fit'>
                    <div className='flex flex-row items-center gap-3 rounded-full py-2 px-4 md:py-3 md:px-6 lg:py-[10px] lg:px-10 transition-all duration-200 group-hover:bg-richblack-900 border-b-2 border-richblack-600 hover:border-none'>
                        <p className='text-sm md:text-base lg:text-lg'>Become an instructor</p>
                        <FaArrowRight className='text-sm md:text-base lg:text-lg'/>
                    </div>
                </div>
            </NavLink>

            <div className='text-white text-center text-4xl font-semibold mt-7'>
                Empower Your Future with <HighLightText message={"Coding Skills"} />
            </div>

            <div className='w-[90%] text-center text-lg text-richblack-300 mt-4 font-bold'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a plethora of resources, 
                including hands-on projects, quizzes, personalized learning paths and a lot more from our talented instructors.
            </div>

            <div className='flex gap-7 mt-8'>
                <div>
                    <Button active={true} link={"/signup"}>
                    <div className='flex gap-2 items-center'>
                        <p>Learn More</p>
                        <FaArrowRight />
                    </div>
                    
                    </Button>
                </div>
                <div>
                    <Button active={false} link={"/login"}>Book a Demo</Button>
                </div>
            </div>

            <div className='relative my-12 w-fit mx-auto'>
      <div className='flex space-x-4'>
        <div className='text-center'>
          <div className='shadow-blue-200 shadow-[-5px_-10px_50px_-5px]'>
            <img src={banner1}  alt='Image 1' />

          </div>
          <p style={{ fontSize: '15px', fontFamily: 'Lilita One' }}>
        Discover the best courses, especially hand-picked for{' '}
        <span style={{ color: 'lightblue', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', fontWeight: 'bold',fontSize: '18px' }}>
            Students
        </span>
        , designed to enhance their learning experience and skill developement.
    </p>
        </div>
        
        <div className='text-center'>
          <div className='shadow-blue-200 shadow-[-5px_-10px_50px_-5px]'>
            <img src={banner2}  alt='Image 2' />
          </div>
          <p style={{ fontSize: '15px', fontFamily: 'Lilita One' }}>
          Featuring top-notch {' '}
        <span style={{ color: 'lightblue', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', fontWeight: 'bold',fontSize: '18px' }}>
            Instructors , 
        </span>
         with extensive experience, in-depth knowledge and doubt support for a seamless learning experience.
    </p>
        </div>
        <div className='text-center'>
          <div className='shadow-blue-200 shadow-[-5px_-10px_50px_-5px]'>
            <img src={banner3}  alt='Image 3' />
          </div>
          <p style={{ fontSize: '15px', fontFamily: 'Lilita One' }}>
          Empowering {' '}
        <span style={{ color: 'lightblue', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', fontWeight: 'bold',fontSize: '18px' }}>
            Working Professionals, 
        </span>
        with advanced and new skills learning, tailored to thrive in careers and for professional excellence.
    </p>
        </div>
      </div>
    </div>


            <div>
                <CodeBlocks 
                    position={"lg:flex-row"}
                    heading = {
                        <span>
                            Unlock your <HighLightText message="coding prowess "></HighLightText> with our online courses
                        </span>
                    }
                    subheading={"Our courses are designed and taught by industry experts who have years of experience in their respective domains and are passionate about sharing their knowledge with you."}
                    btn1="Try it yourself " btn2 ="Learn more" 
                    codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                    codecolor={"text-yellow-25"}
                    link1={'/signup'}
                    link2={'/login'}
                    backgroundGradient={"gradient-yellow"}
                />

                <CodeBlocks 
                    codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                    btn1={"Continue Lesson"}
                    btn2={"Learn More"}
                    heading={
                        <span>
                            Start <HighLightText message={"coding in seconds "}></HighLightText>
                        </span>
                    }
                    subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                    codecolor={"text-richblack-5"}
                    position={"lg:flex-row-reverse"}
                    link1={'/login'}
                    link2={'/signup'}
                    backgroundGradient={"gradient-blue"}
                />
            </div>

            <ExploreMore />
            
        </div>

        {/* Section 2 */}
        <div className=' bg-pure-greys-5 text-richblack-700 pb-[100px]'>
            <div className='homepage_bg h-[333px]'>
                <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between'>
                    <div className='h-[150px]'>

                    </div>

                    <div className='flex flex-row gap-7 text-white'>
                        <div>
                            <Button active={true} link={"/signup"}>
                            <div className='flex items-center gap-3'> 
                                <p>Explore Full Catalogue</p> 
                                <FaArrowRight />
                            </div>
                            
                            </Button>
                        </div>
                        <div>
                            <Button active={false} link={"/login"}>Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between mt-[100px]'>
                <div className='flex gap-5 justify-between'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for a <HighLightText message={`job that is in demand`}/>
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                        <div className='text-[16px]'>
                        Today, staying competitive as a specialist demands more than just professional skills; it requires adapting to the evolving standards set by modern education.
                        </div>
                        <Button active={true} link={'/signup'}>
                        <div className='flex items-center gap-3'> 
                                <p>Learn More</p> 
                                <FaArrowRight />
                            </div>
                        </Button>
                    </div>
                </div>

            </div>

            <TimeLineSection />
            <LearningLanguageSection />
        </div>

        {/* Section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col gap-8 items-center justify-between bg-richblack-900 text-white'>
            <InstructorSection />
            <h2 className='text-4xl text-center font-semibold mt-10'>Reviews from Other Learners</h2>
            <ReviewSlider />
        </div>

        {/* Section 4 */}
        <Footer />
    </div>
  )
}

export default Home
