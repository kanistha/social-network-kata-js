import {Timeline} from './Timeline'

export class User {
    name
    timeline = new Timeline()

    /** @type {Array.<User>} */
    subscriptions = []

    /** @type {Array.<User>} */
    subscribers = []

    constructor(name) {
        this.name = name
    }

    publishMessage(message) {
        this.timeline.addMessage(message)
    }

    /** @param {User} user */
    readMessages(user) {
        return user.timeline.messages
    }

    /** @param {User} user */
    subscribeTo(user) {
        this.subscriptions.push(user)
        user.subscribe(this)
    }

    subscribe(user) {
        this.subscribers.push(user)
    }

    subscriptionsTimeLine() {
        const messages = []
        for(let i=0; i< this.subscriptions.length; i++) {
            const user = this.subscriptions[i]
            for(let j=0; j< user.timeline.messages.length; j++){
                const  message = user.timeline.messages[j]
                messages.push(message)
            }
        }
        return messages.sort(
            (a, b) => a.id > b.id
        )
    }
}
