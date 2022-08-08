// 6 kyu Word a10n (abbreviation)
// 87914390% of 1,3053,908 of 10,123wthit569 Issues Reported

//     JavaScript
//     Node v10.x

//         VIM
//         EMACS

// Instructions
// Output
// Past Solutions

// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

//     A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
//     The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

// Example

// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

function abbreviate(string) {
  const regex = /[A-Z]+/gi;
  const replacer = (match) => {
    if (match.length > 3) {
      return match[0] + String(match.length - 2) + match[match.length - 1];
    } else {
      return match;
    }
  };
  return string.replace(regex, replacer);
}

console.log(abbreviate('internationalization')); // "i18n"
console.log(abbreviate('accessibility')); // "a11y"
console.log(abbreviate('Accessibility')); // "A11y"
console.log(abbreviate('elephant-ride')); // "e6t-r2e"
