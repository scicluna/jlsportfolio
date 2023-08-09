import { eventlist } from '$lib/data/eventlist.js'
import type { PageLoad } from './$types.js'

export const load = (() => {
    return {
        events: eventlist
    }
}) satisfies PageLoad