import bedtimeBattlesToSleepWin from "@/data/blogs/bedtime-battles-to-sleep-win.json";
import milestoneAnxietyRealityCheck from "@/data/blogs/milestone-anxiety-reality-check.json";
import morningRoutineBeforeSchoolChaos from "@/data/blogs/morning-routine-before-school-chaos.json";
import newbornNightShiftSurvival from "@/data/blogs/newborn-night-shift-survival.json";
import pickyEatingWithoutPowerStruggles from "@/data/blogs/picky-eating-without-power-struggles.json";
import screenTimeWithoutGuilt from "@/data/blogs/screen-time-without-guilt.json";
import siblingFightsFairRules from "@/data/blogs/sibling-fights-fair-rules.json";
import tantrumScriptEveryParentNeeds from "@/data/blogs/tantrum-script-every-parent-needs.json";
import travelWithToddlerNoMeltdownPlan from "@/data/blogs/travel-with-toddler-no-meltdown-plan.json";
import workingParentsEveningConnectionRitual from "@/data/blogs/working-parents-evening-connection-ritual.json";

export type BlogContentBlock =
  | { type: "header"; text: string }
  | { type: "subheader"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "bullet"; items: string[] }
  | { type: "number"; items: string[] };

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  coverImage: string;
  coverAlt: string;
  content: BlogContentBlock[];
}

const blogPostsData = [
  bedtimeBattlesToSleepWin,
  milestoneAnxietyRealityCheck,
  morningRoutineBeforeSchoolChaos,
  newbornNightShiftSurvival,
  pickyEatingWithoutPowerStruggles,
  screenTimeWithoutGuilt,
  siblingFightsFairRules,
  tantrumScriptEveryParentNeeds,
  travelWithToddlerNoMeltdownPlan,
  workingParentsEveningConnectionRitual,
] as BlogPost[];

export const blogPosts: BlogPost[] = blogPostsData;

export function getAllBlogs() {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogById(id: string) {
  return blogPosts.find((post) => post.id === id);
}
