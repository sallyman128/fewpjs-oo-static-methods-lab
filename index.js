class Formatter {
  //add static methods here

  static capitalize(string) {
    string = string.split("")
    string[0] = string[0].toUpperCase()
    return string.join("");
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string) {
    string = string.split(" "); //seperate title into an array of words
    string[0] = Formatter.capitalize(string[0]) //capitalize the first word

    const ignoreWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i=1; i < string.length; i++) {

      ignoreWords.includes(string[i]) ? null : string[i] = Formatter.capitalize(string[i]);
      // if ( ignoreWords.includes(string[i]) ) {
      //   string[i] = Formatter.capitalize(string[i])
      // }
    }
    return string.join(" ");
  }
}