function Background() {
  return (
    <div className="bg-slate-950 absolute inset-0 h-full w-full z-0">
      <video muted autoPlay loop id="bgVideo">
        <source src="/src/assets/bgVideoFinal.mp4" type="video/mp4" />
      </video>
      <div className="bg-slate-950 bg-opacity-50 absolute inset-0 z-10"></div>{" "}
      <div className="bg-sky-500 bg-opacity-30 absolute inset-0 z-3"></div>{" "}
      {/* Dark slate transparent overlay */}
    </div>
  );
}

export default Background;
