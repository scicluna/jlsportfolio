import { eventlist } from '$lib/data/eventlist'
import type { PageLoad } from './$types'

export const load = (() => {
    return {
        events: eventlist
    }
}) satisfies PageLoad