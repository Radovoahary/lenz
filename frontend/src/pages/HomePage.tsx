import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

function HomePage() {
  return (
    <div className="mx-auto mt-10 max-w-xl space-y-6">
      <Card>
        <Badge text="Nouveau" />

        <h2 className="mt-4 text-2xl font-bold">
          Événement React
        </h2>

        <p className="my-4 text-gray-600">
          Découvre React avec un atelier pratique.
        </p>

        <Input placeholder="Rechercher..." />

        <div className="mt-4">
          <Button>S'inscrire</Button>
        </div>
      </Card>
    </div>
  );
}

export default HomePage;