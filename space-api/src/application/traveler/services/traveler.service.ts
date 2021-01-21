import { TravelerUpdateDto } from './../../../domain/dto/traveler-update.dto';
import { SharedService } from './../../../infrastructure/services/shared.service';
import { TravelerDto } from './../../../domain/dto/traveler.dto';
import { Traveler } from './../../../domain/entity/traveler.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class TravelerService {
  constructor(
    @InjectRepository(Traveler)
    private repository: Repository<Traveler>,
    private sharedService: SharedService,
  ) {}

  async create(form: TravelerDto) {
    await this.sharedService.validUniqueColumn(this.repository, form);

    form.password = await this.createPasswordHash(form.password);

    return this.repository.save(form);
  }

  async update(id, form: TravelerUpdateDto) {
    return await this.repository
      .update(id, form)
      .then(() => this.repository.findOne(id))
      .catch(err => {
        throw err;
      });
  }

  async delete(id) {
    return await this.repository.delete(id);
  }

  async searchTraveler(req: any, page = null, size = null) {
    const where = {};
    for (const [field, value] of Object.entries(req.query)) {
      if (field !== 'page' && field !== 'size') {
        where[`${field}`] = value;
      }
    }

    const skip = (page - 1) * size;
    const take = size;

    return await this.repository.find({ where, skip, take });
  }

  async createPasswordHash(password: string): Promise<any | string> {
    return await bcrypt.hashSync(password, 8);
  }
}
