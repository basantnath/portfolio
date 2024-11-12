export default function Profile() {
  return (
    <div className="container">
      <div className="flex items-center space-x-6 text-xl">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-900 heading profile-selection">
            Hi👋, I am Basant
          </h1>
          <p className="mt-2 text-lg text-gray-900 opacity-90 profile-selection">
            <em className="text-lg cursive text-indigo-400 font-semibold profile-selection ">
              Front-end Developer
            </em>
            <br />
            Passionate about building responsive and user-friendly web
            interfaces.
          </p>
        </div>
        <div className="w-32 h-32 rounded-full overflow-hidden border-4">
          <img
            src="/profile.jpg"
            alt="Profile picture"
            width={128}
            height={128}
            className="object-cover select-none"
          />
        </div>
      </div>
    </div>
  );
}
