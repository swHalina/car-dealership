import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep'];

  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    // console.log(currentCar);
    //const currentCar: number = parseInt(id);
    return this.carsService.findOneById(id);

    // return `id: ${this.carsService.cars}
    // car: ${this.carsService.cars}`;
  }

  // @Get(':id')
  // getCarById(@Param('id') id: string) {
  //   // console.log(id);
  //   const currentCar: number = parseInt(id);
  //   // console.log(currentCar);

  //   interface TheCars {
  //     id: number;
  //     car: string;
  //   }
  //   const activeCar: TheCars = {
  //     id: currentCar,
  //     car: this.cars[currentCar],
  //   };

  //   return `id: ${this.carsService.cars}
  //   car: ${this.carsService.cars}`;
  // }
  @Post()
  createCar(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
