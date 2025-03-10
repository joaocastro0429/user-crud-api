import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @HttpCode(200)
    @Get()
    getAllUsers(): User[] {
        return this.usersService.getAllUsers()

    }
    @HttpCode(201)
    @Post()
    createUser(@Body() user: User) {
        return this.usersService.createUser(user)
    }
    @HttpCode(200)
    @Get(':id')
    findUserById(@Param('id') id: string): User | string {
        return this.usersService.findUserById(Number(id)); // Convertendo string para número
    }
    @HttpCode(201)
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() user: User): User | string {
        return this.usersService.updateUser(Number(id), user)
    }
    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.usersService.deleteUser(Number(id))
    }
    
}
 