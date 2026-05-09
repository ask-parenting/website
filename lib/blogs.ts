export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readMinutes: number;
  coverImage: string;
  coverAlt: string;
  content: string[];
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
      "If bedtime in your house feels like a nightly boxing match, you are not failing. You are likely running a routine that is 15% too late, 20% too stimulating, and 100% exhausting for everyone involved.",
      "Most sleep struggles are not about one big mistake. They are about tiny friction points stacking up: screens too close to lights-out, last-minute snacks, bargaining over one more story, and inconsistent wake-up times after rough nights. Children read this inconsistency as uncertainty, and uncertainty fuels resistance.",
      "Start with a 20-minute reset. Keep the sequence fixed every night: washroom, pajamas, one quiet activity, one story, lights out. Keep your tone steady and low. Do not negotiate steps once the routine starts. Predictability lowers anxiety, and lower anxiety reduces pushback.",
      "If your child gets out of bed repeatedly, respond with the same short line each time: 'It is sleep time. I am right here.' Return them calmly without a lecture. Repetition may feel slow for 3-4 days, but it usually wins by day 7 because the boundary becomes boring and clear.",
      "Track only two numbers for a week: time in bed and number of exits. When those improve, celebrate quietly in the morning. You do not need a perfect sleeper. You need a calmer night than yesterday, and that is exactly how families build sleep stability." 
    ]
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
      "When dinner turns into tears, bribing, and threats, it is easy to think your child is stubborn. Usually, they are overwhelmed. New textures, strong smells, and pressure to 'finish everything' can make food feel like a test they are destined to fail.",
      "Try the 3-plate method for the next 10 days. Plate one is safe food your child already accepts. Plate two is a familiar food prepared differently. Plate three is a tiny exposure bite of something new. This reduces fear because every meal contains a guaranteed success option.",
      "Your job is structure: what, when, and where food is offered. Your child chooses whether and how much to eat. This division of responsibility lowers power struggles quickly. It also prevents the common trap of turning dessert into a reward and vegetables into punishment.",
      "Use neutral language: 'You can lick it, smell it, or leave it.' Exposure still counts even if the food is not swallowed. Research and real-world parenting both show that repeated low-pressure exposure builds acceptance more reliably than forcing bites.",
      "If growth is on track and energy is stable, progress should be measured in behavior, not clean plates. Fewer meltdowns, more table time, and occasional curiosity are major wins. Calm consistency feeds confidence, and confidence eventually feeds appetite."
    ]
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
      "The worst part of a public tantrum is not the crying. It is the instant panic in your chest when you feel judged by strangers while your child melts down at maximum volume.",
      "In that moment, use four lines only. Line 1: 'You are upset.' Line 2: 'I am here.' Line 3: 'We are safe.' Line 4: 'When your body is calm, we can choose.' Short language helps because a dysregulated child cannot process long explanations.",
      "Do not add threats, bargains, or lectures mid-storm. Those strategies feel logical to adults but usually increase emotional load for children. Instead, move to a lower-stimulation corner, kneel to their level, and breathe slower than usual so your nervous system leads the room.",
      "After calm returns, offer two acceptable choices: 'Walk or hold hands?' 'Apple or banana?' Choice restores agency without handing over control. Children cooperate more when they feel seen and guided, not cornered.",
      "Later that evening, rehearse the same event during play with dolls or stuffed toys. Practice turns future chaos into a known pattern. The goal is not zero tantrums forever. The goal is shorter tantrums with faster recovery."
    ]
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
      "If your newborn is awake every two hours, you do not need motivation. You need a system. Sleep deprivation turns tiny misunderstandings into major arguments, especially when both caregivers feel they are carrying more than the other.",
      "Create explicit shifts, not vague intentions. Example: Caregiver A handles 9:30 PM-2:00 AM, Caregiver B handles 2:00 AM-6:00 AM. The off-shift person sleeps in a separate quiet zone when possible. Protected sleep blocks are more restorative than random naps.",
      "Prepare a night station before bedtime: diapers, wipes, extra onesie, burp cloth, water, and feeding supplies within arm's reach. Reducing midnight hunting keeps babies calmer and caregivers less frustrated.",
      "Use a one-line handoff note at shift change: last feed time, diaper, mood, and any concerns. This prevents repeated questioning and helps both adults feel informed. Mental load drops when information transfer is simple and consistent.",
      "This phase is temporary, but burnout can last longer if ignored. If both adults are stretched thin, ask one trusted person for one protected 3-hour block this week. Strategic help is not weakness; it is smart recovery planning."
    ]
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
      "One scroll through social media can make any parent feel late. Another baby is speaking in sentences, climbing stairs, and identifying colors while your child is still figuring out one of those skills.",
      "Milestones are ranges, not deadlines. Children often surge in one domain while moving slowly in another. Language, motor, social, and emotional skills do not always progress in sync, and that variation can still be normal.",
      "Replace comparison with tracking. Pick four weekly observations: communication attempt, movement skill, social response, and self-help behavior. Write one sentence for each. Pattern awareness is far more useful than random memory during pediatric visits.",
      "Watch for persistence, not perfection. If a skill is missing and no new attempts appear over several weeks, discuss it early with your pediatrician. Early conversations reduce anxiety because they replace guessing with informed next steps.",
      "Your child does not need to be first. They need support, repetition, and a parent who can notice progress even when it is subtle. Confidence grows when tracking is grounded in data, not in comparison."
    ]
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
      "If your mornings start with 'Where are your shoes?' and end with everyone leaving upset, the issue is usually workflow, not attitude. Children struggle when too many decisions appear at once.",
      "Front-load decisions the night before. Lay out clothes, pack bags, fill water bottles, and place shoes at the door. Morning brain is low-capacity for adults and children alike, so fewer choices means less conflict.",
      "Use a visual 4-step board: wash, dress, eat, out. Keep it visible at child height. Visual cues reduce repeated verbal reminders and help children self-initiate. Small autonomy here creates huge time savings over a week.",
      "If one step repeatedly fails, shrink it. For breakfast delays, offer two fixed options only. For dressing delays, choose outfits in advance for 3 days. Simplification beats constant correction.",
      "Measure success by departure calmness, not perfection. A morning with fewer arguments is a structural win. Once stability appears, you can layer extras like reading time or music." 
    ]
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
      "Most parents are not asking 'Should screens exist?' They are asking 'How do I stop screens from running the house?' The guilt comes from inconsistency, not from occasional cartoons.",
      "Start with a family media rule that is concrete: when, where, and how long. Example: weekdays after snack for 30 minutes, no screens during meals, and no devices in bedrooms at night.",
      "Make transitions predictable with a 5-minute warning and a visible timer. Sudden stops trigger power struggles because children feel control is being removed without notice. Predictable endings reduce friction.",
      "Anchor screens to routine, not behavior labels like 'good' or 'bad.' If screens become a reward for compliance, you unintentionally increase their emotional power. Neutral placement keeps screens in proportion.",
      "Finally, protect one daily tech-free family ritual: dinner talk, a walk, or bedtime stories. That ritual matters more than chasing perfect screen minutes because it strengthens connection consistently."
    ]
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
      "When siblings fight every hour, parents often become full-time referees. That drains everyone and still does not teach the core skills children need: turn-taking, repair, and respectful boundaries.",
      "Create three house rules and post them where they play: gentle hands, one speaker at a time, and ask before taking. Keep language short and concrete. Long rule lists collapse under stress.",
      "During conflict, do not hunt for the villain first. Coach process first: separate safely, regulate breathing, then hear each side. Children learn faster when they see conflict handled as a skill, not as a courtroom trial.",
      "Use timed turns for high-value toys and keep a visible timer nearby. This prevents repeated fairness arguments and reduces parental negotiation load. Predictable systems are quieter than repeated warnings.",
      "End each repaired conflict with one positive reconnection action: high-five, apology sentence, or shared task. Repair is the real outcome. Over time, siblings who practice repair fight less and recover faster."
    ]
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
      "Travel days with toddlers can feel like a live emergency drill: missed naps, snack drama, bathroom panic, and sudden tears in the longest queue of the day.",
      "Pack by function, not by category. Keep one grab pouch with snacks, wipes, one change of clothes, tiny toy, and comfort item. Keep another pouch for health: thermometer, medicines approved by your doctor, and hydration essentials.",
      "Protect rhythm over schedule. If timing shifts, keep sequence stable: snack, movement, calm activity, rest attempt. Familiar order gives children a sense of control even when surroundings change.",
      "For long waits, rotate 10-minute activity blocks: sticker book, window spotting game, snack, story audio, stretch break. Rotation prevents boredom spikes that often trigger meltdowns.",
      "Your goal is not a flawless trip. It is a recoverable one. When parents plan for delays instead of fighting them, toddlers borrow that calm and travel becomes manageable."
    ]
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
      "If work drains your day, evenings can become logistics only: dinner, bath, cleanup, sleep. Then guilt sneaks in and whispers that you are missing your child's childhood in fast-forward.",
      "Try a 12-minute reconnection ritual before bed. Split it into 4 minutes of child-led play, 4 minutes of talk, and 4 minutes of physical closeness like cuddling or reading.",
      "Child-led means no teaching and no correcting. Follow their game, mirror their excitement, and name what you notice. This strengthens emotional safety faster than long lectures or expensive activities.",
      "In the talk segment, use one question: 'What felt hard today, and what felt good?' Keep your response curious, not corrective. Children open up more when they sense listening without immediate fixing.",
      "Twelve consistent minutes beat one occasional perfect weekend. Connection is built through repeatable rituals, and repeatable rituals are exactly what busy families can sustain."
    ]
  }
];

export function getAllBlogs() {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogById(id: string) {
  return blogPosts.find((post) => post.id === id);
}
