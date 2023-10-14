<script>
  import { Story } from 'kitbook';
  import Button from '$lib/ui/Button.svelte';
  import Youtube, { PlayerState } from '$lib/media/Youtube.svelte';

  // const onPlayerReady = ({ detail }: { detail: YT.Player }) => {
  const onPlayerReady = ({ detail }) => {
    console.log('ready!');
    detail.playVideo();
    // setInterval(() => {
    //   dispatch('currentPlayTime', player.getCurrentTime());
    //   console.log(player.getCurrentTime());
    // }, 1000);
  };
</script>

<Story name="Responsive" knobs={{ width: '200-1000;640' }} let:knobs={{ width }}>
  <div style="width: {width}px;">
    <Youtube videoId="48gHuY4w0hY" let:player on:ready={onPlayerReady} let:state let:playbackRate>
      {#if state === PlayerState['PLAYING'] || state === PlayerState['BUFFERING']}
        <Button onclick={() => player.pauseVideo()}>Pause</Button>
        <Button onclick={() => player.stopVideo()}>Stop</Button>
      {:else}
        <Button onclick={() => player.playVideo()}>Play</Button>
      {/if}
      <Button onclick={() => player.seekTo(100, true)}>100ss</Button>
      <Button active={playbackRate === 0.5} onclick={() => player.setPlaybackRate(0.5)}>.5</Button>
      <Button active={playbackRate === 0.75} onclick={() => player.setPlaybackRate(0.75)}
        >.75</Button>
      <Button active={playbackRate === 1} onclick={() => player.setPlaybackRate(1)}>1</Button>
    </Youtube>
  </div>
</Story>
