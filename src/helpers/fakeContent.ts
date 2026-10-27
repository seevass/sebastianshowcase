export interface RecommendedVideo {
  color: string;
  title: string;
  meta: string;
}

export interface FakeComment {
  user: string;
  color: string;
  text: string;
}

export const RECOMMENDED: RecommendedVideo[] = [
  {
    color: "var(--main-pink-color)",
    title: "I turned my keyboard into a toaster",
    meta: "seabass\n1.2M views",
  },
  {
    color: "var(--main-yellow-color)",
    title: "10 hours of koi swimming (relaxing)",
    meta: "koi_lover\n340K views",
  },
  {
    color: "var(--main-yellow-color)",
    title: "Why my code only works on Tuesdays",
    meta: "debugging_dave\n88K views",
  },
  {
    color: "var(--main-hot-pink-color)",
    title: "Rating every font I have ever used",
    meta: "typenerd\n2.1M views",
  },
  {
    color: "var(--main-blue-color)",
    title: "Unboxing a very small box",
    meta: "unboxer99\n12K views",
  },
  {
    color: "var(--main-pink-color)",
    title: "Gaming chair review (I broke it)",
    meta: "seabass\n560K views",
  },
];

export const COMMENTS: FakeComment[] = [
  {
    user: "keebfan99",
    color: "var(--main-green-color)",
    text: "this is so cool, where can i get those keycaps",
  },
  { user: "xX_koilover_Xx", color: "var(--main-yellow-color)", text: "first!" },
  {
    user: "mom",
    color: "var(--main-pink-color)",
    text: "proud of you sweetie, call me back",
  },
  {
    user: "debugging_dave",
    color: "var(--main-hot-pink-color)",
    text: "who's here in 2026",
  },
];

// Returns a shuffled copy (Fisher-Yates), leaving the original untouched
export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Returns a random-length, random-order selection of at least `min` items
export function randomSubset<T>(items: T[], min = 2): T[] {
  const low = Math.min(min, items.length);
  const count = low + Math.floor(Math.random() * (items.length - low + 1));
  return shuffle(items).slice(0, count);
}
