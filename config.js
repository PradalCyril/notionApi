import dotenv from "dotenv";
import { Client } from "@notionhq/client";

dotenv.config();

export const notion = new Client({ auth: process.env.NOTION_KEY });
export const databaseId = process.env.NOTION_DATABASE_ID;
export const megaDatabaseId = process.env.NOTION_MEGA_DATABASE_ID;

export const languages = {
    ch: 'CH',
    en: 'EN',
    es: 'SP',
    fr: 'FR',
    de: 'DE',
    it: 'IT',
    jp: 'JP',
    ko:'KO',
    pt:'PT',
    ru:'RU',
    th:'TH',
    tu:'TU',
}