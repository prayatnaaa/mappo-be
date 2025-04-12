import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>,
  ) {}

  async create(createPlaceDto: CreatePlaceDto) {
    const place = this.placeRepository.create(createPlaceDto);
    return await this.placeRepository.save(place);
  }

  async findAll() {
    return await this.placeRepository.find();
  }

  async findOne(id: number) {
    const place = await this.placeRepository.findOne({
      where: { id },
    });

    if (!place) {
      throw new NotFoundException(place, 'Place is not available');
    }

    return place;
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto) {
    const place = await this.findOne(id);
    Object.assign(place, updatePlaceDto);
    return await this.placeRepository.save(place);
  }

  async remove(id: number) {
    const place = await this.findOne(id);
    return this.placeRepository.remove(place);
  }
}
