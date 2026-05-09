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

export const blogPosts: BlogPost[] = [
  {
    id: "bedtime-battles-to-sleep-win",
    title: "Bedtime Battles? Try This 20-Minute Reset Tonight",
    excerpt: "A practical, no-shouting bedtime flow that calms kids faster and helps parents reclaim evenings.",
    publishedAt: "2026-05-03",
    readMinutes: 6,
    coverImage: "/blog/bedtime.svg",
    coverAlt: "Parent reading bedtime story to child",
    content: [
      { type: "header", text: "Why Bedtime Blows Up So Fast" },
      { type: "paragraph", text: "If bedtime in your home feels like a nightly war zone, you are not failing. You are likely dealing with an overstimulated routine that is too late and too unpredictable for your child to settle into sleep." },
      { type: "image", src: "/blog/bedtime.svg", alt: "Calm bedtime setup", caption: "Consistency beats intensity at bedtime." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "Most bedtime fights are a pattern problem, not a behavior problem. Screens, snacks, and negotiations push sleep later, while anxiety rises as kids feel less certain about what comes next." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "Use one fixed flow every night. Keep language short, tone low, and boundaries boring. Repetition feels slow at first, but predictability reduces resistance quickly." },
      { type: "bullet", items: ["Keep lights low 30 minutes before bed.", "Use the same order: washroom, pajamas, story, lights out.", "Respond to exits with one calm line only."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Set a non-negotiable bedtime window for 7 days.", "Track exits and sleep start time nightly.", "Review progress after one week, not one night."] },
      { type: "paragraph", text: "You do not need perfect nights. You need less chaos than yesterday, repeated consistently enough to become your new normal." },
    ],
  },
  {
    id: "picky-eating-without-power-struggles",
    title: "Picky Eating Meltdowns: The 3-Plate Method That Actually Works",
    excerpt: "End mealtime arguments with a simple plate format that keeps nutrition and peace on the same table.",
    publishedAt: "2026-05-01",
    readMinutes: 6,
    coverImage: "/blog/feeding.svg",
    coverAlt: "Colorful toddler meal plate on a table",
    content: [
      { type: "header", text: "Fix Mealtime Stress Without Forcing Bites" },
      { type: "paragraph", text: "When every dinner ends in pleading or tears, it can feel personal. It is usually sensory overload plus pressure, not stubbornness, and that means the solution is structure, not force." },
      { type: "image", src: "/blog/feeding.svg", alt: "Balanced toddler plate", caption: "Safety foods + exposure foods lower resistance." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "The 3-plate method lowers fear by guaranteeing one accepted option while still exposing children to new food. Repeated low-pressure exposure builds acceptance over time." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "Parents own the schedule and menu. Children own intake. This split dramatically cuts power struggles and protects appetite regulation." },
      { type: "bullet", items: ["Plate 1: known safe food.", "Plate 2: familiar food, small variation.", "Plate 3: tiny taste of a new food."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Run this method for 10 days.", "Track table time, not just bites.", "Celebrate curiosity, not clean plates."] },
      { type: "paragraph", text: "Nutrition improves faster when meals feel safe. Calm consistency is more powerful than one dramatic dinner victory." },
    ],
  },
  {
    id: "tantrum-script-every-parent-needs",
    title: "Tantrum in Public? Use This 4-Line Script Before It Escalates",
    excerpt: "A fast de-escalation script for supermarkets, parks, and every 'everyone is staring' moment.",
    publishedAt: "2026-04-28",
    readMinutes: 5,
    coverImage: "/blog/tantrum.svg",
    coverAlt: "Parent calming upset toddler in a store aisle",
    content: [
      { type: "header", text: "The Script That Works Under Pressure" },
      { type: "paragraph", text: "Public tantrums trigger instant panic in parents because it feels like the whole world is watching. In that moment, fewer words and slower energy are your strongest tools." },
      { type: "image", src: "/blog/tantrum.svg", alt: "Parent kneeling to child level", caption: "Co-regulation first, correction later." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "A dysregulated child cannot process long logic. Validation, safety, and simple choices after calm are far more effective than lectures mid-meltdown." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "Practice the same language every time so your response becomes automatic under stress." },
      { type: "bullet", items: ["You are upset.", "I am here.", "We are safe."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Move to a quieter spot.", "Use short validating lines.", "Offer two acceptable choices after calm."] },
      { type: "paragraph", text: "Your goal is faster recovery, not public perfection. Repair skill matters more than avoiding every tantrum." },
    ],
  },
  {
    id: "newborn-night-shift-survival",
    title: "Newborn Nights Are Brutal: A Shift Plan That Saves Your Sanity",
    excerpt: "A realistic night-duty structure for two caregivers that cuts resentment and protects sleep.",
    publishedAt: "2026-04-24",
    readMinutes: 7,
    coverImage: "/blog/newborn.svg",
    coverAlt: "Sleeping newborn near soft night light",
    content: [
      { type: "header", text: "Stop Winging the Night Shift" },
      { type: "paragraph", text: "Sleep deprivation can turn loving partners into exhausted rivals by 3 AM. A clear shift system is often the difference between survival and burnout." },
      { type: "image", src: "/blog/newborn.svg", alt: "Night station for newborn care", caption: "Systems reduce midnight decision fatigue." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "Vague plans fail when both adults are tired. Defined windows, protected sleep blocks, and short handoff notes reduce confusion and resentment." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "You cannot remove newborn wake-ups, but you can remove unnecessary friction around them." },
      { type: "bullet", items: ["Pre-stock diapers, wipes, water, and feeding supplies.", "Use one-line handoff notes.", "Protect one uninterrupted sleep block per caregiver."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Set A/B shifts for the next week.", "Create a bedside checklist.", "Review and adjust shifts every 3 nights."] },
      { type: "paragraph", text: "This stage is temporary, but depleted parents need systems now, not after burnout hits." },
    ],
  },
  {
    id: "milestone-anxiety-reality-check",
    title: "Is My Child Behind? The Milestone Reality Check Every Parent Needs",
    excerpt: "Learn how to track progress without spiraling into social media comparison panic.",
    publishedAt: "2026-04-20",
    readMinutes: 6,
    coverImage: "/blog/milestones.svg",
    coverAlt: "Growth chart with toy blocks",
    content: [
      { type: "header", text: "Track Progress Without Panic" },
      { type: "paragraph", text: "One social media reel can convince any parent that their child is late. Comparison is loud, but useful tracking is quiet, specific, and far more reassuring." },
      { type: "image", src: "/blog/milestones.svg", alt: "Milestone notes journal", caption: "Ranges matter more than rigid deadlines." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "Children do not progress evenly across speech, movement, and social skills. Variation can be normal when trends still show effort and growth." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "Use weekly observations so pediatric visits are based on patterns, not memory and worry." },
      { type: "bullet", items: ["Communication attempts", "Motor actions", "Social response", "Self-help behavior"] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Log one note per category weekly.", "Review trends every month.", "Escalate persistent concerns early with your pediatrician."] },
      { type: "paragraph", text: "Data reduces anxiety. Your child needs steady support, not a race against someone else’s highlight reel." },
    ],
  },
  {
    id: "morning-routine-before-school-chaos",
    title: "Before-School Chaos? Build a 15-Minute Morning Flow That Sticks",
    excerpt: "A tighter morning routine that reduces shouting, delays, and forgotten essentials.",
    publishedAt: "2026-04-16",
    readMinutes: 5,
    coverImage: "/blog/morning.svg",
    coverAlt: "Family preparing school bag in morning",
    content: [
      { type: "header", text: "Turn Morning Chaos Into a Repeatable Flow" },
      { type: "paragraph", text: "If mornings begin with missing shoes and end with yelling, your family doesn’t need more effort. It needs fewer decisions and a tighter sequence." },
      { type: "image", src: "/blog/morning.svg", alt: "Morning checklist by door", caption: "Prepare at night, protect the morning." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "Kids struggle when too many choices show up at once. Visual sequencing and pre-night prep remove decision overload." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "Treat mornings like a workflow. Reduce variables, then reinforce what works." },
      { type: "bullet", items: ["Pack bags and clothes at night.", "Use a 4-step visual board.", "Offer two fixed breakfast options."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Pilot for 5 school days.", "Identify the step that breaks most often.", "Simplify that one step first."] },
      { type: "paragraph", text: "A calmer departure is the right metric. Perfection is optional; consistency is not." },
    ],
  },
  {
    id: "screen-time-without-guilt",
    title: "Screen Time Without Guilt: A Family Plan That Kids Accept",
    excerpt: "Set screen boundaries that are clear, fair, and far easier to enforce every day.",
    publishedAt: "2026-04-12",
    readMinutes: 6,
    coverImage: "/blog/screens.svg",
    coverAlt: "Child using tablet with parent nearby",
    content: [
      { type: "header", text: "Make Screen Rules Enforceable" },
      { type: "paragraph", text: "Most parents are not trying to eliminate screens. They are trying to stop screens from controlling the daily rhythm of the house." },
      { type: "image", src: "/blog/screens.svg", alt: "Family screen timer", caption: "Predictable limits reduce arguments." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "Inconsistency creates conflict. Kids can handle limits better when those limits are explicit, visible, and repeated." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "Anchor screens to routine rather than behavior rewards to avoid emotional overvaluation." },
      { type: "bullet", items: ["Define when, where, and how long.", "Give a 5-minute warning.", "Use visible timers for transitions."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Write one family media rule card.", "Apply for 14 days without exceptions.", "Add one daily tech-free ritual."] },
      { type: "paragraph", text: "You do not need zero screens. You need clear boundaries and stronger connection habits around them." },
    ],
  },
  {
    id: "sibling-fights-fair-rules",
    title: "Sibling Fights All Day? Use Fair Rules Instead of Constant Policing",
    excerpt: "Cut daily conflict with clear family rules that both children understand and respect.",
    publishedAt: "2026-04-08",
    readMinutes: 6,
    coverImage: "/blog/siblings.svg",
    coverAlt: "Two siblings sharing toys on floor",
    content: [
      { type: "header", text: "From Referee Mode to Skill-Building Mode" },
      { type: "paragraph", text: "If sibling fights are nonstop, parents become exhausted referees. The fix is not louder correction; it is clearer rules plus repeatable repair." },
      { type: "image", src: "/blog/siblings.svg", alt: "Sibling conflict coaching", caption: "Conflict is a teachable skill." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "Children need short shared rules and a consistent conflict process. This builds fairness and reduces emotional escalation." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "When repair becomes routine, frequency and intensity of fights usually drop over time." },
      { type: "bullet", items: ["Gentle hands.", "One speaker at a time.", "Ask before taking."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Post rules in play area.", "Use timer-based turns for high-value toys.", "End with one repair action every time."] },
      { type: "paragraph", text: "Less policing, more coaching. That is how sibling conflict becomes growth instead of daily chaos." },
    ],
  },
  {
    id: "travel-with-toddler-no-meltdown-plan",
    title: "Traveling With a Toddler? Pack This No-Meltdown Survival Plan",
    excerpt: "A field-tested travel setup for meals, naps, delays, and unpredictable toddler moods.",
    publishedAt: "2026-04-04",
    readMinutes: 7,
    coverImage: "/blog/travel.svg",
    coverAlt: "Toddler travel essentials neatly packed",
    content: [
      { type: "header", text: "Design for Delays, Not Perfect Timelines" },
      { type: "paragraph", text: "Toddler travel breaks down fast when naps shift and hunger spikes. Survival depends on planning for disruption, not pretending everything will run on schedule." },
      { type: "image", src: "/blog/travel.svg", alt: "Toddler travel pouches", caption: "Pack by function for faster recovery." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "A functional kit and rhythmic sequence reduce chaos in queues, traffic, and unexpected waiting windows." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "Children stay calmer when the order of events feels familiar even if clock times move." },
      { type: "bullet", items: ["One grab pouch: snacks, wipes, change, toy.", "One health pouch: essentials approved by your doctor.", "Rotate short activities during waits."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Build pouches one day before travel.", "Plan snack windows, not exact meal times.", "Use calm sequence: snack, move, quiet, rest attempt."] },
      { type: "paragraph", text: "A recoverable trip is a successful trip. Calm planning helps toddlers borrow your regulation." },
    ],
  },
  {
    id: "working-parents-evening-connection-ritual",
    title: "Working Parents: The 12-Minute Evening Ritual Kids Remember Most",
    excerpt: "A short daily reconnection habit that strengthens attachment even on packed workdays.",
    publishedAt: "2026-03-30",
    readMinutes: 5,
    coverImage: "/blog/connection.svg",
    coverAlt: "Parent and child sharing quiet evening time",
    content: [
      { type: "header", text: "Protect Connection Even on Busy Days" },
      { type: "paragraph", text: "When workdays are packed, evenings can shrink into logistics only. A short reconnection ritual can still create deep emotional safety for children." },
      { type: "image", src: "/blog/connection.svg", alt: "Parent and child reading", caption: "Short, consistent rituals build strong attachment." },
      { type: "subheader", text: "What Is Really Happening" },
      { type: "paragraph", text: "Children remember repeated presence more than occasional grand gestures. Twelve focused minutes can reset connection after a long day." },
      { type: "subheader", text: "What To Do Next" },
      { type: "paragraph", text: "Use child-led play, reflective talk, and quiet closeness in a fixed sequence." },
      { type: "bullet", items: ["4 minutes child-led play.", "4 minutes open conversation.", "4 minutes cuddle or story."] },
      { type: "subheader", text: "Quick Action Plan" },
      { type: "number", items: ["Schedule the ritual before bedtime.", "Use one daily reflection question.", "Repeat for 2 weeks before evaluating impact."] },
      { type: "paragraph", text: "Connection is a practice, not an event. Consistent small rituals are what children carry for life." },
    ],
  },
];

export function getAllBlogs() {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogById(id: string) {
  return blogPosts.find((post) => post.id === id);
}
