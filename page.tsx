import Image from "next/image";

import mantech from "../../public/me2.jpg"
export default function Home() {
  return (
 
    <div>
         <Image className="w-50 h-50 md:w-15 ml-90 mx-auto rounded-3xl  " src="/me2.jpg" alt="" width="360" height="240"/>

    </div>
  );
}
