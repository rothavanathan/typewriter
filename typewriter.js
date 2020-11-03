const sentence = "hello there from lighthouse labs";

const animate = (sentence) => {
  let counter = 0;
  for (const char of sentence) {
    counter += 100;
    setTimeout(() => process.stdout.write(char), counter);
  }
  setTimeout(() => process.stdout.write('\n'), counter);
  return;
};



try {
  animate(sentence);
} catch (err) {
  console.log('whoops we had an error', err);
}