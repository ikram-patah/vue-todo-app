import { v4 as uuid } from 'uuid';

export default class TodoItemModel {
    constructor({ description, isCompleted = false } = {}) {
        this.id = uuid();
        this.description = description;
        this.isCompleted = isCompleted;
    }
}
