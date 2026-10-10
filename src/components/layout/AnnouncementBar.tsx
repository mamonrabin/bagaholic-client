const announcementText =
  "Delivery all over Bangladesh · Cash on Delivery available";

export default function AnnouncementBar() {
  return (
    <div
      className="overflow-hidden bg-[#780019] text-white"
      role="region"
      aria-label="Store announcements"
    >
      <div className="flex w-max animate-marquee">
        {[...Array(6)].map((_, index) => (
          <span
            key={index}
            aria-hidden={index !== 0}
            className="uppercase px-8 py-2 text-[10px] font-bold font-sans tracking-widest"
          >
            {announcementText}
          </span>
        ))}
      </div>
    </div>
  );
}