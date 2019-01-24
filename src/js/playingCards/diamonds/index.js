import Diamond2 from "./2D";
import Diamond3 from "./3D";
import Diamond4 from "./4D";
import Diamond5 from "./5D";
import Diamond6 from "./6D";
import Diamond7 from "./7D";
import Diamond8 from "./8D";
import Diamond9 from "./9D";
import Diamond10 from "./TD";
import DiamondJ from "./JD";
import DiamondQ from "./QD";
import DiamondK from "./KD";
import DiamondA from "./AD";

export default function(id) {
  switch (id) {
    case 13:
      return Diamond2();
    case 14:
      return Diamond3();
    case 15:
      return Diamond4();
    case 16:
      return Diamond5();
    case 17:
      return Diamond6();
    case 18:
      return Diamond7();
    case 19:
      return Diamond8();
    case 20:
      return Diamond9();
    case 21:
      return Diamond10();
    case 22:
      return DiamondJ();
    case 23:
      return DiamondQ();
    case 24:
      return DiamondK();
    case 25:
      return DiamondA();
    default:
      return;
  }
}
