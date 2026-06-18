import React, { useState } from 'react'
import RitThumbnail from "../../assets/Thumbnail/Royal IT.png"
import DesignProcessDiagram from "../../assets/diagrams/RIT/Design Process.png";
import CompetitorAnalysis from "../../assets/diagrams/RIT/RIT Competitive Analysis.png";
import ProjectGoal from "../../assets/diagrams/RIT/RIT Project Goal.jpg";
import PersonaImage1 from "../../assets/persona/RIT/RIT User Persona 1.png";
import RITUserFlow from "../../assets/diagrams/RIT/RIT User Flow.png";
import RITUserFlowLegend from "../../assets/diagrams/RIT/RIT User Flow Legend.png";
import RITSiteMap from "../../assets/diagrams/RIT/RIT Site Map.png";
import Wireframe from "../../assets/diagrams/RIT/Wireframe.jpg";
import MobilePrototype from "../../assets/diagrams/RIT/Mobile Prototype.jpg";
import WebPrototype from "../../assets/diagrams/RIT/Web prototype.jpg";
import UiLibrary from "../../assets/diagrams/RIT/Ui Library Cover.png";
import RIT_Iteration from './Iterations/RIT-Iteration';
import Personas from './Personas/RIT-Persona';

import Web from '../../assets/diagrams/RIT/web.png';
import Mobile from '../../assets/diagrams/RIT/mobile.png';

