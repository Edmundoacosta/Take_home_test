import { Controller, Get, Param, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/listCommits')
  @Render('index')
  root(){
    return this.appService.findCommits().then((result) => result ? { data:result, message: 'Hello World'}: {data: {}, message: 'Example'});
  }
}
