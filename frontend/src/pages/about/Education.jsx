import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { educationTabs, onlineTabs } from "./EducationData";

export default function Education() {
  const [activeMainTab, setActiveMainTab] = useState("academic");
  const [activeCategory, setActiveCategory] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const currentTabs =
    activeMainTab === "academic"
      ? educationTabs
      : onlineTabs;

  const activeData = currentTabs[activeCategory];

  return (
    <section className="animate-fade">

      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
        Education
      </h2>

      {/* Academic / Online Tabs */}

      <div className="flex border-b border-white/10 mb-8">
        {["academic", "online"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveMainTab(tab);
              setActiveCategory(0);
              setOpenDropdown(false);
            }}
            className={`flex-1 py-3 uppercase text-sm transition cursor-pointer
            ${
              activeMainTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ================= MOBILE ================= */}

      <div className="md:hidden">

        {/* Dropdown */}

        <div className="relative mb-8">

          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-full flex items-center justify-between
            px-4 py-3
            rounded-lg
            border border-white/10
            bg-blue-500/15
            cursor-pointer"
          >

            <span className="text-blue-500 font-medium">
              {activeData.category}
            </span>

            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                openDropdown ? "rotate-180" : ""
              }`}
            />

          </button>

          <div
            className={`absolute z-20 mt-2 w-full
            rounded-lg
            border border-white/10
            bg-[#111]
            overflow-hidden
            transition-all duration-300
            ${
              openDropdown
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >

            {currentTabs.map((item, index) => (

              <button
                key={item.category}
                onClick={() => {
                  setActiveCategory(index);
                  setOpenDropdown(false);
                }}
                className={`w-full text-left px-4 py-3 transition cursor-pointer
                ${
                  activeCategory === index
                    ? "text-blue-500 font-medium border-l-4 border-blue-500 bg-blue-500/15"
                    : "text-gray-400 hover:text-white hover:bg-blue-500/20"
                }`}
              >
                {item.category}
              </button>

            ))}

          </div>

        </div>

        <EducationContent
          activeData={activeData}
          setPreviewImage={setPreviewImage}
        />

      </div>

      {/* ================= DESKTOP ================= */}

      <div className="hidden md:flex gap-10">

        <div>

          {currentTabs.map((item, index) => (

            <div
              key={item.category}
              className="border-l border-white/20"
            >

              <button
                onClick={() => setActiveCategory(index)}
                className={`w-52 text-left px-4 py-3 transition-all duration-300 cursor-pointer
                ${
                  activeCategory === index
                    ? "text-blue-500 font-medium border-l-4 border-blue-500 bg-blue-500/15"
                    : "text-gray-500 hover:text-white hover:bg-blue-500/20"
                }`}
              >
                {item.category}
              </button>

            </div>

          ))}

        </div>

        <div className="flex-1 max-h-137.5 overflow-y-auto pr-2">

          <EducationContent
            activeData={activeData}
            setPreviewImage={setPreviewImage}
          />

        </div>

      </div>

      {/* Image Preview */}

      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/80
          flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-xl"
          />
        </div>
      )}

    </section>
  );
}

function EducationContent({ activeData, setPreviewImage }) {
  return (
    <>
      {activeData?.courseCategory ? (
        activeData.courseCategory.map((cat) => (
          <div key={cat.categoryId}>
            <h3 className="text-xl font-semibold mb-6">
              {cat.categoryTitle}
            </h3>

            {activeData.subMenu
              .filter(
                (item) =>
                  item.courseType === cat.subMenuType
              )
              .map((item) => (
                <CourseCard
                  key={item.id}
                  item={item}
                  setPreviewImage={setPreviewImage}
                />
              ))}
          </div>
        ))
      ) : (
        activeData.subMenu.map((item) => (
          <CourseCard
            key={item.id}
            item={item}
            setPreviewImage={setPreviewImage}
          />
        ))
      )}
    </>
  );
}

function CourseCard({ item, setPreviewImage }) {
  return (
    <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6">

      <h3 className="text-lg font-semibold">
        {item.title}
      </h3>

      {item.institute && (
        <p className="text-gray-400 text-sm mt-1">
          @ {item.institute}
        </p>
      )}

      {item.period && (
        <p className="text-xs text-gray-500 mt-1 mb-4">
          {item.period}
        </p>
      )}

      <p className="text-gray-300 leading-7">
        {item.description}
      </p>

      {item.verification && (
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-5 text-sm">
          <a
            href={item.verification.link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            Verify Certificate
          </a>

          {item.verification.code && (
            <span className="text-gray-400">
              Code: {item.verification.code}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-4 mt-5">

        {item.img && (
          <img
            src={item.img}
            onClick={() => setPreviewImage(item.img)}
            className="max-w-xs sm:max-w-xs rounded-lg cursor-pointer hover:scale-105 transition"
            alt=""
          />
        )}

        {item.badgeImg && (
          <img
            src={item.badgeImg}
            onClick={() => setPreviewImage(item.badgeImg)}
            className="w-32 md:w-32 sm:w-32 rounded-lg cursor-pointer hover:scale-105 transition"
            alt=""
          />
        )}

      </div>

    </div>
  );
}