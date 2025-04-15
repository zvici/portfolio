export default function Header() {
  return (
    <header className="border-b border-gray-700">
      <div className="mx-auto grid h-2 max-w-8xl grid-cols-12 px-2 xs:h-8 xs:px-6 sm:px-10 xl:h-12 xl:px-40">
        <div className="col-span-10 border-x border-gray-700 md:col-span-4"></div>
        <div className="col-span-2 border-r border-gray-700 min-[896px]:col-span-3"></div>
        <div className="col-span-1 hidden border-r border-gray-700 lg:block"></div>
        <div className="col-span-6 hidden border-r border-gray-700 md:block min-[896px]:col-span-5 lg:col-span-4"></div>
      </div>
    </header>
  );
}
