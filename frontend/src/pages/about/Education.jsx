import { useState } from "react";
import { educationTabs, onlineTabs } from "./EducationData";

export default function Education() {
  const [activeMainTab, setActiveMainTab] = useState("academic");
  const [activeCategory, setActiveCategory] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  

  const currentTabs =
    activeMainTab === "academic" ? educationTabs : onlineTabs;

  const activeData = currentTabs[activeCategory];

  return (
    <section className="space-y-8">
      <div className="flex gap-10 border-b border-white/10">
        {["academic", "online"].map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveMainTab(tab);
              setActiveCategory(0);
            }}
            className={`pb-3 flex-1 uppercase text-sm cursor-pointer ${
              activeMainTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[200px_1fr] gap-8">
        <aside className="">
          {currentTabs.map((item, index) => (
            <div className="border-l">
              <button
                key={item.category}
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left px-4 py-3 transition cursor-pointer
                  ${
                    activeCategory === index
                      ? "text-blue-500 font-medium border-l-4 bg-blue-500/15 border-blue-500 pl-4 py-3 w-full"
                      : "text-gray-500 hover:text-black pl-5 dark:hover:text-white py-3 hover:bg-blue-500/20 w-full"
                  }`}
              >
                {item.category}
              </button>
            </div>
          ))}
        </aside>

        <div className="max-h-100 w-full overflow-y-auto">
          {activeData?.courseCategory ? (
            activeData.courseCategory.map(cat => (
              <div key={cat.categoryId}>
                <h2 className="text-2xl font-semibold mb-6">
                  {cat.categoryTitle}
                </h2>

                {activeData.subMenu
                  .filter(item => item.courseType === cat.subMenuType)
                  .map(item => (
                    <CourseCard
                      key={item.id}
                      item={item}
                      setPreviewImage={setPreviewImage}
                    />
                  ))}
              </div>
            ))
          ) : (
            activeData?.subMenu.map(item => (
              <CourseCard
                key={item.id}
                item={item}
                setPreviewImage={setPreviewImage}
              />
            ))
          )}
        </div>
      </div>
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/80
                     flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg shadow-xl"
          />
        </div>
      )}
    </section>
  );
}

function CourseCard({ item, setPreviewImage }) {
  return (
    <div className="border border-white/10 rounded-xl p-6 bg-white/5 mb-6">
      <h3 className="text-lg font-semibold">{item.title}</h3>

      {item.institute && (
        <p className="text-gray-400 text-sm">@ {item.institute}</p>
      )}

      {item.period && (
        <p className="text-xs text-gray-500 mb-3">{item.period}</p>
      )}

      <p className="text-gray-300">{item.description}</p>

      {item.verification && (
        <div className="flex justify-between mt-4 text-sm">
          <a
            href={item.verification.link}
            target="_blank"
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

      <div className="flex gap-4 mt-4">
        {item.img && (
          <img
            src={item.img}
            onClick={() => setPreviewImage(item.img)}
            className="max-w-xs rounded cursor-pointer hover:scale-105 transition"
          />
        )}
        {item.badgeImg && (
          <img
            src={item.badgeImg}
            onClick={() => setPreviewImage(item.badgeImg)}
            className="w-32 h-32 rounded cursor-pointer hover:scale-105 transition"
          />
        )}
      </div>
    </div>
  );
}
