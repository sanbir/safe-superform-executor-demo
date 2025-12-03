# safe-superform-executor-demo

Small, real-mainnet demo that drives `@p2p-org/safe-superform-executor` on Base:

- Builds a P2P signer signature
- Sends a deposit through the Roles module into the Safe
- Sends a withdraw through the Roles module

The script uses the hardcoded Safe/Role/Proxy addresses already in `deposit-withdraw.ts` and the current Superform calldata blobs. Update those constants if you want to target other vaults or Safes.

## Prerequisites

- Node 18+
- A funded P2P module key that is allowed in the Roles module on the Safe
- Environment variables:

```bash
RPC_URL=https://mainnet.base.org        # HTTPS RPC endpoint
PRIVATE_KEY=0x...                       # P2P module wallet (matches Roles permission)
P2P_SIGNER_PRIVATE_KEY=0x...            # Key used to sign the fee config (p2p signer)
```

## Install

```bash
npm install
```

## Run

```bash
npm run demo
```

What happens:

1. A P2P signer signature is generated with a 1-week deadline.
2. `executor.deposit` is called with the fixed Safe, Roles, and yield protocol calldata.
3. `executor.withdraw` is called with the fixed Safe, Roles, proxy address, and Superform calldata.

Both transactions are broadcast to Base mainnet. If Roles does not allow the withdraw selector for the proxy, the second call will fail on-chain. Adjust the calldata or permissions as needed before running with real funds.
