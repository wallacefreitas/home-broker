import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAssetDto } from './dto/create-asset.dto';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectModel(Asset.name)
    private assetSchema: Model<Asset>,
  ) {}

  create(createAssetDto: CreateAssetDto) {
    return this.assetSchema.create(createAssetDto);
  }

  findAll() {
    return this.assetSchema.find();
  }

  findOne(symbol: string) {
    return this.assetSchema.findById({ symbol });
  }
}
