let score = 0;
let canGenerate = true;
let canSelect = true;
const Player = document.getElementById("player");
const Rank = document.getElementById("GoatRank");
const Shooting = document.getElementById("Shooting");
const Finishing = document.getElementById("Finishing");
const Defence = document.getElementById("Defense");
const Body = document.getElementById("Body");
const Athleticism = document.getElementById("Athleticism");
const Rebounding = document.getElementById("Rebounding");
const Playmaking = document.getElementById("Playmaking");
const Handles = document.getElementById("Handles");
const Averages = document.getElementById("Averages");


let shooting, finishing, defence, body, athleticism, rebounding, playmaking, handles;
currentPlayer = 0;
let i = 0;

function player(name, Shooting, Finishing, Defence, Body, Athleticism, Rebounding, Playmaking, Handles) {
  this.name = name;
  this.Shooting = Shooting;
  this.Finishing = Finishing;
  this.Defence = Defence;
  this.Body = Body;
  this.Athleticism = Athleticism;
  this.Rebounding = Rebounding;
  this.Playmaking = Playmaking;
  this.Handles = Handles;
}

let players = []
players[0] = new player("LeBron James", 8, 11, 9, 10, 10, 7, 9, 7);
players[1] = new player("Kevin Durant", 9, 9, 7, 8, 9, 6, 7, 9);
players[2] = new player("Stephen Curry", 11, 7, 5, 6, 8, 4, 8, 10);
players[3] = new player("Kawhi Leonard", 7, 8, 10, 9, 8, 8, 6, 7);
players[4] = new player("Giannis Antetokounmpo", 6, 10, 9, 10, 9, 9, 7, 5);
players[5] = new player("Anthony Davis", 6, 9, 10, 8, 9, 10, 5, 5);
players[6] = new player("James Harden", 9, 8, 5, 6, 7, 5, 9, 9);
players[7] = new player("Damian Lillard", 10, 7, 5, 6, 9, 4, 8, 9);
players[8] = new player("Joel Embiid", 7, 9, 9, 8, 8, 9, 6, 7);
players[9] = new player("Nikola Jokic", 8, 9, 7, 8, 5, 8, 10, 8);
players[10] = new player("Luka Doncic", 9, 9, 5, 6, 6, 6, 9, 9);
players[11] = new player("Kyrie Irving", 9, 9, 5, 6, 8, 4, 7, 11);
players[12] = new player("Paul George", 9, 8, 9, 8, 8, 6, 6, 8);
players[13] = new player("Jimmy Butler", 7, 8, 9, 8, 8, 7, 7, 7);
players[14] = new player("Klay Thompson", 10, 7, 7, 7, 7, 5, 5, 5);
players[15] = new player("Karl-Anthony Towns", 8, 8, 6, 7, 7, 8, 5, 5);
players[16] = new player("Ben Simmons", 4, 9, 9, 9, 9, 8, 8, 7);
players[17] = new player("Devin Booker", 9, 7, 5, 6, 8, 4, 7, 8);
players[18] = new player("Bradley Beal", 9, 7, 5, 6, 7, 4, 6, 8);
players[19] = new player("Donovan Mitchell", 9, 9, 5, 6, 9, 5, 6, 8);
players[20] = new player("Jayson Tatum", 8, 8, 7, 8, 8, 7, 7, 7);
players[21] = new player("Zion Williamson", 7, 9, 6, 8, 9, 9, 5, 5);
players[22] = new player("Bam Adebayo", 6, 8, 9, 8, 8, 8, 6, 6);
players[23] = new player("Rudy Gobert", 2, 7, 10, 8, 6, 9, 3, 3);
players[24] = new player("Chris Paul", 8, 8, 8, 5, 6, 4, 10, 9);
players[25] = new player("Russell Westbrook", 6, 9, 5, 7, 10, 8, 9, 8);
players[26] = new player("DeMar DeRozen", 7, 8, 6, 7, 7, 5, 7, 7);
players[27] = new player("Kemba Walker", 9, 7, 5, 6, 7, 4, 8, 9);
players[28] = new player("John Wall", 6, 9, 6, 6, 8, 5, 8, 8);
players[29] = new player("Kyle Lowry", 8, 7, 8, 5, 6, 5, 8, 8);
players[30] = new player("Trae Young", 9, 7, 5, 6, 6, 4, 9, 9);
players[31] = new player("Jamal Murray", 8, 8, 5, 6, 7, 5, 6, 8);
players[32] = new player("De'Aaron Fox", 7, 8, 5, 6, 8, 4, 7, 8);
players[33] = new player("Shai Gilgeous-Alexander", 8, 8, 7, 6, 7, 5, 7, 8);

