export class Message {
    id
    text
    createdAt

    static _nextId = 0

    static nextId() {
        return Message._nextId++
    }

    constructor(text) {
        this.id = Message.nextId()
        this.text = text
        this.createdAt = Date.now()
    }

}
