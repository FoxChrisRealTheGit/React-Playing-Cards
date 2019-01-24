import Clubs2 from "./2C";
import Clubs3 from "./3C";
import Clubs4 from "./4C";
import Clubs5 from "./5C";
import Clubs6 from "./6C";
import Clubs7 from "./7C";
import Clubs8 from "./8C";
import Clubs9 from "./9C";
import Clubs10 from "./TC";
import ClubsJ from "./JC";
import ClubsQ from "./QC";
import ClubsK from "./KC";
import ClubsA from "./AC";
export default function(id) {
  switch (id) {
    case 0:
      return Clubs2();
    case 1:
      return Clubs3();
    case 2:
      return Clubs4();
    case 3:
      return Clubs5();
    case 4:
      return Clubs6();
    case 5:
      return Clubs7();
    case 6:
      return Clubs8();
    case 7:
      return Clubs9();
    case 8:
      return Clubs10();
    case 9:
      return ClubsJ();
    case 10:
      return ClubsQ();
    case 11:
      return ClubsK();
    case 12:
      return ClubsA();
    default:
      return;
  }
}
