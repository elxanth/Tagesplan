// message components: start // adverb // verb

let anfänge = ["Heute solltest du ", "Was heute wirklich ansteht, ist ", "Du solltest auf keinen Fall ", "Du könntest heute ", "Wirkkich wichtig ist doch nur ", "Denk heute daran: "]

let adverbiale = ["mit großem Enthusiasmus, den das Universum für dich bereithält ", "widerwillig ", "erhobenen Hauptes ", "mit einer Scheiß-drauf-attitüde ", "glücklich ", "gesenkten Hauptes ", "flussaufwärts "];

let aktivitäten = ["einkaufen gehen.", "fischen gehen.", "Saft trinken.", "in der Nase bohren.", "in die Büsche pinkeln.", "arbeiten", "kündigen.", "einen Witz erzählen.", "den Akt der Liebe begehen.", "das Bad putzen.", "Schlager singen.", "mit jemandem Streit anfangen."];

let toDo
let shortToDo

const generateMessage = () => {
    //random start
    let randomAnfang = anfänge[Math.floor(Math.random() * anfänge.length)]
    //random adverbial
    let randomAdverbial = adverbiale[Math.floor(Math.random() * adverbiale.length)]
    //random aktivität
    let randomAktivität = aktivitäten[Math.floor(Math.random() * aktivitäten.length)]

    toDo = randomAnfang + randomAdverbial + randomAktivität;
    shortToDo = randomAdverbial + randomAktivität;
    document.getElementById("output").textContent = toDo;

   if (document.getElementById("add").onclick) {
        
      }

}

const addToPlan = () => {
    let ol = document.getElementById("list");
        let li = document.createElement("li");
  
        li.appendChild(document.createTextNode(shortToDo));
        ol.appendChild(li);
}


const addToAgenda = () =>{
    
}