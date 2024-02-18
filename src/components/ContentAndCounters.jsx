const ContentAndCounters = () => {
  const dynamicData = [
    { value: 12, label: "years+", description: "Experience" },
    {
      value: 1200,
      label: "Listed Properties",
      description: "listed properties",
    },
    { value: 220, label: "Happy Customers", description: "happy customers" },
  ];

  return (
    <div className="flex" style={{ maxWidth: "70%" }}>
      <main className="overflow-y-auto flex-grow hidden md:block">
        <div className="grid">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            {dynamicData.map((item, index) => (
              <div key={index} className="p-1">
                <div>
                  <h1 className="text-xl text-bold text-gray-800 font-bold">
                    {item.value}
                  </h1>
                  <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-400">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="w-1/2 p-4"></div>
    </div>
  );
};

export default ContentAndCounters;
