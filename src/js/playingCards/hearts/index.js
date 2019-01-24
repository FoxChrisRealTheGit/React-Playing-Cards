import Heart2 from "./2H";
import Heart3 from "./3H";
import Heart4 from "./4H";
import Heart5 from "./5H";
import Heart6 from "./6H";
import Heart7 from "./7H";
import Heart8 from "./8H";
import Heart9 from "./9H";
import Heart10 from "./TH";
import HeartJ from "./JH";
import HeartQ from "./QH";
import HeartK from "./KH";
import HeartA from "./AH";
export default function(id) {
  switch (id) {
    case 26:
      return Heart2();
    case 27:
      return Heart3();
    case 28:
      return Heart4();
    case 29:
      return Heart5();
    case 30:
      return Heart6();
    case 31:
      return Heart7();
    case 32:
      return Heart8();
    case 33:
      return Heart9();
    case 34:
      return Heart10();
    case 35:
      return HeartJ();
    case 36:
      return HeartQ();
    case 37:
      return HeartK();
    case 38:
      return HeartA();
    default:
      return;
  }
}
