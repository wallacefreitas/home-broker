import { OrderType } from '../entities/order.entity';

export class CreateOrderDto {
  walletId: string;
  assetId: string;
  shares: number;
  partial: number;
  price: string;
  type: OrderType;
}
