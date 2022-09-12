import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    //console.log(id);
    // const currentCar: number = +id;
    const data = this.cars.filter((x) => x.id === id);
    const car = this.cars.find((x) => x.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    // return `id: ${data[0].id}
    // car: ${data[0].brand}
    // model: ${data[0].model}`;

    return car;
  }
}
