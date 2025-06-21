export const BASE_TRELLO_URL = "https://api.trello.com/1";
export const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
export const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
export const HATO_QUEUE_BOARD_ID = process.env.HATO_QUEUE_BOARD_ID;
export const HATO_QUEUE_LIST_ID = process.env.HATO_QUEUE_LIST_ID;
export const HATO_WORKING_LIST_ID = process.env.HATO_WORKING_LIST_ID;
export const HATO_FINISHED_LIST_ID = process.env.HATO_FINISHED_LIST_ID;

export const ZAGVANDR_LIST_ID = process.env.ZAGVANDR_LIST_ID;
export const ZAGVANDR_BOARD_ID = process.env.ZAGVANDR_BOARD_ID;

//auth
export const TRELLO_AUTH = `key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
