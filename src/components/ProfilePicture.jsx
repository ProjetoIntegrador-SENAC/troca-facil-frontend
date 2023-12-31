import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePicture({ img, name }) {
  const router = useRouter();
  return(
    <div className='flex items-center text-center absolute top-2 left-2 cursor-pointer' onClick={() => router.push(`/user/${name}`)}>
      <Image width={18} height={18} src={img} alt="Profile Picture" className="rounded-l-md w-[20px] h-[20px] object-cover"/>
      <p className="bg-tertiary/80 w-full h-[20px] text-xs px-1 rounded-r-md transition-all ease-in duration-300 group-hover:text-white">{name}</p>
    </div>
  )
};
