function generateBugs() {
  const random = Math.random();
  if (random < 0.3) {
    undefined.someMethod();
  } else if (random < 0.6) {
    throw "this is an error";
  } else {
    console.log(sdffsf + fsdfssdfsf);
  }
}
