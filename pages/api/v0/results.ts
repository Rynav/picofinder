import { NextApiRequest, NextApiResponse } from "next";
import Database from 'better-sqlite3';
import * as fs from 'fs';


function fetch(data: string) {
    const db = new Database('C:\\Users\\Rynav\\Desktop\\picofinder1\\picodata\\1231231.db');
    db.pragma('journal_mode = WAL');



    const row: any = db.prepare('SELECT * FROM queries WHERE id = ?').get(data);
    console.log("Found rows: ",row);
    if (!row) 
        return {error: "Not found"}

    const result: [] = JSON.parse(fs.readFileSync(`../picodata/files/${data}.json`, 'utf-8'))
    return result;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let row = fetch(req.body.id)
    res.status(200).json(row)
}

export const config = {
    api: {
      bodyParser: true,
      responseLimit: false,
    },
}