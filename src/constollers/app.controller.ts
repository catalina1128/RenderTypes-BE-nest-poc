import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import type { Person } from '../api/people/peopleTypes';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('people')
  getPeople(): Promise<Person[]> {
    return this.appService.getPeople();
  }
}
