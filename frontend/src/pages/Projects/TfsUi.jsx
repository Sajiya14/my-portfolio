import React, { useState } from 'react'
import Thumbnail from "../../assets/Thumbnail/TFS Thumbnail.png";
import DesignProcessDiagram from "../../assets/diagrams/UNI-T/Design Process.png";
import CompetitorAnalysis from "../../assets/diagrams/UNI-T/Competitor Analysis.png";
import FlowChart from "../../assets/diagrams/UNI-T/UNI-T Fashion Flow Chart.png";
import FlowChartLegend from "../../assets/diagrams/UNI-T/UNI-T Flow Chart Legend.png";
import ProjectGoal from "../../assets/diagrams/UNI-T/project goal.jpg";
import SiteMap from "../../assets/diagrams/UNI-T/uni-t-site-map.png";
import Personas from './Personas/Uni-T Persona';
import { FaCircleArrowUp } from "react-icons/fa6";
import WebPrototype from "../../assets/diagrams/UNI-T/TFS Web Prototype.png";
import WebWireframe from "../../assets/diagrams/UNI-T/TFS Web Wireframe.png";
import MobilePrototype from "../../assets/diagrams/UNI-T/TFS Mobile Prototype.png";
import UiLibrary from "../../assets/diagrams/RIT/Ui Library Cover.png"; 
import Web from '../../assets/diagrams/RIT/web.png'; 
import Mobile from '../../assets/diagrams/RIT/mobile.png';
import RIT_Iteration from './Iterations/RIT-Iteration'; 

