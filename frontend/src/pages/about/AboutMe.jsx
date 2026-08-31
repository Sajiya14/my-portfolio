export default function AboutMe() {
  const details = [
    {
      label: "Name",
      value: "Sajith Perera",
    },
    {
      label: "Email",
      value: "sajithperera215@gmail.com",
    },
    {
      label: "Freelancer",
      value: "Available",
    },
    {
      label: "Nationality",
      value: "Sri Lankan",
    },
    {
      label: "Language",
      value: "English, Sinhala",
    },
  ];


  return (
    <div className="animate-fadeIn">

      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        About Me
      </h2>


      <p className="
        text-gray-400
        leading-7
        text-sm sm:text-base
        max-w-3xl
      ">
        I am a graduate with a Bachelor of Information Technology
        who loves turning ideas into engaging digital products.
        I specialize in UI/UX design with Figma and build
        responsive, user-friendly web applications using React,
        Tailwind CSS, Node.js, and MongoDB.
      </p>



      {/* Details Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-5
        mt-10
        "
      >

        {details.map((item,index)=>(

          <div
            key={item.label}
            className="
            group
            flex
            items-center
            gap-1
            px-4
            py-6
            rounded-xl
            border
            border-white/10
            bg-white/5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-blue-500/10
            "
            style={{
              animationDelay:`${index * 100}ms`
            }}
          >

            <p className="
              w-24
              text-gray-400
              text-sm
            ">
              {item.label}
            </p>


            <p className="
              text-sm
              sm:text-base
              font-medium
              text-white
              break-all
            ">
              {item.value}
            </p>


          </div>

        ))}

      </div>

    </div>
  );
}