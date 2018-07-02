import createInstance from "./sqlite.wasm"

createInstance()
.then(m => {
  console.log(m.instance.exports.add(1, 2));
  console.log(m.instance.exports.test());
});


// const index = import("./index");
// index.then(() => {
//   console.log("Loaded...");
// });
