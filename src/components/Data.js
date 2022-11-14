
const data = ["beebom", "josh", "symphty", "joy", "comma", "blue", "youtube", "are", "you", "ok", "therefore", "forecast", "gender", "fight", "war", "storm", "focus", "lazy", "group", "team", "work", "bonus", "time"];
const outputData = [];
function createWords() {
    let i = 0;
    while (i < 20) {
        let rand = Math.floor(Math.random() * data.length);
        outputData.push(data[rand]);
        i += 1;
    }
}
createWords();

module.exports = outputData;
