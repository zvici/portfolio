export default function Education() {
  return (
    <section className="border-b border-gray-700">
      <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10 xl:px-40">
        <div className="col-span-4 border-x border-gray-700"></div>
        <div className="col-span-8 border-x border-gray-700">
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-gray-700">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 "></div>
                <div>
                  <h3 className="font-semibold text-xl">
                    Ho Chi Minh City University of Industry and Trade
                  </h3>
                  <p className="text-sm text-gray-400">2016 - 2020</p>
                  <p className="mt-2">Software Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
