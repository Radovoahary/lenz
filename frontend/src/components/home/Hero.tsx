import Button from "../ui/Button";

function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <h1 className="mb-6 text-6xl font-bold">
        Trouve les meilleurs événements.
      </h1>

      <p className="mb-8 max-w-2xl text-lg text-gray-600">
        Lenz permet de découvrir, organiser et gérer facilement tous tes événements.
      </p>

      <Button>Commencer</Button>
    </section>
  );
}

export default Hero;