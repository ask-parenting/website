export interface HelpTopic {
  icon: string;
  title: string;
  question: string;
  description: string;
}

export interface FeatureStat {
  value: string;
  label: string;
}

export interface ParentSuccessMessage {
  name: string;
  rating: 4.25 | 4.5 | 4.75 | 5;
  scenario: string;
  reviewedAt: string;
}

export const helpTopics: HelpTopic[] = [
  {
    icon: "🥣",
    title: "Feeding",
    question: "\"My baby isn't eating properly\"",
    description: "Get simple, age-appropriate meal ideas and tips",
  },
  {
    icon: "😴",
    title: "Sleep",
    question: "\"Why is my baby waking up at night?\"",
    description: "Understand patterns and build better routines",
  },
  {
    icon: "🧠",
    title: "Child Development",
    question: "\"Is my child growing normally?\"",
    description: "Know what to expect at every stage",
  },
  {
    icon: "📈",
    title: "Milestones",
    question: "\"Should my baby be crawling yet?\"",
    description: "Track and understand progress without stress",
  },
  {
    icon: "💛",
    title: "Everyday Parenting",
    question: "Tantrums, routines, habits",
    description: "We're here for it all",
  },
];

export const whyParentsLove: string[] = [
  "No judgment — only support",
  "Simple advice, not overwhelming information",
  "Personalized to your child's age",
  "Available 24/7 — even at 2 AM",
];

export const parentSuccessMessages: ParentSuccessMessage[] = [
  {
    name: "Harleen",
    rating: 5,
    scenario: "My 9-month-old was refusing solids for days. The day-wise plan helped us restart gently by the weekend.",
    reviewedAt: "2026-02-03T21:14:00+05:30",
  },
  {
    name: "Imran",
    rating: 4.75,
    scenario: "At 2 AM my child had fever. The checklist showed what to track first and when to call the doctor.",
    reviewedAt: "2026-04-11T06:42:00+05:30",
  },
  {
    name: "Rukmini",
    rating: 4.5,
    scenario: "Bedtime tantrums were daily. We followed the calming routine and nights improved within a week.",
    reviewedAt: "2026-03-19T20:05:00+05:30",
  },
  {
    name: "Madhumita",
    rating: 4.25,
    scenario: "I worried about milestones. The age-wise guidance clarified what to watch now versus later.",
    reviewedAt: "2026-02-27T11:31:00+05:30",
  },
  {
    name: "Dhiren",
    rating: 5,
    scenario: "We had a long train journey with our toddler and I expected full chaos. The chat gave practical tips for snacks, water, and nap timing during delays, and honestly the trip went far better than usual.",
    reviewedAt: "2026-04-02T17:56:00+05:30",
  },
  {
    name: "Thoibi",
    rating: 4.75,
    scenario: "My son kept waking at night. The sleep steps were practical, and we got longer stretches in a few days.",
    reviewedAt: "2026-01-28T22:23:00+05:30",
  },
  {
    name: "Pranab",
    rating: 4.5,
    scenario: "I used to miss vaccine follow-ups. The reminders are timely and clear, so we are on schedule now.",
    reviewedAt: "2026-04-14T09:10:00+05:30",
  },
  {
    name: "Nivedita",
    rating: 4.25,
    scenario: "After delivery I had nonstop feeding doubts. The replies were practical and easy to apply.",
    reviewedAt: "2026-03-07T14:48:00+05:30",
  },
  {
    name: "Jasmeet",
    rating: 5,
    scenario: "My daughter stopped napping and evenings were tough. Daytime activity tips improved her mood quickly.",
    reviewedAt: "2026-02-15T19:39:00+05:30",
  },
  {
    name: "Tsering",
    rating: 4.75,
    scenario: "I was unsure whether my son\'s speech delay was within range. The app helped me track weekly patterns and prepare focused questions, so our pediatric visit felt informed instead of anxious.",
    reviewedAt: "2026-04-20T07:27:00+05:30",
  },
  {
    name: "Kavitha",
    rating: 4.5,
    scenario: "Introducing foods felt risky. The weekly plan made testing and logging reactions simple.",
    reviewedAt: "2026-03-25T12:16:00+05:30",
  },
  {
    name: "Naveen",
    rating: 4.25,
    scenario: "With twins, sleep timings were opposite. Personalized suggestions helped us set two workable routines.",
    reviewedAt: "2026-02-09T18:01:00+05:30",
  },
  {
    name: "Zoya",
    rating: 5,
    scenario: "Potty training had stalled for months. The gentle prompts changed our approach and helped us progress.",
    reviewedAt: "2026-04-06T10:53:00+05:30",
  },
  {
    name: "Bimal",
    rating: 4.75,
    scenario: "My toddler kept skipping meals. The portion and timing suggestions improved appetite quickly.",
    reviewedAt: "2026-03-02T21:36:00+05:30",
  },
  {
    name: "Revathi",
    rating: 4.5,
    scenario: "After a very difficult day, I just needed someone to guide me calmly. The instant response gave me a two-step bedtime plan I could use right away.",
    reviewedAt: "2026-01-30T16:44:00+05:30",
  },
  {
    name: "Lalthlamuani",
    rating: 4.25,
    scenario: "I did not know how to track progress. The weekly check-in format made consistency easy.",
    reviewedAt: "2026-04-18T08:12:00+05:30",
  },
  {
    name: "Chaitali",
    rating: 5,
    scenario: "Once daycare infections started, symptom guidance helped me manage home care with confidence.",
    reviewedAt: "2026-02-21T13:29:00+05:30",
  },
  {
    name: "Farooq",
    rating: 4.75,
    scenario: "Picky eating had turned dinner into a daily argument. The practical meal swaps reduced stress and gave us a realistic weekly rotation without extra cooking.",
    reviewedAt: "2026-03-30T20:22:00+05:30",
  },
  {
    name: "Shalini",
    rating: 4.5,
    scenario: "I was overwhelmed by random tips online. Here the advice is clear, age-specific, and kind.",
    reviewedAt: "2026-02-12T07:58:00+05:30",
  },
  {
    name: "Sonam",
    rating: 4.25,
    scenario: "Late-night cough episodes scared us. Guided next steps helped us monitor safely till morning.",
    reviewedAt: "2026-04-09T23:05:00+05:30",
  },
];

