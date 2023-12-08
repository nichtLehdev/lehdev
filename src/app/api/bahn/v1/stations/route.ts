import { getAllStations } from "~/server/api/services/bahn";


async function handler() {
    const stations = await getAllStations();
    return new Response(JSON.stringify(stations), {
        headers: { "content-type": "application/json" },
    });
}
export const GET = handler