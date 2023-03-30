<script lang="ts">
    export let currentIndicatorIndex :number;

    const indicatorsCount = 3;

</script>


<div class="slide-indicator" >
    {#each Array(indicatorsCount) as _, i}
        <div class="slide-indicator-dot" class:active={i === currentIndicatorIndex}></div>
    {/each}
</div>


<style>
    .slide-indicator{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .slide-indicator-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: grey;
        margin: 0 5px;
        cursor: pointer;
    }

    .slide-indicator-dot.active {
        background-color: white;
    }

</style>