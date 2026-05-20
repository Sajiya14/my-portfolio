import React, { useState } from 'react'
import UniTUiThumbnail from "../../assets/Thumbnail/UniTUiThumbnail.png";
import DesignProcessDiagram from "../../assets/diagrams/Design Process.png";
import CompetitorAnalysis from "../../assets/diagrams/Competitor Analysis.png";
import OrderCheckout from "../../assets/diagrams/Order Checkout Flow.png";
import ProjectGoal from "../../assets/diagrams/project goal.jpg";
import Persona1Image from "../../assets/persona/persona1.jpg";
import Persona2Image from "../../assets/persona/persona2.jpg";
import Persona3Image from "../../assets/persona/persona3.jpg";


const UniTUi = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

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

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10'>
            <div className='flex w-300'>
                <h1 className='text-4xl font-normal mb-3'>Discover</h1>   
            </div>
            <div className='flex'>
                <div className='flex-col'>
                    <div className='mb-4 uppercase text-[#2F2FE4]'>Competitor Analysis</div>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
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

        <div className='w-full bg-black dark:bg-white h-px mb-15'></div>

        <div className='mb-10'>
            <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-5'>
                <div className='flex w-230'>
                    <h1 className='text-4xl font-normal mb-3'>User Persona</h1>   
                </div>
                <div className='flex'>
                    <div className='flex-col'>
                        <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
                            Three user personas were created to represent key customer segments, including a 
                            professional, a family shopper, and a trend-driven young user. These personas 
                            helped guide design decisions by highlighting different needs such as convenience, 
                            affordability, and trust.
                        </p>
                    </div>   
                </div>
            </div>
            <div className="flex gap-10 mb-10 items-center justify-center">
                {["Persona 1", "Persona 2", "Persona 3"].map((tab, i) => (
                <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2 rounded-full border transition cursor-pointer ${
                    activeTab === i
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>

            {activeTab === 0 && <Persona1 />}
            {activeTab === 1 && <Persona2 />}
            {activeTab === 2 && <Persona3 />}
        </div>

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-10'>
            <div className='flex flex-col w-175'>
                    <div className='mb-2 uppercase text-[#2F2FE4]'>HMW</div>
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

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-10'>
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

        <div className="cursor-pointer mb-15">
            <img
                src={ProjectGoal}
                alt="Project Goal"
                onClick={() => setPreviewImage(ProjectGoal)}
            />
        </div>

        <div className='flex flex-row gap-10 font-ubuntu-sans mt-10 mb-10'>
            <div className='flex w-220'>
                <h1 className='text-4xl font-normal mb-3'>User Flow</h1>   
            </div>
            <div className='flex'>
                <div className='flex-col'>
                    <p className='text-[18px] text-gray-800 mt-1 dark:text-white mb-8'>
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

        <div className="cursor-pointer items-center justify-center p-20 h-fit w-fit ">
            <img
                src={OrderCheckout}
                alt="Order Checkout Flow"
                className=' h-400 w-fit object-cover'
                onClick={() => setPreviewImage(OrderCheckout)}
            />
        </div>

        
    </div>
  )
}

/* ================= PERSONA 1 ================= */
function Persona1() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 ">
      
      <div className="p-6 h-fit border rounded-xl">
        <div className='text-center pt-5'>
            <h3 className="text-xl font-semibold">Ishara Wickramasinghe</h3>
        <p className="text-sm text-gray-500">Marketing Executive</p>
        </div>
        
        

        <div className='pt-10'>
            <img
                src={Persona1Image}
                alt={"Ishara Wickramasinghe"}
                className="w-full h-full object-cover rounded-2xl"
            />

            <div className='py-10 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mt-10'>
                <div className='mb-5 text-md'>In Her Own Words</div>
            <p className="italic mb-4 text-md">
                "I love discovering new arrivals after work, but traffic and time 
                constraints make physical shopping exhausting. I need fast, 
                reliable delivery and accurate sizing information."
            </p>
            </div>
        </div>
      </div>

      <div>
        <div className='py-10 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            
            <div className='mb-5 text-md'>Background</div>
                <p className=" mb-4 text-md">
                    Ishara Wickramasinghe is a busy marketing executive based in Colombo who leads 
                    a fast-paced lifestyle balancing work and social commitments. With limited time 
                    for in-store shopping, she prefers using her mobile device to browse and purchase 
                    fashion items that fit both her professional and casual needs.<br/><br/>
                
                    She shops online a few times a month, looking for stylish yet practical outfits 
                    along with beauty products that complement her routine. Ishara values convenience, 
                    fast delivery, and accurate product information, as her schedule does not allow time 
                    for returns or exchanges.
                </p>
        </div>
        
        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Goals</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>✦</span> Find stylish office-to-weekend outfits quickly</li>
                <li><span className='mr-5'>✦</span> Discover affordable beauty products</li>
                <li><span className='mr-5'>✦</span> Fast checkout with trusted payment options</li>
                <li><span className='mr-5'>✦</span> Honest reviews and real user photos</li>
            </ul>
        </div>
        
        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Frustrations</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>⚠</span> Inaccurate sizing on most local sites</li>
                <li><span className='mr-5'>⚠</span> Slow checkout and forced account creation</li>
                <li><span className='mr-5'>⚠</span> Poor product photography</li>
                <li><span className='mr-5'>⚠</span> Unclear delivery timelines</li>
            </ul>
        </div>

        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Design Implication</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>→</span> Detailed size guides with model measurements</li>
                <li><span className='mr-5'>→</span> Quick-view modals and fast mobile navigation</li>
                <li><span className='mr-5'>→</span> Prominent COD + LankaQR options</li>
                <li><span className='mr-5'>→</span> High-quality zoomable images</li>
            </ul>
        </div>

      </div>
    </div>
  );
}

