function Features() {
  return (
    <section className="grid gap-6 py-20 md:grid-cols-3">
      <div className="rounded-xl border p-6">
        <h2 className="mt-4 text-xl font-bold">Créer</h2>
        <p>Organise tes événements facilement.</p>
      </div>

      <div className="rounded-xl border p-6">
        
        <h2 className="mt-4 text-xl font-bold">Découvrir</h2>
        <p>Trouve des événements près de chez toi.</p>
      </div>

      <div className="rounded-xl border p-6">
    
        <h2 className="mt-4 text-xl font-bold">Participer</h2>
        <p>Inscris-toi en quelques secondes.</p>
      </div>
    </section>
  );
}

export default Features;