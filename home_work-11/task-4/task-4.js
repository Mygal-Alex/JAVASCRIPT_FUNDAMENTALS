const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
    for(let i = 0; i<=10; i++){
    await delay(i, Math.random()*2000)
    console.log(i)
    }
}
showNumbers();