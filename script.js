const sentences = [
"the quick brown fox jumps over the lazy dog",
"coding is fun when you practice everyday",
"typing fast is a useful computer skill",
"javascript makes websites interactive"
];

let startTime;

function startGame(){
    const sentence = sentences[Math.floor(Math.random()*sentences.length)];
    document.getElementById("sentence").innerText = sentence;
    document.getElementById("input").value = "";
    startTime = new Date().getTime();
}

document.getElementById("input").addEventListener("input", function(){
    const sentence = document.getElementById("sentence").innerText;
    const typed = this.value;

    if(typed === sentence){
        let endTime = new Date().getTime();
        let time = (endTime - startTime)/1000;
        document.getElementById("result").innerText = "Finished in " + time + " seconds!";
    }
});
