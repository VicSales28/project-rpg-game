# RPG 🧙‍♀️ ⚔️ 🧙‍♂️

This project was developed while I was studying 'Object-Oriented Programming' at Trybe Programming School.

I developed a role-playing game (RPG) universe based on fantasy and adventure elements.

Regular deadline: July 18, 2023 at 2:00 pm


<details>
  <summary><strong>🐉 What was developed </strong></summary><br />

  1) **The Race class and the classes that inherit from Race were created** 🧌

My first task was to create the abstract class Race. 
Following that, classes that inherit from Race were created. 
Four races exist in this fantasy universe: Orc, Dwarf, Elf, and Halfling. 
Upon their creation, characteristics such as hit points and dexterity are defined.

  2) **The Energy interface was created** 🔋

My next task was to enable the use of these two types of energy: "stamina" and "mana".

  3) **The abstract class Archetype and the classes that inherit from Archetype were created** 💥

Here, we will have some really cool and necessary attributes that will represent the name, the power of your special attack, and the energy cost to use it.

  4)  **The Fighter interface was created** 🤼‍♂️

The interface has the attributes:
- `lifePoints`, of type `number`
- `strength`, of type `number`
- `defense`, of type `number`
- `energy`, of type `Energy` ✨✨

The interface has the methods:
- `attack()`, which takes an `enemy` of type `Fighter` as a parameter and has no return value (`void`)
- `special()`, which takes an `enemy` of type `Fighter` as a parameter and has no return value (`void`) ✨✨
- `levelUp()`, which takes no parameters and has no return value (`void`)
- `receiveDamage()`, which takes an `attackPoints` of type `number` as a parameter and returns a `number`.

5)  **The class Character was created** 🧝🏽

Each character will be composed of both a race and an archetype.
The Character class has the private attributes: race, archetype, maxLifePoints, lifePoints, strength, defense, dexterity and energy.
The Character class also implements the extended methods of the Fighter interface.

  6) **The SimpleFighter interface was created** 👊

The interface has the attributes:
- `lifePoints`, of type `number`;
- `strength`, of type `number`.

The interface has the methods: `attack()` and `receiveDamage()`

  7) **The class Monster was created** 😈

If there are beings that implement the Fighter interface, there must be beings that implement the SimpleFighter interface too, right? These are the Monsters, bestial creatures that only attack other beings.

  8) **The class PVP was created** 🧙‍♀️ ⚔️ 🧙‍♂️

The idea of this world being completely peaceful has probably vanished from your mind after your recent quests. In this world, there are battles, many of them even epic, known as Battles. Their general/abstract representation has been provided previously; however, there are specific types of battles. One of these battles is called PVP, battles between characters (or player versus player), which can only occur between fighter characters (Fighters).

  9) **The class Dragon was created** 🐉

These magnificent beings are represented as monsters here, but with the special feature of having high hit point values.

  10) **The class PVE was created** 🧙‍♀️ ⚔️ 👻👻👻

Not all battles are between fighter characters (Characters), as there are dangers lurking in the dark, within dense forests, or in deep dungeons.

Monsters represent some of these dangers; therefore, we have PVE (player versus environment) battles, in which characters (always of the Fighter type) can fight against one or more fearsome monsters (SimpleFighter).

  11) **Creating objects in the index file** 🪄

My last quest for this adventure was to bring these characters to life and create some instances of the previously created classes.

</details>

<details>
  <summary><strong>🖥️ To access</strong></summary><br />

1 - Clone the repository:
`git@github.com:VicSales28/project-rpg-game.git`

2 - Enter the repository folder you just cloned.

You must be using node version 16 (or higher).

To check your version, use the command:
`nvm --version`

<details>
  <summary><strong>🐋 Running on Docker</strong></summary><br />

**Using Docker**

> Run the `node` service using the command `docker-compose up -d`.
- This service will initialize a container named `trybers_and_dragons`.
- From here, you can run the `trybers_and_dragons` container via CLI or open it in VS Code.

> Use the command `docker exec -it trybers_and_dragons bash`.
- This will grant you access to the interactive terminal of the container created by the compose, which is running in the background.

> Install dependencies [**if they exist**] with `npm install`

⚠ Attention ⚠ If you choose to use Docker, **ALL** commands available in `package.json` (npm start, npm test, npm run dev, ...) must be executed **WITHIN** the container, i.e., in the terminal that appears after running the `docker exec` command mentioned above.

</details>

</details>

<details>
  <summary><strong>🗣 Feedbacks</strong></summary><br />
  
_Give me feedbacks, I'm open to new ideas_ 😉

</details>

