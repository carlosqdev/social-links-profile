import Card from "./components/card";
import CardBody from "./components/card-body";
import CardHeader from "./components/card-header";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <main className="bg-off-black min-h-screen text-white-custom text-base flex">
        <Card>
          <CardHeader />
          <CardBody />
        </Card>

      </main>
      <Footer />
    </>
  )
}