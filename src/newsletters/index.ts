import Newsletter1 from "./1";
import Newsletter2 from "./2";
import Newsletter3 from "./3";
import Newsletter4 from "./4";
import Newsletter5 from "./5";
import Newsletter6 from "./6";

const newsletters: Record<
  number,
  { title: string; component: React.ComponentType }
> = {
  "1": {
    title: "FEB | 2026 | ISSUE #1",
    component: Newsletter1,
  },
  "2": {
    title: "MAR | 2026 | ISSUE #2",
    component: Newsletter2,
  },
  "3": {
    title: "APR | 2026 | ISSUE #3",
    component: Newsletter3,
  },
  "4": {
    title: "Corporate Laws Amendment Bill 2026 | 2026 | ISSUE #4",
    component: Newsletter4,
  },
  "5": {
    title: "Dowry Death: Soon Before Her Death | 2026 | ISSUE #5",
    component: Newsletter5,
  },
  "6": {
    title: "IBC Amendment 2026 | 2026 | ISSUE #6",
    component: Newsletter6,
  },
};

export default newsletters;
