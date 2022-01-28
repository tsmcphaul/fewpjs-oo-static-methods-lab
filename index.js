class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let arr = string.split(" ");
    let result = [];
    let noWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for(let i = 0; i < arr.length; i++){
      if (noWords.includes(arr[i]) === false || (i === 0)){
        result.push(this.capitalize(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }

    let str = result.join(" ");
    return str;
  }
}