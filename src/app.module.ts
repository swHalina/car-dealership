import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
// import { CarsController } from './cars/cars.controller';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