// retired players
players[34] = new player("Michael Jordan", 7, 10, 9, 7, 10, 6, 6, 9);
players[35] = new player("Magic Johnson", 7, 8, 7, 9, 8, 7, 11, 8);
players[36] = new player("Larry Bird", 9, 8, 8, 8, 6, 8, 8, 8);
players[37] = new player("Kareem Abdul-Jabbar", 6, 9, 9, 9, 7, 10, 5, 5);
players[38] = new player("Shaquille O'Neal", 4, 10, 8, 10, 9, 10, 4, 4);
players[39] = new player("Wilt Chamberlain", 4, 10, 8, 10, 10, 10, 4, 4);
players[40] = new player("Bill Russell", 4, 8, 10, 8, 6, 10, 5, 5);
players[41] = new player("Hakeem Olajuwon", 6, 9, 11, 9, 8, 9, 5, 5);
players[42] = new player("Tim Duncan", 7, 8, 10, 9, 7, 9, 6, 5);
players[43] = new player("Kobe Bryant", 9, 9, 8, 8, 9, 6, 6, 8);
players[44] = new player("Allen Iverson", 8, 9, 5, 6, 7, 4, 7, 10);
players[45] = new player("Charles Barkley", 7, 9, 7, 8, 8, 10, 6, 6);
players[46] = new player("Scottie Pippen", 7, 8, 9, 8, 8, 7, 7, 6);
players[47] = new player("Karl Malone", 7, 9, 7, 9, 8, 8, 5, 5);
players[48] = new player("John Stockton", 8, 6, 7, 4, 7, 4, 10, 9);
players[49] = new player("David Robinson", 6, 9, 9, 10, 9, 10, 5, 5);
players[50] = new player("Dirk Nowitzki", 9, 8, 7, 8, 7, 8, 6, 6);
players[51] = new player("Kevin Garnett", 7, 8, 10, 9, 8, 9, 5, 5);
players[52] = new player("Tracy McGrady", 8, 9, 6, 8, 8, 6, 7, 7);
players[53] = new player("Ray Allen", 10, 7, 5, 6, 7, 4, 6, 7);
players[54] = new player("Reggie Miller", 9, 6, 5, 6, 6, 4, 6, 7);
players[55] = new player("Dwyane Wade", 7, 10, 6, 6, 9, 6, 7, 8);
players[56] = new player("Steve Nash", 9, 7, 5, 6, 7, 4, 10, 9);
players[57] = new player("Jason Kidd", 6, 8, 9, 6, 6, 7, 9, 8);
players[58] = new player("Gary Payton", 7, 8, 9, 7, 7, 6, 7, 7);
players[59] = new player("Dennis Rodman", 3, 5, 9, 8, 8, 11, 3, 4);


function GeneratePlayer() {
  if (canGenerate) {
    let random = Math.floor(Math.random() * players.length);
    Player.textContent = "Player : " + players[random].name;
    currentPlayer = random;
    canGenerate = false;
    canSelect = true;
  } else {
    alert("Please select an attribute first");
  }
}

