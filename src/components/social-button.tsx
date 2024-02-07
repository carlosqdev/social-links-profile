import { ISocial } from "../types";

export default function SocialButton({ name, href }: ISocial) {
  return (
    <li className="bg-gray-600 text-[14px] font-medium rounded-md p-2 text-center hover:bg-gray-700">
      <a href={href}>{name}</a>
    </li>
  )
}