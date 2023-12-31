import Link from "next/link";

export default function Footer(params) {
  return (
    <Link href='/info/developers' className="bg-blueMedium py-4 px-3 writing-vertical-lr rounded-md items-start shadow-lg drop-shadow-lg text-xs animate-bounce">
      Developers
    </Link>
  )
};