function selectAttribute(Attribute) {

  if (canSelect) {
    
    if (Attribute === "Shooting") {
      if(shooting == null){
        score += players[currentPlayer].Shooting;
        Shooting.textContent = "Shooting : " + players[currentPlayer].name + " (" + players[currentPlayer].Shooting + ")";
        shooting = players[currentPlayer].Shooting;
        canGenerate = true;
        canSelect = false;
        i++;
      } else {
        alert("You have already selected this attribute")
      }
    }
    if (Attribute === "Finishing") {
      if(finishing == null){
        score += players[currentPlayer].Finishing;
        Finishing.textContent = "Finishing : " + players[currentPlayer].name + " (" + players[currentPlayer].Finishing + ")";
        finishing = players[currentPlayer].Finishing;
        canGenerate = true;
        canSelect = false;
        i++;
      } else {
        alert("You have already selected this attribute")
      }
    }
    if (Attribute === "Defense") {
      if(defence == null){
        score += players[currentPlayer].Defence;
        Defence.textContent = "Defense : " + players[currentPlayer].name + " (" + players[currentPlayer].Defence + ")";
        defence = players[currentPlayer].Defence;
        canGenerate = true;
        canSelect = false;
        i++;
      } else {
        alert("You have already selected this attribute")
      }
    }
    if (Attribute === "Body") {
      if(body == null){
        score += players[currentPlayer].Body;
        Body.textContent = "Body : " + players[currentPlayer].name + " (" + players[currentPlayer].Body + ")";
        body = players[currentPlayer].Body;
        canGenerate = true;
        canSelect = false;
        i++;
      } else {
        alert("You have already selected this attribute")
      }
    }
    if (Attribute === "Athleticism") {
      if(athleticism == null){
        score += players[currentPlayer].Athleticism;
        Athleticism.textContent = "Athleticism : " + players[currentPlayer].name + " (" + players[currentPlayer].Athleticism + ")";
        athleticism = players[currentPlayer].Athleticism;
        canGenerate = true;
        canSelect = false;
        i++;
      } else {
        alert("You have already selected this attribute")
      }
    }
    if (Attribute === "Rebounding") {
      if(rebounding == null){
        score += players[currentPlayer].Rebounding;
        Rebounding.textContent = "Rebounding : " + players[currentPlayer].name + " (" + players[currentPlayer].Rebounding + ")";
        rebounding = players[currentPlayer].Rebounding;
        canGenerate = true;
        canSelect = false;
        i++;
      } else {
        alert("You have already selected this attribute")
      }
    }
    if (Attribute === "Playmaking") {
      if(playmaking == null){
        score += players[currentPlayer].Playmaking;
        Playmaking.textContent = "Playmaking : " + players[currentPlayer].name + " (" + players[currentPlayer].Playmaking + ")";
        playmaking = players[currentPlayer].Playmaking;
        canGenerate = true;
        canSelect = false;
        i++;
      } else {
        alert("You have already selected this attribute")
      }
    }
    if (Attribute === "Handles") {
      if(handles == null){
        score += players[currentPlayer].Handles;
        Handles.textContent = "Handles : " + players[currentPlayer].name + " (" + players[currentPlayer].Handles + ")";
        handles = players[currentPlayer].Handles;
        canGenerate = true;
        canSelect = false;
        i++;
      } else {
        alert("You have already selected this attribute")
      }
    }

    if (i === 8) {
      if (score <= 80) {
        Rank.textContent = "Goat Rank : " + (81 - score);
      } else {
        Rank.textContent = "Goat Rank : 0";
      }

      ppg = (shooting * (handles / 5)) + (finishing * (athleticism / 5)) // max 40
      apg = (playmaking * 3 + handles) / 3
      rpg = (rebounding + ((athleticism + body) / 2)) / 1.4;
      Averages.textContent = "Averages : " + ppg.toFixed(2) + " PPG " + rpg.toFixed(2) + " RPG " + apg.toFixed(2) + " APG";
      i = 0;
      score = 0;
    }
  } else{
    alert("Please generate a new player first");
  }
}

function reset() {
  score = 0;
  i = 0;
  canGenerate = true;
  canSelect = true;
  shooting = null;
  finishing = null;
  defence = null;
  body = null;
  athleticism = null;
  rebounding = null;
  playmaking = null;
  handles = null;
  Shooting.textContent = "Shooting : ";
  Finishing.textContent = "Finishing : ";
  Defence.textContent = "Defense : ";
  Body.textContent = "Body : ";
  Athleticism.textContent = "Athleticism : ";
  Rebounding.textContent = "Rebounding : ";
  Playmaking.textContent = "Playmaking : ";
  Handles.textContent = "Handles : ";
  Rank.textContent = "Goat Rank : ";
  Averages.textContent = "Averages : ";
  Player.textContent = "Player : ";
}
