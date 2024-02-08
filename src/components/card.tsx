interface PropsCard {
  children: React.ReactNode
}

export default function Card({ children }: PropsCard) {
  return (
    <section className="w-[90%] bg-dark-grey m-auto rounded-md p-6 grid gap-6 md:max-w-[350px] md:w-full">
      {children}
    </section>
  )
}