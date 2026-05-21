import { Icons } from "@/utils/Icons";

export const landingPageData = {
  header: {
    logo: "/assets/logo.png",
    nav: [
      { label: "Home", href: "/", active: true },
      { label: "Informations", href: "/pending", hasDropdown: true },
      { label: "Who are we?", href: "/#who" },
      { label: "Registration", href: "https://app.precisionplaysoccer.com/register" },
      { label: "Partners", href: "/pending", hasDropdown: true },
      { label: "Ambassadors", href: "/pending" },
    ],
    cta: { label: "Contact Us", href: "/pending" },
  },
  hero: {
    badge: "2026 TRYOUTS",
    profiles: ["/p1.png", "/p2.png", "/p3.png"],
    date: "*5.1K trusted by members",
    title: "The Most Prestigious Soccer Tryout Camp in North America Returns",
    subtitle: "Get scouted & get a chance to go to the next level",
    ctaPrimary: { label: "Register now", href: "#registration" },
    ctaSecondary: { label: "Try Out Sample", href: "/pending" },
  },
  promise: {
    title: "The Promise of Elite Selection",
    description: "At Precision Play Soccer, we are committed to scouting, developing, and showcasing the most promising talent in North America. We look for players who demonstrate advanced technique, game intelligence, and a standout mindset.",
    moreLink: { label: "Explore our Experience", href: "/pending" },
    gallery: [
      { title: "Face the Titans of French Football", description: "Test yourself against the highest standards by competing with elite academies in France", image: "/assets/promise1.png" },
      { title: "Recruiters from All Over the World", description: "", image: "/assets/promise2.png" },
      { title: "Seize the Opportunity of a Lifetime", description: "", image: "/assets/jeremy.png" },
    ],
  },
  officialTryouts: {
    title: "Official Tryouts & Matches",
    description: "Participate in structured tryouts and competitive matches designed to replicate real professional evaluation environments.",
    matches: "We believe in holistic player development. Our approach nurtures not only football skills but also mental strength, emotional intelligence, and academic awareness — ensuring our players succeed on and off the pitch.",
    videoPlaceholder: "/assets/Official.png",
  },
  features: [
    {
      id: "who",
      badge: "Who its For ",
      title: "Built for Ambitious Players Ready to Take the Next Step",
      items: ["Age U14–U23", "Talented players seeking pro pathways", "Families looking for serious opportunities"],
      image: "/assets/who.png",
      reverse: false,
    },
    {
      id: "howitwork",
      badge: "How it Works",
      title: "A Clear, Structured Journey From Registration to Evaluation",
      description: "",
      image: "/assets/howitwork.png",
      reverse: true,
    },
    {
      id: "value",
      badge: "Our values",
      title: "Built on Integrity and Excellence Teams",
      items: [
        { label: "Discipline", icon: Icons.check },
        { label: "Ambition", icon: Icons.check },
        { label: "Respect", icon: Icons.check },
        { label: "Resilience", icon: Icons.check },
      ],
      image: "/assets/howitwork2.png",
      reverse: false,
    },
  ],
  team: {
    title: "Expert Team & Credibility",
    members: [
      { name: "Mathieu Bodmer", role: "Sporting Director, Le Havre AC", image: "/assets/mathieu.png" },
      { name: "Jérémy Pastel ", role: "FIFA Agent & Co-Founder", image: "/assets/jerem.png" },
      { name: "Hanane Bodmer", role: "Management & Logistic manager", image: "/assets/angela.png" },
      { name: "Marc Delma", role: "Marketing & Communication manager", image: "/assets/mark.png" },
    ],
  },
  testimonials: {
    badge: "Testimonial",
    title: "Proof That Hard Work Pays Off",
    subtitle: "Real stories from people who transformed their lives with us.",
    items: [
      {
        name: "Edward Sean",
        role: "Program Participant",
        text: "“This was more than a tryout. The evaluation was professional, honest, and helped me understand exactly where I stand and what to improve”",
        image: "/assets/proof1.png",
      },
      {
        name: "",
        role: "",
        text: "“This was more than a tryout. The evaluation was professional, honest, and helped me understand exactly where I stand and what to improve”",
        image: "/assets/proof2.png",
      },
    ],
  },

  registration: {
    badge: "Registration",
    title: "Register for the Precision Play Soccer Tryouts",
    points: [
      {
        icon: Icons.percent,
        title: "Early Registration",
        description: "Special discounted rate for early applicants. Limited availability.",
      },
      {
        icon: Icons.Diamond,
        title: "Regular Registration",
        description: "Pricing varies by availability. Early registration is limited and offered on a first-come, first-served basis.",
      },
    ],
    footnote: "Pricing varies by availability. Early registration is limited and offered on a first-come, first-served basis.",
    form: {
      title: "Create an account.",
      signinText: "Already have an account?",
      signinLink: "Sign In",
      fields: [
        { name: "name", placeholder: "Name", type: "text" },
        { name: "email", placeholder: "E-mail", type: "email" },
        { name: "password", placeholder: "Password", type: "password" },
      ],
      terms: {
        prefix: "By login you agree to our ",
        termsLink: { label: "Terms of User", href: "/pending" },
        separator: " and ",
        privacyLink: { label: "Privacy Policy", href: "/pending" },
      },
      cta: "Register Now",
    },
  },
  faq: {
    badge: "FAQs",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can I freeze or cancel my membership?",
        answer: "Absolutely. You can freeze your membership for up to 2 months per year or cancel anytime after your initial contract period.",
      },
      {
        question: "What facilities do you offer?",
        answer: "We offer state-of-the-art training facilities including full-size pitches, gym, video analysis rooms, and recovery suites.",
      },
      {
        question: "What are your opening hours?",
        answer: "We are open Monday to Friday 6am–10pm, Saturday 7am–8pm, and Sunday 8am–6pm.",
      },
      {
        question: "Do you offer trial memberships?",
        answer: "Yes, we offer a 7-day free trial so you can experience everything before committing.",
      },
      {
        question: "Is parking available?",
        answer: "Yes, free parking is available on site for all members and visitors.",
      },
    ],
  },

  footer: {
    cta: {
      title: "Need Help to Joining Us?",
      subtitle: "From beginners to athletes our expert coaches and modern facilities are here to power your performance.",
      phones: [
        { label: "USA", number: "1-888-992-3167" },
        { label: "Canada", number: "1-855-752-9762" },
      ],
      ctaLabel: "Contact Us",
      backgroundImage: "/assets/footer-bg.png", // swap with your actual image
    },
    logo: "/assets/white-logo.png", // swap with your actual logo
    tagline: "Precision Play soccer is your home for fitness excellence from beginners to pros, we help you reach your full potential.",
    socials: [
      { icon: Icons.tiktok, href: "#" },
      { icon: Icons.instagram, href: "https://www.instagram.com/precisionplaysoccercamps/" },
      { icon: Icons.youtube, href: "#" },
      { icon: Icons.X, href: "#" },
    ],
    sections: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", href: "/" },
          { label: "About Us", href: "/#who" },
          { label: "Facilities", href: "/#tryouts" },
          { label: "Programs", href: "/#registration" },
          { label: "Trainers", href: "/pending" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "@mathieu_bodmer", href: "https://www.instagram.com/mathieu_bodmer/" },
          { label: "@iamjeremypastel", href: "https://www.instagram.com/iamjeremypastel/" },
          { label: "@boostmysport", href: "https://www.instagram.com/boostmysport/" },
          { label: "@precisionplaysoccercamps", href: "https://www.instagram.com/precisionplaysoccercamps/" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/pending" },
          { label: "FAQs", href: "/#faq" },
          { label: "Contact Us", href: "/pending" },
        ],
      },
    ],
    copyright: "© 2025 Precision Play Soccer. All rights reserved.",
  },
};
