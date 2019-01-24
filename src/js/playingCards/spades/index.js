import Spade2 from "./2S";
import Spade3 from "./3S";
import Spade4 from "./4S";
import Spade5 from "./5S";
import Spade6 from "./6S";
import Spade7 from "./7S";
import Spade8 from "./8S";
import Spade9 from "./9S";
import Spade10 from "./TS";
import SpadeJ from "./JS";
import SpadeQ from "./QS";
import SpadeK from "./KS";
import SpadeA from "./AS";

export default function(id) {
  switch (id) {
    case 39:
      return Spade2();
    case 40:
      return Spade3();
    case 41:
      return Spade4();
    case 42:
      return Spade5();
    case 43:
      return Spade6();
    case 44:
      return Spade7();
    case 45:
      return Spade8();
    case 46:
      return Spade9();
    case 47:
      return Spade10();
    case 48:
      return SpadeJ();
    case 49:
      return SpadeQ();
    case 50:
      return SpadeK();
    case 51:
      return SpadeA();
    default:
      return;
  }
}
