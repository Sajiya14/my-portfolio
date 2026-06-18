import React, { useState } from 'react'
import UniTUiThumbnail from "../../assets/Thumbnail/UniTUiThumbnail.png";
import DesignProcessDiagram from "../../assets/diagrams/UNI-T/Design Process.png";
import CompetitorAnalysis from "../../assets/diagrams/UNI-T/Competitor Analysis.png";
import FlowChart from "../../assets/diagrams/UNI-T/UNI-T Fashion Flow Chart.png";
import FlowChartLegend from "../../assets/diagrams/UNI-T/UNI-T Flow Chart Legend.png";
import ProjectGoal from "../../assets/diagrams/UNI-T/project goal.jpg";
import SiteMap from "../../assets/diagrams/UNI-T/UNI-T Site Map.png";
import Personas from './Personas/Uni-T Persona';


const UniTUi = () => {
    const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className='max-w-5xl mx-auto px-6 py-20 font-ubuntu-sans'>
        <div className='font-ubuntu-sans mb-5'>
            <div className='text-4xl font-medium'>Uni-T Fashion E-commerce Web App UI Design </div>
            <div className='text-md font-bold text-[#2F2FE4]'>UX RESEARCH | UI DESIGN | UX DESIGN | USABILITY TEST</div>
        </div>

        <div className='w-fit p-1 px-6 bg-[#F4F4F4] rounded-full border mb-8 dark:bg-gray-700/50 '>
            <p className=" text-[14px] font-normal text-black dark:text-white">
                Ecommerce Website
            </p>
        </div>

        <div className="overflow-hidden">
            <img 
                src={UniTUiThumbnail} 
                alt="Uni-T Fashion E-commerce Web App UI Design" 
                className="w-full h-full pb-3 object-cover mb-4 " 
            />
        </div>

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-15'>
            <div className='flex w-500'>
                <h1 className='text-4xl font-normal mb-3'>Project Overview</h1>
                
            </div>
            <div className='flex'>
                <div className='flex-col'>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                        The Uni-T Fashion Store is a modern eCommerce platform designed to provide 
                        a seamless and enjoyable shopping experience for customers across 
                        Sri Lanka. It offers a wide range of products including men's, 
                        women's, kids', and baby clothing, along with beauty and home 
                        essentials. The platform focuses on clean design, easy navigation, 
                        and mobile-first usability, allowing users to quickly browse 
                        categories, explore products, and make purchases with confidence.
                    </p>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white'>
                        The store is built with a strong emphasis on trust and convenience, 
                        addressing common challenges faced by online shoppers such as unclear 
                        sizing, product quality concerns, and complicated checkout processes. 
                        Features like detailed product information, intuitive filtering, and 
                        simplified checkout flows help users make informed decisions. By 
                        combining user-centered design with a visually appealing interface, 
                        The Fashion Store aims to deliver a reliable and engaging online 
                        shopping experience.
                    </p>
                </div>   
            </div>
        </div>
        <div className='w-full bg-black dark:bg-white h-px'></div>

        <div className='grid grid-cols-3 gap-14 font-ubuntu-sans mt-15 mb-15'>
            <div className=' text-lg'>
                <div className='mb-4 uppercase text-[#2F2FE4]'>Time Duration</div>
                <div>6 Weeks</div>
            </div>
            <div className='text-lg'>
                <div className='mb-4 uppercase text-[#2F2FE4]'>My role</div>
                <div>UX + UI Design, User flow, Research, Prototyping</div>
            </div>
            <div className='text-lg'>
                <div className='mb-4 uppercase text-[#2F2FE4]'>Tools</div>
                <div>Figma, Fig jam</div>
            </div>
        </div>
        <div className='w-full bg-black dark:bg-white h-px mb-15'></div>

        <div className="font-ubuntu-sans">
            <div className="flex mb-10">
                <h1 className="text-4xl font-medium">
                My Design Process
                </h1>
            </div>

            <div className="cursor-pointer">
                <img
                src={DesignProcessDiagram}
                alt="Design Process Diagram"
                onClick={() => setPreviewImage(DesignProcessDiagram)}
                />
            </div>

            {previewImage && (
                <div
                    onClick={() => setPreviewImage(null)}
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 cursor-zoom-out"
                >
                    <img
                        src={previewImage}
                        alt="Preview"
                        className="max-w-full max-h-full rounded-lg shadow-xl"
                    />
                </div>
            )}

        </div>

        <div>
            <div className="flex gap-16 font-ubuntu-sans mt-10 mb-10">
                <div className="w-70 shrink-0">
                    <div className='text-lg uppercase text-[#2F2FE4]'>Empathize</div>
                    <h1 className="text-[32px] font-normal">Research</h1>   
                </div>
                <div className="max-w-175">
                    <div className='flex-col'>
                        <div className='mb-4 uppercase text-[#2F2FE4]'>Competitor Analysis</div>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white'>
                        A competitor analysis was conducted to understand how existing fashion 
                        retailers in Sri Lanka design their online shopping experiences and 
                        where opportunities for improvement exist. Leading brands such as 
                        NoLimit, Kandy, Cool Planet, Fashion Bug, and House of Fashion were 
                        evaluated based on their user experience, feature set, and overall 
                        design quality.
                        </p>
                    </div>   
                </div>
            </div>

            <div className="cursor-pointer">
                <img
                    src={CompetitorAnalysis}
                    alt="Competitor Analysis"
                    onClick={() => setPreviewImage(CompetitorAnalysis)}
                />
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-10 mb-15">
                <div className="w-70 shrink-0">  
                </div>
                <div className="max-w-175">
                    <div className='flex-col'>
                        <div className=' mb-4 uppercase text-[#2F2FE4]'>User interviews</div>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                        User interviews were conducted to understand how people in Sri Lanka 
                        shop for fashion online and identify their key challenges. 
                        Participants shared their experiences, preferences, and frustrations 
                        when using existing eCommerce platforms.
                        </p>
                    </div>   
                </div>
            </div>

            <div className='mb-10'>
                <div className='text-4xl font-normal mb-3'>Key Questions</div>
                
                <div className='grid grid-cols-3 justify-center items-center font-poppins gap-10 mt-10 text-black'>
                    <div className='w-80 h-50 p-10 text-2xl bg-gray-100'>
                        What factors influence your purchase decision?
                    </div>
                    <div className='w-80 h-50 p-10 text-2xl bg-gray-100'>
                        What frustrates you about current fashion websites?
                    </div>
                    <div className='w-80 h-50 p-10 text-2xl bg-gray-100'>
                        What features do you expect from a good shopping website?
                    </div>
                </div>
            </div>

            <div className='pt-10 pb-15'>
                <div className='text-4xl font-normal mb-3'>These are answers i got:</div>

                <div className='flex flex-row gap-10 font-ubuntu-sans mt-10'>
                    <div className='flex w-170'>
                        <div className='w-60 h-40 p-10 dark:text-black text-2xl bg-gray-100 font-poppins'>
                            Price is the main factor
                        </div>  
                    </div>
                    <div className='flex'>
                        <div className='flex-col'>
                            <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                                The user is highly price-sensitive and prefers affordable options. 
                                Discounts, offers, and visible pricing strongly influence their 
                                decision-making process, making them more likely to complete a purchase.
                            </p>
                        </div>   
                    </div>
                </div>

                <div className='flex flex-row gap-10 font-ubuntu-sans  mt-10'>
                    <div className='flex w-170'>
                        <div className='w-60 h-40 p-10 dark:text-black text-2xl bg-gray-100 font-poppins'>
                            Checkout feels too long
                        </div>  
                    </div>
                    <div className='flex'>
                        <div className='flex-col'>
                            <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                                A long or complicated checkout process creates frustration and increases 
                                the chances of users abandoning their cart. Users prefer a simple, fast, 
                                and step-by-step checkout experience with minimal input.
                            </p>
                        </div>   
                    </div>
                </div>

                <div className='flex flex-row gap-10 font-ubuntu-sans mt-10'>
                    <div className='flex w-170'>
                        <div className='w-60 h-40 p-10 text-2xl dark:text-black bg-gray-100 font-poppins'>
                            Needs better filtering
                        </div>  
                    </div>
                    <div className='flex'>
                        <div className='flex-col'>
                            <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                                The user expects efficient filtering options to quickly narrow down 
                                products based on price, category, and preferences. Without proper 
                                filters, browsing becomes time-consuming and overwhelming.
                            </p>
                        </div>   
                    </div>
                </div>
            </div>
        </div>

        

        

        <div className='w-full bg-black dark:bg-white h-px mb-15'></div>

        <div>
            <div className='text-lg uppercase text-[#2F2FE4]'>Define</div>
        
            <div className='mt-2 mb-12'>
                <div className="flex gap-16 font-ubuntu-sans mt-2 mb-15">
                    <div className="w-70 shrink-0">  
                        <h1 className="text-[32px] font-normal">
                            User Persona
                        </h1>
                    </div> 
                    <div className="max-w-175">
                        <p className="text-[16px] text-gray-800 dark:text-white">
                        Three user personas were created to represent key customer segments, including a professional, 
                        a family shopper, and a trend-driven young user. These personas helped guide design decisions by 
                        highlighting different needs such as convenience, affordability, and trust.
                        </p>   
                    </div>
                </div>
        
                <div>
                    <Personas />
                </div> 
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-15 mb-15">
                <div className="w-70 shrink-0">  
                    <h1 className="text-[32px] font-normal">
                    How Might We
                    </h1>
                </div>
                <div className="max-w-175">
                    <p className="text-[16px] text-gray-800 dark:text-white">
                    How might we create a seamless and trustworthy shopping experience that 
                    simplifies checkout, provides clear product and sizing information, and 
                    helps users make confident purchase decisions?
                    </p>   
                </div>
            </div>

            <div className='w-full bg-black dark:bg-white h-px mb-15'></div>
        </div>

        <div className='mb-15'>
            <div className='text-lg uppercase text-[#2F2FE4]'>IDEATION</div>
            <div className="flex gap-16 font-ubuntu-sans mt-2 mb-15">
                <div className="w-70 shrink-0">  
                    <h1 className="text-[32px] font-normal">Project Goals</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                            Before heading on to finding ideas for a solution, I mapped out the business goals, user goals, and project goals.
                        </p>
                    </div>   
                </div>
            </div>
                    
            <div className="cursor-pointer items-center justify-center px-20 h-fit w-fit ">
                <img
                    src={ProjectGoal}
                    alt="Project Goal"
                    onClick={() => setPreviewImage(ProjectGoal)}
                    className='object-cover overflow-hidden transition-transform duration-400 hover:scale-102'
                />
            </div>
        
            <div className="flex gap-16 font-ubuntu-sans mt-15 mb-5">
                <div className="w-70 shrink-0">  
                    <h1 className="text-[32px] font-normal">User Flow</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                        The order checkout flow was designed to provide a smooth and intuitive purchasing 
                        experience from cart to confirmation. It includes key steps such as cart review, 
                        user authentication (guest or login), address entry, payment selection, and order 
                        confirmation.<br/><br/>

                        The flow focuses on reducing friction by minimizing steps, supporting flexible options 
                        like Cash on Delivery, and ensuring clarity at each stage. This helps users complete their 
                        purchases quickly and confidently.
                        </p>
                    </div>   
                </div>
            </div>
        
            <div className="h-full w-full px-40 mb-10">
                <div className="flex justify-center items-center mb-10">
                    <img
                        src={FlowChartLegend}
                        alt="Order Checkout Flow"
                        className="w-140 h-fit"
                    />
                </div>
        
                <div className="flex justify-center items-center">
                    <img
                        src={FlowChart}
                        alt="Order Checkout Flow"
                        className="overflow-hidden transition-transform duration-400 hover:scale-102"
                    />
                </div>
            </div>

            <div>
                <div className='flex flex-row gap-16 font-ubuntu-sans mt-2 mb-5'>
                    <div className='flex w-70 shrink-0'>
                        <h1 className='text-[32px] font-normal mb-3'>Site Map</h1>   
                    </div>
                    <div className='flex'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                        The site map was created to organize the website structure in a clear and logical way. 
                        It groups all pages such as Home, About, Services, and Contact into an easy-to-navigate 
                        hierarchy, allowing users to find information quickly.
                        </p> 
                    </div>
                </div>
                
                <div className="items-center justify-center px-40 h-fit w-fit ">
                    <img
                        src={SiteMap}
                        alt="Site Map"
                        className='object-cover overflow-hidden transition-transform duration-400 hover:scale-102'
                    />
                </div>

                <div className='flex justify-center mt-10'>
                    <button
                        onClick={() =>
                            window.open(
                            "https://www.figma.com/proto/lMBUhIH2M0lN1dhMCfpP8C/Site-Maps?node-id=10-390&t=9NbeJnKjI3wtMORr-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"
                            )
                        }
                        className="px-10 py-4 bg-white text-black border border-black shadow-md shadow-black  hover:bg-gray-800 hover:text-white transition duration-300 cursor-pointer dark:shadow-white dark:shadow-md dark:bg-black dark:text-white dark:border-white dark:hover:text-white">
                        View Site Map
                    </button>
                </div>
            </div>
            <div className='w-full bg-black dark:bg-white h-px mb-15'></div>
        </div>

        <div className='w-full bg-black dark:bg-white h-px mb-15'></div>

        <div>
            <div className='text-lg uppercase text-[#2F2FE4]'>Design</div>
        
            <div className='flex flex-row gap-16 font-ubuntu-sans mt-2 mb-10'>
                <div className='flex w-70 shrink-0'>
                    <h1 className='text-[32px] font-normal mb-3'>Wireframe</h1>   
                </div>

                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                        I started with wireframe to experiment with multiple layout directions and navigation patterns, 
                        helping identify the most intuitive and effective user experience for the Royal IT website.
                        </p>
                    </div>   
                </div>
            </div>
        
            {/*<div className="cursor-pointer items-center justify-center px-10 w-full ">
                <img
                    src={Wireframe}
                    alt="Wireframe"
                    onClick={() => setPreviewImage(Wireframe)}
                    className='object-cover overflow-hidden transition-transform duration-500 hover:scale-102'
                />
            </div>
        
            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                        "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1216-6690&t=vsT1PQuw4s65a8Rx-1&scaling=scale-down-width&content-scaling=fixed&page-id=776%3A796",
                        "_blank"
                        )
                    }
                    className="px-10 py-4 bg-white text-black border border-black shadow-md shadow-black  hover:bg-gray-800 hover:text-white transition duration-300 cursor-pointer dark:shadow-white dark:shadow-md dark:bg-black dark:text-white dark:border-white dark:hover:text-white">
                        View Full Wireframe
                </button>
            </div>*/}
        
            <div className='flex flex-row gap-16 font-ubuntu-sans mt-15 mb-10'>
                <div className='flex w-70 shrink-0'>
                    <h1 className='text-[32px] font-normal mb-3'>Ui Library Components</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-5'>
                            I started with high-fidelity frames to refine the visual design and ensure a polished user experience for the Royal IT website.
                        </p>
                    </div>   
                </div>
            </div>
        
            {/*<div className="items-center justify-center w-full mt-10">
                <img
                    src={UiLibrary}
                    alt="UI Library"
                    className='object-cover overflow-hidden'
                />
            </div>*
        
            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                        "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1567-400&t=wDgSdKUxYKl28WMp-1&scaling=scale-down-width&content-scaling=fixed&page-id=1567%3A399"
                        )
                    }
                    className="px-10 py-4 bg-white text-black border border-black shadow-md shadow-black  hover:bg-gray-800 hover:text-white transition duration-300 cursor-pointer dark:shadow-white dark:shadow-md dark:bg-black dark:text-white dark:border-white dark:hover:text-white">  
                        View Full UI Library
                </button>
            </div>*/}
        
            <div className='flex flex-row gap-16 font-ubuntu-sans mt-15 mb-10'>
                <div className='flex w-70 shrink-0'>
                    <h1 className='text-[32px] font-normal mb-3'>High-fidelity Frames</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-5'>
                            I started with high-fidelity frames to refine the visual design and ensure a polished user experience for the Royal IT website.
                        </p>
                    </div>   
                </div>
            </div>
        
            {/*<div className="cursor-pointer items-center justify-center px-10 w-full ">
                <img
                    src={MobilePrototype}
                    alt="Mobile Prototype"
                    onClick={() => setPreviewImage(MobilePrototype)}
                    className='object-cover overflow-hidden transition-transform duration-500 hover:scale-102'
                />
            </div>
        
            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1466-2001&p=f&t=dqAo0TPkPQYBjtsk-1&scaling=min-zoom&content-scaling=fixed&page-id=1466%3A1002"
                        )
                    }
                    className="px-10 py-4 bg-white text-black border border-black shadow-md shadow-black  hover:bg-gray-800 hover:text-white transition duration-300 cursor-pointer dark:shadow-white dark:shadow-md dark:bg-black dark:text-white dark:border-white dark:hover:text-white">  
                        View Full Mobile Prototype
                </button>
            </div>
        
            <div className="cursor-pointer items-center justify-center px-10 w-full mt-15">
                <img
                    src={WebPrototype}
                    alt="Web Prototype"
                    onClick={() => setPreviewImage(WebPrototype)}
                    className='object-cover overflow-hidden transition-transform duration-500 hover:scale-102'
                />
            </div>
        
            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1216-3814&p=f&t=uSq44fr7RVTvLADw-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"
                        )
                    }
                    className="px-10 py-4 bg-white text-black border border-black shadow-md shadow-black  hover:bg-gray-800 hover:text-white transition duration-300 cursor-pointer dark:shadow-white dark:shadow-md dark:bg-black dark:text-white dark:border-white dark:hover:text-white">  
                        View Full Web Prototype
                </button>
            </div>*/}

            <div className='w-full bg-black dark:bg-white h-px mt-15 mb-15'></div>
        </div>

        
    </div>
  )
}

export default UniTUi