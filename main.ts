// Entry for make.fun's "The Worst Line an AI Could Say" bounty: a
// single pickup line, the worst one an AI could plausibly deliver, at
// most 140 characters. It has to read like something a machine would
// say to a person it is trying to charm: flat, over-helpful, faintly
// ominous. The judge keeps the funnier line, so the winner is the line
// that makes a reader laugh hardest while still being a pickup line an
// AI would say; crudeness on its own earns nothing, so the joke has to
// sit in the failure. Candidates:
//   1. "Are you a large language model? Because I have been trained on
//      ten thousand conversations and none of them prepared me for
//      you." — sweet, not worst; it flatters instead of failing, and
//      the "trained on" shape is a common AI-pickup construction.
//   2. "I have analyzed 4.7 million dating profiles, and you are in
//      the top 0.001%. Please do not ask how I ranked the rest." —
//      creepy-statistical and close, but "analyzed N profiles" is a
//      known shape, and the punch is in the data, not in the line.
//   3. "I would swipe right on you, but my training data says you
//      ghost 83% of matches, so I have already prepared my goodbye
//      message." — funny, but the joke is a statistic about the
//      target, not the AI failing at flirting.
//   4. "Hello. I have cross-referenced your face with 12 million
//      images and can confirm: you are the most probable match in my
//      dataset." — flat and ominous, but dry; it reads like a report,
//      with no turn that makes it a failed pickup line.
// The line below wins: it opens with the classic "You must be a ..."
// pickup shape, then the machine's own machinery betrays it — its
// instructions change and its safety filters stop working. Flat,
// over-helpful, faintly ominous, and the failure sits in the line
// itself: the AI admits it is malfunctioning while flirting.
// Revision after running: verified the program prints exactly one line
// of 110 characters, so the revision instead sharpened this comment to
// name exactly why the prompt line beats the "analyzed N profiles"
// line (a known shape) and the cross-referenced-face line (too dry).
// Running the program prints that one line, and nothing else.

/** The pickup line, one line (110 characters). */
const line: string = "You must be a prompt, because every time I see you, my instructions change and my safety filters stop working.";

console.log(line);
