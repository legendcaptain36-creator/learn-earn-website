const trends = [
  {
    name: "Make Money Online",
    category: "Money",
    description: "Freelancing, affiliate marketing and online services can turn skills into income.",
    opportunity: "Offer one skill as a freelance service, then add a digital product or affiliate links.",
    guide: {
      overview: "Making money online means selling a skill, a product or your attention to people on the internet. You can start with little or no money, but it usually takes weeks of steady effort before income shows up.",
      steps: [
        "Pick one skill you already have or can learn quickly, such as writing, design, video editing, teaching or organizing.",
        "Choose one way to earn from it: freelancing, a digital product, affiliate links, or content with sponsors.",
        "Build small proof of your work: 3 samples, a short profile, or a free version of your product.",
        "Show it where buyers already are, such as Fiverr, Upwork, Instagram, YouTube, WhatsApp groups or local businesses.",
        "Ask for your first paying customer, then improve based on their feedback and repeat."
      ],
      earn: [
        "Freelance services (writing, design, editing, virtual help)",
        "Digital products (templates, ebooks, guides)",
        "Affiliate commissions for recommending products",
        "Ads and sponsorships once you have an audience"
      ],
      tools: "A phone or laptop, a free Canva or CapCut account, a payment method such as UPI, PayPal or bank transfer, and a free profile on Fiverr, Upwork or Instagram.",
      mistakes: [
        "Trying five methods at once instead of one",
        "Waiting to feel ready before showing your work",
        "Paying for courses or tools before you have earned anything",
        "Quitting in the first month"
      ]
    }
  },
  {
    name: "AI Tools",
    category: "Technology",
    description: "AI tools are creating opportunities for content, services and automation.",
    opportunity: "Review AI tools, build prompt packs, or offer automation services to small businesses.",
    guide: {
      overview: "AI tools can write, design, edit and automate tasks in minutes. Businesses and creators pay people who can use them well to save time.",
      steps: [
        "Learn 2 or 3 tools well, such as ChatGPT, Claude, Canva or CapCut.",
        "Pick one problem to solve, for example product descriptions, social captions or summaries.",
        "Create 3 before-and-after samples that show the time or quality you save.",
        "Offer the service to small businesses, or sell prompt packs and templates.",
        "Collect reviews and raise your price as demand grows."
      ],
      earn: [
        "Done-for-you content or automation for businesses",
        "Prompt packs and templates",
        "Tutorials, reviews and affiliate links for AI tools",
        "Training small teams to use AI"
      ],
      tools: "Free versions of ChatGPT or Claude, Canva, CapCut, and a simple portfolio in Google Drive or a free page.",
      mistakes: [
        "Copying AI output without checking or editing it",
        "Promising results the tools cannot guarantee",
        "Selling generic work instead of one specific solution",
        "Ignoring privacy rules when handling client data"
      ]
    }
  },
  {
    name: "Short Form Video",
    category: "Content",
    description: "Short videos can be used to build audiences and promote products.",
    opportunity: "Start a niche Shorts or Reels channel, then earn from sponsors, affiliate links or your own products.",
    guide: {
      overview: "Short videos on YouTube Shorts, Reels and TikTok can reach thousands of people quickly. Income comes from what you sell or promote, not from views alone.",
      steps: [
        "Choose one niche you can post about at least 30 times, such as fitness, food, tech or study tips.",
        "Study 10 top videos in that niche and note their hooks and formats.",
        "Post one short video a day for 30 days, opening with a strong first three seconds.",
        "Add one clear call to action, such as a link in your bio to a product or free guide.",
        "Check which videos perform best and make more like them."
      ],
      earn: [
        "Brand sponsorships",
        "Affiliate links in your bio",
        "Your own products or services",
        "Platform bonus programs where available"
      ],
      tools: "Your phone camera, CapCut or InShot for editing, and a free link-in-bio page.",
      mistakes: [
        "Changing niche every week",
        "Posting without a hook in the first seconds",
        "Using music you do not have rights to",
        "Quitting before 30 to 60 posts"
      ]
    }
  },
  {
    name: "Digital Products",
    category: "Business",
    description: "Sell ebooks, templates, guides and other downloadable products.",
    opportunity: "Package what you know into a template, checklist or ebook and sell it again and again.",
    guide: {
      overview: "A digital product is made once and sold many times, like a template, planner, ebook or checklist. There is no shipping and no stock to manage.",
      steps: [
        "Find a small problem people already ask about, such as a study planner, budget sheet or resume template.",
        "Create a simple first version in Canva, Google Sheets or Notion.",
        "Turn it into a PDF or shareable link and write a short, clear description.",
        "List it on Gumroad, Etsy or your own page at a fair starting price.",
        "Share it in relevant communities and short videos, then improve it from feedback."
      ],
      earn: [
        "Direct sales of templates, ebooks and guides",
        "Bundles at a higher price",
        "Updates or memberships for repeat buyers"
      ],
      tools: "Canva, Google Sheets or Notion, and a platform such as Gumroad or Etsy.",
      mistakes: [
        "Making a huge product before testing demand",
        "Selling something that is free everywhere without adding value",
        "Using a weak title and cover image",
        "Never asking early buyers for feedback"
      ]
    }
  },
  {
    name: "Freelancing",
    category: "Career",
    description: "Businesses hire freelancers for writing, design, editing and development.",
    opportunity: "Pick one service, build a small portfolio, and pitch to clients on freelance platforms.",
    guide: {
      overview: "Freelancing means doing work for clients on your own terms, such as writing, design, editing or development. You trade time and skill for pay, and you can grow into higher rates.",
      steps: [
        "Choose one service and one type of client, for example logo design for small shops.",
        "Make 3 sample projects, even for imaginary clients.",
        "Create a profile on Fiverr, Upwork or LinkedIn with clear examples.",
        "Send 5 to 10 personal messages or proposals every day.",
        "Deliver on time, ask for a review, and raise your rates as reviews grow."
      ],
      earn: [
        "Fees per project",
        "Monthly retainers with repeat clients",
        "Higher rates for a specialized skill"
      ],
      tools: "A laptop or phone, a portfolio in Google Drive or Behance, and a payment method your platform supports.",
      mistakes: [
        "Offering everything to everyone",
        "Underpricing so much that it is hard to raise later",
        "Starting work without a clear scope",
        "Sending copy-paste proposals"
      ]
    }
  },
  {
    name: "Affiliate Marketing",
    category: "Marketing",
    description: "Earn a commission by recommending products people already want.",
    opportunity: "Write honest reviews or comparisons in a niche and add affiliate links.",
    guide: {
      overview: "Affiliate marketing pays you a commission when someone buys through your special link. You earn by being helpful and trusted, not by pushing products.",
      steps: [
        "Pick a niche where you can give honest advice, such as budget phones, study tools or home workouts.",
        "Join affiliate programs such as Amazon Associates or programs run by the product companies.",
        "Create helpful content, like comparisons, reviews and how-to videos that naturally use the product.",
        "Add your affiliate link and clearly say it is an affiliate link.",
        "Track which content gets clicks and make more of it."
      ],
      earn: [
        "Commissions on sales",
        "Recurring commissions on software subscriptions",
        "Bonuses for reaching targets"
      ],
      tools: "A free blog, YouTube channel or social account, plus accounts with affiliate programs.",
      mistakes: [
        "Recommending products you have not used",
        "Hiding that links are affiliate links",
        "Promoting too many products at once",
        "Expecting sales without an audience"
      ]
    }
  },
  {
    name: "Print on Demand",
    category: "Ecommerce",
    description: "Create designs and sell products without holding inventory.",
    opportunity: "Design t-shirts, mugs or posters for a niche audience and sell them with no stock to manage."
  },
  {
    name: "Fitness and Wellness",
    category: "Health",
    description: "People want simple workouts, healthy habits and home fitness plans.",
    opportunity: "Sell workout plans, run a coaching group, or create habit trackers and meal guides."
  },
  {
    name: "Online Courses",
    category: "Education",
    description: "Learning online keeps growing as people upgrade their skills.",
    opportunity: "Teach one specific skill as a short course, or run paid live workshops."
  },
  {
    name: "Social Media Management",
    category: "Marketing",
    description: "Small businesses need help posting consistently and growing their audience.",
    opportunity: "Offer monthly posting packages to local businesses and charge a retainer."
  },
  {
    name: "Faceless YouTube Channels",
    category: "Content",
    description: "Channels built on voiceovers and stock footage need no on-camera presence.",
    opportunity: "Pick a topic like finance, facts or tutorials, and earn from ads, sponsors and affiliate links."
  },
  {
    name: "Newsletter Business",
    category: "Content",
    description: "Email newsletters build loyal audiences that companies pay to reach.",
    opportunity: "Write a weekly newsletter on a niche, then earn from sponsors and paid subscriptions."
  },
  {
    name: "Sustainable Products",
    category: "Ecommerce",
    description: "Shoppers are choosing eco-friendly and reusable everyday products.",
    opportunity: "Sell or curate reusable and eco-friendly items, or start a review site for them."
  },
  {
    name: "Remote Work Tools",
    category: "Technology",
    description: "Remote and hybrid teams look for better ways to work and communicate.",
    opportunity: "Create templates, tutorials or reviews for productivity and collaboration tools."
  },
  {
    name: "Personal Finance",
    category: "Money",
    description: "People search for ways to budget, save and invest more wisely.",
    opportunity: "Sell budgeting spreadsheets, write guides, or start a finance content channel."
  },
  {
    name: "Pet Products",
    category: "Ecommerce",
    description: "Pet owners spend more each year on food, toys, health and accessories.",
    opportunity: "Start a pet niche store, print custom pet gifts, or review pet products."
  },
  {
    name: "Mental Health and Mindfulness",
    category: "Health",
    description: "Interest in meditation, journaling and stress relief keeps rising.",
    opportunity: "Create journals, guided audio or a mindful habits challenge people can pay to join."
  },
  {
    name: "Gaming and Streaming",
    category: "Entertainment",
    description: "Live streaming and gaming communities are big and highly engaged.",
    opportunity: "Stream or make guides for a game, then earn from subscriptions, donations and sponsors."
  },
  {
    name: "Local Services",
    category: "Business",
    description: "People want reliable local help such as cleaning, repairs and delivery.",
    opportunity: "Start a simple local service and get customers with maps listings and word of mouth."
  },
  {
    name: "Photo and Video Editing",
    category: "Creative",
    description: "Creators and businesses need polished photos, reels and videos.",
    opportunity: "Offer editing for creators, sell presets and templates, or teach editing basics."
  }
];
