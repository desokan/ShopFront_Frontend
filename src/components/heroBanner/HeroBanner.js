import React from "react";
import { useTranslation } from "react-i18next";

import Carousel from "./Carousel";

const MainSlider = () => {
  const { t } = useTranslation();
  const banners = t("heroBanner.banners", { returnObjects: true });
  return <Carousel banner={banners} />;
};

export default MainSlider;