export const howItWorksSteps: string[] = [
  "Tap \"Start on WhatsApp\"",
  "Ask anything about your child",
  "Get calm, helpful guidance instantly",
];

export const whatsappOptInConsentText =
  "By messaging us, you agree to receive WhatsApp replies from Parenting AI (AvNeer Solutions Pvt Ltd). Reply STOP anytime to opt out.";

export const heroStats: FeatureStat[] = [
  { value: "0 Apps", label: "Required" },
  { value: "0 Signup", label: "Friction" },
  { value: "24/7", label: "Support" },
];

export const faqs = [
  {
    question: "Is Parenting AI a replacement for a doctor?",
    answer:
      "No. It is educational support only. For diagnosis, treatment, or emergencies, contact a licensed doctor or emergency services immediately.",
  },
  {
    question: "Who is this for?",
    answer:
      "Parents and caregivers from pregnancy planning and newborn stage through early childhood (up to around 5 years).",
  },
  {
    question: "How does it work?",
    answer:
      "Tap Start on WhatsApp, send the prefilled message, and ask your question. No separate app install is needed.",
  },
  {
    question: "How fast are replies?",
    answer:
      "Replies are usually near-instant on WhatsApp, but timing can vary based on network and system load.",
  },
  {
    question: "What can I ask about?",
    answer:
      "Feeding, sleep, milestones, behavior, routines, and day-to-day parenting concerns.",
  },
  {
    question: "Do you sell my personal data?",
    answer: "No. We do not sell personal data.",
  },
  {
    question: "Can I stop messages?",
    answer:
      "Yes. Reply STOP on WhatsApp anytime, or email hello@askparenting.com with the subject line Opt out.",
  },
  {
    question: "Can I delete my data?",
    answer:
      "Yes. Email hello@askparenting.com with the subject line Delete my data. We process verified requests as per our Privacy Policy.",
  },
  {
    question: "Can both parents use it?",
    answer:
      "Yes. Both caregivers can use the service and share child updates clearly in chat.",
  },
  {
    question: "Do you send reminders?",
    answer:
      "If reminders are enabled, you may receive practical follow-up messages. You can ask to stop or change them anytime.",
  },
  {
    question: "Does guidance consider my child's age?",
    answer:
      "Yes. Share your child's age (or due date) so guidance can be age-appropriate.",
  },
  {
    question: "Can I use this while traveling?",
    answer: "Yes, as long as your WhatsApp works in that location.",
  },
];

export const aboutParagraphs: string[] = [
  "We are a team of IIM alumni, building a modern parenting companion for today's families.",
  "Parenting was once guided by generations, where grandparents and close communities passed down invaluable wisdom. But for many new age parents today, that support system is no longer easily accessible.",
  "At the same time, evolving lifestyles, nuclear families, and busy routines have made parenting more complex and often overwhelming.",
  "We created this platform to bridge that gap.",
  "Our parenting companion is designed to combine the warmth of traditional wisdom with the reliability of modern knowledge. It is informed by insights from thousands of trusted parenting resources, including books, global guidelines, and recommendations from doctors and pediatric experts, to provide guidance that is both practical and reassuring.",
  "Our mission is simple:",
  "To give parents calm, reliable guidance anytime they need it.",
  "From feeding and sleep to milestones and everyday concerns, we are here to support you at every step, like a trusted guide always within reach.",
];
