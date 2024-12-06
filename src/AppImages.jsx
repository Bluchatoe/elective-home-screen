import GembotsSrc from "./assets/appPictures/gembottemp.png";
import ImageClassSrc from "./assets/appPictures/imageclasstemp.png";
import PenaltyMotoSrc from "./assets/appPictures/penaltymototemp.png";

import GembotsBgSrc from "./assets/appPictures/gembotbgtemp.jpg";
import ImageClassBgSrc from "./assets/appPictures/imageclassbgtemp.jpg";
import PenaltyMotoBgSrc from "./assets/appPictures/penaltymotobgtemp.jpg";

export function GembotImg() {
  return <img src={GembotsSrc} alt="Gembot Image" />;
}
export function GembotBgImg() {
  return <img src={GembotsBgSrc} alt="Gembot Image" />;
}

export function ImageClassifierImg() {
  return <img src={ImageClassSrc} alt="Image classifier  Image" />;
}
export function ImageClassifierBgImg() {
  return <img src={ImageClassBgSrc} alt="Image classifier Background Image" />;
}

export function PenaltyMotoImg() {
  return <img src={PenaltyMotoSrc} alt="Gembot Image" />;
}
export function PenaltyMotoBgImg() {
  return (
    <img
      src={PenaltyMotoBgSrc}
      alt="Gembot Image"
      className="object-cover w-full h-full absolute inset-0"
    />
  );
}
