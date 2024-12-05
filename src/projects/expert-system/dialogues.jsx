export const dialogues = [
  {
    id: "start",
    question:
      "What Category suits your legal concern about the usage of motorcycle",
    options: [
      { id: "numberPlateCat", text: "Number Plate" },
      { id: "registrationCat", text: "Registration" },
      { id: "lawEnforcerCat", text: "Law Enforcer" },
      { id: "comOfCrimeCat", text: "Commission of Crime" },
    ],
  },
  //NUMBER PLATE CATEGORY
  {
    id: "numberPlateCat",
    question: "What is your concern regarding Number plate?",
    options: [
      {
        id: "driveWithoutNumber",
        text: "Driving without a number plate or readable number plate.",
      },
      { id: "lostNumber", text: "Lost/Damaged Number Plate" },
      {
        id: "manipulatedNumber",
        text: "Erased, Tampered, Forged, Imitated, Covered or Concelead Number Plate",
      },
      {
        id: "buyOrSellNumber",
        text: "Bought or Sold a motorcycle with an erased, tampered, altered, forged or imitated number plate.",
      },
      {
        id: "stolenNumber",
        text: "Stolen Number Plate or Readable Plate",
      },
    ],
  },

  {
    id: "buyOrSellNumber",
    question:
      "Is the Buyer or Seller aware that the number plate is erased, tampered, altered, forged or imitated number plate?",
    options: [
      {
        id: "awareYes",
        text: "Yes",
      },
      { id: "awareNo", text: "No" },
    ],
  },

  {
    id: "awareYes",
    question: null,
    options: null,
    penalty: "Penalty: Both Buyer and Seller shall be punished Prison Mayor",
    reference: "Section 12",
  },

  {
    id: "awareNo",
    question: null,
    options: null,
    penalty: "Penalty: The Buyer OR the Seller will be punished Arresto mayor",
    reference: "Section 12",
  },

  {
    id: "stolenNumber",
    question: "Is the used Number Plate or Readable Number Plate stolen?",
    options: [
      {
        id: "usedPlateStolenYes",
        text: "Yes",
      },
      { id: "noPenalty", text: "No" },
    ],
  },

  {
    id: "usedPlateStolenYes",
    question: null,
    options: null,
    penalty:
      "Penalty: Prision Mayor or fine of not less than Fifty Thousand pesos (P50,000.00) but not more than One hundred thousand pesos (P100,000.00)",
    reference: "Section 13",
  },

  {
    id: "driveWithoutNumber",
    question: null,
    options: null,
    penalty:
      "Penalty: Fine of not less than Fifty thousand pesos (P50,000.00) but not more than One hundred thousand (P100,000.00) or both",
    reference: "Section 7",
    },
  {
    id: "manipulatedNumber",
    question: null,
    options: null,
    penalty:
      "Penalty: Prision Mayor, or Fifty thousand pesos (P50,000.00) but not more than One hundred thousand pesos (P100,000.00), or both.",
    reference: "Section 12",
    },
  {
    id: "lostNumber",
    question: "Is the number plate lost?",
    options: [
      {
        id: "lostYes",
        text: "Yes",
      },
      { id: "lostNo", text: "No" },
    ],
  },
  {
    id: "lostNo",
    question: "Is it damaged?",
    options: [
      {
        id: "lostYes",
        text: "Yes",
      },
      { id: "damagedNo", text: "No" },
    ],
  },
  {
    id: "lostYes",
    question: "Did you report it?",
    options: [
      {
        id: "reportYes",
        text: "Yes",
      },
      { id: "reportNo", text: "No" },
    ],
  },
  {
    id: "reportYes",
    question: null,
    options: null,
    penalty: "No Penalty",
  },
  {
    id: "reportNo",
    question: null,
    options: null,
    penalty:
      "Penalty: Twenty thousand pesos (P20,000.00) but not more than Fifty thousand pesos (P50,000.00).",
    reference: "Section 11",
    },

  {
    id: "damagedNo",
    question: "Is it stolen?",
    options: [
      {
        id: "stolenYes",
        text: "Yes",
      },
      { id: "reportYes", text: "No" },
    ],
  },

  {
    id: "stolenYes",
    question: "Is the stolen numberplate used in connection with an offense?",
    options: [
      {
        id: "connectOffenseYes",
        text: "Yes",
      },
      { id: "lostYes", text: "No" },
    ],
  },

  {
    id: "connectOffenseYes",
    question: "Did you report it within 3 days since the day it was lost?",
    options: [
      {
        id: "noPenalty",
        text: "Yes",
      },
      { id: "3daysReportYes", text: "No" },
    ],
  },

  {
    id: "3daysReportYes",
    question: null,
    options: null,
    penalty:
      "Penalty of imprisonment of arresto mayor to prision correccional",
    reference: "Section 12",
    },

  //Registration CATEGORY
  {
    id: "registrationCat",
    question: "What is your concern regarding Registration?",
    options: [
      {
        id: "purchase",
        text: "Registration After Purchase",
      },
      { id: "disposition", text: "Registration After Disposition" },
    ],
  },

  {
    id: "purchase",
    question:
      "Is your motorcycle registered within 5 days since purchase?",
    options: [
      {
        id: "noPenalty",
        text: "Yes",
      },
      {
        id: "disporeportNo",
        text: "No",
      },
    ],
  },

  {
    id: "disposition",
    question:
      "Did you report any sale or disposition of the motorcycle?",
    options: [
      {
        id: "noPenalty",
        text: "Yes",
      },
      {
        id: "disporeportNo",
        text: "No",
      },
    ],
  },

  {
    id: "disporeportNo",
    question: null,
    options: null,
    penalty: "Penalty: Imprisonment or Arresto Mayor to Prision Correccional or fine of not less than Fifty Thousand pesos (P50,000.00) but not more than One hundred thousand pesos (P100,000.00)",
    reference: "Section 4",
  },


  //LAW ENFORCER CATEGORY
  {
    id: "lawEnforcerCat",
    question: "Is the seized motorcycle reported surrendered within 24 hours?",
    options: [
      {
        id: "surrenderedYes",
        text: "Yes",
      },
      {
        id: "surrenderedNo",
        text: "No"
      },
    ],
  },
  {
    id: "surrenderedYes",
    question: "Is there a damage to the motorcycle?",
    options: [{
      id: "damageYes",
      text: "Yes",
    },
    {
      id: "noDamage", text: "No",
    },
    ],
  },
  {
    id: "surrenderedNo",
    question: "Is there a damage to the motorcycle?",
    options: [{
      id: "reportdamageYes",
      text: "Yes",
    },
    {
      id: "reportdamageNo", text: "No",
    },
    ],
  },
  {
    id: "reportdamageYes",
    question: null,
    text: null,
    penalty: "Penalty: Prision Correccional and the Law Enforcer is monetarily liable for the cost of repairs for the damage caused to the motorcycle",
    reference: "Section 8",
  },
  {
    id: "reportdamageNo",
    question: null,
    text: null,
    penalty: "Penalty: Prision Correccional",
    reference: "Section 8",
  },
  {
    id: "noDamage",
    question: "Is the motorcycle lost?",
    options: [{
      id: "yesLost",
      text: "Yes",
    },
    {
      id: "noPenalty", text: "No",
    },
    ],
  },
  {
    id: "damagedNo",
    question: null,
    option: null,
    penalty: "No Penalty",
  },
  {
    id: "surrenderedYes",
    question: null,
    option: null,
    penalty: "No Penalty",
  },
  // {
  //   id: "surrenderedNo",
  //   question: null,
  //   option: null,
  //   penalty: "Penalty: Prision Correccional",
  // },
  {
    id: "damageYes",
    question: null,
    option: null,
    penalty: "Penalty: Law enforcer is monetarily liable for the cost of repairs for the damage caused to the motorcycle",
    reference: "Section 8",
  },
  {
    id: "yesLost",
    question: null,
    option: null,
    penalty: "Penalty: Law enforcer is monetarily liable for the full worth of the motorcycle lost",
    reference: "Section 8",
  },


  //COMMISSION OF CRIME
  {
    id: "comOfCrimeCat",
    question: "Is the motorcycle used in a crime under Grave Felony?",
    options: [
      {
        id: "graveFelonyYes",
        text: "Yes",
      },
      { id: "graveFelonyNo", text: "No" },
    ],
  },
  {
    id: "graveFelonyYes",
    question: "Is the motorcycle used seized?",
    options: [{
      id: "seizedGraveYes",
      text: "Yes",
    },
    {
      id: "seizedGraveNo",
      text: "No",
    }],
  },
  {
    id: "seizedGraveYes",
    question: null,
    options: null,
    penalty: "Penalty: Reclusion temporal to reclusion perpetua",
    reference: "Section 9",
  },
  {
    id: "seizedGraveNo",
    question: null,
    options: null,
    penalty: "Penalty: Reclusion temporal to reclusion perpetua",
    reference: "Section 9",
  },

  {
    id: "graveFelonyNo",
    question: "Is the motorcycle used in a crime under Less Grave Felony or Light Felony?",
    options: [
      {
        id: "lessGraveYes",
        text: "Yes",
      },
      { id: "lessGraveNo", text: "No" },
    ],
  },
  {
    id: "lessGraveYes",
    question: "Is the motorcycle used seized?",
    options: [{
      id: "seizedLessYes",
      text: "Yes",
    },
    {
      id: "seizedLessNo",
      text: "No",
    }],
  },
  {
    id: "seizedLessYes",
    question: null,
    options: null,
    penalty: "Penalty: Reclusion temporal to reclusion perpetua",
    reference: "Section 9",
  },
  {
    id: "seizedLessNo",
    question: null,
    options: null,
    penalty: "Penalty: Prision correccional to prision mayor",
    reference: "Section 9",
  },
  {
    id: "lessGraveNo",
    question: "Is the motorcycle used unlawfully which caused death or physical injuries?",
    options: [
      {
        id: "causedYes",
        text: "Yes",
      },
      { id: "noPenalty", text: "No" },
    ],
  },
  {
    id: "causedYes",
    question: "Is the motorcycle used seized?",
    options: [{
      id: "seizedCauseYes",
      text: "Yes",
    },
    {
      id: "seizedCauseNo",
      text: "No",
    }],
  },
  {
    id: "seizedCauseYes",
    question: null,
    options: null,
    penalty: "Penalty: Reclusion temporal to reclusion perpetua",
    reference: "Section 9",
  },
  {
    id: "seizedCauseNo",
    question: null,
    options: null,
    penalty: "Penalty: Reclusion Perpetua",
    reference: "Section 9",
  },

  //   NO PENALTY DIALOGUE
  { id: "noPenalty", question: null, options: null, penalty: "No Penalty" },

];
