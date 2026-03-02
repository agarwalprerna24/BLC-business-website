import Newsletter1 from "./1";
import Newsletter2 from "./2";

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
};

export default newsletters;
