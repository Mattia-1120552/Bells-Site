<template>
  <div
    class="outerlayerBottomRight flex flex-col flex-center items-center w-[100%] h-[100%] max-w-[1200px] [&>div]:w-[100%] [&>div]:h-[32%] border rounded-xl px-10"
  >
    <!-- <li v-for="frog in frogs" :key="frog.id">{{ frog.title }}, {{ frog.description }}</li> -->

    <!-- Row 1: Profile -->
    <div class="flex [&>div]:flex [&>div]:items-center gap-10">
      <!-- pfp -->
      <div class="w-[23%]">
        <img
          src="https://i.pinimg.com/1200x/a7/01/5f/a7015f4309d4c8ce8359a139534841a5.jpg"
          class="rounded-full w-48 object-cover"
        />
      </div>
      <!-- title -->
      <div class="title w-[50%]">
        <div class="border-b border-dashed w-[75%] text-3xl pb-5">~ ~ Belljahh ♡</div>
      </div>
    </div>

    <!-- Row 2: -->
    <div class="flex pb-5">
      <!-- about -->
      <div class="grow flex flex-col card-about rounded-xl p-5">
        <text>
          I love watching anime, playing games and painting warhammer. <br />
          Currently I am a software developer student. one more year :c
          <br />
          <br />
          <ul class="border-t pt-3">
            <li>From: 🇳🇱 Holland and 🇸🇷 Suriname!</li>
            <li>Age: 19 💕</li>
            <li>Discord: Belljahh</li>
          </ul>
        </text>
      </div>
      <!-- spotify -->
      <div class="grow flex justify-evenly">
        <a
          href="https://data-card-for-spotify.herokuapp.com/card?user_id=zeg4i15mfym9039sw8l2fkiov"
          class="block"
        >
          <img
            src="https://data-card-for-spotify.herokuapp.com/api/card?user_id=zeg4i15mfym9039sw8l2fkiov"
            alt="Data Card for Spotify"
            class="max-h-56"
          />
        </a>
      </div>
    </div>

    <!-- Row 3: -->
    <div class="flex flex-col w-[100%] h-[100%]">
      <div class="flex justify-center"><h2>My favourite things:</h2></div>
      <div class="flex justify-evenly h-[100%] gap-3">
        <div class="card-about w-[30%] flex flex-col items-center">
          <h2>Anime</h2>
          <div class="flex w-full gap-1 justify-center pb-3">
            <img
              src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166910-pdgLmHMLdzUR.jpg"
              class="banner-img object-cover"
            />
            <img
              src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116566-PPIVQt359vQY.jpg"
              class="banner-img object-cover"
            />
            <img
              src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114236-wfQOWF0Ii3h2.png"
              class="banner-img object-cover"
            />
          </div>
        </div>
        <div class="card-about w-[30%] flex flex-col items-center">
          <h2>Reading</h2>
          <div class="flex w-full gap-1 justify-center">
            <img
              src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx137304-XZ91kOmUIMQo.png"
              class="banner-img object-cover"
            />
            <img
              src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b119174-nFMZSHbrDDbt.png"
              class="banner-img object-cover"
            />
            <img
              src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx140407-fJQr0fmqq1IO.png"
              class="banner-img object-cover"
            />
          </div>
        </div>
        <div class="card-about w-[30%] flex flex-col items-center">
          <h2>🥺 Characters 🥺</h2>
          <div class="flex w-full gap-1 justify-center">
            <img
              src="https://s4.anilist.co/file/anilistcdn/character/large/b89361-tq8PQQ4MmF0M.png"
              class="banner-img object-cover"
            />
            <img
              src="https://i.pinimg.com/736x/94/22/a0/9422a00cac9886c78d468ee20aa29195.jpg"
              class="banner-img object-cover"
            />
            <img
              src="https://s4.anilist.co/file/anilistcdn/character/large/b10010-fNspzan5MzNk.png"
              class="banner-img object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { onMounted, ref } from 'vue'

type Frog = {
  id: number
  title: string
  description: string
}

const frogs = ref<Frog[]>([])

async function getFrogs() {
  const { data, error } = await supabase.from('frogs').select()

  if (error) {
    console.error(error)
    return
  }
  if (data) {
    frogs.value = data
  }
}

onMounted(() => {
  getFrogs()
})
</script>

<style scoped>
/* div {
  border: 1px solid red;
} */
title {
  background-color: rgb(0, 255, 183);
  width: 50px;
  height: 50px;
}
.banner-img {
  width: 30%;
  max-height: 145px;
  border-radius: 10px;
}
</style>
