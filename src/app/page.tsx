import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className=" text-center mx-auto mt-[50vh] translate-y-[-50%] w-fit bg-teal-300 shadow-xl p-2 rounded-xl ">
        <h1 className="text-xl my-2">Basic next js template</h1>

          <Link href={'https://github.com/NadavS5/NextJs-Template'} className="" >
            <div className="mx-auto flex flex-row  gap-1 justify-center items-center w-fit bg-white rounded-md p-1">
              <h1>Docs</h1>
              <img src="github-mark.svg" alt="" className="w-5 h-5"/> 
            </div>
          </Link>
          
            

      </div>
     
    </main>
      
  );
}
