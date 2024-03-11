import type { CourseDataInfo } from '@/types'

export function listCourse() {
    const list: CourseDataInfo[] = [
        {
            id: '1',
            thumb: 'course-pinia',
            title: 'Vue 和 Pinia 整合實例：高效開發的最佳實踐',
            tags: ['Vue', 'Pinia'],
            time: 30,
        },
        {
            id: '2',
            thumb: 'course-figma-to-code',
            title: 'Figma to Code：切版技巧一次學到位',
            tags: ['Vue', 'Figma'],
            time: 20,
        },
        {
            id: '3',
            thumb: 'course-nuxt3',
            title: '從零開始學習 Nuxt 3：快速掌握 Vue 前端框架',
            tags: ['Vue', 'Nuxt3'],
            time: 60,
        },
        {
            id: '4',
            thumb: 'course-coding-style',
            title: '打造優雅的前端代碼風格',
            tags: ['Coding Style'],
            time: 20,
        },
    ]

    return list
}
