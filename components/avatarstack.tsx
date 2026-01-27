import Image from "next/image";

export default function AvatarStack() {
  const avatars = [
    { src: "/avatars/avatar2.webp", status: "online" },
    { src: "/avatars/avatar1.webp", status: "online" },
    { src: "/avatars/avatar6.webp", status: "offline" },
  ];

  return (
    <div className="flex items-center bg-white rounded-2xl px-4 py-3 shadow-sm">
      <div className="relative flex flex-row gap-4 -space-x-3">
        {avatars.map((avatar, i) => (
           
            <div  key={'avatar-'+i} className="relative">
          <div
            key={i}
            className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
          >
            <Image
              src={avatar.src}
              alt={`Team member ${i + 1} profile picture`}
              fill
              className="object-cover"
            />
          </div>
          {/* Status dot */}
          <span
              className={`absolute  top-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                avatar.status === "online"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            />
            </div>
          
          
        ))}
      </div>

      {/* +10 circle */}
      <div className="ml-4 w-10 h-10 rounded-full border-2 border-dashed border-indigo-400 flex items-center justify-center text-sm font-semibold text-indigo-500">
        10+
      </div>
    </div>
  );
}
