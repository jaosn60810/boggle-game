<script>
  import { onMount } from 'svelte';

  import GameBoard from './lib/GameBoard.svelte';
  import NewGameButton from './lib/NewGameButton.svelte';
  import StartGameButton from './lib/StartGameButton.svelte';
  import SubmitWordList from './lib/SubmitWordList.svelte';
  import Timer from './lib/Timer.svelte';

  import boggleGameWords from './stores/boggleGameWords';
  import wordsStore from './stores/wordsStore';

  let timerRef;
  let gameBoardRef;

  let countdown = 15;

  let startGame = false;

  let voices = [];
  let selectedVoice;

  function play() {
    speechSynthesis.cancel();
    let utterance = new SpeechSynthesisUtterance($boggleGameWords[0]);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.voice = selectedVoice;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  }

  function handleStartGame() {
    startGame = true;
    play();
  }

  function handleNewGame() {
    $wordsStore = [];
    gameBoardRef.generateBoggleGame();
    startGame = false;
  }

  onMount(async () => {
    // content here
    // console.log(await getWordsFromGSheet());
    // console.log(generateWordSearchPuzzle());
  });

  onMount(() => {
    speechSynthesis.onvoiceschanged = () => {
      voices = speechSynthesis.getVoices();
      selectedVoice = voices[4];
    };
  });
</script>

<header class="mb-3">
  <h1 class="text-center">Boggle Game</h1>
</header>

<main class="container mb-3">
  <div class="row">
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-6" />
      </div>

      <GameBoard
        bind:this={gameBoardRef}
        on:readNewWord={play}
        on:resetTimer={() => {
          timerRef.handleReset();
        }}
      />
    </div>
    <div class="col-md-6">
      {#if startGame}
        <Timer
          bind:this={timerRef}
          on:new={() => {
            countdown = null;
          }}
          {countdown}
        />
      {/if}

      {#if $wordsStore.length}
        <SubmitWordList on:click={handleNewGame} />
      {/if}

      {#if !startGame}
        <StartGameButton on:click={handleStartGame} />
      {:else}
        <NewGameButton on:click={handleNewGame} />
      {/if}
    </div>
  </div>
</main>
