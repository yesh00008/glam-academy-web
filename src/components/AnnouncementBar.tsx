const AnnouncementBar = () => {
  const text = "✨ Enroll Now & Get 20% Off — Limited Seats! ✨ New Batch Starting Soon — Reserve Your Spot Today! ✨ Free Makeup Kit with Advanced Course Enrollment ✨";
  return (
    <div className="bg-primary overflow-hidden py-2 relative z-50">
      <div className="marquee-track flex whitespace-nowrap gap-8">
        <span className="text-primary-foreground text-sm font-medium tracking-wide">{text}</span>
        <span className="text-primary-foreground text-sm font-medium tracking-wide">{text}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
