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
    color: "var(--main-yellow-color)",
    title: "How to sew a pair of pants (Step-by-step tutorial)",
    meta: "Seabass\n6.7k views",
  },
  {
    color: "var(--main-pink-color)",
    title: "Day in the life of a private chef",
    meta: "fuegoaal3\n12k views",
  },
  {
    color: "var(--main-blue-color)",
    title: "Best of: Wolfer (2026) FPS Montage",
    meta: "Wolfer\n5.1M views",
  },
  {
    color: "var(--main-hot-pink-color)",
    title: "Winning my first Riftbound and bouldering tournament in the same day",
    meta: "TheFirstPoro\n531K views",
  },
  {
    color: "var(--main-yellow-color)",
    title: "Starting My Golf Career with $1",
    meta: "MetaciniAlfredo\n181M views",
  },
  {
    color: "var(--main-pink-color)",
    title: "Making 100 Buffalo Chicken Sandwiches in 1 Hour",
    meta: "Krusher99\n67.9K views",
  },
  {
    color: "var(--main-blue-color)",
    title: "How to Avoid The Black Plague (From a Registered Nurse)",
    meta: "RCP\n1.4M views",
  },
  {
    color: "var(--main-hot-pink-color)",
    title: "Will My Coffee Prevent the Shibuya Incident?",
    meta: "GermanToaster\n67.9K views",
  },
  {
    color: "var(--main-yellow-color)",
    title: "How I Ended Up as the CEO of a Fortune 500 Boba Company",
    meta: "PocketPapa.exe\n67.9K views",
  },
  {
    color: "var(--main-pink-color)",
    title: "Making a Life Size Gundam in My Garage (Working!)",
    meta: "nautalisk.\n67.9K views",
  },
  {
    color: "var(--main-blue-color)",
    title: "Trying the 10 Course Tasting Menu at the Most Famous Steakhouse in Japan",
    meta: "SovietMight\n48M views",
  },
  {
    color: "var(--main-hot-pink-color)",
    title: "Hosting the World's Largest Magic Cube Event in My Backyard",
    meta: "Chris\n504M views",
  },
  {
    color: "var(--main-yellow-color)",
    title: "Training my dog to compete in the Olympic Gymnastic Team",
    meta: "xXSkillz4DayzXx\n4.1K views",
  },
  {
    color: "var(--main-pink-color)",
    title: "From F1 Engineer to Full-Time DJ",
    meta: "GiraffeLicker909\n826K views",
  },
  {
    color: "var(--main-blue-color)",
    title: "Lawyer Reacts to the Lastest Ban on Sports Betting in the US",
    meta: "dynhz\n200K views",
  },
];

export const COMMENTS: FakeComment[] = [
  {
    user: "Wolfer",
    color: "var(--main-yellow-color)",
    text: "Came looking for a warrior in keyboard armor, stayed for the video",
  },
  { user: "Gruber_Dog", color: "var(--main-pink-color)", text: "Watching this while eating some whipped cream!" },
  {
    user: "zeusieDaPiggy",
    color: "var(--main-blue-color)",
    text: "perfect video to fall asleep to, thanks for the content",
  },
  {
    user: "Fuegoaal3",
    color: "var(--main-hot-pink-color)",
    text: "How does this affect LeBron's legacy?",
  },
  {
    user: "MetaciniAlfredo",
    color: "var(--main-yellow-color)",
    text: "CAN THIS COMMENT GET 67 LIKES???",
  },
  {
    user: "Krusher99",
    color: "var(--main-pink-color)",
    text: "Buffalo chicken is mid",
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
