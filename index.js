function generate(){

let pronoun = ['a','the','my','you','our'];
let adj = ['fantastic','incredible','lackluster','wonderful','unparalleled','spectacular'];
let noun = ['automobile','computer','hat','smartphone','jewel','person'];

document.body.querySelector("#gomommy").innerHTML = '';

for (p in pronoun){
    for (a in adj){
        for (n in noun){
            document.querySelector('#gomommy').innerHTML += "<li class='list-group-item'>" + pronoun[p] + adj[a] + noun[n] + ".com </li>";
        }
    }
}

// document.body.querySelector('#gomommy').innerHTML = '';

    // let firstPronoun = ['a'];
    // let firstAdj = ['fantastic'];
    // let firstNoun = ['automobile','computer'];

    // let firstPlace = document.querySelector('#one').value;
    // let secondPlace = document.querySelector('#two').value;
    // let thirdPlace = document.querySelector('#three').value;



    // firstPronoun.unshift(one);
    // firstAdj.unshift(two);
    // firstNoun.unshift(three);

    for (f in firstPronoun) {
        for (s in firstAdj) {
            for (t in firstNoun) {
                document.body.querySelector('#gomommy').innerHTML += "<li class='list-group-item'>" + firstPronoun[f] + firstAdj[s] + firstNoun[t] + ".com </li>";
            }
        }
    }
}