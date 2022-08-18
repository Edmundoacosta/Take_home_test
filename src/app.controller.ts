import { Controller, Get, Param, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/listCommits')
  @Render('index')
  root(){
    return {message: 'Hello World!'};
  }
}
