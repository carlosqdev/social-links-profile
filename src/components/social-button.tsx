import { ISocial } from "../types";

export default function SocialButton({ name, href }: ISocial) {
  return (
    <li className="bg-grey-custom text-[14px] font-medium rounded-md p-3 text-center hover:bg-green-custom transition-colors">
      <a href={href}>{name}</a>
    </li>
  )
}