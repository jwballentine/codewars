function titleCase(title, minorWords) {
  const titleArr = title.split(" ");
  const newArr = [];
  titleArr.map(word => {
    newArr.push(word.toLowerCase());
  });
  console.log(titleArr);
  console.log(newArr);
}

titleCase("the quick brown fox");
titleCase("a clash of KINGS", "a an the of");
titleCase("THE WIND IN THE WILLOWS", "The In");
