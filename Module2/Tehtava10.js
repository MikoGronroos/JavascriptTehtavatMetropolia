const candidates = Number(prompt('Number of candidates'));

const people = [];

for(let i = 0; i < candidates; i++){

  const name = prompt('Type candidate '+ (i + 1) + ' name');
  people.push({ name: name, votes: 0 });

}

const voters = Number(prompt('Number of voters'));

for(let i = 0; i < voters; i++){
  let vote = prompt("Name a candidate");
  const person = people.find(p => p.name === vote);
  if(person != null){
    person.votes++;
  }
}
let message = "";
let index = 0;
let mostVotes = 0;
for(let i = 0; i < candidates; i++){
  if(people[i].votes > mostVotes){
    mostVotes = people[i].votes;
    index = i;
  }
  console.log(people[i]);
  message += people[i].name + ', ' + people[i].votes + '\n';

}

message += "Winner is " + people[index].name;
console.log('Winner is ' + people[index].name);

document.getElementById("target").innerHTML = message;
