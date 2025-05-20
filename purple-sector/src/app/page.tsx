import FontExample from "@/components/FontExample";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist">
          <span className={'text-xl font-formula-italic bg-f1-purple '}> Go to nextjs.org →</span>
            <FontExample/>
    </div>
  );
}
