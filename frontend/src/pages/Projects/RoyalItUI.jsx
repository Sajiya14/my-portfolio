import React, { useState } from 'react'
import RitThumbnail from "../../assets/Thumbnail/RitThumbnail.png"
import DesignProcessDiagram from "../../assets/diagrams/Design Process.png";
import CompetitorAnalysis from "../../assets/diagrams/RIT/RIT Competitive Analysis.png";
import ProjectGoal from "../../assets/diagrams/RIT/RIT Project Goal.jpg";
import PersonaImage from "../../assets/persona/RIT/RIT User Persona.jpg";
import RITUserFlow from "../../assets/diagrams/RIT/RIT User Flow.png";
import RITUserFlowLegend from "../../assets/diagrams/RIT/RIT User Flow Legend.png";
import RITSiteMap from "../../assets/diagrams/RIT/RIT Site Map.png";



const RoyalItUI = () => {
    const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className='max-w-5xl mx-auto px-6 py-20 font-ubuntu-sans'>
        <div className='font-ubuntu-sans mb-5'>
            <div className='text-4xl font-medium'>Royal IT Company portfolio UI Design </div>
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

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-15'>
            <div className='flex w-260'>
                <h1 className='text-4xl font-normal mb-3'>Project Overview</h1>
                
            </div>
            <div className='flex'>
                <div className='flex-col'>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                        The Royal IT (RIT) project focused on designing a modern and professional 
                        company portfolio website that clearly communicates the brand’s services 
                        and value. The goal was to create a strong digital presence that improves 
                        user experience, builds trust, and helps generate more client inquiries.
                    </p>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white'>
                        This project involved understanding the target audience, analyzing existing 
                        design issues, and creating a clean, structured layout with a premium black 
                        and gold visual style. The final design highlights key services, improves 
                        content clarity, and provides an easy and engaging experience for users across all devices.
                    </p>
                </div>   
            </div>
        </div>

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-15'>
            <div className='flex w-240'>
                <h1 className='text-4xl font-normal mb-3'>Problem</h1>
                
            </div>
            <div className='flex'>
                <div className='flex-col'>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                        Royal IT did not have a strong online presence. The website design was unclear, 
                        with poor layout and weak structure, making it hard for users to understand the 
                        services. It also lacked trust elements like testimonials and clear information, 
                        which reduced user confidence and engagement.
                    </p>
                </div>   
            </div>
        </div>

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-15'>
            <div className='flex w-280'>
                <h1 className='text-4xl font-normal mb-3'>Solution</h1>
                
            </div>
            <div className='flex'>
                <div className='flex-col'>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                        A modern and clean website was designed to improve clarity and user experience. 
                        The new layout uses clear structure, better typography, and simple navigation to 
                        help users easily understand the services. Strong visuals, clear call-to-actions, 
                        and a black and gold theme were used to create a professional and trustworthy brand image.
                    </p>
                </div>   
            </div>
        </div>
        <div className='w-full bg-black dark:bg-white h-px'></div>

        <div className='grid grid-cols-3 gap-14 font-ubuntu-sans mt-15 mb-15'>
            <div className=' text-lg'>
                <div className='mb-4 uppercase text-[#2F2FE4]'>Time Duration</div>
                <div>3/4 Weeks</div>
            </div>
            <div className='text-lg'>
                <div className='mb-4 uppercase text-[#2F2FE4]'>My role</div>
                <div>UX/UI Designer</div>
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

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-10'>
            <div className='flex w-130'>
                <h1 className='text-4xl font-normal mb-3'>Research</h1>   
            </div>
            <div className='flex'>
                <div className='flex-col'>
                    <div className='mb-4 uppercase text-[#2F2FE4]'>Competitor Analysis</div>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                        I analyzed four local and industry-leading Computer Services & Repairs 
                        companies, identifying strengths, weaknesses, and opportunities for design inspiration.
                    </p>
                </div>   
            </div>
        </div>

        <div className="cursor-pointer items-center justify-center px-40 h-fit w-fit ">
            <img
                src={CompetitorAnalysis}
                alt="User Persona"
                onClick={() => setPreviewImage(CompetitorAnalysis)}
                className='rounded-3xl object-cover overflow-hidden transition-transform duration-400 hover:scale-105'
            />
            </div>

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10'>
            <div className='flex w-200'>   
            </div>
            <div className='flex'>
                <div className='flex-col'>
                    <div className='mb-4 uppercase text-[#2F2FE4]'>User interviews</div>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
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

            <div className='mt-4 mb-12'>
                <div className='flex flex-row gap-10 font-ubuntu-sans mb-10'>
                    <div className='flex flex-col w-130'>   
                        <h1 className='text-4xl font-normal text-gray-800 dark:text-white'>
                            User Persona
                        </h1>
                    </div> 
                    <div className='flex'>
                        <div className='flex-col'>
                            <p className='text-[18px] text-gray-800 dark:text-white'>
                                To make my research findings more tangible, I created a user persona 
                                which provided a holistic view of the target user that will shape my 
                                design decisions.
                            </p>
                        </div>   
                    </div>
                </div>

                <div className="cursor-pointer items-center justify-center px-40 h-fit w-fit ">
                    <img
                        src={PersonaImage}
                        alt="User Persona"
                        onClick={() => setPreviewImage(PersonaImage)}
                        className='rounded-3xl object-cover overflow-hidden transition-transform duration-400 hover:scale-105'
                    />
                </div>
            </div>
        </div>

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-10'>
            <div className='flex flex-col w-175'>
                <h1 className='text-4xl font-normal text-gray-800 dark:text-white mb-8'>
                    How Might We
                </h1>
            </div> 
            <div className='flex'>
                <div className='flex-col'>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                        How might we create a seamless and trustworthy shopping experience that 
                        simplifies checkout, provides clear product and sizing information, and 
                        helps users make confident purchase decisions?
                    </p>
                </div>   
            </div>
        </div>

        <div className='w-full bg-black dark:bg-white h-px mb-15'></div>
        
        <div>
            <div className='text-lg uppercase text-[#2F2FE4]'>IDEATION</div>
            <div className='flex flex-row gap-10 font-ubuntu-sans mt-5 mb-5'>
                <div className='flex w-100'>
                    <h1 className='text-4xl font-normal mb-3'>Project Goals</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
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
                    className='object-cover overflow-hidden transition-transform duration-400 hover:scale-105'
                />
            </div>

            <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-10'>
                <div className='flex w-220'>
                    <h1 className='text-4xl font-normal mb-3'>User Flow</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                            The user flow was designed to guide users step-by-step from landing on 
                            the homepage to completing a contact inquiry. It focuses on helping users 
                            quickly understand the services, build trust through key sections, and take 
                            action with clear call-to-action buttons.
                        </p>
                    </div>   
                </div>
            </div>

            <div className="h-full w-full mb-10">
                <img
                    src={RITUserFlowLegend}
                    alt="Order Checkout Flow"
                    className='w-140 justify-start item-start'
                />
            </div>

            <div className="cursor-pointer items-center justify-center px-0 h-full w-full mb-16">
                <img
                    src={RITUserFlow}
                    alt="Order Checkout Flow"
                    onClick={() => setPreviewImage(RITUserFlow)}
                    className='overflow-hidden transition-transform duration-400 hover:scale-105'
                />
            </div>

            <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-10'>
                <div className='flex w-190'>
                    <h1 className='text-4xl font-normal mb-3'>Site Map</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                            The site map was created to organize the website structure in a clear and logical way. 
                            It groups all pages such as Home, About, Services, and Contact into an easy-to-navigate 
                            hierarchy, allowing users to find information quickly.
                        </p>
                    </div>   
                </div>
            </div>

            <div className="cursor-pointer items-center justify-center px-40 h-fit w-fit ">
                <img
                    src={RITSiteMap}
                    alt="Site Map"
                    onClick={() => setPreviewImage(RITSiteMap)}
                    className='object-cover overflow-hidden transition-transform duration-400 hover:scale-105'
                />
            </div>
        </div>

        <div className='w-full bg-black dark:bg-white h-px mb-15'></div>

        
    </div>
  )
}



export default RoyalItUI