export default function CardHeader() {
  return (
    <header className="grid gap-2">
      <img src="https://avatars.githubusercontent.com/u/65479034?v=4" alt="Carlos Quintero" className="w-[25%] object-contain m-auto" />

      <hgroup>
        <h1 className="text-center text-2xl font-bold">Carlos Quintero</h1>
        <p className="text-center font-medium text-green-custom">Managua, Nicaragua</p>
      </hgroup>

      <p className="text-center font-medium text-white-custom text-[14px]">"Full Stack developer and Master Pokemon"</p>
    </header>
  )
}