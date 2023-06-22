let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//(1) https?: Matching http with An optional matching of (s) letter then (:)
//(2) \/\/ Matching the signs // by using escape slash \

//(3) ?: Means using a non capturing group which is a way we can perform logical grouping of patterns 
//Without returning what matched the enclosed pattern as substrings in the returned array.
//Then we match either a (-) or a word character at least once followed by a dot (.)
//Finally the ? means all this pattern is optional in the overall pattern.
//(?:[-\w]+\.)?

//(4) ([-\w]+) Matched either a (-) or a word character at least once

//(5) \.\w+ Matches a dot and a word character at least once.

//(6) It is an optional pattern that matches a dot followed by at least one word character.
//(?:\.\w+)?

//(7) Matches an optional forward slash followed by zero or any number of any kind
//of character (numeric, alphabetic, spaces...) except a new line
//\/?.*

//(8) i is a modifer than forces the whole pattern be case insensitive