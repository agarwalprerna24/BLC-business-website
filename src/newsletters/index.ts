import Newsletter1 from "./1";
import Newsletter2 from "./2";
import Newsletter3 from "./3";

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
};

export default newsletters;
