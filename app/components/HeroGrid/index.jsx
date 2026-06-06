import Image from "next/image";
import styles from "./HeroGrid.module.scss";

const rows = 6;
const columns = 8;
const titleTile = {
  color: "titleTile",
  title: "Letters are small rooms for memory.",
  span: 3,
};

const colorTiles = {
  "2-1": titleTile,
  "2-2": null,
  "2-3": null,
  "2-4": { color: "pink", image: "/ctverec/IMG_8042 1.png" },
  "2-5": { color: "orange", image: "/ctverec/IMG_8043 1.png" },
  "2-6": { color: "yellow", image: "/ctverec/IMG_8044 1.png" },
  "3-1": { color: "green", image: "/ctverec/IMG_8045 1.png" },
  "3-2": { color: "blue", image: "/ctverec/IMG_8046 1.png" },
  "3-3": { color: "red", image: "/ctverec/IMG_8047 1.png" },
  "3-4": { color: "pink", image: "/ctverec/IMG_8048 1.png" },
  "3-5": { color: "orange", image: "/ctverec/IMG_8049 1.png" },
  "3-6": { color: "yellow", image: "/ctverec/IMG_8050 1.png" },
};

const greyTiles = ["cream", "stone", "silver", "slate", "ivory"];
const greyTileOverrides = {
  "0-0": "ivory",
  "0-1": "cream",
  "0-2": "cream",
  "0-3": "stone",
  "0-4": "slate",
  "0-5": "cream",
  "0-6": "cream",
  "0-7": "ivory",
  "1-0": "cream",
  "1-1": "ivory",
  "1-6": "ivory",
  "1-7": "cream",
};

const tiles = Array.from({ length: rows * columns }, (_, index) => {
  const row = Math.floor(index / columns);
  const column = index % columns;
  const colorTile = colorTiles[`${row}-${column}`];
  const greyTile = greyTileOverrides[`${row}-${column}`];

  if (colorTile === null) {
    return null;
  }

  return (
    colorTile || {
      color: greyTile || greyTiles[(row + column) % greyTiles.length],
    }
  );
});

export default function HeroGrid() {
  return (
    <section className={styles.heroGrid}>
      <div className={styles.tileGrid} aria-label="Typeface design raster">
        {tiles.map((tile, index) => {
          if (!tile) {
            return null;
          }

          return (
            <div
              key={`${tile.color}-${index}`}
              className={`${styles.tile} ${styles[tile.color]} ${
                tile.image ? styles.imageTile : ""
              }`}
              style={tile.span ? { gridColumn: `span ${tile.span}` } : undefined}
            >
              {tile.title && <h1>{tile.title}</h1>}
              {tile.image && (
                <Image
                  src={tile.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 700px) 170px, 320px"
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
