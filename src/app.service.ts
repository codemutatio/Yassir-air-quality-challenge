import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello welcome to Yassir Air Quality API challenge';
	}
}
