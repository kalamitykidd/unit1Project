document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start-btn").addEventListener("click", function () {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("reading-screen").style.display = "block";
  });
  //Add all the tarot cards
  const tarotDeck = [
    {
      name: "The Fool",
      image: "Cards-jpg/00-TheFool.jpg",
      meaning: "New beginnings, spontaneity, adventure.",
      details: "Represents fresh starts, adventure, and trusting the journey",
    },
    {
      name: "The Magician",
      image: "Cards-jpg/01-TheMagician.jpg",
      meaning: "Power, skill, resourcefulness.",
      details: "You have the tools and ability to create your reality.",
    },
    {
      name: "The High Priestess",
      image: "Cards-jpg/02-TheHighPriestess.jpg",
      meaning: "Intuition, mystery, wisdom.",
      details:
        "Encourages listening to your inner voice and seeking hidden truths.",
    },
    {
      name: "The Empress",
      image: "Cards-jpg/03-TheEmpress.jpg",
      meaning: "Abundance, fertility, nature.",
      details: "Symbolizes fertility, growth, and connection with nature",
    },
    {
      name: "The Emperor",
      image: "Cards-jpg/04-TheEmperor.jpg",
      meaning: "Authority, structure, stability.",
      details: "Represents leadership, discipline, and taking control.",
    },
    {
      name: "The Hierophant",
      image: "Cards-jpg/05-TheHierophant.jpg",
      meaning: "Tradition, wisdom, guidance.",
      details: "Suggests learning, spiritual guidance, and societal norms.",
    },
    {
      name: "The Lovers",
      image: "Cards-jpg/06-TheLovers.jpg",
      meaning: "Union, choices, harmony.",
      details: "Represents love, relationships, and moral dilemmas.",
    },
    {
      name: "The Chariot",
      image: "Cards-jpg/07-TheChariot.jpg",
      meaning: "Willpower, determination, control.",
      details: "Encourages focused action and overcoming obstacles.",
    },
    {
      name: "Strength",
      image: "Cards-jpg/08-Strength.jpg",
      meaning: "Courage, patience, inner power.",
      details: "Represents emotional strength, resilience, and compassion.",
    },
    {
      name: "The Hermit",
      image: "Cards-jpg/09-TheHermit.jpg",
      meaning: " Introspection, solitude, wisdom.",
      details: "Encourages deep reflection and soul-searching.",
    },
    {
      name: "Wheel of Fortune",
      image: "Cards-jpg/10-WheelOfFortune.jpg",
      meaning: " Destiny, change, cycles.",
      details: "Represents life’s ups and downs, luck, and fate.",
    },
    {
      name: "Justice",
      image: "Cards-jpg/11-Justice.jpg",
      meaning: "Fairness, truth, balance",
      details: "Symbolizes karma, legal matters, and ethical decisions.",
    },
    {
      name: "The Hanged Man",
      image: "Cards-jpg/12-TheHangedMan.jpg",
      meaning: "Surrender, perspective, pause.",
      details: "Encourages letting go and seeing things from a new angle",
    },
    {
      name: "Death",
      image: "Cards-jpg/13-Death.jpg",
      meaning: "Transformation, endings, renewal.",
      details: "Represents necessary change and rebirth.",
    },
    {
      name: "Temperance",
      image: "Cards-jpg/14-Temperance.jpg",
      meaning: "Balance, moderation, harmony.",
      details: "Encourages patience, blending, and finding middle ground",
    },
    {
      name: "The Devil",
      image: "Cards-jpg/15-TheDevil.jpg",
      meaning: "Temptation, bondage, illusion.",
      details:
        "Represents unhealthy attachments, addictions, or limiting beliefs.",
    },
    {
      name: "The Tower",
      image: "Cards-jpg/16-TheTower.jpg",
      meaning: "Upheaval, destruction, revelation.",
      details: "Symbolizes sudden change, breakdowns, and awakening.",
    },
    {
      name: "The Star",
      image: "Cards-jpg/17-TheStar.jpg",
      meaning: "Hope, inspiration, healing.",
      details: "Encourages faith, renewal, and spiritual clarity.",
    },
    {
      name: "The Moon",
      image: "Cards-jpg/18-TheMoon.jpg",
      meaning: "Illusion, intuition, uncertainty.",
      details: "Represents hidden truths, confusion, and dreams.",
    },
    {
      name: "The Sun",
      image: "Cards-jpg/19-TheSun.jpg",
      meaning: "Joy, success, vitality",
      details: "Symbolizes happiness, clarity, and positive energy.",
    },
    {
      name: "Judgment",
      image: "Cards-jpg/20-Judgement.jpg",
      meaning: "Awakening, reckoning, renewal.",
      details:
        "Represents self-reflection, transformation, and final decisions.",
    },
    {
      name: "The World",
      image: "Cards-jpg/21-TheWorld.jpg",
      meaning: "Completion, achievement, fulfillment.",
      details: "Symbolizes the successful conclusion of a journey.",
    },
    {
      name: "Ace of Cups",
      image: "Cards-jpg/Cups01.jpg",
      meaning: "Love, new feelings, emotional renewal",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Two of Cups",
      image: "Cards-jpg/Cups02.jpg",
      meaning: "Partnership, unity, mutual connection",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Three of Cups",
      image: "Cards-jpg/Cups03.jpg",
      meaning: "Friendship, community, joy.",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Four of Cups",
      image: "Cards-jpg/Cups04.jpg",
      meaning: "Apathy, contemplation, discontent",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Five of Cups",
      image: "Cards-jpg/Cups05.jpg",
      meaning: "Loss, regret, grief.",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Six of Cups",
      image: "Cards-jpg/Cups06.jpg",
      meaning: "Nostalgia, childhood, reunions.",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Seven of Cups",
      image: "Cards-jpg/Cups07.jpg",
      meaning: "Choices, illusions, daydreams.",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Eight of Cups",
      image: "Cards-jpg/Cups08.jpg",
      meaning: "Walking away, seeking truth, change",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Nine of Cups",
      image: "Cards-jpg/Cups09.jpg",
      meaning: "Satisfaction, wishes fulfilled, contentment.",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Ten of Cups",
      image: "Cards-jpg/Cups10.jpg",
      meaning: "Happiness, family, emotional fulfillment",
      details: "Cups (Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Page of Cups",
      image: "Cards-jpg/Cups11.jpg",
      meaning: "Creativity, curiosity, new emotions.",
      details: "(Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Knight of Cups",
      image: "Cards-jpg/Cups12.jpg",
      meaning: "Romance, charm, idealism.",
      details: "(Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Queen of Cups",
      image: "Cards-jpg/Cups13.jpg",
      meaning: "Compassion, intuition, emotional depth",
      details: "(Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "King of Cups",
      image: "Cards-jpg/Cups14.jpg",
      meaning: "Balance, emotional maturity, wisdom.",
      details: "(Water – Emotions, Relationships, Intuition)",
    },
    {
      name: "Ace of Pentacles",
      image: "Cards-jpg/Pentacles01.jpg",
      meaning: "Prosperity, new opportunity, abundance.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Two of Pentacles",
      image: "Cards-jpg/Pentacles02.jpg",
      meaning: "Balance, multitasking, adaptability.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Three of Pentacles",
      image: "Cards-jpg/Pentacles03.jpg",
      meaning: "Collaboration, skill, teamwork.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Four of Pentacles",
      image: "Cards-jpg/Pentacles04.jpg",
      meaning: "Security, control, materialism.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Five of Pentacles",
      image: "Cards-jpg/Pentacles05.jpg",
      meaning: "Hardship, struggle, loss.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Six of Pentacles",
      image: "Cards-jpg/Pentacles06.jpg",
      meaning: "Generosity, charity, giving/receiving.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Seven of Pentacles",
      image: "Cards-jpg/Pentacles07.jpg",
      meaning: "Patience, long-term investment, growth.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Eight of Pentacles",
      image: "Cards-jpg/Pentacles08.jpg",
      meaning: " Mastery, diligence, dedication.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Nine of Pentacles",
      image: "Cards-jpg/Pentacles09.jpg",
      meaning: "Self-sufficiency, luxury, independence",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Ten of Pentacles",
      image: "Cards-jpg/Pentacles10.jpg",
      meaning: "Legacy, stability, wealth.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Page of Pentacles",
      image: "Cards-jpg/Pentacles11.jpg",
      meaning: "Ambition, new study, diligence.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Knight of Pentacles",
      image: "Cards-jpg/Pentacles12.jpg",
      meaning: "Hard work, responsibility, persistence.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Queen of Pentacles",
      image: "Cards-jpg/Pentacles13.jpg",
      meaning: "Nurturing, practicality, prosperity.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "King of Pentacles",
      image: "Cards-jpg/Pentacles14.jpg",
      meaning: "Success, leadership, financial security.",
      details: "(Earth – Material, Career, Stability)",
    },
    {
      name: "Ace of Swords",
      image: "Cards-jpg/Swords01.jpg",
      meaning: " Clarity, truth, new ideas.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Two of Swords",
      image: "Cards-jpg/Swords02.jpg",
      meaning: "Indecision, stalemate, choices.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Three of Swords",
      image: "Cards-jpg/Swords03.jpg",
      meaning: " Heartbreak, sorrow, loss",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Four of Swords",
      image: "Cards-jpg/Swords04.jpg",
      meaning: "Rest, recuperation, contemplation.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Five of Swords",
      image: "Cards-jpg/Swords05.jpg",
      meaning: "Conflict, defeat, selfishness.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Six of Swords",
      image: "Cards-jpg/Swords06.jpg",
      meaning: "Transition, moving on, healing.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Seven of Swords",
      image: "Cards-jpg/Swords07.jpg",
      meaning: "Deception, strategy, secrets.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Eight of Swords",
      image: "Cards-jpg/Swords08.jpg",
      meaning: "Restriction, fear, helplessness.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Nine of Swords",
      image: "Cards-jpg/Swords09.jpg",
      meaning: "Anxiety, worry, nightmares.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Ten of Swords",
      image: "Cards-jpg/Swords10.jpg",
      meaning: "Betrayal, painful endings, ruin.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Page of Swords",
      image: "Cards-jpg/Swords11.jpg",
      meaning: "Curiosity, vigilance, new ideas.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Knight of Swords",
      image: "Cards-jpg/Swords12.jpg",
      meaning: "Ambition, haste, determination.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Queen of Swords",
      image: "Cards-jpg/Swords13.jpg",
      meaning: "Intellect, independence, clear judgment.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "King of Swords",
      image: "Cards-jpg/Swords14.jpg",
      meaning: "Authority, logic, truth.",
      details: "(Air – Thoughts, Conflict, Intellect)",
    },
    {
      name: "Ace of Wands",
      image: "Cards-jpg/Wands01.jpg",
      meaning: "Inspiration, potential, new ventures.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Two of Wands",
      image: "Cards-jpg/Wands02.jpg",
      meaning: "Planning, vision, decisions.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Three of Wands",
      image: "Cards-jpg/Wands03.jpg",
      meaning: " Expansion, foresight, progress",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Four of Wands",
      image: "Cards-jpg/Wands04.jpg",
      meaning: "Celebration, harmony, homecoming.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Five of Wands",
      image: "Cards-jpg/Wands05.jpg",
      meaning: "Conflict, competition, tension.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Six of Wands",
      image: "Cards-jpg/Wands06.jpg",
      meaning: "Victory, recognition, success.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Seven of Wands",
      image: "Cards-jpg/Wands07.jpg",
      meaning: "Defense, perseverance, challenge.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Eight of Wands",
      image: "Cards-jpg/Wands08.jpg",
      meaning: "Speed, movement, communication",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Nine of Wands",
      image: "Cards-jpg/Wands09.jpg",
      meaning: " Resilience, persistence, testing limits.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Ten of Wands",
      image: "Cards-jpg/Wands10.jpg",
      meaning: "Burden, responsibility, stress.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Page of Wands",
      image: "Cards-jpg/Wands11.jpg",
      meaning: "Exploration, enthusiasm, discovery.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Knight of Wands",
      image: "Cards-jpg/Wands12.jpg",
      meaning: "Adventure, impulsiveness, energy.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "Queen of Wands",
      image: "Cards-jpg/Wands13.jpg",
      meaning: "Confidence, independence, charisma.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
    {
      name: "King of Wands",
      image: "Cards-jpg/Wands14.jpg",
      meaning: "Leadership, vision, boldness.",
      details: "Wands (Fire – Passion, Action, Creativity)",
    },
  ];

  // One card spread button
  document
    .getElementById("one-card-btn")
    .addEventListener("click", function () {
      startReading(1);
    });

  // Three card spread button

  document
    .getElementById("three-card-btn")
    .addEventListener("click", function () {
      startReading(3);
    });

  // Redraw button. Displays a new reading
  document.getElementById("redraw-btn").addEventListener("click", function () {
    startReading(currentNumCards);
  });

  // Restart Reading button that takes you back to picking a spread
  document.getElementById("restart-btn").addEventListener("click", function () {
    resetReading();
  });
  // Default to one card spread
  let currentNumCards = 1;

  function startReading(numCards) {
    currentNumCards = numCards; 
    let tarotCardsDiv = document.getElementById("tarot-cards");
    tarotCardsDiv.innerHTML = "";

    // Shuffle without changes to deck array
    let shuffledDeck = tarotDeck.slice().sort(() => Math.random() - .5);
    let drawnCards = shuffledDeck.slice(0, numCards);

    drawnCards.forEach((card) => {
      let cardElement = document.createElement("div");
      cardElement.classList.add("tarot-card");
      cardElement.innerHTML = `<img src="${card.image}" alt="${card.name}"><B>${card.name}</B><p>${card.meaning}</p> `;
      cardElement.addEventListener("click", function () {
        alert(`${card.name}: ${card.details}`);
      });
      tarotCardsDiv.appendChild(cardElement);
    });
  }

  function resetReading() {
    document.getElementById("tarot-cards").innerHTML = "";
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("reading-screen").style.display = "none";
  }
});
