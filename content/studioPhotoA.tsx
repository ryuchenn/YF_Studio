import Image from "next/image";
import styles from "../src/pages/studio/css/photoA.module.scss";
import { TFunction } from "i18next";

export const images = [
  "https://iconstudiospace.com/wp-content/uploads/2025/01/ICONSTUDIOSPACE-2025-INTERIORPHOTOS-SOHOROOM-KTRX-06-scaled.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/Photo_Studio_-_22_Feb._2011.jpg",
];

export const tabContent = (t: TFunction) => ({
  Overview: (
    <div className={styles.tabContentContainer}>
      <p className={styles.tabDescription}>
        Our photography studio is fully equipped for portrait, product, and fashion photography. 
        With professional lighting and backdrops, you can capture stunning images with ease.
      </p>
      <ul className={styles.tabList}>
        <li>Spacious shooting area</li>
        <li>Multiple backdrops (white, black, green screen, custom)</li>
        <li>Private changing room</li>
        <li>Professional lighting setup</li>
      </ul>
    </div>
  ),
  Equipment: (
    <div className={styles.tabContentContainer}>
      <p className={styles.tabDescription}>
        Our studio is equipped with high-end cameras, lenses, and accessories to bring your vision to life.
      </p>
      <ul className={styles.tabList}>
        <li>Cameras: Canon EOS R5, Sony A7R IV, Nikon Z7 II</li>
        <li>Lenses: 24-70mm f/2.8, 50mm f/1.2, 85mm f/1.4</li>
        <li>Stabilization: Manfrotto Tripods, DJI Ronin-S Gimbal</li>
      </ul>
    </div>
  ),
  Lighting: (
    <div className={styles.tabContentContainer}>
      <p className={styles.tabDescription}>
        We provide professional lighting solutions for both natural and studio lighting effects.
      </p>
      <ul className={styles.tabList}>
        <li>Softboxes: Godox 120cm Octa, Neewer 32-inch Softbox</li>
        <li>LED Panels: Aputure 120D II, Nanlite Forza 500</li>
        <li>Ring Lights: 18-inch Adjustable LED</li>
      </ul>
    </div>
  ),
  "Floor Plans": (
    <div className={styles.tabContentContainer}>
      <p className={styles.tabDescription}>
        Our photography studio layout allows for maximum flexibility and efficiency during shoots.
      </p>
      <Image
          src="/assets/test/FloorPlanA.png"
          alt="Studio A"
          // className={styles.studioImage}
          width={500} height={500} priority
      />
    </div>
  ),
  Price: (
    <div className={styles.tabContentContainer}>
      <p className={styles.tabDescription}>We offer competitive pricing for both hourly and full-day studio rentals.</p>
      <table className={styles.tabTable}>
        <thead>
          <tr>
            <th>Service</th>
            <th>Hourly Rate</th>
            <th>Daily Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Studio Rental</td>
            <td>$60/hr</td>
            <td>$450/day</td>
          </tr>
          <tr>
            <td>Lighting & Equipment</td>
            <td>$20/hr</td>
            <td>$150/day</td>
          </tr>
          <tr>
            <td>Photographer Assistance</td>
            <td>$80/hr</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
});
