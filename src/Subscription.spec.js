import {User} from './User'
import {Message} from './Message'

describe('Subscribing', () => {

    it('Charlie can subscribe to Alice', () => {

        const alice = new User('Alice')
        const message = new Message('Hello World!')
        alice.publishMessage(message)

        const charlie = new User('Charlie')

        charlie.subscribeTo(alice)
        expect(charlie.subscriptions).toEqual([
            alice,
        ])
        expect(alice.subscribers).toEqual([
            charlie,
        ])
        expect(charlie.subscriptionsTimeLine()).toEqual([
            message,
        ])
    })

    it('Charlie can subscribe to Alice', () => {

        const alice = new User('Alice')
        const message = new Message('Hello World!')
        alice.publishMessage(message)

        const bob = new User('Bob')
        const messageB = new Message('Have fun!')
        bob.publishMessage(messageB)

        const messageC = new Message('bye!')
        alice.publishMessage(messageC)

        const charlie = new User('Charlie')

        charlie.subscribeTo(alice)
        charlie.subscribeTo(bob)
        expect(charlie.subscriptions).toEqual([
            alice,
            bob,
        ])
        expect(alice.subscribers).toEqual([
            charlie,
        ])
        expect(bob.subscribers).toEqual([
            charlie,
        ])
        expect(charlie.subscriptionsTimeLine()).toEqual([
            message,
            messageB,
            messageC,
        ])
    })
})