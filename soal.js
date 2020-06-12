let itJob = [
  "front end",
  "back end",
  "dev ops",
  "ui/ux designer",
  "fullstack developer",
];
let itJobs = itJob.forEach((i) => {
  let data = i + " ";
  document.write(`<li>${data}</li>`);
});

console.log(itJob.length);
console.log(itJob);
