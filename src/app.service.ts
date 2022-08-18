import { HttpService } from '@nestjs/axios';
import { Injectable, Render } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService:HttpService){

  }
  getHello(): string {
    return 'Hello World!';
  }

  async findCommits():Promise<any> {
    await this.httpService.get('https://api.github.com/repos/Edmundoacosta/Take_home_test/commits').subscribe((res) => {
      let allCommits = res.data.map((el) => el.commit);
      console.log(allCommits);
      return allCommits
    });
  }
}
