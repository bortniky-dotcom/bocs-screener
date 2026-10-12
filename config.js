(function () {
  var CK = [
    ["Contamination/Cleanness", "I am worried about dirt, germs, and viruses.", "Ex. Fear of getting germs from touching door handles or shaking hands or sitting in certain chairs or seats or fear of getting AIDS."],
    ["Contamination/Cleanness", "I wash my hands very often or in a special way to be sure I am not dirty or contaminated.", "Ex. Washing one’s hands many times a day or for long periods after touching, or thinking one has touched, a contaminated object."],
    ["Harming obsessions", "I fear that my actions might harm others.", "Ex. Fear of poisoning others’ food, fear of hurting babies, fear of pushing someone in front of a train, fear of causing harm by giving bad advice."],
    ["Harming obsessions", "I fear I will lose control and do something I don’t want to do.", "Ex. Fear of driving into a tree, fear of running over someone, fear of stabbing someone."],
    ["Sexual obsessions", "I have unpleasant, forbidden, or perverse sexual thoughts, images, or impulses that frighten me.", "Ex. Unwanted bad sexual thoughts about strangers, family members, children, or friends."],
    ["Checking", "I must check the stove or other electrical appliances, that I have locked the door, or to make sure things have not disappeared.", "Ex. Repeated checking of door locks, the stove, the iron, or electrical outlets before leaving home; repeated checking that one’s cupboard at school is locked, or if one is properly dressed."],
    ["Religion/Magical thoughts/Superstition", "My dirty words, thoughts, and curses directed towards God bother me; I have a fear of offending God.", "Ex. Worries about being punished for such sins and thoughts now, later in life, or after death."],
    ["Religion/Magical thoughts/Superstition", "To prevent something terrible from happening, I must have special thoughts or acts done in a special way.", "Ex. Touching an object like a telephone ensures that someone in the family will not get sick."],
    ["Morality and Justice", "I am occupied with morality issues, justice, or what is right or wrong.", "Ex. Worries about always doing ”the right thing,” having told a lie, or having cheated someone."],
    ["Symmetry/Exactness/Ordering", "How things are placed or how they are positioned is important to me. It needs to feel “just right” (but isn’t associated with magical thinking).", "Ex. Worries about papers and books being neatly placed; worries about calculations or handwriting being perfect or not evening up."],
    ["Symmetry/Exactness/Ordering", "I get a compelling urge to put my things in a special order.", "Ex. Straightening paper and pens on a desktop or books in a bookcase; wasting hours arranging or lining up things in the house in “order” and then becoming very upset if this order is disturbed."],
    ["Just right/Repeating rituals/Counting", "I have a compelling urge to repeat certain actions until it feels “just right.”", "Ex. Repeating activities like turning the tap or appliances on and off, combing one’s hair, going in and out of a doorway."],
    ["Hoarding and saving", "I must follow strong impulses to collect and hoard things.", "Ex. Saving old newspapers, notes, cans, paper towels, and wrappers for fear that if one throws them away, one may some day need them; picking up useless objects from the street."],
    ["Somatic obsessions", "I have worries that I look peculiar; I am concerned that something is wrong with my looks.", "Ex. Worries that one’s face, ears, nose, eyes, or another part of the body is hideously ugly, despite reassurance to the contrary."],
    ["Self-damaging behaviors", "I do things that injure my body.", "Ex. Scratching and tearing the skin, cutting oneself or banging one’s head."]
  ];
  var CO = [{ v: 2, l: "Current", show: false }, { v: 1, l: "Past", show: false }, { v: 0, l: "Never", show: false }];
  var SEV = [
    ["Approximately how much of your time is occupied by obsessive‐compulsive problems?", ["None","Occasional symptoms or less than 1 hour per day","Frequent obsessive‐compulsive symptoms or 1–3 hours per day","Very frequent symptoms or more than 3 and up to 8 hours a day","Almost constantly or more than 8 hours a day"]],
    ["On average, what is the longest amount of consecutive waking hours per day that you are completely free of obsessive‐compulsive problems?", ["No symptoms","Long symptom‐free interval; more than 8 consecutive hours/day symptom‐free","Moderately long symptom‐free interval; more than 3 and up to 8 consecutive hours/day symptom‐free","Short symptom‐free interval; from 1 to 3 consecutive hours/day symptom‐free","Extremely short symptom‐free interval; less than 1 consecutive hour/day symptom‐free"]],
    ["How much do your obsessive‐compulsive problems interfere with your everyday life, work or school, or social functioning?", ["No interference","Mild; slight interference with social or occupational/school activities, but overall performance not impaired","Moderate; definite interference with social or occupational/school performance, but still manageable","Severe interference; causes substantial impairment in social or occupational/school performance","Extreme; incapacitating interference"]],
    ["How much distress do your obsessive‐compulsive problems cause you?", ["None","Mild; not too disturbing","Moderate; disturbing, but still manageable","Severe; very disturbing distress","Extreme; near constant and disabling distress"]],
    ["How much control do you have over your obsessive‐compulsive problems? How successful are you in stopping or diverting them? If you rarely try to resist, please think about those rare occasions in which you did try. (Note: Do not include here obsessions stopped by doing compulsions.)", ["Complete control","Much control; usually able to stop or divert obsessive‐compulsive problems with some effort/concentration","Moderate control; sometimes able to stop or divert obsessive‐compulsive problems only with difficulty","Little control; rarely successful in stopping or dismissing obsessive‐compulsive problems, but they can be delayed for the moment","No control; are rarely able, even momentarily, to ignore obsessions or refrain from performing compulsions; they cannot even be delayed for the moment"]],
    ["Have you been avoiding doing anything, going anyplace, or being with anyone to avoid your obsessive‐compulsive problems?", ["No deliberate avoidance","Mild; minimal avoidance","Moderate; some avoidance; clearly present","Severe; much avoidance; avoidance prominent","Extreme; very extensive avoidance; patient does almost everything he/she can to avoid triggering symptoms"]]
  ];
  window.CFG = {
    slug: "bocs", short: "BOCS", sub: "Brief Obsessive-Compulsive Scale",
    intro: "<b>Obsessions</b> are distressing thoughts, ideas, feelings, fantasies, images (pictures), or impulses that keep coming into your mind even though you do not want them to. Since obsessions cause distress, compulsions are sometimes carried out to reduce the distress.<br><br><b>Compulsions</b> are habits, rituals, or behaviors you feel you have to do, although you may know that they do not make sense or are excessive. At times you may try to stop from doing them, but this might not be possible. While most compulsions are observable behaviors, some compulsions may be hidden mental acts, such as silent checking or repeating certain words to yourself each time you have disturbing thoughts.<br><br>Check the obsessions and compulsions that trouble you right now (during the past week) in the “Current” box. If they have occurred previously but not any longer, check the box marked “Past.” There are examples of each symptom to help you decide if you have an obsessive‐compulsive symptom. If you never have had the obsession or compulsion, check the box marked “Never.”",
    sections: [
      { id: "ck", title: "Checklist (Current, Past, Never)", items: CK.map(function (c, i) { return { id: "c" + (i + 1), num: (i + 1) + ".", text: c[0] + ": " + c[1], ex: c[2], opts: CO }; }) },
      { id: "other", title: "Other and most troublesome problems", type: "text", items: [
        { id: "other_problems", text: "If you have other obsessive-compulsive problems (obsessions/thoughts, compulsions/habits) that are not included in the checklist, enter them here:" },
        { id: "most_troublesome", text: "Mark the most troublesome obsessive-compulsive problems and enter them here:" },
        { id: "pct_obsessions", text: "What is worse, your obsessions or your compulsions? If you separate your obsessions and your compulsions, what percent are the former and what the latter? Obsessions: ___%" },
        { id: "pct_compulsions", text: "Compulsions: ___%" }
      ] },
      { id: "sev", title: "FOR CLINICIAN USE: severity, last 7 days including today", red: "For clinician use only. Not for self-report.", note: "Review the current obsessive-compulsive problems (obsessions/thoughts and compulsions/habits). Ask the patient to respond according to the situation during the last 7 days (including today). Patients: leave this section for your clinician.", optional: true,
        items: SEV.map(function (s, i) { return { id: "s" + (i + 1), num: (i + 1) + ".", text: s[0], opts: s[1].map(function (l, j) { return { v: j, l: l }; }) }; }) }
    ],
    scoringHint: '<p class="hint">Scoring Legend and Interpretation: Endorsement of 2 or more items in the checklist or a mean score of 1.5 or above on the severity scale suggests OCD. Higher mean scores on the severity scale (questions 1-6) indicate higher severity. BOCS TOTAL = add items 1-6. The BOCS has been validated for the DSM-IV criteria only; in item 14, preoccupation with appearance is more in keeping with body dysmorphic disorder, so a positive response requires further assessment.</p>',
    footer: "BOCS · Bejerot et al, Nord J Psychiatry 2014 · from The Primary Care Toolkit for Anxiety and Related Disorders",
    score: function (A, H) {
      var ck = H.ids("c", 1, 15), cur = H.count(A, ck, function (v) { return v === 2; }), past = H.count(A, ck, function (v) { return v === 1; });
      var sv = H.ids("s", 1, 6), t = H.sum(A, sv), anySev = H.known(A, sv).length > 0;
      var flags = [];
      if (cur >= 2) flags.push("Checklist: 2 or more items endorsed as Current, suggests OCD per the source legend.");
      if (A.c14 === 2 || A.c14 === 1) flags.push("Item 14 (somatic/appearance) endorsed: requires further assessment for body dysmorphic disorder.");
      if (A.c15 === 2) flags.push("Item 15 (self-damaging behaviors) endorsed as Current.");
      var mean = t === null ? null : Math.round(t / 6 * 100) / 100;
      if (mean !== null && mean >= 1.5) flags.push("Severity mean 1.5 or above, suggests OCD per the source legend.");
      return { incomplete: false, flags: flags, rows: [
        ["Checklist items Current (of 15)", cur + (H.missing(A, ck).length ? " (" + H.missing(A, ck).length + " blank)" : "")],
        ["Checklist items Past (of 15)", past],
        ["Checklist endorsement (2 or more Current)", cur >= 2 ? "suggests OCD" : "below 2"],
        ["BOCS TOTAL, clinician items 1-6 (0-24)", t === null ? (anySev ? "Incomplete, not scored" : "Clinician section not completed") : t],
        ["Severity mean (items 1-6)", mean === null ? "not scored" : mean + (mean >= 1.5 ? " (1.5 or above, suggests OCD)" : " (below 1.5)")]
      ] };
    }
  };
})();
