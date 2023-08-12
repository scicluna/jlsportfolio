import type { PageLoad } from '../$types.js'
import { projects } from '$lib/data/projects.js'

export const load = (() => {
    return {
        projects: projects
    }
}) satisfies PageLoad