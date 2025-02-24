import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderStatus } from './entities/order.entity';
import { Asset } from 'src/assets/entities/asset.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name)
    private orderSchema: Model<Order>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderSchema.create({
      wallet: createOrderDto.walletId,
      asset: createOrderDto.assetId,
      shares: createOrderDto.shares,
      partial: createOrderDto.partial,
      type: createOrderDto.type,
      status: OrderStatus.PENDING,
    });
  }

  findAll(filter: { walletId: string }) {
    return this.orderSchema
      .find({ wallet: filter.walletId })
      .populate('asset') as Promise<(Order & { asset: Asset })[]>;
    //.populate(['asset', 'trade']);
  }

  findOne(id: string) {
    return this.orderSchema.findById(id);
    //.populate(['asset', 'trade']);
  }

  createTrade() {}
}
