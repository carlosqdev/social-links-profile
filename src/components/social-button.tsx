import { ISocial } from "../types";

export default function SocialButton({ name, href }: ISocial) {
  return (
    <li className="bg-gray-600 text-[14px] font-medium rounded-md p-2 text-center">
      <a href={href}>{name}</a>
    </li>
  )
}