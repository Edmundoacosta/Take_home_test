import { Controller, Get, Param, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { Response } from 'express';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService, private readonly httpService:HttpService) {}

  @Get('/listCommits')
  root(@Res() res: Response){
    this.httpService.get('https://api.github.com/repos/Edmundoacosta/Take_home_test/commits').subscribe((res2) => {
      let allCommits = res2.data.map((el) => {
        el.commit.date = new Date(el.commit.committer.date)
        el.commit.author = el.commit.committer.name
        return el.commit
      }).sort((a,b) => a.date - b.date).map((el,idx) => {
        el.number = idx + 1
        return el
      });
      return res.render(
        'index',
        { message: 'Lista de commits del proyecto Take_home_test', data: allCommits },
      );
    });
  }
}
