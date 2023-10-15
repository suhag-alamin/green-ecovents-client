import SwiperSlider from "@/components/Slider/SwiperSlider";
import { baseApi } from "@/config/api";
import { IApiResponse } from "@/interfaces/apiResponse";
import styles from "@/styles/Home.module.css";

const Hero = async () => {
  const res = await fetch(`${baseApi}/events`);
  const result: IApiResponse = await res.json();
  const data = result.data;

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <SwiperSlider />
      </div>
    </div>
  );
};

export default Hero;
