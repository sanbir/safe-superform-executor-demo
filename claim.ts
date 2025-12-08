import { createExecutorFromEnv } from '@p2p-org/safe-superform-executor'

import { CHAIN, P2P_SUPERFORM_PROXY_ADDRESS, ROLES_ADDRESS, SAFE_ADDRESS } from './shared'

const main = async () => {
  const executor = createExecutorFromEnv({ chain: CHAIN })

  console.info('Starting batch claim via Superform API...')
  const txHash = await executor.batchClaim({
    safeAddress: SAFE_ADDRESS,
    rolesAddress: ROLES_ADDRESS,
    p2pSuperformProxyAddress: P2P_SUPERFORM_PROXY_ADDRESS
  })

  console.info('Batch claim tx hash:', txHash)
}

main().catch((error) => {
  console.error('Batch claim failed:', error)
  process.exit(1)
})
