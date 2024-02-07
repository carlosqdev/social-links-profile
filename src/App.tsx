export default function App() {
  return (
    <main className="bg-black min-h-screen text-white text-base flex">
      <section className="w-[90%] bg-gray-800 m-auto rounded-md p-6 grid gap-6 md:max-w-[350px] md:w-full">
        <img src="https://avatars.githubusercontent.com/u/65479034?v=4" alt="Carlos Quintero" className="w-1/3 m-auto" />

        <hgroup>
          <h1 className="text-center text-2xl font-bold">Carlos Quintero</h1>
          <p className="text-center font-medium text-yellow-200">Managua, Nicaragua</p>
        </hgroup>

        <p className="text-center font-medium text-gray-400 text-[14px]">"Full Stack developer and Master Pokemon"</p>

        <ul className="grid gap-4">
          <li className="bg-gray-600 text-[14px] font-medium rounded-md p-2 text-center">
            <a href="">GitHub</a>
          </li>

          <li className="bg-gray-600 text-[14px] font-medium rounded-md p-2 text-center">
            <a href="">Frontend Mentor</a>
          </li>

          <li className="bg-gray-600 text-[14px] font-medium rounded-md p-2 text-center">
            <a href="">Linkedin</a>
          </li>

          <li className="bg-gray-600 text-[14px] font-medium rounded-md p-2 text-center">
            <a href="">Twitter</a>
          </li>

          <li className="bg-gray-600 text-[14px] font-medium rounded-md p-2 text-center">
            <a href="">Instagram</a>
          </li>

        </ul>
      </section>
    </main>
  )
}