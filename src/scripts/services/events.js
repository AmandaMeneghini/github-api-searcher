import { baseUrl, eventsQuantity, eventsQuantityFetch } from "../variables.js";

async function getUserEvents(userName) {
    const url = `${baseUrl}/${userName}/events?per_page=${eventsQuantityFetch}`
    const response = await fetch(url);
    const events = await response.json();

    if(events.message === "Not Found"){
        return
    }

    const filteredEvents = events.filter(event => {
        return event.type === "PushEvent" || event.type === "CreateEvent";
    })

    return filteredEvents.slice(0, eventsQuantity)
};

export { getUserEvents };