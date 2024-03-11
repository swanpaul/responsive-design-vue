<script setup lang="ts">
import avatarUrl from 'assets/images/avatar.jpg'
</script>

<template>
    <div class="flex place-items-center gap-1">
        <img :src="avatarUrl" class="h-12 w-12" />
        <div
            class="font-[Noto Sans] text-[24px] font-bold not-italic leading-[137.5%] text-primary-700"
        >
            前端學塘
        </div>
    </div>
</template>
