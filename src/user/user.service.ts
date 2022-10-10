import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'database/models/user.entity';
import { userCreatedto } from './dto/userCreate.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) 
    private userRepositary: Repository<User>,) { }
    
//    Create user
    
register(userCreatedto: userCreatedto) {
    return this.userRepositary.save(userCreatedto);
}

    // find user by email
    getUserByEmail(email: string)
    {
        return this.userRepositary.findOne({ where: { email } });
    }
}
