let hwt = "Hello TypeScript world!";
let greg = "Mike" 
console.log(greg, hwt);
const loaded = (abc: string): void => {
    let hw = document.getElementById("hw");
    if(hw !== null) {

        hw.innerText = `${greg} ${hwt}`
    }
}