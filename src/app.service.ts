import { HttpService } from '@nestjs/axios';
import { Injectable, Render, Res } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService:HttpService){

  }
  getHello(): string {
    return 'Hello World!';
  }
}
