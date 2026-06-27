import Image from "next/image";
import styles from "./HeroGrid.module.scss";

const mosaicTiles = [
  { image: "/ctverec/1.svg", area: "top1" },
  { image: "/ctverec/2.svg", area: "top2" },
  { image: "/ctverec/3.svg", area: "top3" },
  { image: "/ctverec/4.svg", area: "top4" },
  { image: "/ctverec/5.svg", area: "top5" },
  { image: "/ctverec/6.svg", area: "top6" },
  { image: "/ctverec/7.svg", area: "bottom1" },
  { image: "/ctverec/8.svg", area: "bottom2" },
  { image: "/ctverec/9.svg", area: "bottom3" },
  { image: "/ctverec/10.svg", area: "bottom4" },
  { image: "/ctverec/11.svg", area: "bottom6" },
];

export default function HeroGrid() {
  return (
    <section className={styles.heroGrid}>
      <div className={styles.copy}>
        <h1>
          We build brands that defy
          <br />
          convention and change the
          <br />
          conversations
        </h1>
      </div>

      <div className={styles.mosaic} aria-label="Typeface visual identity grid">
        {mosaicTiles.map((tile) => (
          <div
            key={tile.image}
            className={styles.tile}
            style={{ gridArea: tile.area }}
          >
            <Image
              src={tile.image}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 760px) 33vw, 15vw"
              priority={tile.area.startsWith("top")}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
