export const case001 = {
  caseId: "case-001",

  title: "The Midnight Necklace",

  subtitle: "A vanished jewel and a silent study",

  status: "open",

  briefing:
    "During a private gathering at Arjun Malhotra's home, his one-of-a-kind diamond necklace disappears from a locked study. Minutes later, Arjun is found unconscious inside the same study. The main gate was secured, and everyone present remained inside the house. Someone in the house stole the necklace — and someone knows more than they are saying.",

  victim: "Arjun Malhotra",

  suspects: [
    {
      id: "rahul",
      name: "Rahul Malhotra",
      role: "Younger brother",
      description:
        "A 35-year-old real-estate businessman struggling with serious debt. He recently asked Arjun for financial help and was refused.",
      statement:
        "I left the house around 10:30 PM. I had no reason to go upstairs after that.",
      alibi:
        "Claims he left around 10:30 PM, but later evidence shows he returned to the property."
    },

    {
      id: "ananya",
      name: "Ananya Mehta",
      role: "Business partner",
      description:
        "Arjun's business partner. Her company recently suffered a financial discrepancy that could damage her reputation if discovered.",
      statement:
        "I stayed downstairs with the other guests. I never went near Arjun's study.",
      alibi:
        "Several guests can place her downstairs during the critical period, although she is hiding the reason for her financial movements."
    },

    {
      id: "vikram",
      name: "Vikram Sharma",
      role: "House manager and personal assistant",
      description:
        "Arjun's trusted house manager for eleven years. He knows the house layout, security system, daily routines, and where valuable items are kept.",
      statement:
        "I was helping the guests downstairs. I heard a noise from the study later and went upstairs to check on Mr. Malhotra.",
      alibi:
        "Claims he was downstairs for most of the critical period."
    },

    {
      id: "priya",
      name: "Priya Malhotra",
      role: "Daughter",
      description:
        "Arjun's 21-year-old daughter and a university student. She knows the house extremely well and has access to several areas of the property.",
      statement:
        "I stayed in my room after dinner. I didn't go into Dad's study tonight.",
      alibi:
        "Claims she remained in her room, but she was seen moving through the upstairs hallway earlier."
    }
  ],

  evidence: [
    {
      id: "evidence-1",
      title: "Study Lock Log",
      type: "Digital",
      description:
        "The electronic lock records show the study was opened at 11:31 PM using Vikram's manager key. The door was locked again two minutes later.",
      discoveredAt: "Study"
    },

    {
      id: "evidence-2",
      title: "Empty Jewelry Case",
      type: "Physical",
      description:
        "The necklace's presentation case is inside the study drawer. The drawer is already open when Priya later enters the room. The case is empty.",
      discoveredAt: "Study"
    },

    {
      id: "evidence-3",
      title: "Broken Cufflink",
      type: "Physical",
      description:
        "A silver cufflink engraved with the initials 'VS' is found beneath the edge of the study desk.",
      discoveredAt: "Study"
    },

    {
      id: "evidence-4",
      title: "Financial Documents",
      type: "Document",
      description:
        "Documents found in the garage show Rahul had significant debts and had recently asked Arjun for money. They also indicate Rahul returned to the property after claiming he had left.",
      discoveredAt: "Garage"
    },

    {
      id: "evidence-5",
      title: "Unusual Business Transfer",
      type: "Digital",
      description:
        "Ananya secretly transferred company funds to cover a financial discrepancy. The transaction gives her a possible motive to hide information, but does not place her in the study.",
      discoveredAt: "Study of business records"
    },

    {
      id: "evidence-6",
      title: "Rival Jeweller Message",
      type: "Digital",
      description:
        "A message on Vikram's phone shows that Varenya Jewels had offered him money for confidential information about Arjun's upcoming necklace collection.",
      discoveredAt: "Vikram's phone"
    },

    {
      id: "evidence-7",
      title: "Arjun's Torn Shirt",
      type: "Physical",
      description:
        "A torn section of Arjun's shirt and bruising around his shoulder indicate that he was involved in a physical struggle shortly before being found unconscious.",
      discoveredAt: "Study"
    },

    {
      id: "evidence-8",
      title: "Garage Envelope",
      type: "Physical",
      description:
        "An envelope containing Rahul's private financial documents is found in the garage. Rahul had secretly returned to retrieve it.",
      discoveredAt: "Garage"
    },

    {
      id: "evidence-9",
      title: "Study Floor Mark",
      type: "Physical",
      description:
        "A faint scuff mark runs from the desk toward the study doorway, consistent with someone moving quickly away from the desk after a struggle.",
      discoveredAt: "Study"
    }
  ],

  timeline: [
    {
      time: "10:20 PM",
      event:
        "Arjun tells the guests that he will show them the one-of-a-kind diamond necklace later that evening."
    },

    {
      time: "10:30 PM",
      event:
        "Rahul claims he leaves the property after an argument with Arjun."
    },

    {
      time: "10:42 PM",
      event:
        "Priya secretly enters the study looking for money. She leaves after finding nothing useful."
    },

    {
      time: "11:05 PM",
      event:
        "Arjun takes the necklace into the study and places it inside its presentation case."
    },

    {
      time: "11:18 PM",
      event:
        "Rahul secretly returns to the property and goes toward the garage to retrieve his financial documents."
    },

    {
      time: "11:26 PM",
      event:
        "Ananya moves briefly toward the hallway but is seen returning downstairs shortly afterward."
    },

    {
      time: "11:31 PM",
      event:
        "The electronic study lock records an entry using Vikram's manager key."
    },

    {
      time: "11:33 PM",
      event:
        "The study lock records the door being secured again."
    },

    {
      time: "11:36 PM",
      event:
        "Arjun enters the study and discovers that the necklace is missing."
    },

    {
      time: "11:38 PM",
      event:
        "Arjun confronts Vikram about the missing necklace."
    },

    {
      time: "11:40 PM",
      event:
        "A physical struggle occurs inside the study. Arjun is struck and falls unconscious."
    },

    {
      time: "11:41 PM",
      event:
        "Vikram hears someone approaching the study and leaves the room, blending back into the gathering."
    },

    {
      time: "11:45 PM",
      event:
        "Priya goes upstairs, discovers Arjun unconscious, and raises the alarm."
    }
  ],

  solution: {
    culpritId: "vikram",

    attackSuspectId: "vikram",

    necklaceLocation: "hidden inside the locked compartment of the garage storage cabinet",

    explanation:
      "Vikram planned to steal the necklace after learning that Arjun intended to replace him and after receiving an offer from rival jeweller Varenya Jewels for confidential information. He used his manager key to enter the study at 11:31 PM, took the necklace, and secured the room again. When Arjun later discovered the necklace was missing, he confronted Vikram. Vikram panicked and attacked him. After hearing someone approaching, Vikram left the study and returned to the gathering, where the secured main gate made an outside escape impossible. The other suspects have convincing motives and hidden secrets, but their movements and evidence do not place them in the study during the theft."
  }
};