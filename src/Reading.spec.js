import {User} from './User'
import {Message} from './Message'

describe('Reading messages', () => {
    it('Bob can read the Alice’s timeline', () => {
        const alice = new User('Alice')
        const message = new Message("Hi there")
        alice.publishMessage(message)

        const bob = new User('Bob')
        expect(bob.readMessages(alice)).toEqual([
            message
        ])

    })
})

