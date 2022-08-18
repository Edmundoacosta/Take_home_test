import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService:HttpService){

  }
  getHello(): string {
    return 'Hello World!';
  }

  findCommits():any{
    this.httpService.get('https://api.github.com/repos/Edmundoacosta/Take_home_test/commits').subscribe((res) => {
      console.log(res);
      return res;
    });
  }
}
