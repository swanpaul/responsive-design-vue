<script setup lang="ts">
import IconHamburgerMenu from 'assets/icons/hamburger-menu.svg'
import IconPlay from 'assets/icons/play.svg'
import heroUrl from 'assets/images/hero.jpg'
import { listCourse } from '~/services/course'

const courseList = listCourse()
</script>
<template>
    <div
        class="flex flex-col items-center gap-[12px] px-0 py-[16px] md:py-[32px]"
    >
        <!-- Block: Navigation -->
        <LayoutContainer class="flex items-center self-stretch py-0">
            <div class="flex flex-[1_0_0] items-center xl:hidden">
                <IconHamburgerMenu class="text-[36px] text-primary-600" />
            </div>
            <BaseLogo />
            <div
                class="hidden flex-[1_0_0] items-center justify-end gap-[12px] xl:flex"
            >
                <BaseButton type="secondary">登入</BaseButton>
                <BaseButton>註冊</BaseButton>
            </div>
        </LayoutContainer>

        <!-- Block: Hero -->
        <LayoutContainer
            class="flex flex-col items-start justify-center self-stretch py-[var(--hero-paddingY)] md:flex-row md:items-center md:justify-start md:gap-[48px]"
        >
            <div
                class="flex flex-col items-center justify-center gap-[12px] self-stretch md:items-start md:gap-[16px]"
            >
                <div>
                    <span class="text-hero"
                        >前端學塘，<br />讓醜小鴨前端程式<br />像變身的</span
                    ><span class="text-hero text-focus">天鵝一樣優雅</span>
                </div>
                <div
                    class="flex flex-col items-center justify-center gap-[var(--page-gap)] md:flex-row md:justify-start"
                >
                    <BaseButton class="self-stretch">如何開始</BaseButton>
                    <BaseButton
                        type="secondary"
                        class="flex items-center justify-center gap-[8px] px-[32px] py-[8px]"
                        ><IconPlay />範例影片</BaseButton
                    >
                </div>
            </div>
            <div class="hidden flex-[1_0_0] items-center justify-end md:flex">
                <img
                    class="h-[270px] flex-[1_0_0] rounded-xl object-cover xl:h-96 xl:w-[576px]"
                    :src="heroUrl"
                />
            </div>
        </LayoutContainer>

        <div
            class="flex items-center justify-center self-stretch px-[var(--page-paddingX)] py-[var(--page-gap)]"
        >
            <span class="text-sub-header text-focus">精選課程</span>
        </div>

        <!-- Block: Course -->
        <div
            class="flex items-start justify-center self-stretch bg-primary-300"
        >
            <LayoutCourse>
                <CardCourse
                    v-for="course in courseList"
                    :key="course.id"
                    :thumb="course.thumb"
                    :tags="course.tags"
                    :time="course.time"
                    :title="course.title"
                />
            </LayoutCourse>
        </div>
    </div>
</template>
