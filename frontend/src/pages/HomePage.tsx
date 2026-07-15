import Button from "../components/ui/Button";

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-100">
      <h1 className="text-5xl font-bold">
        Bienvenue sur Lenz
      </h1>

      <Button>
        Commencer
      </Button>
    </div>
  );
}

export default HomePage;