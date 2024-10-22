function Body() {
  return (
    <main className="grow flex flex-col pt-16 gap-4">
      <TabFilters />
      <AppsCarousel />
      <AppInfo />
    </main>
  );
}

export default Body;

function TabFilters() {
  return <div className="border p-4">Tab</div>;
}

function AppsCarousel() {
  return <div className="h-full max-h-80 border">Apps here</div>;
}

function AppInfo() {
  return (
    <div className="border pl-20 p-2">
      <div className="border p-4">Info here</div>
    </div>
  );
}
