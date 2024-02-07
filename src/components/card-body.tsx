import SocialButton from "./social-button";

import { SOCIALS } from "../constants";

export default function CardBody() {
  return (
    <ul className="grid gap-4">
      {SOCIALS.map(({ id, name, href }) => (
        <SocialButton key={id} name={name} href={href} />
      ))}
    </ul>
  )
}