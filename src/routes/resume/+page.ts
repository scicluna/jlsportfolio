import resume from '$lib/resume/resume.pdf'
import type { PageLoad } from './$types.js'

export const load = (() => {
    return {
        resume: resume
    }
}) satisfies PageLoad