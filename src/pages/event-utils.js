
let eventGuid = 0

export const EVENTS = [
  {
    title: '通常回',
    start: '2024-11-07',
  },
]

export function createEventId() {
  return String(eventGuid++)
}