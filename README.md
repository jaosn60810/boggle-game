# [Demo](https://creative-croissant-a105c3.netlify.app)

# How to play

0. If the player want to change the words in the boggle game, change the words in the textarea and press the "Generate" button
   ![image](https://user-images.githubusercontent.com/26405746/209468829-9e4710aa-deb6-4cbc-b613-9f1b5a5217dd.png)

1. Press the "Start Game" button  
   ![image](https://user-images.githubusercontent.com/26405746/209468676-4b594dfa-692f-4cbe-ac8f-6db3839c997a.png)

2. After the audio is played, find the word on the grid before time run out
   ![image](https://user-images.githubusercontent.com/26405746/209469262-1bf677a4-2f91-4400-b9de-b81d2d33526c.png)

3. Players can move from one letter to another if it is a neighbor ( directions ↑, ←, ↖, ↙ are not allowed).
   ![image](https://user-images.githubusercontent.com/26405746/209469889-34b7e14f-1f61-4980-b978-fc4f07567c26.png)

4. Players can use the "Clear" button the clear the chosen words
   ![image](https://user-images.githubusercontent.com/26405746/209469868-59956b69-921f-4b8d-94f2-1163d50bedc7.png)

5. Players cannot use a letter (dice) more than once in a word and change the direction
   ![image](https://user-images.githubusercontent.com/26405746/209469830-cc7cc9be-513c-403c-888d-3046e0acf8ae.png)

6. Every 5 seconds, audio will be played, or press "Play Again" button to play the audio again
   ![image](https://user-images.githubusercontent.com/26405746/209469345-69b6576e-49b0-4776-b47a-06c7de7e5a72.png)

7. When the time run out, the player will minus one life
   ![image](https://user-images.githubusercontent.com/26405746/209469447-9bf40390-f0cb-42a1-80eb-4f6fc047b52c.png)

8. When the player has run out of lives, game over
   ![image](https://user-images.githubusercontent.com/26405746/209469562-46fe53ee-0323-4ec3-aed2-46240228a45e.png)

# API Reference

1. Get words From [Google Sheet](https://docs.google.com/spreadsheets/d/1cjOAtSYV514lxz6MDdkoXjroWmemJUmTYWwk2WDpoks/edit#gid=0)

2. [Free Dictionary API](https://dictionaryapi.dev/)

# Related

1. How to user [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) in Svelte

   [Svelte App - Speech Synthesis Api](https://www.youtube.com/watch?v=XDdKWOqCcZk&ab_channel=NoahGlaser)

2. Timer component

   [Svelte App - Countdown App](https://svelte.dev/repl/a19df6f013434e01bb990349843af288?version=3.38.2)

3. [Word search puzzle generator](https://www.npmjs.com/package/@blex41/word-search)

# Run Locally

Clone the project

```bash
  git clone https://github.com/jaosn60810/boggle-game.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

# Tech Stack

**Client:** vite, svelte, Bootstrap5
