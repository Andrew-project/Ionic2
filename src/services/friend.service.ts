import friends from '../data/friends/friend';
import {Friend} from "../data/friends/friend.interface";

export class FriendService {
    private friends: Friend[] = [];

    constructor() {
        this.friends = friends;
    }

    addFriend(friend: Friend) {
        this.friends.push(friend);
    }

    deleteFriend(friend: Friend) {
        const pos = this.friends.findIndex(item => item.id === friend.id);
        this.friends.splice(pos, 1);
    }

    getFriends() {
        return this.friends.slice();
    }
}