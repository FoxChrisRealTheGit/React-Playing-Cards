import clubLookup from "./clubs";
import diamondLookup from "./diamonds";
import heartsLookup from "./hearts";
import spadesLookup from "./spades";
import backLookup from "./backs";
export default function(num) {
  switch (true) {
    case num < 13:
      return clubLookup(num);
    case num < 26:
      return diamondLookup(num);
    case num < 39:
      return heartsLookup(num);
    case num < 52:
      return spadesLookup(num);
      case num < 100:
      return backLookup(num);
    default:
      return;
  }
}
