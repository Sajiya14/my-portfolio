import React, { useState } from 'react'
import UniTUiThumbnail from "../../assets/Thumbnail/UniTUiThumbnail.png";
import DesignProcessDiagram from "../../assets/diagrams/UNI-T/Design Process.png";
import CompetitorAnalysis from "../../assets/diagrams/UNI-T/Competitor Analysis.png";
import FlowChart from "../../assets/diagrams/UNI-T/UNI-T Fashion Flow Chart.png";
import FlowChartLegend from "../../assets/diagrams/UNI-T/UNI-T Flow Chart Legend.png";
import ProjectGoal from "../../assets/diagrams/UNI-T/project goal.jpg";
import SiteMap from "../../assets/diagrams/UNI-T/uni-t-site-map.png";
import Personas from './Personas/Uni-T Persona';
import { FaCircleArrowUp } from "react-icons/fa6";


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

        <div className="flex gap-16 font-ubuntu-sans mt-10 mb-10">
            <div className="w-70 shrink-0">
                <h1 className="text-[32px] font-normal">Project Overview</h1>
            </div>
                <div className="max-w-175">
                    <p className="text-[16px] text-gray-800 dark:text-white mb-4">
                        The Uni-T Fashion Store is a modern eCommerce platform designed to provide 
                        a seamless and enjoyable shopping experience for customers across 
                        Sri Lanka. It offers a wide range of products including men's, 
                        women's, kids', and baby clothing, along with beauty and home 
                        essentials. The platform focuses on clean design, easy navigation, 
                        and mobile-first usability, allowing users to quickly browse 
                        categories, explore products, and make purchases with confidence.
                    </p>
                    <p className="text-[16px] text-gray-800 dark:text-white">
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
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white'>
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
                        The site map was designed to establish a logical information architecture for the eCommerce 
                        platform, ensuring users can effortlessly browse categories, find products, and move through 
                        the shopping process from discovery to checkout.
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
            <div className='w-full bg-black dark:bg-white h-px mt-15 mb-15'></div>
        </div>

        <div>
            <div className='text-lg uppercase text-[#2F2FE4]'>Design</div>
        
            <div className='flex flex-row gap-16 font-ubuntu-sans mt-2 mb-10'>
                <div className='flex w-70 shrink-0'>
                    <h1 className='text-[32px] font-normal mb-3'>Wireframe</h1>   
                </div>

                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                        I began with wireframes to explore multiple layouts, navigation structures, and shopping flows, 
                        ensuring users could easily discover products and complete their purchases.
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
                            I designed a scalable UI component library to create a consistent visual language and streamline 
                            the design process across all screens of the eCommerce platform.
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
                            I translated the wireframe into high-fidelity designs, refining typography, colors, imagery, 
                            and interactions to deliver a polished and engaging online shopping experience.
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

        <div>
            <div className='text-lg uppercase text-[#2F2FE4]'>Testing & Iteration</div>
            <div className="font-ubuntu-sans mt-4 mb-10">
                <h1 className="text-[32px] font-normal">Usability Testing</h1>   
            
                <div className='text-[16px] text-gray-800 mt-2 dark:text-white mb-5'>
                    To evaluate the effectiveness of the fashion eCommerce website, I conducted moderated usability testing sessions 
                    with five participants who matched the target audience, including university students, young professionals, and 
                    frequent online shoppers. The objective was to assess how easily users could discover products, navigate categories, 
                    evaluate product details, and complete the purchasing journey with confidence.
                </div>
            </div>
            <div className="flex gap-16 font-poppins">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase font-ubuntu-sans text-[#2F2FE4]">Scenario :</h1>   
                </div>
                <div className='flex font-ubuntu-sans'>
                    <div className='flex-col'>
                        <p className='text-[16px] font-normal text-gray-800 mt-1 dark:text-white mb-5'>
                        "You are looking for a new outfit for an upcoming event. Visit the fashion eCommerce website, browse products, 
                        find an item that matches your style, review the product information, add it to your cart, and proceed through the checkout process."
                        </p>
                    </div>   
                </div>
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-3 mb-5">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase text-[#2F2FE4]">Participants Were Asked To :</h1>   
                </div>

                <ul className="list-disc pl-4 space-y-2">
                    <li>Browse products by category.</li>
                    <li>Find a specific clothing item using search or filters.</li>
                    <li>Review product details, including images, sizes, colors, and pricing.</li>
                    <li>Add a product to the shopping cart.</li>
                    <li>Complete the checkout process using the provided checkout flow.</li>
                    
                </ul>
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-8">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase font-ubuntu-sans text-[#2F2FE4]">Results :</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-5'>
                        All participants successfully completed the primary shopping tasks without major usability issues. Users were 
                        able to browse products, apply filters, review product information, and proceed through checkout with minimal 
                        effort. Participants particularly appreciated the clean interface, high-quality product imagery, intuitive navigation, 
                        and streamlined checkout experience, which helped them make purchasing decisions more confidently.
                        </p>
                    </div>   
                </div>
            </div>

            <div className='mb-10'>
                <div className='text-md uppercase font-ubuntu-sans text-[#2F2FE4]'>User Feedbacks :</div>
            
                <div className='grid grid-cols-3 font-poppins gap-20 dark:text-white'>
                    <div className='w-70 h-fit py-7 text-[14px]'>
                        <div className='text-8xl font-jacques-francois-shadow border-black h-12 w-12 mb-3'>“</div>
                        <p>Browsing products felt really easy, and I liked how quickly I could find clothes that matched my style. The filters saved me a lot of time</p>
                    
                    </div>

                    <div className='w-70 h-fit py-7 text-[14px]'>
                        <div className='text-8xl font-jacques-francois-shadow border-black h-12 w-12 mb-3'>“</div>
                        <p>The product pages were clear and informative. The size options, multiple images, and product details helped me feel confident before adding items to my cart.</p>
                    </div>

                    <div className='w-70 h-fit py-7 text-[14px]'>
                        <div className='text-8xl font-jacques-francois-shadow border-black h-12 w-12 mb-3'>“</div>
                        <p>The checkout process was simple and straightforward. I didn't feel overwhelmed, and everything I needed was easy to find. It would be even better if there were 
                           customer reviews and estimated delivery information on the product page.</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-2 mb-5">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase text-[#2F2FE4]">Key Insights :</h1>   
                </div>

                <ul className="list-disc pl-4 space-y-2">
                    <li>Users found it easy to browse products and navigate between categories.</li>
                    <li>Search and filtering features helped users locate products more efficiently.</li>
                    <li>High-quality product images and clear product information increased purchase confidence.</li>
                    <li>The shopping cart and checkout flow were intuitive and required minimal effort.</li>
                    <li>Users suggested adding customer reviews, product ratings, and estimated delivery information to further improve trust and decision-making.</li>
                </ul>
            </div>
                
            <div>
                <div className="font-ubuntu-sans mt-15 "> 
                    <h1 className="text-[32px] font-normal">Iteration</h1>   
                
                    <div  className='text-[16px] text-gray-800 mt-2 dark:text-white'>
                        Following usability testing, I analyzed participant feedback and interaction patterns to identify
                        friction points within the user journey. These findings informed several design iterations focused 
                        on improving navigation, content clarity and trust-building elements.   
                    </div>
                </div>
                
                {/*<div>
                    <RIT_Iteration/>
                </div> */}
            </div>
            <div className='w-full bg-black dark:bg-white h-px mt-15 mb-15'></div>
        </div>

        <div>
            <div>
                <div className="flex font-ubuntu-sans"> 
                    <h1 className="text-2xl font-normal text-[#2F2FE4]">Experience The Prototypes</h1>
                </div>

                <div className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                    Explore the interactive prototype to experience the end-to-end shopping journey from browsing products 
                    and viewing detailed product information to adding items to the cart and completing checkout. All designed 
                    to deliver a smooth, intuitive, and user-centered experience.
                </div>
            </div>
        
            {/*<div className="flex gap-30 font-ubuntu-sans mt-2 items-end">
                <div className="ml-20 mt-10">
                    <div className="h-75">
                        <img
                            src={Web}
                            alt="Web UI"
                            className="h-full w-auto object-contain"
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
                            Web Prototype
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="h-75">
                        <img
                            src={Mobile}
                            alt="Mobile UI"
                            className="h-full w-auto object-contain"
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
                            Mobile Prototype
                        </button>
                    </div>
                </div>
            </div>*/}

            <div className='w-full bg-black dark:bg-white h-px mt-15 mb-15'></div>
        </div>

        <div>
            <div className='text-lg uppercase text-[#2F2FE4]'>FINAL THOUGHTS</div>
            <div className="flex gap-16 font-ubuntu-sans mt-4">
                <div className="w-70 shrink-0">  
                    <h1 className="text-[32px] font-normal">Key Takeaways</h1>   
                </div>
            </div>
            <div className='text-[16px] text-gray-800 mt-1 dark:text-white mb-10'>
                This project demonstrates how thoughtful UX design can simplify the online shopping experience while balancing 
                both user needs and business objectives. By combining user research, competitor analysis, information architecture, 
                wireframe, visual design, and usability testing, I designed an experience that helps customers discover products 
                more easily, make confident purchase decisions, and complete checkout with minimal friction. Although developed as 
                a concept, the project highlights how user-centered design can improve customer satisfaction, increase conversions, 
                and strengthen long-term brand loyalty.
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-2">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase font-ubuntu-sans text-[#2F2FE4]">What I Learned :</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-5'>
                        This project reinforced the importance of designing around the entire customer shopping journey rather than 
                        focusing only on visual aesthetics. I learned how every stage from product discovery and browsing to product 
                        evaluation and checkout contributes to the overall user experience. User testing also demonstrated the value 
                        of validating design decisions with real users, revealing opportunities to improve navigation, product information, 
                        and the purchasing flow that may not have been obvious during the design process.
                        </p>
                    </div>   
                </div>
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-2">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase font-ubuntu-sans text-[#2F2FE4]">Next Steps :</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-5'>
                        While this project was created as a concept, the next step is to evolve it into a fully functional eCommerce platform. 
                        Future improvements will focus on implementing the design, conducting larger-scale usability testing, and continuously 
                        refining the experience based on customer feedback and analytics. Additional features such as product reviews, personalized 
                        recommendations, wishlists, delivery tracking, and loyalty rewards could further enhance user engagement and encourage repeat purchases.
                        </p>
                    </div>   
                </div>
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-2">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase font-ubuntu-sans text-[#2F2FE4]">What I’m Most Proud Of :</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-5'>
                        I'm most proud of creating a complete end-to-end UX case study that goes beyond designing attractive interfaces to solving real 
                        user problems. Every design decision from simplifying product discovery and improving product detail pages to streamlining the 
                        checkout experience was guided by user research and validated through usability testing. Watching the concept evolve into a cohesive 
                        shopping experience that balances usability and business goals is the achievement I'm most proud of.
                        </p>
                    </div>   
                </div>
            </div>
        </div>

        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 bg-white text-black cursor-pointer rounded-full shadow-lg hover:scale-110 transition">

            <FaCircleArrowUp 
                className="w-12 h-12 px-1 py-1"
            />
      </button>
    </div>
  )
}

export default UniTUi