import Button from "../components/ui/Button";

function HomePage() {
  return (
    <div className="mt-16 text-center">
      <h1 className="mb-6 text-5xl font-bold">
        Bienvenue sur Lenz 🚀
      </h1>

      <p className="mb-8 text-lg text-gray-600">
        Organisez et découvrez des événements facilement.
      </p>

      <Button>Découvrir les événements</Button>
    </div>
  );
}

export default HomePage;