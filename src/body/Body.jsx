import { KeyboardCaps } from "../bottom-part/BottomPart";

function Body() {
  return (
    <main className="grow flex flex-col pt-12 ">
      <TabFilters />
      <AppsCarousel />
      <AppInfo />
    </main>
  );
}

export default Body;

function TabFilters() {
  return (
    <div className="p-3 flex">
      <div className="flex items-center gap-2">
        <KeyboardCaps letter="Q" />

        <div className="flex items-center gap-2 mx-4 bg-slate-900 p-1  rounded-lg border border-slate-400/20 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
          <button className="p-2 bg-sky-600 rounded-md px-3">
            All Projects
          </button>
          <button className="p-2 text-slate-400 rounded-md px-3">
            Recents
          </button>
          <button className="p-2 text-slate-400 rounded-md px-3">
            Favorites
          </button>
        </div>

        <KeyboardCaps letter="E" />
      </div>
    </div>
  );
}

function AppsCarousel() {
  return (
    <div className="h-full max-h-80 overflow-hidden flex items-center p-2 gap-2">
      <AppContainer />
      <AppContainer />
      <AppContainer />
      <AppContainer />
      <AppContainer />
      <AppContainer />
    </div>
  );
}

function AppContainer() {
  return (
    <div className="h-full aspect-square flex justify-center items-center bg-slate-950/40 border border-slate-400/40 backdrop-filter backdrop-blur-xl rounded-lg hover:cursor-pointer hover:outline outline-1"></div>
  );
}

function AppInfo() {
  return (
    <div className="pl-6 p-1">
      <div className="p-4 flex flex-col gap-2 max-w-xl">
        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-semibold">Project Name</h2>
          <button className="py-1 px-3 text-sm text-slate-200 font-light border rounded-md">
            Favorite
          </button>
        </div>

        <h6 className="text-sm font-light text-slate-200">
          Vestibulum consectetur consectetur nulla sit amet condimentum. Proin
          sollicitudin dui eget odio placerat, eu lacinia leo malesuada. Cras in
          dolor ut magna aliquam suscipit. Aliquam non ligula mattis,
        </h6>

        <div className="mt-4 flex justify-between items-end">
          <div>
            <h4>Technology</h4>

            <div className="flex flex-wrap gap-5 text-slate-300 font-light">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-sm font-light text-slate-300">
              Date Created
            </span>
            <span>Oct 2, 2001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
