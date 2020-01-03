function titleCase(title, minorWords) {
  if (title === "") {
    return "";
  }
  const titleArr = title.toLowerCase().split(" ");
  const minorWordsArr = minorWords ? minorWords.toLowerCase().split(" ") : [];
  const newArr = [];
  // console.log(titleArr);
  titleArr.map((word, index) => {
    if (minorWordsArr.includes(word) && index !== 0) {
      // console.log("you're a minor");
      newArr.push(word.toLowerCase());
    } else {
      let newWord = word[0].toUpperCase() + word.substring(1);
      newArr.push(newWord);
    }
  });
  // console.log(titleArr);
  console.log(newArr.join(" "));
}

titleCase("the quick brown fox");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