const RoyalItUI = () => {
    const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className='max-w-5xl mx-auto px-6 py-20 font-ubuntu-sans'>
        <div className='font-ubuntu-sans mb-5'>
            <div className='text-4xl font-medium'>Royal IT Company Portfolio UI Design </div>
            <div className='text-md font-bold text-[#2F2FE4]'>UX RESEARCH | UI DESIGN | UX DESIGN | USABILITY TEST</div>
        </div>

        <div className='w-fit p-1 px-6 bg-[#F4F4F4] rounded-full border mb-8 dark:bg-gray-700/50 '>
            <p className=" text-[14px] font-normal text-black dark:text-white">
                Portfolio Website
            </p>
        </div>

        <div className="overflow-hidden">
            <img 
                src={RitThumbnail} 
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
                The Royal IT (RIT) project focused on designing a modern and professional
                company portfolio website that clearly communicates the brand’s services
                and value. The goal was to create a strong digital presence that improves
                user experience, builds trust, and helps generate more client inquiries.
                </p>

                <p className="text-[16px] text-gray-800 dark:text-white">
                This project involved understanding the target audience, analyzing
                existing design issues, and creating a clean, structured layout with a
                premium black and gold visual style. The final design highlights key
                services, improves content clarity, and provides an easy and engaging
                experience for users across all devices.
                </p>
            </div>
        </div>

        <div className="flex gap-16 font-ubuntu-sans mt-10 mb-10">
            <div className="w-70 shrink-0">
                <h1 className="text-[32px] font-normal">Challenge</h1>
            </div>

            <div className="max-w-175">
                <p className="text-[16px] text-gray-800 dark:text-white">
                Royal IT did not have a strong online presence. The website design was
                unclear, with poor layout and weak structure, making it hard for users to
                understand the services. It also lacked trust elements like testimonials
                and clear information, which reduced user confidence and engagement.
                </p>
            </div>
        </div>

        <div className="flex gap-16 font-ubuntu-sans mt-10 mb-10">
            <div className="w-70 shrink-0">
                <h1 className="text-[32px] font-normal">Solution</h1>
                
            </div>

            <div className="max-w-175">
                <p className="text-[16px] text-gray-800 dark:text-white">
                        A modern and clean website was designed to improve clarity and user experience. 
                        The new layout uses clear structure, better typography, and simple navigation to 
                        help users easily understand the services. Strong visuals, clear call-to-actions, 
                        and a black and gold theme were used to create a professional and trustworthy brand image.
                </p> 
            </div>
        </div>
        <div className='w-full bg-black dark:bg-white h-px'></div>

        <div className='grid grid-cols-3 gap-14 font-ubuntu-sans mt-10 mb-10'>
            <div className=' text-md'>
                <div className='mb-4 uppercase text-[#2F2FE4]'>Time Duration</div>
                <div>3/4 Weeks</div>
            </div>
            <div className='text-md'>
                <div className='mb-4 uppercase text-[#2F2FE4]'>My role</div>
                <div>UX/UI Designer</div>
            </div>
            <div className='text-md'>
                <div className='mb-4 uppercase text-[#2F2FE4]'>Tools</div>
                <div>Figma, Fig jam, Draw.io</div>
                <div>Claude AI, Chat GPT AI</div>
            </div>
        </div>
        <div className='w-full bg-black dark:bg-white h-px mb-15'></div>

        <div className="font-ubuntu-sans">
            <div className="flex mb-10">
                <h1 className="text-4xl font-medium">
                Design Process
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

        <div className="flex gap-16 font-ubuntu-sans mt-10 mb-10">
            <div className="w-70 shrink-0">
                <div className='text-lg uppercase text-[#2F2FE4]'>Empathize</div>
                <h1 className="text-[32px] font-normal">Research</h1>   
            </div>
            <div className="max-w-175">
                <div className='flex-col'>
                    <div className='mb-4 uppercase text-[#2F2FE4]'>Competitor Analysis</div>
                    <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                        I analyzed four local and industry-leading Computer Services & Repairs 
                        companies, identifying strengths, weaknesses, and opportunities for design inspiration.
                    </p>
                </div>   
            </div>
        </div>

        <div className="cursor-pointer items-center justify-center px-40 h-fit w-fit">
            <img
                src={CompetitorAnalysis}
                alt="User Persona"
                onClick={() => setPreviewImage(CompetitorAnalysis)}
                className='rounded-3xl object-cover overflow-hidden transition-transform duration-400 hover:scale-105'
            />
            </div>

        <div className="flex gap-16 font-ubuntu-sans mt-10 mb-15">
            <div className="w-70 shrink-0">  
            </div>
            <div className="max-w-175">
                <div className='flex-col'>
                    <div className=' mb-4 uppercase text-[#2F2FE4]'>User interviews</div>
                    <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                        User interviews were conducted to understand how businesses and potential clients find 
                        IT service providers and identify the challenges they face when searching for technology 
                        solutions online.Participants shared their expectations, decision-making factors, and 
                        frustrations with existing company websites.
                    </p>
                </div>   
            </div>
        </div>

        <div className='mb-10'>
            <div className='text-4xl font-normal mb-3'>Key Questions</div>
            
            <div className='grid grid-cols-3 justify-center items-center font-poppins gap-10 mt-10 text-black'>
                <div className='w-80 h-50 p-10 text-2xl bg-gray-100'>
                    How do you choose an IT service provider?
                </div>
                <div className='w-80 h-50 p-10 text-2xl bg-gray-100'>
                    What problems do you face when visiting IT company websites?
                </div>
                <div className='w-80 h-50 p-10 text-2xl bg-gray-100'>
                    What makes you trust an IT company?
                </div>
            </div>
        </div>

        <div className='pt-10 pb-15'>
            <div className='text-4xl font-normal mb-3'>These are answers i got:</div>

            <div className='flex flex-row gap-10 font-ubuntu-sans mt-10'>
                <div className='flex w-105'>
                    <div className='w-60 h-30 px-12 py-7 dark:text-black text-2xl bg-gray-100 font-poppins'>
                        Check Website
                    </div>  
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                            "I usually check their website first. If it looks professional and clearly explains services, I feel more confident to contact them."
                        </p>
                    </div>   
                </div>
            </div>

            <div className='flex flex-row gap-10 font-ubuntu-sans  mt-10'>
                <div className='flex w-100'>
                    <div className='w-60 h-40 px-12 py-8 dark:text-black text-2xl bg-gray-100 font-poppins'>
                        Confusing and hard to understand
                    </div>  
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                            “Most websites are confusing and use too much technical language. 
                            It’s hard to understand what they actually offer.”
                        </p>
                    </div>   
                </div>
            </div>

            <div className='flex flex-row gap-10 font-ubuntu-sans mt-10'>
                <div className='flex w-80'>
                    <div className='w-60 h-40 px-11 py-6 dark:text-black text-2xl bg-gray-100 font-poppins'>
                        Client reviews and Past work
                    </div>  
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                            “Client reviews, past work, and a clean, 
                            professional design make me trust the company more.”
                        </p>
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
                        To make my research findings more tangible, I created a user persona 
                        which provided a holistic view of the target user that will shape my 
                        design decisions.
                        </p>   
                    </div>
                </div>

                <div>
                    <Personas />
                </div> 
            </div>
        </div>

        <div className="flex gap-16 font-ubuntu-sans mt-10 mb-15">
            <div className="w-70 shrink-0">  
                <h1 className="text-[32px] font-normal">
                How Might We
                </h1>
            </div>
            <div className="max-w-175">
                <p className="text-[16px] text-gray-800 dark:text-white">
                How might we design a modern and professional digital presence for Royal IT that 
                clearly communicates its services, builds trust with potential clients, and makes 
                it easy for users to explore and submit inquiries?
                </p>   
            </div>
        </div>

        <div className='w-full bg-black dark:bg-white h-px mb-15'></div>
        
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
            
            <div className="cursor-pointer items-center justify-center px-40 h-fit w-fit ">
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
                            The user flow was designed to guide users step-by-step from landing on 
                            the homepage to completing a contact inquiry. It focuses on helping users 
                            quickly understand the services, build trust through key sections, and take 
                            action with clear call-to-action buttons.
                        </p>
                    </div>   
                </div>
            </div>

            <div className="h-full w-full px-40 mb-10">
                <div className="flex justify-center items-center mb-10">
                    <img
                        src={RITUserFlowLegend}
                        alt="Order Checkout Flow"
                        className="w-140 h-fit"
                    />
                </div>

                <div className="flex justify-center items-center cursor-pointer">
                    <img
                        src={RITUserFlow}
                        alt="Order Checkout Flow"
                        onClick={() => setPreviewImage(RITUserFlow)}
                        className="overflow-hidden transition-transform duration-400 hover:scale-102"
                    />
                </div>
            </div>

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

            <div className="cursor-pointer items-center justify-center px-40 h-fit w-fit ">
                <img
                    src={RITSiteMap}
                    alt="Site Map"
                    onClick={() => setPreviewImage(RITSiteMap)}
                    className='object-cover overflow-hidden transition-transform duration-400 hover:scale-102'
                />
            </div>
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

            <div className="cursor-pointer items-center justify-center px-10 w-full ">
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
            </div>

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

            <div className="items-center justify-center w-full mt-10">
                <img
                    src={UiLibrary}
                    alt="UI Library"
                    className='object-cover overflow-hidden'
                />
            </div>

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
            </div>

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

            <div className="cursor-pointer items-center justify-center px-10 w-full ">
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
            </div>  
        </div>

        <div className='w-full bg-black dark:bg-white h-px mt-15 mb-15'></div>

        <div>
            <div className='text-lg uppercase text-[#2F2FE4]'>Testing & Iteration</div>
            <div className="font-ubuntu-sans mt-4 mb-10">
                <h1 className="text-[32px] font-normal">Usability Testing</h1>   
            
                <div className='text-[16px] text-gray-800 mt-2 dark:text-white mb-5'>
                    To evaluate the effectiveness of the Royal IT website design, I conducted moderated usability 
                    testing sessions with five participants who matched the target audience, including small business 
                    owners and professionals seeking IT services. The objective was to assess how easily users could 
                    navigate the website, understand the company's services, and complete key tasks related to learning 
                    about the business and contacting the company.
                </div>
            </div>
            <div className="flex gap-16 font-poppins">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase font-ubuntu-sans text-[#2F2FE4]">Scenario :</h1>   
                </div>
                <div className='flex font-ubuntu-sans'>
                    <div className='flex-col'>
                        <p className='text-[16px] font-normal text-gray-800 mt-1 dark:text-white mb-5'>
                        "Your business is looking for a reliable IT service provider to support your technology needs. Visit 
                        the Royal IT website, explore the available services, learn more about the company, and determine whether 
                        you would feel confident contacting them for a consultation."
                        </p>
                    </div>   
                </div>
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-3 mb-5">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase text-[#2F2FE4]">Participants Were Asked To :</h1>   
                </div>

                <ul className="list-disc pl-4 space-y-2">
                    <li>Identify the services offered by Royal IT.</li>
                    <li>Learn more about the company through the About section.</li>
                    <li>Find reasons why they should choose Royal IT over competitors.</li>
                    <li>Locate the contact information and submit an inquiry.</li>
                </ul>
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-8">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase font-ubuntu-sans text-[#2F2FE4]">Results :</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-5'>
                        All participants successfully completed the assigned tasks with minimal friction. Users were able to 
                        quickly understand the company's services, navigate between sections, and locate contact options without 
                        difficulty. Participants particularly appreciated the clear service presentation, professional visual 
                        design, and straightforward navigation structure.
                        </p>
                    </div>   
                </div>
            </div>

            <div className='mb-10'>
            <div className='text-md uppercase font-ubuntu-sans text-[#2F2FE4]'>User Feedbacks :</div>
            
            <div className='grid grid-cols-3 font-poppins gap-20 text-black'>
                <div className='w-70 h-fit py-7 text-[14px]'>
                    <div className='text-8xl font-jacques-francois-shadow border-black h-12 w-12 mb-3'>“</div>
                    <p>The website was easy to navigate, and I quickly understood what services Royal IT offers. 
                    The design looks professional and gave me confidence in the company.</p>
                    
                
                </div>
                <div className='w-70 h-fit py-7 text-[14px]'>
                    <div className='text-8xl font-jacques-francois-shadow border-black h-12 w-12 mb-3'>“</div>
                    <p>I liked how the information was organized. The service section was clear, and I was able 
                    to find the contact details without any confusion. Adding client success stories would make 
                    it even more trustworthy.</p>
                </div>

                <div className='w-70 h-fit py-7 text-[14px]'>
                    <div className='text-8xl font-jacques-francois-shadow border-black h-12 w-12 mb-3'>“</div>
                    <p>The overall experience felt smooth and modern. The black and gold branding helped the company 
                        stand out, and I could easily see why someone would choose Royal IT. I would like to see more 
                        examples of previous projects.</p>
                </div>
            </div>
        </div>

            <div className="flex gap-16 font-ubuntu-sans mt-2 mb-5">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase text-[#2F2FE4]">Key Insights :</h1>   
                </div>

                <ul className="list-disc pl-4 space-y-2">
                    <li>Users found the website easy to navigate and understand.</li>
                    <li>The black and gold visual identity contributed to a strong sense of professionalism and trust.</li>
                    <li>Could were clear and easy to understand what are the provide services.</li>
                    <li>Contact information was easy to find and access.</li>
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
                
                <div>
                    <RIT_Iteration/>
                </div> 
            </div>
        </div>

        <div className='w-full bg-black dark:bg-white h-px mt-15 mb-15'></div>
        
        <div>
            <div className="flex font-ubuntu-sans"> 
                <h1 className="text-2xl font-normal text-[#2F2FE4]">Experience The Prototypes</h1>
            </div>

            <div className='text-[16px] text-gray-800 mt-1 dark:text-white mb-8'>
                Experience the interactive prototype and explore the final solution, designed to help users easily 
                understand Royal IT's services, build confidence in the brand, and connect with the company through 
                a seamless user journey.
            </div>
        </div>
        
       <div className="flex gap-30 font-ubuntu-sans mt-2 items-end">
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
        </div>

        <div className='w-full bg-black dark:bg-white h-px mt-15 mb-15'></div>

        <div>
            <div className='text-lg uppercase text-[#2F2FE4]'>FINAL THOUGHTS</div>
            <div className="flex gap-16 font-ubuntu-sans mt-4">
                <div className="w-70 shrink-0">  
                    <h1 className="text-[32px] font-normal">Key Takeaways</h1>   
                </div>
            </div>
            <div className='text-[16px] text-gray-800 mt-1 dark:text-white mb-10'>
                While this project began as a concept, its long-term potential extends beyond design, creating
                opportunities to improve customer engagement, strengthen brand trust, and generate meaningful business impact.
            </div>

            <div className="flex gap-16 font-ubuntu-sans mt-2">
                <div className="w-70 shrink-0">  
                    <h1 className="text-md uppercase font-ubuntu-sans text-[#2F2FE4]">What I Learned :</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[16px] text-gray-800 mt-1 dark:text-white mb-5'>
                        This project reinforced the importance of building trust through design, especially for 
                        service-based businesses where credibility plays a major role in decision-making. Throughout 
                        the process, I learned how user research, competitor analysis, information architecture, and 
                        usability testing can work together to create a more intuitive and effective experience. It 
                        also highlighted the value of validating assumptions with users rather than relying solely on design intuition.
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
                        While this project was developed as a concept, the long-term vision is to fully develop and 
                        launch the Royal IT website as a live product and further refine the user experience by Getting 
                        feedback. Future efforts will focus on implementation, real-world user testing, and continuous 
                        improvements to ensure the platform delivers value to both the business and its customers.
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
                        I'm most proud of creating a complete end-to-end case study that demonstrates not only the 
                        visual design of the website but also the thinking behind every design decision. From identifying 
                        user pain points to refining the experience through usability testing, each step was driven by user 
                        needs and business goals. Seeing the concept evolve into a polished, professional solution that positions 
                        Royal IT as a trustworthy technology partner is the achievement I'm most proud of.
                        </p>
                    </div>   
                </div>
            </div>
        </div>
        
    </div>
  )
}



export default RoyalItUI