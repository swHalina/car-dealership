import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
// import { CarsController } from './cars/cars.controller';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
