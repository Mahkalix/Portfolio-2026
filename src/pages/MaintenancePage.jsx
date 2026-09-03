import HeroSpider from "../components/HeroSpider.jsx";

function MaintenancePage() {
  return (
    <div className="p-maintenance">
      <div className="p-maintenance__spider">
        <HeroSpider />
      </div>
      <section className="p-maintenance__content" aria-labelledby="maintenance-title">
        <p className="p-maintenance__eyebrow">A bientot</p>
        <h1 id="maintenance-title">
          <span>Site en</span>
          <span>maintenance.</span>
        </h1>
        <p className="p-maintenance__message">Je fais quelques ajustements. Le site revient tres vite.</p>
      </section>
    </div>
  );
}

export default MaintenancePage;