/* ================= PERSONA 2 ================= */
function Persona2() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
      
      <div className="p-6 h-fit border rounded-xl">
        <div className='text-center pt-5'>
            <h3 className="text-xl font-semibold">Kasun Jayawardena</h3>
        <p className="text-sm text-gray-500">Government Officer</p>
        </div>
        
        

        <div className='pt-10'>
            <img
                src={Persona2Image}
                alt={"Kasun Jayawardena"}
                className="w-full h-full object-cover rounded-2xl"
            />

            <div className='py-10 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mt-10'>
                <div className='mb-5 text-md'>In His Own Words</div>
            <p className="italic mb-4 text-md">
                "I don't trust giving my card details online. I prefer to pay when the parcel arrives. 
                I'm buying for my whole family. I need to see if they have the right size for my 6-year-old too."
            </p>
            </div>
        </div>
      </div>

      <div>
        <div className='py-10 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            
            <div className='mb-5 text-md'>Background</div>
                <p className=" mb-4 text-md">
                    Kasun Jayawardena is a government officer based in Kandy who manages his 
                    household expenses carefully and prioritizes value when shopping. As a 
                    family-oriented shopper, he usually plans his purchases in advance, buying 
                    clothing and essentials for himself, his children, and his baby in one go.<br/><br/>

                    He prefers using his Android phone for online shopping but relies heavily on 
                    Cash on Delivery due to trust concerns with online payments. Kasun looks for 
                    affordable options, clear product details, and a reliable shopping experience 
                    that allows him to confidently purchase items for his family without unnecessary risks.
                </p>
        </div>
        
        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Goals</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>✦</span> Shop for whole family in one order</li>
                <li><span className='mr-5'>✦</span> Get value for money compare prices before buying</li>
                <li><span className='mr-5'>✦</span> Pay safely without sharing card details</li>
                <li><span className='mr-5'>✦</span> Know delivery timeline to Kandy upfront</li>
            </ul>
        </div>
        
        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Frustrations</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>⚠</span> Many stores don't offer COD outside Colombo</li>
                <li><span className='mr-5'>⚠</span> Delivery to Kandy takes 5–7 days with no tracking</li>
                <li><span className='mr-5'>⚠</span> Kids sizing is unclear. No age-to-size chart</li>
                <li><span className='mr-5'>⚠</span> Can't easily compare items across categories</li>
            </ul>
        </div>

        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Design Implication</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>→</span> Prominent COD option highlighted in checkout</li>
                <li><span className='mr-5'>→</span> Delivery estimate shown on product page by district</li>
                <li><span className='mr-5'>→</span> Kids age-to-size guide with illustrations</li>
            </ul>
        </div>

      </div>
    </div>
  );
}

/* ================= PERSONA 3 ================= */
function Persona3() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
      
      <div className="p-6 h-fit border rounded-xl">
        <div className='text-center pt-5'>
            <h3 className="text-xl font-semibold">Nethra Fernando</h3>
        <p className="text-sm text-gray-500">University Student & Part-time Influencer</p>
        </div>
        
        

        <div className='pt-10'>
            <img
                src={Persona3Image}
                alt={"Nethra Fernando"}
                className="w-full h-full object-cover rounded-2xl"
            />

            <div className='py-10 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mt-10'>
                <div className='mb-5 text-md'>In Her Own Words</div>
            <p className="italic mb-4 text-md">
                "If the site doesn’t have real user photos or short videos, I won’t buy. 
                I need to see how the clothes actually look on people like me"
            </p>
            </div>
        </div>
      </div>

      <div>
        <div className='py-10 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            
            <div className='mb-5 text-md'>Background</div>
                <p className=" mb-4 text-md">
                    Nethra Fernando is a university student from Moratuwa who actively 
                    follows fashion trends through social media platforms like TikTok 
                    and Instagram. As a part-time influencer, she is highly engaged with 
                    visual content and often looks for trendy, eye-catching outfits that 
                    she can showcase online.<br/><br/>

                    She frequently makes impulse purchases using her Android phone, especially 
                    when she discovers trending styles or popular items. Being price-sensitive, 
                    Nethra looks for affordable options while relying heavily on social proof 
                    such as user photos, reviews, and videos before making a purchase. She values 
                    fast, visually engaging shopping experiences that reflect current fashion trends.
                </p>
        </div>
        
        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Goals</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>✦</span> Stay on top of fast changing trends</li>
                <li><span className='mr-5'>✦</span> Affordable, Instagram/TikTok worthy pieces</li>
                <li><span className='mr-5'>✦</span> Easy returns and honest reviews</li>
            </ul>
        </div>
        
        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Frustrations</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>⚠</span> Outdated or static product images</li>
                <li><span className='mr-5'>⚠</span> Lack of user-generated content</li>
                <li><span className='mr-5'>⚠</span> High shipping fees on small orders</li>
            </ul>
        </div>

        <div className='py-5 px-5 rounded-2xl border border-gray-300 bg-gray-100 dark:text-black mb-10'>
            <div className="font-semibold text-lg mb-4">Design Implication</div>
            <ul className="space-y-2">
                <li><span className='mr-5'>→</span> Video previews and user photo reviews</li>
                <li><span className='mr-5'>→</span> "Trending This Week" carousel</li>
                <li><span className='mr-5'>→</span> Easy returns policy clearly shown</li>
            </ul>
        </div>

      </div>
    </div>
  );
}

export default UniTUi