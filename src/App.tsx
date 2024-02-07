import Card from "./components/card";
import CardBody from "./components/card-body";
import CardHeader from "./components/card-header";

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white text-base flex">
      <Card>
        <CardHeader />
        <CardBody />
      </Card>
    </main>
  )
}