export default function TfsUi() {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16 font-ubuntu-sans animate-fade">
                        {/* HERO */}
        <section className="animate-slide-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
                The Fashion Store (TFS) E-commerce Web App UI Design 
            </h1>

            <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-blue-500">
                UX Research | UI Design | UX Design | Usability Test
            </p>

            <div className="inline-block mt-6 px-6 py-2 rounded-full border border-white/20 bg-white/10 text-sm">
                Ecommerce Website
            </div>

            <img
                src={Thumbnail}
                alt="The Fashion Store"
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
                    The TFS (The Fashion Store) project focused on designing a modern and user-friendly 
                    e-commerce website concept for a fashion retail brand. The goal was to create a seamless 
                    online shopping experience that helps customers easily discover products, make confident 
                    purchasing decisions, and complete checkout effortlessly.

                </p>

                <p className="text-gray-200 leading-relaxed">
                    This project involved researching user shopping behaviors, analyzing competitors, 
                    and designing a responsive shopping experience with intuitive navigation, product 
                    filtering, product details, shopping cart, checkout, and account management features. 
                    The final design emphasizes usability, visual appeal, and customer trust through a 
                    clean, fashion-focused interface.
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
                    TFS did not have an online shopping platform, making it difficult for customers 
                    to browse products and purchase digitally. The challenge was to design an intuitive 
                    e-commerce experience that simplifies product discovery, builds customer trust, and 
                    provides a smooth shopping journey across all devices.
                </p>
            </div>
        </section>

                        {/* SOLUTION */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 animate-slide-up">
            <div className="lg:w-72">
                <h2 className="text-2xl sm:text-3xl">Solution</h2>
            </div>

            <div className="flex-1">
                <p className="text-gray-200 leading-relaxed mb-5">
                    A modern and responsive e-commerce interface was designed with a clear product 
                    hierarchy, intuitive navigation, advanced filtering, and a streamlined checkout 
                    experience. The design focuses on usability, engaging visuals, and a customer-centered 
                    shopping journey that encourages confident purchasing and strengthens the brand's digital presence.

                </p>

                <p className="text-gray-200 leading-relaxed">
                    This keeps the same professional structure as your Royal IT case study while being 
                    specific to your e-commerce project. It will also make both case studies feel consistent in your portfolio.
                </p>
            </div>
        </section>

        <hr className="my-14 border-white/20" />

                    {/* PROJECT DETAILS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-slide-up">
            <div>
                <p className="text-blue-500 uppercase text-sm mb-3">Time Duration</p>
                <p>6 Weeks</p>
            </div>

            <div>
                <p className="text-blue-500 uppercase text-sm mb-3">My Role</p>
                <p>UX/UI Designer</p>
            </div>

            <div>
                <p className="text-blue-500 uppercase text-sm mb-3">Tools</p>
                <p>Figma, FigJam, Draw.io, Canva</p>
                <p>Claude AI, ChatGPT AI, Gemini AI</p>
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
                    <div className='mb-4 uppercase text-[#2F2FE4]'>Competitor Analysis</div>
                    <p className="text-sm md:text-base leading-relaxed">
                        A competitor analysis was conducted to understand how existing fashion 
                        retailers in Sri Lanka design their online shopping experiences and 
                        where opportunities for improvement exist. Leading brands such as 
                        NoLimit, Kandy, Cool Planet, Fashion Bug, and House of Fashion were 
                        evaluated based on their user experience, feature set, and overall 
                        design quality.
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
                        User interviews were conducted to understand how people in Sri Lanka 
                        shop for fashion online and identify their key challenges. 
                        Participants shared their experiences, preferences, and frustrations 
                        when using existing eCommerce platforms.
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
                "What factors influence your purchase decision?",
                "What frustrates you about current fashion websites?",
                "What features do you expect from a good shopping website?",
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
                    title: "Price is the main factor",
                    text: `"The user is highly price-sensitive and prefers affordable options. 
                            Discounts, offers, and visible pricing strongly influence their 
                            decision-making process, making them more likely to complete a purchase."`,
                    },
                    {
                    title: "Checkout feels too long",
                    text: `"A long or complicated checkout process creates frustration and increases 
                            the chances of users abandoning their cart. Users prefer a simple, fast, 
                            and step-by-step checkout experience with minimal input."`,
                    },
                    {
                    title: "Needs better filtering",
                    text: `"The user expects efficient filtering options to quickly narrow down 
                            products based on price, category, and preferences. Without proper 
                            filters, browsing becomes time-consuming and overwhelming."`,
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
                        Three user personas were created to represent key customer segments, including a professional, 
                        a family shopper, and a trend-driven young user. These personas helped guide design decisions by 
                        highlighting different needs such as convenience, affordability, and trust.
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
                        How might we create a seamless and trustworthy shopping experience that 
                        simplifies checkout, provides clear product and sizing information, and 
                        helps users make confident purchase decisions?
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

                {/* USER FLOW IMAGES */}
            <div className="space-y-10 mb-16">
                <div className="flex justify-center">
                    <img
                        src={FlowChartLegend}
                        alt="User Flow Legend"
                        className="w-full md:w-96 object-contain"
                    />
                </div>

                <div className="cursor-pointer flex justify-center">
                    <img
                        src={FlowChart}
                        alt="User Flow"
                        onClick={() => setPreviewImage(FlowChart)}
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
                        The site map was designed to establish a logical information architecture for the eCommerce 
                        platform, ensuring users can effortlessly browse categories, find products, and move through 
                        the shopping process from discovery to checkout.
                    </p>
                </div>
            </div>

            <div className="cursor-pointer flex justify-center px-0 md:px-20">
                <img
                    src={SiteMap}
                    alt="Site Map"
                    className="w-200 transition duration-500 hover:scale-102"
                />
            </div>

            <div className='flex justify-center mt-10'>
                    <button
                        onClick={() =>
                            window.open(
                            "https://www.figma.com/proto/lMBUhIH2M0lN1dhMCfpP8C/Site-Maps?node-id=10-390&t=9NbeJnKjI3wtMORr-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"
                            )
                        }
                        className="px-10 py-4 border  hover:bg-gray-800 transition duration-300 cursor-pointer shadow-white shadow-md bg-black text-white border-white hover:text-white">  
                        View Site Map
                    </button>
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
                        I began with wireframe to explore multiple layouts, navigation structures, and shopping flows, 
                        ensuring users could easily discover products and complete their purchases.
                    </p>
                </div>
            </div>

            <div className="cursor-pointer flex justify-center px-0 md:px-20">
                <img
                    src={WebWireframe}
                    alt="Wireframe"
                    onClick={() => setPreviewImage(WebWireframe)}
                    className="w-full transition duration-500 hover:scale-102"
                />
            </div>

            {/* FIGMA BUTTON */}
            <div className='flex justify-center mt-10'>
                <button
                    onClick={() =>
                        window.open(
                        "https://www.figma.com/proto/zFEo9mzrIPEPfk0EIuXvLu/TFS-E-Commerce-Site-Prototype?node-id=3750-9109&t=vbAWlreEBmvidDti-1&scaling=min-zoom&content-scaling=fixed&page-id=3160%3A2258"
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
                        II designed a scalable UI component library to create a consistent visual language and streamline 
                        the design process across all screens of the eCommerce platform.
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
                        I translated the wireframe into high-fidelity designs, refining typography, colors, imagery, 
                        and interactions to deliver a polished and engaging online shopping experience.
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
                            "https://www.figma.com/proto/zFEo9mzrIPEPfk0EIuXvLu/TFS-E-Commerce-Site-Prototype?node-id=2070-746&t=g6zQ3zBIqQ9vfCg9-1&scaling=min-zoom&content-scaling=fixed&page-id=1969%3A2479"
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
                            "https://www.figma.com/proto/zFEo9mzrIPEPfk0EIuXvLu/TFS-E-Commerce-Site-Prototype?node-id=3225-2395&t=4J20SnVGmFoeqdVx-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3225%3A2395"
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
                    To evaluate the effectiveness of the fashion eCommerce website, I conducted moderated usability testing sessions 
                    with five participants who matched the target audience, including university students, young professionals, and 
                    frequent online shoppers. The objective was to assess how easily users could discover products, navigate categories, 
                    evaluate product details, and complete the purchasing journey with confidence.
                </p>
            </div>

                    {/* TEST DETAILS */}
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        Scenario :
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        "You are looking for a new outfit for an upcoming event. Visit the fashion eCommerce website, browse products, 
                        find an item that matches your style, review the product information, add it to your cart, and proceed through the checkout process."
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        Participants Were Asked To :
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                        <li>Browse products by category.</li>
                        <li>Find a specific clothing item using search or filters.</li>
                        <li>Review product details, including images, sizes, colors, and pricing.</li>
                        <li>Add a product to the shopping cart.</li>
                        <li>Complete the checkout process using the provided checkout flow.</li>
                    </ul>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        Results :
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        All participants successfully completed the primary shopping tasks without major usability issues. Users were 
                        able to browse products, apply filters, review product information, and proceed through checkout with minimal 
                        effort. Participants particularly appreciated the clean interface, high-quality product imagery, intuitive navigation, 
                        and streamlined checkout experience, which helped them make purchasing decisions more confidently.
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
                    "Browsing products felt really easy, and I liked how quickly I could find clothes that matched my style. The filters saved me a lot of time",
                    "The product pages were clear and informative. The size options, multiple images, and product details helped me feel confident before adding items to my cart.",
                    "The checkout process was simple and straightforward. I didn't feel overwhelmed, and everything I needed was easy to find. It would be even better if there were customer reviews and estimated delivery information on the product page.",
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
                    <li>Users found it easy to browse products and navigate between categories.</li>
                    <li>Search and filtering features helped users locate products more efficiently.</li>
                    <li>High-quality product images and clear product information increased purchase confidence.</li>
                    <li>The shopping cart and checkout flow were intuitive and required minimal effort.</li>
                    <li>Users suggested adding customer reviews, product ratings, and estimated delivery information to further improve trust and decision-making.</li>
                </ul>
            </div>

                    {/* ITERATION */}
            <div className="mt-16">
                <h2 className="text-2xl md:text-3xl font-normal mb-5">Iteration</h2>
                <p className="text-sm md:text-base leading-relaxed mb-8">
                    Following usability testing, I analyzed participant feedback and interaction patterns to identify
                    friction points within the user journey. These findings informed several design iterations focused 
                    on improving navigation, content clarity and trust-building elements.   
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
                Explore the interactive prototype to experience the end-to-end shopping journey from browsing products 
                and viewing detailed product information to adding items to the cart and completing checkout. All designed 
                to deliver a smooth, intuitive, and user-centered experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                    <div className="h-80">
                        <img
                        src={Web}
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
                        src={Mobile}
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
                This project demonstrates how thoughtful UX design can simplify the online shopping experience while balancing 
                both user needs and business objectives. By combining user research, competitor analysis, information architecture, 
                wireframe, visual design, and usability testing, I designed an experience that helps customers discover products 
                more easily, make confident purchase decisions, and complete checkout with minimal friction. Although developed as 
                a concept, the project highlights how user-centered design can improve customer satisfaction, increase conversions, 
                and strengthen long-term brand loyalty.
            </p>

            <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        What I Learned :
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                        This project reinforced the importance of designing around the entire customer shopping journey rather than 
                        focusing only on visual aesthetics. I learned how every stage from product discovery and browsing to product 
                        evaluation and checkout contributes to the overall user experience. User testing also demonstrated the value 
                        of validating design decisions with real users, revealing opportunities to improve navigation, product information, 
                        and the purchasing flow that may not have been obvious during the design process.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        Next Steps :
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed">
                        While this project was created as a concept, the next step is to evolve it into a fully functional eCommerce platform. 
                        Future improvements will focus on implementing the design, conducting larger-scale usability testing, and continuously 
                        refining the experience based on customer feedback and analytics. Additional features such as product reviews, personalized 
                        recommendations, wishlists, delivery tracking, and loyalty rewards could further enhance user engagement and encourage repeat purchases.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-5 md:gap-16">
                    <h3 className="md:w-64 text-sm uppercase text-[#2F2FE4] shrink-0">
                        What I’m Most Proud Of :
                    </h3>
                    
                    <p className="text-sm md:text-base leading-relaxed">
                        I'm most proud of creating a complete end-to-end UX case study that goes beyond designing attractive interfaces to solving real 
                        user problems. Every design decision from simplifying product discovery and improving product detail pages to streamlining the 
                        checkout experience was guided by user research and validated through usability testing. Watching the concept evolve into a cohesive 
                        shopping experience that balances usability and business goals is the achievement I'm most proud of.
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