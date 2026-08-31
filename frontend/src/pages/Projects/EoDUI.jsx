import React from 'react'
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import EoDThumbnail from "../../assets/Thumbnail/EoD Thumbnail.png" 
import DesignProcessDiagram from "../../assets/diagrams/TFS/Design Process.png";
import DoeIA from "../../assets/diagrams/DOE/DOE IA.png";
import DoeUF from "../../assets/diagrams/DOE/DoE User Flows.png";
import HiFi_Frame from "../../assets/diagrams/DOE/Hi-Fi Frame Cover.png";
import Wireframe from "../../assets/diagrams/DOE/Wireframe Cover.png";
import UiComponent from "../../assets/diagrams/DOE/UI Component Cover.png";
import OldLP from "../../assets/diagrams/DOE/Old Landing Page.png";
import NewLP from "../../assets/diagrams/DOE/New Landing Page.png";
import WebMockup from "../../assets/diagrams/DOE/DoE Web Mockup.png";
import MobileMockup from "../../assets/diagrams/DOE/DoE Mobile Mockup.png";

export default function EoDUI() {

   // const [previewImage, setPreviewImage] = useState(null);
   const uxAudit = [
    { 
        id: 1, 
        area: "Navigation", 
        Observation: "Large amount of information and services", 
        impact: "Users may need more effort to locate specific tasks",
        priority: "High"
    },
    { 
        id: 2, 
        area: "Service Discovery", 
        Observation: "Important services compete with other content", 
        impact: "Users may not immediately identify primary actions",
        priority: "High"
    },
    { 
        id: 3, 
        area: "Content Hierarchy", 
        Observation: "Multiple content types require different levels of emphasis", 
        impact: "Difficult to scan the homepage quickly",
        priority: "High"
    },
    { 
        id: 4, 
        area: "Visual Consistency", 
        Observation: "Older visual patterns can make content feel dense", 
        impact: "Reduces clarity and modern usability",
        priority: "Medium" 
    },
    { 
        id: 5, 
        area: "Announcements", 
        Observation: "Important notices need stronger visibility", 
        impact: "Time-sensitive information can be overlooked",
        priority: "High" 
    },
    { 
        id: 6, 
        area: "Responsive Experience", 
        Observation: "Information-heavy layouts need careful adaptation", 
        impact: "Mobile users may experience unnecessary scrolling or complexity",
        priority: "High" 
    },
    { 
        id: 7, 
        area: "Accessibility", 
        Observation: "Government services need clear, readable interactions", 
        impact: "Poor contrast or unclear controls can create barriers",
        priority: "High" 
    },
    ];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16 font-ubuntu-sans animate-fade">
        <section className="animate-slide-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                Department of Examinations - Sri Lanka Website Redesign Concept
            </h1>
        
            <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-blue-400">
                UX RESEARCH | UX DESIGN | UI DESIGN | RESPONSIVE DESIGN | PROTOTYPING
            </p>
        
            <div className="inline-block mt-6 px-6 py-2 rounded-full border border-white/20 bg-white/10 text-sm">
                Landing Page Redesign Concept Project
            </div>
        
            <img
                src={EoDThumbnail}
                alt="Department of Examinations"
                className="mt-10 w-full rounded-xl object-cover transition-all duration-500 hover:scale-[1.02]"
            />
        </section>

        <section className="mb-12 mt-12 animate-slide-up">
                <h2 className="text-2xl md:text-3xl mb-6">
                    Project Overview
                </h2>

            <div className="flex-1">
                <p className="text-gray-200 leading-relaxed mb-5">
                    The Department of Examinations Sri Lanka provides examination-related 
                    information and services to students, examination candidates, parents, 
                    teachers, schools, and the wider public. For this independent concept 
                    project, I focused on redesigning the Department of Examinations landing 
                    page to create a clearer, more modern, and task-oriented entry point to its digital services.
                </p>

                <p className="text-gray-200 leading-relaxed mb-5">
                    The existing website contains a wide range of examination-related 
                    information and services. This creates a challenge for users who 
                    arrive with a specific goal, such as checking results, finding examination 
                    dates, applying for a certificate, or locating an important notice.
                </p>

                <p className="text-gray-200 leading-relaxed">
                    My goal was to explore how the landing page could better organize these services and information 
                    through clearer information architecture, stronger visual hierarchy, improved service discoverability, 
                    responsive design, and accessibility considerations.
                </p>
            </div>
        </section>

        <hr className="my-14 border-white/20" />

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-slide-up">
            <div className='text-center md:text-left'>
                <p className="text-blue-400 uppercase text-sm mb-3">Time Duration</p>
                <p>3 Weeks</p>
            </div>

            <div className='text-center md:text-left'>
                <p className="text-blue-400 uppercase text-sm mb-3">My Role</p>
                <p>UX/UI Designer</p>
            </div>

            <div className='text-center md:text-left'>
                <p className="text-blue-400 uppercase text-sm mb-3">Tools</p>
                <p>Figma, FigJam, Canva</p>
                <p>ChatGPT AI, Gemini AI</p>
            </div>
        </section>

        <hr className="my-14 border-white/20" />

        <section className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl mb-8">Design Process</h2>
            <div className="flex justify-center cursor-pointer px-0 md:px-20">
                <img
                    src={DesignProcessDiagram}
                    alt="Design Process"
                    className="w-full rounded-xl transition duration-500 hover:scale-[1.02]"
                />
            </div>
        </section>

        <section className="mt-12 animate-slide-up">
            <div className="mb-10">
                <p className="text-sm uppercase text-blue-400 mb-2">Empathize</p>
                <h2 className="text-2xl md:text-3xl font-normal">Existing Website Analysis</h2>

                <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                    I evaluated the existing Department of Examinations website from a UX perspective, focusing 
                    not only on its visual appearance but also on how effectively users can navigate, discover 
                    services, and access important examination information. This analysis helped identify usability 
                    issues, content priorities, and opportunities to create a clearer and more user-focused homepage.
                </p>
            </div>

            {/* Key areas analyzed */}
            <div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-14 mb-10">
                    <div className="md:w-64 shrink-0">
                        <h2 className="text-base font-normal text-blue-400 shrink-0 uppercase">Key areas analyzed :</h2>
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-gray-200 leading-relaxed">
                            I examined the key areas that shape the overall user experience, focusing on how easily users can navigate 
                            the website, discover essential examination services, understand important information, and complete common 
                            tasks. The analysis covered navigation, content hierarchy, service discoverability, notices, visual structure, 
                            mobile responsiveness, language options, and accessibility considerations.
                        </p>
                    </div>
                </div>

                <div className="space-y-8 mb-12 bg-[#222831] p-10 md:p-16">
                    <div className="flex  flex-row gap-10">
                        <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                            Navigation
                        </h3>
                        <p className="text-base leading-relaxed">
                            The website contains many services and information categories. The challenge was to understand 
                            how these could be grouped according to user needs rather than simply presenting a long collection of links.
                        </p>    
                    </div>

                    <hr className="my-8 border-white/20" />

                    <div className="flex  flex-row gap-10">
                        <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                            Content Hierarchy
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed">
                            Important services such as examination results, certificates, and examination information need 
                            to be immediately discoverable because they represent high-value tasks for users. The existing 
                            website provides these services, but the redesign opportunity was to give them stronger visual priority.
                        </p>    
                    </div>

                    <hr className="my-8 border-white/20" />

                    <div className="flex  flex-row gap-10">
                        <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                            Information Density
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed">
                            Government websites often need to communicate a large amount of information. The challenge is 
                            not necessarily to remove information, but to organize it so users can scan and find relevant 
                            content efficiently.
                        </p>    
                    </div>

                    <hr className="my-8 border-white/20" />

                    <div className="flex  flex-row gap-10">
                        <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                            Visual Consistency

                        </h3>
                        <p className="text-sm md:text-base leading-relaxed">
                            The redesign explored a more consistent system for cards, buttons, typography, spacing, icons, and content sections.
                        </p>    
                    </div>

                    <hr className="my-8 border-white/20" />

                    <div className="flex  flex-row gap-10">
                        <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                            Mobile Experience
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed">
                            Because examination-related services may be accessed from phones, the redesign considered responsive layouts and 
                            simplified content presentation for smaller screens.
                        </p>    
                    </div>
                </div>
            </div>

            {/* User Groups */}
            <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-normal">User Groups</h2>

                <p className="text-gray-200 leading-relaxed mt-4 mb-10">
                    I evaluated the existing Department of Examinations website from a UX perspective, focusing 
                    not only on its visual appearance but also on how effectively users can navigate, discover 
                    services, and access important examination information. This analysis helped identify usability 
                    issues, content priorities, and opportunities to create a clearer and more user-focused homepage.
                </p>

                <div className="mb-12 bg-[#222831] p-10 md:p-16">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-14 md:px-20">
                        <h3 className="md:w-64 text-base text-center md:text-left font-semibold shrink-0">
                            Students & Examination Candidates
                        </h3>

                        <div>
                            <div className='mb-5'>
                                <h3 className='mb-2 font-medium'>Primary needs</h3>
                                <ul className="list-disc pl-10 space-y-2">
                                    <li>Check examination results.</li>
                                    <li>Find examination dates.</li>
                                    <li>Download past papers.</li>
                                    <li>Apply for examinations.</li>
                                    <li>Obtain certificates.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='mb-3 font-medium'>Main Goal</h3>
                                <div className='flex gap-4'>
                                    <p className='w-1 bg-blue-400'></p>
                                    <p>Quickly find the service or information needed for an examination.</p>
                                </div>
                            </div> 
                            
                        </div>
                    </div>

                    <hr className="my-8 border-white/20" />

                    <div className="flex flex-col md:flex-row gap-6 md:gap-14 md:px-20">
                        <h3 className="md:w-64 text-base text-center md:text-left font-semibold shrink-0">
                            Parents & Guardians
                        </h3>

                        <div>
                            <div className='mb-5'>
                                <h3 className='mb-2 font-medium'>Primary needs</h3>
                                <ul className="list-disc pl-10 space-y-2">
                                    <li>Find examination information.</li>
                                    <li>Check important announcements.</li>
                                    <li>Access examination schedules.</li>
                                    <li>Understand application and result-related information.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='mb-3 font-medium'>Main Goal</h3>
                                <div className='flex gap-4'>
                                    <p className='w-1 bg-blue-400'></p>
                                    <p>Find reliable examination information quickly.</p>
                                </div>
                            </div> 
                            
                        </div>
                    </div>

                    <hr className="my-8 border-white/20" />

                    <div className="flex flex-col md:flex-row gap-6 md:gap-14 md:px-20">
                        <h3 className="md:w-64 text-base text-center md:text-left font-semibold shrink-0">
                            Schools & Teachers
                        </h3>

                        <div>
                            <div className='mb-5'>
                                <h3 className='mb-2 font-medium'>Primary needs</h3>
                                <ul className="list-disc pl-10 space-y-2">
                                    <li>Access examination notices.</li>
                                    <li>Download relevant documents.</li>
                                    <li>Access evaluation reports and marking resources.</li>
                                    <li>Find examination-related information.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className='mb-3 font-medium'>Main Goal</h3>
                                <div className='flex gap-4'>
                                    <p className='w-1 bg-blue-400'></p>
                                    <p>Access official examination information and resources efficiently.</p>
                                </div>
                            </div> 
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <hr className="my-8 border-white/20" />

        <section className="mt-12 animate-slide-up mb-12">
            <div className="mb-10">
                <p className="text-sm uppercase text-blue-400 mb-2">Define</p>
                <h2 className="text-2xl md:text-3xl font-normal">UX Audit</h2>

                <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                    From the existing web analysis, I identified several areas where the homepage could 
                    provide a clearer and more user-friendly experience. The audit focused on navigation, information hierarchy, service discoverability, visual consistency, responsiveness, and accessibility. These findings helped guide the redesign toward a more intuitive, 
                    structured, and user-centered experience.
                </p>
            </div>

            <div className="overflow-x-auto border-gray-200">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 font-semibold text-gray-700">Area</th>
                            <th className="px-6 py-3 font-semibold text-gray-700">Observation</th>
                            <th className="px-6 py-3 font-semibold text-gray-700">UX Impact</th>
                            <th className="px-6 py-3 font-semibold text-gray-700">Priority</th>
                        </tr>
                    </thead>

                    <tbody>
                        {uxAudit.map((uxAudit) => (
                            <tr
                                key={uxAudit.id}
                                className="border-t border-gray-200"
                            >
                                <td className="py-5 md:px-6 md:py-5 font-medium">{uxAudit.area}</td>
                                <td className="py-5 px-4 md:px-6 md:py-5">{uxAudit.Observation}</td>
                                <td className="py-5 px-4 md:px-6 md:py-5">{uxAudit.impact}</td>
                                <td className="py-5 px-4 md:px-6 md:py-5">{uxAudit.priority}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        <section className="mb-16 animate-slide-up">
            <h2 className="text-2xl md:text-3xl mb-6">The Challenge</h2>

            <p className="text-gray-200 leading-relaxed mb-5">
                The Department of Examinations serves students, candidates, parents, teachers, and school 
                staff, each with different information needs. With many services, notices, and resources 
                available, users can find it difficult to quickly identify where to go for a specific task.
                The challenge was to redesign the landing page with a clearer information hierarchy and a 
                more task-focused experience, making essential services, important updates, and support 
                easier to discover.
            </p>

            <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-base uppercase text-blue-400 shrink-0">
                        The Design Challenge :
                    </h3>
                    <div className="flex bg-[#222831]">
                        <div className='border-l-4 h-full border-blue-400'></div>
                        <p className="text-sm md:text-base leading-relaxed px-6 py-4">
                        "How might i transform the Department of Examinations landing page to improve 
                        service discoverability, create a clearer information hierarchy, make important 
                        examination information easier to scan, and user-friendly experience?"
                        </p>

                    </div>
                    
                </div>
            </div>
        </section>

        <section className="mb-12 animate-slide-up">
            <h2 className="text-2xl md:text-3xl mb-6">User Needs & Goals</h2>

            <p className="text-gray-200 leading-relaxed mb-10">
                Based on the analysis and ux audit, I identified the key needs users have when accessing the 
                Department of Examinations website. The focus was on helping users quickly find relevant 
                services, understand important examination information, and complete their tasks with less effort.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch justify-center gap-10">
                <div className="flex-1 bg-[#222831] px-20 py-10">
                    <h2 className="pb-5 text-center font-medium">User Needs</h2>

                    <ul className="list-disc space-y-2">
                        <li>Quickly identify important examination services</li>
                        <li>Find examination results easily</li>
                        <li>Discover examination dates and timetables</li>
                        <li>Access certificates and result verification</li>
                        <li>Find current notices and announcements</li>
                        <li>Access applications and downloads</li>
                        <li>Understand information through clear visual hierarchy</li>
                        <li>Use the website comfortably across devices</li>
                    </ul>
                </div>

                <div className="flex-1 bg-[#222831] px-20 py-10">
                    <h2 className="pb-5 text-center font-medium">Design Goals</h2>

                    <ul className="list-disc space-y-2">
                        <li>Prioritize high-value services.</li>
                        <li>Improve homepage scanning.</li>
                        <li>Create clearer content hierarchy.</li>
                        <li>Reduce perceived information complexity.</li>
                        <li>Establish a consistent UI system.</li>
                        <li>Improve responsive usability.</li>
                        <li>Create a more modern and trustworthy government digital presence.</li>
                    </ul>
                </div>
            </div>
        </section>

        <hr className="my-8 border-white/20" />

        <section className="mt-12 animate-slide-up">
            <div className='mb-16'>
                <div className="mb-10">
                    <p className="text-sm uppercase text-blue-400 mb-2">Ideate</p>
                    <h2 className="text-2xl md:text-3xl font-normal">Information Architecture</h2>

                    <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                        Because the scope was limited to the landing page, I focused on the homepage information architecture rather than creating a complete website sitemap.
                    </p>
                </div>

                <div className="cursor-pointer flex justify-center px-0 md:px-20">
                    <img
                        src={DoeIA}
                        alt="Information Architecture"
                        className="w-200 transition duration-500 hover:scale-102"
                    />
                </div>
            </div>

            <div className="mb-16">
                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-normal">User Flows</h2>
                    <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                        I’ve designed 3 user flows around 3 key tasks users are most likely to complete on the 
                        Department of Examinations website. The flows focus on accessing examination results, 
                        finding examination information, and accessing essential services such as certificates 
                        and support. Each flow maps the user’s journey from the homepage to the desired outcome, 
                        helping ensure that the redesigned structure provides a clear and straightforward path to 
                        complete each task.
                    </p>
                </div>

                <div className="cursor-pointer flex justify-center px-0 md:px-20">
                    <img
                        src={DoeUF}
                        alt="User Flow"
                        className="w-200 transition duration-500 hover:scale-102"
                    />
                </div>

                <div className='flex justify-center mt-10'>
                    <button
                        onClick={() =>
                            window.open(
                            "https://www.figma.com/proto/CFliGGGnuEH8FSPMQ2HAZF/User-Flows?node-id=4-2&t=njTCyaKhxm3SlTZY-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1"
                            )
                        }
                        className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">  
                        View All Flows
                    </button>
                </div>
            </div>
        </section>

        <hr className="my-8 border-white/20" />

        <section className="mt-12 animate-slide-up">
            <div className='mb-16'>
                <div className="mb-10">
                    <p className="text-sm uppercase text-blue-400 mb-2">Design & Prototype</p>
                    <h2 className="text-2xl md:text-3xl font-normal">Wireframe</h2>

                    <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                        I created low-fidelity wireframes to translate the research insights and information architecture 
                        into a clear page structure before moving into visual design. The wireframes helped me explore 
                        content placement, service prioritization, navigation, and section hierarchy while keeping the 
                        focus on usability rather than visual styling.
                    </p>
                </div>

                <div className="cursor-pointer justify-center px-0 md:px-20">
                    <img
                        src={Wireframe}
                        alt="Wireframe"
                        className="w-300 transition duration-500 hover:scale-102"
                    />

                    <div className='flex justify-center mt-10'>
                        <button
                            onClick={() =>
                                window.open(
                                    "https://www.figma.com/proto/x3j1tFZwd8466xI17ouHE3/Department-of-Examinations-Sri-Lanka-Website-Redesign?node-id=431-9915&t=BJkVDQmZ8pLtLT2S-1&scaling=min-zoom&content-scaling=fixed&page-id=431%3A9914"
                                )
                            }
                            className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">  
                            View Wireframe
                        </button>
                    </div>
                </div>
            </div>

            <div className='mb-16'>
                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-normal">UI Library Components</h2>

                    <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                        I created a reusable UI library to maintain consistency across the redesigned website and make 
                        the interface easier to scale. The library includes typography, colors, buttons, navigation 
                        elements, service cards, notice cards, content cards, and other interface components, with consistent 
                        spacing, states, and styling.
                    </p>
                </div>

                <div className="cursor-pointer justify-center px-0 md:px-20">
                    <img
                        src={UiComponent}
                        alt="UI Component Cover"
                        className="w-300 transition duration-500 hover:scale-102"
                    />

                    <div className='flex justify-center mt-10'>
                        <button
                            onClick={() =>
                                window.open(
                                "https://www.figma.com/proto/x3j1tFZwd8466xI17ouHE3/Department-of-Examinations-Sri-Lanka-Website-Redesign?node-id=547-575&t=EScV27xOkxVJnWsp-8&scaling=min-zoom&content-scaling=fixed&page-id=530%3A894&hide-ui=1"
                                )
                            }
                            className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">  
                            View Ui Library
                        </button>
                    </div>
                </div>  
            </div>

            <div className='mb-16'>
                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-normal">High Fidelity Frames</h2>

                    <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                        I transformed the approved wireframes into high-fidelity frames, applying the visual direction, 
                        UI library, typography, color system, and component styles. The final screens focus on creating 
                        a clear and trustworthy government experience while improving service discoverability, content 
                        hierarchy, and overall usability across different screen sizes.
                    </p>
                </div>

                <div className="cursor-pointer justify-center px-0 md:px-20">
                    <img
                        src={HiFi_Frame}
                        alt="High Fidelity Frame"
                        className="w-300 transition duration-500 hover:scale-102"
                    />

                    <div className='flex justify-center mt-10'>
                        <button
                            onClick={() =>
                                window.open(
                                "https://www.figma.com/proto/x3j1tFZwd8466xI17ouHE3/Department-of-Examinations-Sri-Lanka-Website-Redesign?node-id=170-56&t=cm6ZYYdnuQuw9w6W-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=170%3A56&hide-ui=1https://www.figma.com/proto/x3j1tFZwd8466xI17ouHE3/Department-of-Examinations-Sri-Lanka-Website-Redesign?node-id=170-56&t=59pnzQgKWNB0gmTZ-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=170%3A56&hide-ui=1"
                                )
                            }
                            className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">  
                            View Hi-Fi Frames
                        </button>
                    </div>
                </div>  
            </div>
        </section>

        <hr className="my-8 border-white/20" />

        <section className="mt-12 animate-slide-up">
            <div className='mb-16'>
                <div className="mb-10">
                    <p className="text-sm uppercase text-blue-400 mb-2">Test & Iterate</p>
                    <h2 className="text-2xl md:text-3xl font-normal">Design Evaluation</h2>

                    <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                        As this is a concept redesign rather than a commissioned production redesign, the evaluation was approached as a 
                        design review rather than claiming formal user testing.
                    </p>

                    <p className="text-gray-200 leading-relaxed mt-4">
                        The prototype was reviewed against the problems identified during the UX audit.
                    </p>
                </div>

                <div className="space-y-8 mb-10">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                        <h3 className="md:w-64 text-base uppercase text-blue-400 shrink-0">
                            Evaluation Questions :
                        </h3>

                        <ul className="list-disc space-y-2 pl-10 mb-3">
                            <li>Can users identify the main services quickly?</li>
                            <li>Are important notices visible?</li>
                            <li>Is the content hierarchy clear?</li>
                            <li>Can users distinguish services from informational content?</li>
                            <li>Are primary actions visually clear?</li>
                            <li>Does the layout remain understandable on smaller screens?</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-normal">Iteration & Improvements</h2>

                    <p className="text-gray-200 leading-relaxed mt-4 mb-3">
                        The redesign evolved from an information-heavy homepage concept toward a more task-oriented structure.
                    </p>

                </div>

                <div className="mb-12 bg-[#222831] p-12">
                    <div className="flex  flex-row gap-10">
                        <div className="justify-center text-center ">
                            <p className='font-bold text-xl text-blue-400 mb-8'>Before</p>
                            <img
                                src={OldLP}
                                alt="Old Landing Page"
                                className="w-200 transition duration-500 hover:scale-102"
                            />
                        </div>

                        <div className="justify-center text-center">
                            <p className='font-bold text-xl text-blue-400 mb-8'>After</p>
                            <img
                                src={NewLP}
                                alt="New Landing Page"
                                className="w-200 transition duration-500 hover:scale-102"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr className="my-8 border-white/20" />

        <section className="mt-12 animate-slide-up mb-12">
            <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-normal">Final Outcome</h2>

                <p className="text-gray-200 leading-relaxed mt-4 mb-6">
                    The redesigned Department of Examinations homepage transforms an information-heavy government website into a 
                    cleaner, more structured, and service-focused digital experience.
                </p>

                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <h3 className="md:w-64 text-base uppercase text-blue-400 shrink-0">
                        The redesign introduces :
                    </h3>

                    <ul className="list-disc space-y-2 pl-10 mb-3">
                        <li>Clearer information hierarchy</li>
                        <li>More discoverable services</li>
                        <li>Structured examination notices</li>
                        <li>Stronger visual consistency</li>
                        <li>Modern UI components</li>
                        <li>Improved content scanning</li>
                        <li>Dedicated support actions</li>
                        <li>Responsive layout considerations</li>
                        <li>Accessibility-focused design decisions</li>
                    </ul>
                </div>

                <p className="text-gray-200 leading-relaxed mt-4">
                    The final concept demonstrates how an established government website can be modernized without removing its essential information architecture.
                </p>
            </div>

            <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <h3 className="md:w-64 text-base uppercase text-blue-400 shrink-0">
                        Design Impact :
                    </h3>

                    <div>
                        <div className='pb-8'>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                The redesign shifts the experience from:
                            </p>

                            <div className="flex bg-[#222831]">
                                <div className='flex gap-4'>
                                    <p className='w-1 bg-blue-400'></p>
                                    <p className='px-6 py-4'>
                                        “Here is everything the department provides.”
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm md:text-base leading-relaxed mb-4">
                                to:
                            </p>

                            <div className="flex bg-[#222831]">
                                <div className='flex gap-4'>
                                    <p className='w-1 bg-blue-400'></p>
                                    <p className='px-6 py-4'>
                                        “Here is what you need, and here is how to get it.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>

        <section>
            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <h3 className="md:w-64 text-base uppercase text-blue-400 shrink-0">
                    Experience The Prototypes :
                </h3>

                <p className="text-sm md:text-base leading-relaxed mb-10">
                    Explore the interactive prototype to experience the end-to-end shopping journey from browsing products 
                    and viewing detailed product information to adding items to the cart and completing checkout. All designed 
                    to deliver a smooth, intuitive, and user-centered experience.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                    <div className="h-80">
                        <img
                            src={WebMockup}
                            alt="Web UI"
                            className="h-full mx-auto object-contain transition hover:scale-102"
                        />
                    </div>
                            
                    <div className='flex justify-center mt-10'>
                        <button
                            onClick={() =>
                                window.open(
                                "https://www.figma.com/proto/x3j1tFZwd8466xI17ouHE3/Department-of-Examinations-Sri-Lanka-Website-Redesign?node-id=511-2930&p=f&t=ajD4EG8f38jJTqch-8&scaling=scale-down&content-scaling=fixed&page-id=511%3A2929&starting-point-node-id=511%3A2930&hide-ui=1"
                                )
                            }
                            className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">    
                                Desktop Prototype
                        </button>
                    </div>
                </div>
        
                <div className="text-center">
                    <div className="h-80">
                        <img
                            src={MobileMockup}
                            alt="Mobile UI"
                            className="h-full mx-auto object-contain transition hover:scale-102"
                        />
                    </div>
                    <div className='flex justify-center mt-10'>
                        <button
                            onClick={() =>
                                window.open(
                                    "https://www.figma.com/proto/x3j1tFZwd8466xI17ouHE3/Department-of-Examinations-Sri-Lanka-Website-Redesign?node-id=520-4517&p=f&t=BUQKCM2zNDt00dHn-1&scaling=scale-down&content-scaling=fixed&page-id=520%3A4516"
                                )
                            }
                            className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">    
                                Mobile Prototype
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <hr className="my-8 border-white/20" />

        <section className="mt-12 animate-slide-up">
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-normal">Key Learnings</h2>
            </div>

            <p className="text-sm md:text-base leading-relaxed mb-10">
                This project helped me understand that redesigning a government website is fundamentally different from 
                designing a typical marketing website. The challenge is not simply to create a modern visual style.
            </p>

            <div className="space-y-8 mb-12 bg-[#222831] p-10 md:p-16">
                <div className="flex  flex-row gap-10">
                    <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                        Organizing complexity
                    </h3>
                    <p className="text-base leading-relaxed">
                        Government websites contain many services and information types. The designer's role is to make that complexity understandable.
                    </p>    
                </div>

                <hr className="my-8 border-white/20" />

                <div className="flex  flex-row gap-10">
                    <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                        Designing around tasks
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        Users often arrive with a specific goal. The interface should help them begin that task quickly.
                    </p>    
                </div>

                <hr className="my-8 border-white/20" />

                <div className="flex  flex-row gap-10">
                    <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                        Prioritizing information
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        Not every piece of content deserves equal visual attention.
                    </p>    
                </div>

                <hr className="my-8 border-white/20" />

                <div className="flex  flex-row gap-10">
                    <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                        Designing for everyone
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        A public-facing government service needs to consider accessibility, language, device sizes, and different levels of digital familiarity.
                    </p>    
                </div>

                <hr className="my-8 border-white/20" />

                <div className="flex  flex-row gap-10">
                    <h3 className="w-20 md:w-52 text-base font-semibold shrink-0">
                        Connecting UX and UI
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        Visual decisions should reinforce the information architecture rather than simply decorate it.
                    </p>    
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <h3 className="md:w-64 text-base uppercase text-blue-400 shrink-0">
                    What I'm Most Proud Of :
                </h3>

                <p className="text-sm md:text-base leading-relaxed mb-10">
                    I'm most proud of transforming a complex set of examination services and information into a homepage 
                    structure centered around what users need to accomplish. The redesign is not intended to replace the 
                    complete Department of Examinations website. This project allowed me to move beyond visual redesign and 
                    think more deeply about how users find, understand, and act on information.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <h3 className="md:w-64 text-base uppercase text-blue-400 shrink-0">
                    My Hope :
                </h3>

                <p className="text-sm md:text-base leading-relaxed mb-10">
                    I hope to see this redesign concept eventually replace instead the existing interface as a clearer, more 
                    accessible and user-centric platform into a real digital experience. My goal is to make finding essential 
                    exam services easier and help users complete their tasks with more confidence and less effort.
                </p>
            </div>
        </section>

    </div>
  )
}
