import {Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = []
    getAllUsers(): User[] {
        return this.users
    }
    createUser(user: User) {
        const { name, email } = user
        const id = this.users.length + 1
        user = { id, name, email }
        this.users.push(user)
        return "User created successfully"
    }

    findUserById(id: number): User | string {

        const user: any = this.users.find(user => user.id === id)
        if (!user) {
            return "User not found"
        }
        return user

    }
    updateUser(id: number, user: User): User | string {
        const index = this.users.findIndex(user => user.id === id)
        if (index >= 0) {
            this.users[index].name = user.name
            this.users[index].email = user.email
            this.users[index]
        }
        return index >= 0 ? this.users[index] : "User not found"

    }

    deleteUser(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        
        if (index >= 0) {
          const deletedUser = this.users.splice(index, 1);
          return deletedUser;
        } 
         return "User not found"
        }
      }
    





