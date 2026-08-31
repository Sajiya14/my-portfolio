import React, { useState } from "react";

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
import { FaCircleArrowUp } from "react-icons/fa6"; 
import WebMockup from '../../assets/diagrams/RIT/RIT WebMockup.png'; 
import MobileMockup from '../../assets/diagrams/RIT/RIT MobileMockup.png';

export default function RoyalItUI() {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16 font-ubuntu-sans animate-fade">
                        {/* HERO */}
        <section className="animate-slide-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                Royal IT Company Portfolio UI Design
            </h1>

            <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-blue-500">
                UX Research | UI Design | UX Design | Usability Test
            </p>

            <div className="inline-block mt-6 px-6 py-2 rounded-full border border-white/20 bg-white/10 text-sm">
                Portfolio Website
            </div>

            <img
                src={RitThumbnail}
                alt="Royal IT"
                className="mt-10 w-full rounded-xl object-cover transition-all duration-500 hover:scale-[1.02]"
            />
        </section>

                        {/* COMMON CONTENT SECTION */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 animate-slide-up">
            <div className="lg:w-72 shrink-0">
                <h2 className="text-2xl sm:text-3xl font-normal">
                    Project Overview
                </h2>
            </div>

            <div className="flex-1">
                <p className="text-gray-200 leading-relaxed mb-5">
                    The Royal IT (RIT) project focused on designing a modern and professional
                    company portfolio website that clearly communicates the brand’s services
                    and value. The goal was to create a strong digital presence that improves
                    user experience, builds trust, and helps generate more client inquiries.
                </p>

                <p className="text-gray-200 leading-relaxed">
                    This project involved understanding the target audience, analyzing
                    existing design issues, and creating a clean, structured layout with a
                    premium black and gold visual style.
                </p>
            </div>
        </section>

                        {/* CHALLENGE */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 animate-slide-up">
            <div className="lg:w-72">
                <h2 className="text-2xl sm:text-3xl">Challenge</h2>
            </div>

            <div className="flex-1">
                <p className="text-gray-200 leading-relaxed">
                    Royal IT did not have a strong online presence. The website design was
                    unclear, with poor layout and weak structure, making it hard for users to
                    understand the services.
                </p>
            </div>
        </section>

                        {/* SOLUTION */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 animate-slide-up">
            <div className="lg:w-72">
                <h2 className="text-2xl sm:text-3xl">Solution</h2>
            </div>

            <div className="flex-1">
                <p className="text-gray-200 leading-relaxed">
                    A modern and clean website was designed to improve clarity and user
                    experience. The new layout uses clear structure, better typography,
                    simple navigation, strong visuals and clear call-to-actions.
                </p>
            </div>
        </section>

        <hr className="my-14 border-white/20" />

                    {/* PROJECT DETAILS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-slide-up">
            <div>
                <p className="text-blue-500 uppercase text-sm mb-3">Time Duration</p>
                <p>3/4 Weeks</p>
            </div>

            <div>
                <p className="text-blue-500 uppercase text-sm mb-3">My Role</p>
                <p>UX/UI Designer</p>
            </div>

            <div>
                <p className="text-blue-500 uppercase text-sm mb-3">Tools</p>
                <p>Figma, FigJam, Draw.io</p>
                <p>Claude AI, ChatGPT AI</p>
            </div>
        </section>

        <hr className="my-14 border-white/20" />

            {/* DESIGN PROCESS */}
        <section className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl mb-8">Design Process</h2>

            <div className="flex justify-center cursor-pointer px-0 md:px-20">
                <img
                    src={DesignProcessDiagram}
                    alt="Design Process"
                    onClick={() => setPreviewImage(DesignProcessDiagram)}
                    className="w-full cursor-pointer rounded-xl transition duration-500 hover:scale-[1.02]"
                />
            </div>
        </section>

        {/* IMAGE PREVIEW MODAL */}
        {previewImage && (
            <div
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5"
            >
            <img
                src={previewImage}
                alt="Preview"
                className="max-w-full max-h-[90vh] rounded-xl animate-zoom"
            />
            </div>
        )}

        {/* RESEARCH */}
        <section className="mt-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
                <div className="md:w-64 shrink-0">
                    <p className="text-sm uppercase text-[#2F2FE4]">Empathize</p>
                    <h2 className="text-2xl md:text-3xl font-normal">Research</h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        I analyzed four local and industry-leading Computer Services &
                        Repairs companies, identifying strengths, weaknesses, and
                        opportunities for design inspiration.
                    </p>
                </div>
            </div>

                    {/* COMPETITOR ANALYSIS IMAGE */}
            <div className="flex justify-center cursor-pointer px-0 md:px-20">
                <img
                    src={CompetitorAnalysis}
                    alt="Competitor Analysis"
                    onClick={() => setPreviewImage(CompetitorAnalysis)}
                    className="w-200 rounded-2xl transition-transform duration-500 hover:scale-102"
                />
            </div>
        </section>

        {/* USER INTERVIEW */}
        <section className="mt-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
                <div className="md:w-64 shrink-0" />

                <div className="max-w-3xl">
                    <p className="uppercase text-sm text-[#2F2FE4] mb-3">
                        User Interviews
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                        User interviews were conducted to understand how businesses and
                        potential clients find IT service providers.
                    <br /><br />
                        Participants shared their expectations, decision-making factors,
                        and frustrations with existing company websites.
                    </p>
                </div>
            </div>
        </section>

                {/* KEY QUESTIONS */}
        <section className="mb-16">
            <h2 className="text-2xl md:text-4xl font-normal mb-8">
                Key Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                "How do you choose an IT service provider?",
                "What problems do you face when visiting IT company websites?",
                "What makes you trust an IT company?",
            ].map((question, index) => (
                <div
                key={index}
                className="min-h-40 p-8 bg-gray-100 text-black text-xl md:text-xl font-poppins transition duration-300 hover:-translate-y-2 hover:shadow-xl flex items-center"
                >
                {question}
                </div>
            ))}
            </div>
        </section>

        {/* ANSWERS */}
        <section className="pb-12">
            <h2 className="text-2xl md:text-4xl font-normal mb-10">
                These are answers I got:
            </h2>

            <div className="space-y-10">
                {[
                    {
                    title: "Check Website",
                    text: `"I usually check their website first. If it looks professional and clearly explains services, I feel more confident to contact them."`,
                    },
                    {
                    title: "Confusing and hard to understand",
                    text: `"Most websites are confusing and use too much technical language. It’s hard to understand what they actually offer."`,
                    },
                    {
                    title: "Client reviews and Past work",
                    text: `"Client reviews, past work, and a clean, professional design make me trust the company more."`,
                    },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-10">
                        <div className="w-full md:w-64 min-h-28 p-6 bg-gray-100 text-black text-xl font-poppins flex items-center">
                            {item.title}
                        </div>

                        <p className="flex-1 text-sm md:text-lg leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>

        <div className="w-full h-px bg-gray-600 mb-16" />

                {/* DEFINE */}
        <section className="animate-fade-up">
            <p className="uppercase text-sm text-[#2F2FE4] mb-3">Define</p>

                    {/* USER PERSONA */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
                <div className="md:w-64 shrink-0">
                <h2 className="text-2xl md:text-3xl font-normal">User Persona</h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        To make my research findings more tangible, I created a user persona that
                        provided a holistic view of the target user and helped shape my design
                        decisions.
                    </p>
                </div>
            </div>

            <div className="mb-16">
                <Personas />
            </div>
        </section>

        {/* HOW MIGHT WE */}
        <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-64 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-normal">How Might We</h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        How might we design a modern and professional digital presence for Royal IT
                        that clearly communicates its services, builds trust with potential
                        clients, and makes it easy for users to explore and submit inquiries?
                    </p>
                </div>
            </div>
        </section>

        <div className="w-full h-px bg-gray-600 my-16" />

        {/* IDEATION */}
        <section>
            <p className="uppercase text-sm text-[#2F2FE4] mb-3">Ideation</p>

            {/* PROJECT GOALS */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
                <div className="md:w-64 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-normal">Project Goals</h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        Before finding solutions, I mapped out business goals, user goals, and
                        project goals to understand the direction of the product.
                    </p>
                </div>
            </div>

            <div className="cursor-pointer flex justify-center px-0 md:px-20 mb-16">
                <img
                src={ProjectGoal}
                alt="Project Goals"
                onClick={() => setPreviewImage(ProjectGoal)}
                className="w-200 rounded-xl transition duration-500 hover:scale-102"
                />
            </div>

                    {/* USER FLOW */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
                <div className="md:w-64 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-normal">User Flow</h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        The user flow was designed to guide users from landing on the homepage to
                        completing a contact inquiry.
                        <br /><br />
                        It focuses on helping users understand services, build trust, and take
                        action with clear call-to-actions.
                    </p>
                </div>
            </div>

                {/* USER FLOW IMAGES */}
            <div className="space-y-10 mb-16">
                <div className="flex justify-center">
                    <img
                        src={RITUserFlowLegend}
                        alt="User Flow Legend"
                        className="w-full md:w-96 object-contain"
                    />
                </div>

                <div className="cursor-pointer flex justify-center">
                    <img
                        src={RITUserFlow}
                        alt="User Flow"
                        onClick={() => setPreviewImage(RITUserFlow)}
                        className="w-200 transition duration-500 hover:scale-102"
                    />
                </div>
            </div>

                {/* SITE MAP */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12">
                <div className="md:w-64 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-normal">Site Map</h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        The site map was created to organize the website structure clearly.
                        <br /><br />
                        It groups pages such as Home, About, Services, and Contact into an
                        easy-to-navigate hierarchy.
                    </p>
                </div>
            </div>

            <div className="cursor-pointer flex justify-center px-0 md:px-20">
                <img
                    src={RITSiteMap}
                    alt="Site Map"
                    onClick={() => setPreviewImage(RITSiteMap)}
                    className="w-200 transition duration-500 hover:scale-102"
                />
            </div>
        </section>

        <div className="w-full h-px bg-gray-600 my-16" />

            {/* DESIGN SECTION */}
        <section className="animate-fade-up">
            <p className="uppercase text-sm text-[#2F2FE4] mb-4">Design</p>

                {/* WIREFRAME */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
                <div className="md:w-64 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-normal">Wireframe</h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        I started with wireframes to experiment with multiple layout directions
                        and navigation patterns.
                        <br /><br />
                        This helped identify the most intuitive and effective user experience for
                        the Royal IT website.
                    </p>
                </div>
            </div>

            <div className="cursor-pointer flex justify-center px-0 md:px-20">
                <img
                    src={Wireframe}
                    alt="Wireframe"
                    onClick={() => setPreviewImage(Wireframe)}
                    className="w-full transition duration-500 hover:scale-102"
                />
            </div>

            {/* FIGMA BUTTON */}
            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                        "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1216-6690&t=mq41DBOaqBByWKFN-8&scaling=scale-down-width&content-scaling=fixed&page-id=776%3A796&hide-ui=1"
                        )
                    }
                    className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">    
                        View Full Wireframe
                </button>
            </div>

                {/* UI LIBRARY */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16 mb-10">
                <div className="md:w-64 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-normal">
                        UI Library Components
                    </h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        I created reusable UI components to maintain consistency, improve
                        scalability, and ensure a polished design system throughout the website.
                    </p>
                </div>
            </div>

            <div className="cursor-pointer flex justify-center px-0 md:px-20">
                <img
                    src={UiLibrary}
                    alt="UI Library"
                    onClick={() => setPreviewImage(UiLibrary)}
                    className="w-full transition duration-500 hover:scale-102"
                />
            </div>

            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                        "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1567-400&t=EWTZ3iW3L3S0WjP8-8&scaling=scale-down-width&content-scaling=fixed&page-id=1567%3A399&hide-ui=1"
                        )
                    }
                    className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">    
                        View Full UI Library
                </button>
            </div>

                {/* HIGH FIDELITY */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16 mb-10">
                <div className="md:w-64 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-normal">
                        High Fidelity Frames
                    </h2>
                </div>

                <div className="max-w-3xl">
                    <p className="text-sm md:text-base leading-relaxed">
                        High-fidelity frames were created to refine the visual design and
                        provide a realistic representation of the final Royal IT website
                        experience.
                    </p>
                </div>
            </div>

                    {/* MOBILE PROTOTYPE */}

            <div className="cursor-pointer flex justify-center px-0 md:px-20">
                <img
                    src={MobilePrototype}
                    alt="Mobile Prototype"
                    onClick={() => setPreviewImage(MobilePrototype)}
                    className="w-full transition duration-500 hover:scale-102"
                />
            </div>

            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                        "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1471-2658&p=f&t=Rfv8zWfgEhrzoCdP-8&scaling=min-zoom&content-scaling=fixed&page-id=1466%3A1002&hide-ui=1"
                        )
                    }
                    className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">    
                        View Full Mobile Prototype
                </button>
            </div>

                    {/* WEB PROTOTYPE */}
            <div className="cursor-pointer flex justify-center px-0 md:px-20 mt-10">
                <img
                    src={WebPrototype}
                    alt="Web Prototype"
                    onClick={() => setPreviewImage(WebPrototype)}
                    className="w-full transition duration-500 hover:scale-102"
                />
            </div>

            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                        "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1216-3814&p=f&t=s5XnCk2aiVZ0rmno-8&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1216%3A3814&hide-ui=1"
                        )
                    }
                    className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">    
                        View Full Web Prototype
                </button>
            </div>
        </section>

        <div className="w-full h-px bg-gray-600 my-16" />

                {/* TESTING & ITERATION */}
        <section className="animate-fade-up">
            <p className="uppercase text-sm text-[#2F2FE4] mb-4">Testing & Iteration</p>

                {/* USABILITY TESTING */}
            <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-normal mb-5">Usability Testing</h2>
                <p className="text-sm md:text-base leading-relaxed">
                    To evaluate the effectiveness of the Royal IT website design, I conducted
                    moderated usability testing sessions with five participants who matched the
                    target audience.
                    <br /><br />
                    The objective was to understand how easily users could navigate the website,
                    understand services, and complete important tasks.
                </p>
            </div>

                    {/* TEST DETAILS */}
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        Scenario :
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        "Your business is looking for a reliable IT service provider. Visit the
                        Royal IT website, explore available services, learn about the company,
                        and decide whether you would contact them."
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        Participants Were Asked To :
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>Identify services offered by Royal IT.</li>
                        <li>Learn more about the company.</li>
                        <li>Compare Royal IT with competitors.</li>
                        <li>Locate contact information.</li>
                    </ul>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        Results :
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        All participants successfully completed assigned tasks with minimal
                        friction. Users appreciated the clear service presentation, professional
                        visual design, and straightforward navigation.
                    </p>
                </div>
            </div>

                    {/* USER FEEDBACK */}
            <div className="mt-16">
                <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                    User Feedback :
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8">
                {[
                    "The website was easy to navigate and quickly explained what services Royal IT offers.",
                    "Information was organized clearly. The service section helped me understand the company.",
                    "The black and gold branding created a professional and trustworthy feeling.",
                ].map((feedback, index) => (
                    <div
                    key={index}
                    className="p-6 rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2"
                    >
                    <div className='text-8xl font-jacques-francois-shadow h-12 w-12 mb-3'>“</div>
                    <p className="text-sm leading-relaxed">{feedback}</p>
                    </div>
                ))}
                </div>
            </div>

                {/* KEY INSIGHTS */}
            <div className="flex flex-col md:flex-row gap-5 mt-16 md:gap-16">
                <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                    Key Insights
                </h3>

                <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">
                    <li>Users found the website easy to understand.</li>
                    <li>The black and gold visual identity contributed to a strong sense of professionalism and trust.</li>
                    <li>Services were clear and easy to understand.</li>
                    <li>Contact information was easy to find and access.</li>
                </ul>
            </div>

                    {/* ITERATION */}
            <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-normal mb-5">Iteration</h2>
                <p className="text-sm md:text-base leading-relaxed mb-8">
                    Following usability testing, I analyzed participant feedback and improved
                    navigation, content clarity, and trust-building elements.
                </p>

                <RIT_Iteration />
            </div>
        </section>

        <div className="w-full h-px bg-gray-600 my-16" />

                        {/* FINAL PROTOTYPE EXPERIENCE */}
        <section>
            <h2 className="text-2xl md:text-3xl font-normal text-[#2F2FE4] mb-5">
                Experience The Prototypes
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-10">
                Explore the interactive prototype and experience the final solution
                designed for Royal IT.
            </p>

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
                                "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1654-610&p=f&t=9ovLEmbhmTJgzyIe-8&scaling=scale-down&content-scaling=fixed&page-id=1654%3A609&starting-point-node-id=1654%3A610&hide-ui=1"
                                )
                            }
                            className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">    
                                Web Prototype
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
                                "https://www.figma.com/proto/mxzqsp4JU2diT6xcuO7LWM/Royal-IT-Web-Site?node-id=1661-3824&p=f&t=0ldVczTQbDFtsx6B-8&scaling=scale-down&content-scaling=fixed&page-id=1661%3A2715&starting-point-node-id=1661%3A3824&hide-ui=1"
                                )
                            }
                            className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">    
                                Mobile Prototype
                            </button>
                        </div>
                </div>
            </div>
        </section>

        <div className="w-full h-px bg-gray-600 my-16" />

                {/* FINAL THOUGHTS */}
        <section>
            <p className="uppercase text-sm text-[#2F2FE4] mb-5">Final Thoughts</p>
            <h2 className="text-2xl md:text-3xl mb-6">Key Takeaways</h2>

            <p className="text-sm md:text-base leading-relaxed mb-10">
                While this project began as a concept, its long-term potential extends beyond 
                design, creating opportunities to improve customer engagement, strengthen brand 
                trust, and generate meaningful business impact.
            </p>

            <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        What I Learned :
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        This project reinforced the importance of building trust through design, 
                        especially for service-based businesses where credibility plays a major 
                        role in decision-making. Throughout the process, I learned how user 
                        research, competitor analysis, information architecture, and usability 
                        testing can work together to create a more intuitive and effective experience. 
                        It also highlighted the value of validating assumptions with users rather than 
                        relying solely on design intuition.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        Next Steps :
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed">
                        While this project was developed as a concept, the long-term vision is 
                        to fully develop and launch the Royal IT website as a live product and 
                        further refine the user experience by Getting feedback. Future efforts 
                        will focus on implementation, real-world user testing, and continuous 
                        improvements to ensure the platform delivers value to both the business 
                        and its customers.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        What I’m Most Proud Of :
                    </h3>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                        I'm most proud of creating a complete end-to-end case study that 
                        demonstrates not only the visual design of the website but also the 
                        thinking behind every design decision. From identifying user pain 
                        points to refining the experience through usability testing, each step
                        was driven by user needs and business goals. Seeing the concept evolve 
                        into a polished, professional solution that positions Royal IT as a 
                        trustworthy technology partner is the achievement I'm most proud of.
                    </p>
                </div>
            </div>
        </section>

                {/* SCROLL TOP */}
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 bg-white text-black rounded-full shadow-lg transition hover:scale-110 cursor-pointer"
        >
            <FaCircleArrowUp className="w-10 h-10 p-1" />
        </button>
    </div>
  );
}