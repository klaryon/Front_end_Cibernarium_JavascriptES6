// Replace this promise code with an async/await:

// function b() {
//    // ...
// }
// funtion a() {
//    b().then() = > {
//    doMoreWork();
//    }
// }

function b() {
   // ...
}
async function a() {
   let response = await b();
   doMoreWork();
}