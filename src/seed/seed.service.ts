import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { Brands_SEED } from './data/brands.seed';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(Brands_SEED);
    // CARS_SEED;
    // Brands_SEED;
    return 'SEED executed';
  }
}
