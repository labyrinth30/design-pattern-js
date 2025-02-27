import Grimpan from "./grimpan.js";

// console.log(Grimpan.getInstance() === Grimpan.getInstance()) // true

// 강결합 되어있는 코드
// function main() {
//     Grimpan.getInstance().initialize();
// }

// 약하게 결합된 코드, 매개변수로 뽑는다.
function main(instance: any){
    instance.initialize();
}
main(Grimpan.getInstance());
// main(Editor.getInstance());