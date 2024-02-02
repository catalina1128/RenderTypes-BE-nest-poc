import { Injectable } from '@nestjs/common';
import getPeople from './api/people/people';
import type { Person } from './api/people/peopleTypes';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPeople(): Array<Person> {
    return getPeople();
  }
}
