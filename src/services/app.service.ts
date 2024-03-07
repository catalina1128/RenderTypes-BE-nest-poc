import { Injectable } from '@nestjs/common';
import getPeople from '../api/people/people';
import type { Person } from '../api/people/peopleTypes';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  getHello(): string {
    return 'Hello World!';
  }

  getPeople(): Promise<User[]> {
    return this.userModel.find().exec();
    // return getPeople();
  }
}
