import ModelViewer from "@/components/about-me/model-viewer";
import data from "@/data/data.json";

export default function AboutMe() {
  return (
    <section className="border-b border-gray-700">
      <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10 xl:px-40">
        <div className="col-span-4 border-x border-gray-700 p-10">
          <p className="text-5xl font-bold">About me</p>
          <p className="mt-4 text-lg text-gray-400">{data.about_me[0]}</p>
          <p className="mt-4 text-lg text-gray-400">{data.about_me[1]}</p>
          <div className="h-44">Social</div>
        </div>
        <div className="col-span-4 border-x border-gray-700">
          <ModelViewer />
        </div>
        <div className="col-span-4 border-r border-gray-700 "></div>
      </div>
    </section>
  );
}
