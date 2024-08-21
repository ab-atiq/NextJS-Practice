import profile from "@/public/images/profile_picture.jpg";
import Image from "next/image";
export default function About() {
  // throw new Error("There was a huge error!");

  return (
    <main className="mt-10">
      <div>About us page</div>
      <Image src={profile} alt="Profile Picture" />
    </main>
  );
}
