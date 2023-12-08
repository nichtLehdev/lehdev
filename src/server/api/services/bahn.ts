import * as mariadb from 'mariadb';
import { BahnDbConfig } from '../../config/bahn.db';
import { type Station as DbStation } from '../../models/database/bahn';
import { type Station as ApiStation } from '../../models/outbound/bahn';

const pool = mariadb.createPool(BahnDbConfig);

function convertStation(station: DbStation): ApiStation {
    return {
        eva: station.eva,
        name: station.name,
        ds100: station.ds100,
        location: station.latitude && station.longitude ? {
            latitude: station.latitude,
            longitude: station.longitude
        } : null
    }
}

export async function getAllStations() {

    const conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM stations');
    await conn.release();

    const stations: ApiStation[] = [];

    for (const row of rows) {
        stations.push(convertStation(row as DbStation));
    }



    return {
        "ts": new Date().toISOString(),
        "length": stations.length,
        "stations": stations
    }
}