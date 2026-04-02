export default function AboutMe() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-600 dark:text-gray-400">
          I am a graduate with a Bachelor of Information
          Technology who loves turning ideas into engaging
          digital products. I specialize in UI/UX design with Figma
          and build responsive, user-friendly web applications
          using React, Tailwind CSS, Node.js, and MongoDB.
      </p>

      <div className="grid grid-cols-2 gap-10">
        <div className="mt-8">
          <div className="flex mb-5">
            <p className="w-16 text-gray-400">Name</p>
            <p>Sajith Perera</p>
          </div>

          <div className="flex mb-5">
            <p className="w-16 text-gray-400">Email</p>
            <p >sajithperera215@gmail.com</p>
          </div>

          

          <div className="flex mb-5">
            <p className="w-20 text-gray-400">Freelancer</p>
            <p className="pl-5">Available</p>
          </div>
          
        </div>

        <div className="mt-8">
          

          <div className="flex mb-5">
            <p className="w-20 text-gray-400">Nationality</p>
            <p className="pl-5">Sri Lankan</p>
          </div>
          
          <div className="flex mb-5">
            <p className="w-20 text-gray-400">Language</p>
            <p className="pl-5">English, Sinhala</p>
          </div>

          <div className="flex mb-5">
            <p className="w-20 text-gray-400">Experience</p>
            <p className="pl-5">2+ years</p>
          </div>
        </div>

      </div>
    </div>
  );
}
