let ei = [1, 2, 3, "e"];
let hei = [];

for (let i = 0; i < ei.length; i++) {
  if (typeof ei[i] === "string") {
    hei = ei.splice(i);
    console.log(hei);
  } else {
    console.log(ei[i]);
  }
}

console.log(hei);
