import React from 'react'
import HighLightText from '../HomePage/HighLightText';
import Button from '../HomePage/Button';

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Eduquest partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Eduquest provides innovative learning methods for academic and professional excellence.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Earn industry-recognized certifications with our cutting-edge edtech platform.",
  },
  {
    order: 4,
    heading: `Rating and Auto-Grading`,
    description:
      "Experience seamless learning with our advanced rating and auto-grading system.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Get job-ready with our comprehensive, hands-on edtech training programs.",
  },
];

const LearningGrid = () => {
  return (
    <div className='grid  grid-col-1 lg:grid-cols-4 mb-10 p-5 lg:w-fit'>
    {
        LearningGridArray.map( (card, index) => {
            return (
                <div
                key={index}
                className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                ${
                    card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"
                }
                ${card.order === 3 && "lg:col-start-2"}
                ${card.order < 0 && "bg-transparent"}
                `}
                >
                {
                    card.order < 0 
                    ? (
                        <div className='lg:w-[90%] flex flex-col pb-5 gap-3'>
                            <div className='text-4xl font-semibold'>
                                {card.heading}
                                <HighLightText message={card.highlightText} />
                            </div>
                            <p className='font-medium text-richblack-200'>
                                {card.description}
                            </p>
                            <div className='w-fit mt-4'>
                                <Button active={true} link={card.BtnLink}>
                                    {card.BtnText}
                                </Button>
                            </div>
                        </div>
                    )
                    : (<div className='flex flex-col gap-8 p-7'>
                        <h1 className='text-richblack-5 text-lg'>
                            {card.heading}
                        </h1>
                        <p className='text-richblack-300 font-medium'>
                            {card.description}
                        </p>
                    </div>)
                }

                </div>
            )
        } )
    } 
    </div>
  )
}

export default LearningGrid