import { config } from '../config.module.js';
import { FetchClass } from '../lib/FetchClass.js';

// * Les méthodes pour créer des listes et cartes sont très similaires, il faudrait envisager une ou plusieurs abstractions pour rester DRY

async function getListsFromAPI() {
    return await new FetchClass(`${config.base_url}/lists`).make().send();
}

async function createList(data) {
    return await new FetchClass(`${config.base_url}/lists`)
        .make('POST')
        .send(data);
}

async function updateList(id, data) {
    const url = `${config.base_url}/lists/${id}`;

    return await new FetchClass(url).make('PATCH').send(data);
}

async function deleteList(listId) {
    const url = `${config.base_url}/lists/${listId}`;

    return await new FetchClass(url).make('DELETE').send();
}

export { getListsFromAPI, createList, updateList, deleteList };
