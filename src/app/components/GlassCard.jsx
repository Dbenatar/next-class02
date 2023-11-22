import styles from "./GlassCard.module.css";

export default function GlassCard() {
  return (
    <div className={`${styles.glasscard} ${styles.glasseffect}`}>
      <h2 className="text-lime-500 px-8 text-lg">Cooking</h2>
      <p>
        <strong>Career:</strong> 7 years as a fulltime chef
      </p>
      <p>
        <strong>Fact 1:</strong> I am self tought
      </p>
      <p>
        <strong>Strengths:</strong> Creativity with flavour combinations
      </p>
      <p>
        <strong>Weaknesses:</strong> Dish presentation
      </p>

      <h2 className="text-lime-500 px-8 text-lg">Running</h2>
      <p>
        <strong>Started running:</strong> 10 years ago
      </p>
      <p>
        <strong>Longest distance:</strong> Half Marathon
      </p>
      <p>
        <strong>Current PB:</strong> 2:22
      </p>
      <p>
        <strong>Goals:</strong> Run a full marathon before I turn 40. Run a sub
        2 hour half marathon.
      </p>

      <h2 className="text-lime-500 px-8 text-lg">Strength Training</h2>
      <p>
        <strong>Started Strength Training:</strong> Aug 2022
      </p>
      <p>
        <strong>Favourite compound:</strong> Deadlift
      </p>
      <p>
        <strong>Current PBs:</strong> 160kg Deadlift
      </p>
      <p>
        <strong>Goals:</strong> 100kg back squat
      </p>
      <h2 className="text-lime-500 px-8 text-lg">Top 5 Games</h2>
      <p>
        <strong>Star Wars Knights of the old Republic</strong>
      </p>
      <p>
        <strong>The Secret of Monkey Island</strong>
      </p>
      <p>
        <strong>The Witcher 3</strong>
      </p>
      <p>
        <strong>Legend of Zelda: Breath of the wild</strong>
      </p>
      <p>
        <strong>The Last of Us</strong>
      </p>
      <h2 className="text-lime-500 px-8 text-lg">Music Top albums</h2>
      <p>
        <strong>Nofx:</strong> So long and thanks for all the shoes
      </p>
      <p>
        <strong>Ozzy Osbourne:</strong> No more tears
      </p>
      <p>
        <strong>Hilltop Hoods:</strong> The Calling
      </p>
      <p>
        <strong>Descendents:</strong> Everything sucks
      </p>
      <p>
        <strong>Fleetwood Mac:</strong> Rumours
      </p>
    </div>
  );
}
