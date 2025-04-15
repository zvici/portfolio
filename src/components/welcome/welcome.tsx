import TypingText from "@/components/welcome/typing-text";

export default function Welcome() {
  return (
    <section className="border-b border-gray-700">
      <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-40">
        <div className="col-span-10 flex sm:flex-wrap md:flex-wrap border-x border-gray-700 p-10 md:col-span-4">
          <TypingText />
        </div>
        <div className="col-span-2 border-r border-gray-700 min-[896px]:col-span-3 " />
        <div className="col-span-2 hidden border-r border-t border-gray-700 max-md:order-last lg:col-span-1 lg:block lg:border-t-0 dot-grid-bg" />
      </div>
    </section>
  );
}
