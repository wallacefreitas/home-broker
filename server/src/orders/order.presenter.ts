import { AssetPresenter } from 'src/assets/asset.presenter';
import { Asset } from 'src/assets/entities/asset.entity';
import { Order } from './entities/order.entity';

export class OrderPresenter {
  constructor(private readonly order: Order & { asset: Asset }) {}

  toJSON() {
    return {
      _id: this.order._id,
      assets: new AssetPresenter(this.order.asset).toJSON(),
      shares: this.order.shares,
      partial: this.order.partial,
      price: this.order.price,
      type: this.order.type,
      status: this.order.status,
    };
  }
}
