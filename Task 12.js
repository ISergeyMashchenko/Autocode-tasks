const random = () => (Math.random() * 100).toFixed();

function Fighter(fighterData) {
  let {name, damage, hp, strength, agility} = fighterData;

  let wins = 0, losses = 0;

  this.getName = () => {
    return name;
  }
  this.getDamage = () => {
    return damage;
  }
  this.getStrength = () => {
    return strength;
  }
  this.getAgility = () => {
    return agility;
  }
  this.getHealth = () => {
    return hp;
  }
  this.dealDamage = (num) => {
    hp = hp - num;

    if(hp < 0){
      hp = 0;
    }
  }
  this.logCombatHistory = () => {
    console.log(`Name:${name},Wins:${wins},Losses:${losses}`);
  }
  this.heal = (num) => {
    hp += Math.abs(num);
  }
  this.addWin = () => {
    wins += 1
  }
  this.addLoss = () => {
    losses += 1
  }
  this.attack = (defender) => {
    const isSuccessful= random();
    const strength = defender.getStrength();
    const agility = defender.getAgility();
    const defenderName = defender.getName()

    const characteristicSum = strength + agility
    if(isSuccessful > characteristicSum){
      defender.dealDamage(damage);
      console.log(`${name} makes ${damage} damage to ${defenderName}`);
    }else{
      console.log(`${name} attack missed`);
    }
  }
}

const battle = function (fighter1, fighter2) {
  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
  }
  if (fighter1.getHealth() === 0) {
    fighter2.addWin();
    fighter1.addLoss();
    console.log(`${fighter2.getName()} is dead`);
    return 0;
  }
  if (fighter2.getHealth() === 0) {
    fighter1.addWin();
    fighter2.addLoss();
    console.log(`${fighter1.getName()} is dead`);
    return 0;
  }
  if (fighter1.getHealth() === 0 && fighter2.getHealth() === 0) {
    return 0;
  }
};

module.exports = { Fighter, battle};
