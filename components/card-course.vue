<script setup lang="ts">
import type { CourseData } from '@/types'
import { useImageUrl } from '@/composables'
import avatar from 'assets/images/avatar.jpg'
/* Enabled Nuxt-svgo npm package  */
import IconTime from 'assets/icons/time.svg'

/* Enabled Vue 3.3 Reactive Props Destructure feature */
const {
    thumb = 'course-default',
    title = '課程名稱',
    tags = [],
    time = 0,
} = defineProps<CourseData>()

const imageUrl = computed(() => useImageUrl(`${thumb}.jpg`))
</script>
<template>
    <div
        class="flex w-full min-w-[260px] max-w-[360px] flex-col items-start justify-start overflow-hidden rounded-2xl bg-white pb-4 shadow-2xl"
    >
        <img class="h-[174px] w-full object-cover" :src="imageUrl" />
        <div class="inline-flex items-start justify-start gap-2 px-4 py-3">
            <div
                v-for="(tag, index) in tags"
                :key="index"
                class="flex items-center justify-center rounded bg-info px-4 py-0.5"
            >
                <div class="text-sm font-normal text-black">
                    {{ tag }}
                </div>
            </div>
        </div>
        <div
            class="inline-flex h-[60px] items-center justify-start gap-2 self-stretch px-3 py-2"
        >
            <img class="h-9 w-9" :src="avatar" />
            <div
                class="shrink grow basis-0 text-base font-bold text-primary-800"
            >
                {{ title }}
            </div>
        </div>
        <div class="inline-flex items-center justify-between self-stretch px-6">
            <div class="flex items-start justify-start gap-2">
                <IconTime class="h-4 w-4 text-focus" />
                <div class="text-sm font-normal leading-[16px] text-focus">
                    {{ time }} min.
                </div>
            </div>
            <BaseButton>上課去</BaseButton>
        </div>
    </div>
</template>
