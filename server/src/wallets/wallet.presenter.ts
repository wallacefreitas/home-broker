import { AssetPresenter } from 'src/assets/asset.presenter';
import { Asset } from 'src/assets/entities/asset.entity';
import { WalletAsset } from './entities/wallet-asset.entity';
import { Wallet } from './entities/wallet.entity';

export class WalletPresenter {
  constructor(
    private readonly wallet: Wallet & {
      assets: (WalletAsset & { asset: Asset })[];
    },
  ) {}

  toJSON() {
    return {
      _id: this.wallet._id,
      assets: this.wallet.assets.map((walletAsset) => {
        const assetPresenter = new AssetPresenter(walletAsset.asset);
        return {
          asset: assetPresenter.toJSON(),
          shares: walletAsset.shares,
        };
      }),
    };
  }
}
