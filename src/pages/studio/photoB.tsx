import React from "react";
import { images, tabContent } from "@/content/studioPhotoB";
import styles from "./css/photoB.module.scss";
import TabSection from "@/components/StudioTabSection";
import { useTranslation } from 'react-i18next';

const StudioPhotoB: React.FC = () => {
  const { t } = useTranslation(['translation', 'dynamicContent', 'commonVariables']);

  return (
    <TabSection
      images={images}
      tabContent={tabContent(t)}
      styles={styles}
      titleKey={t("translation:Studio.PhotoStudioBTitle")}
    />
  );
};

export default StudioPhotoB;
