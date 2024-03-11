export type CourseData = {
	thumb?: string
	title?: string
	tags?: string[]
	time?: number
}

export type CourseDataInfo = CourseData & {
	id: string
}
