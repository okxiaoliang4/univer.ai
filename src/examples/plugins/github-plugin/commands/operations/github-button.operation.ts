import type { IAccessor, ICommand } from '@univerjs/core'
import type { IConfigData } from '../../controllers/github-menu.controller'
import { CommandType, ConfigService } from '@univerjs/core'
import { CONFIG_KEY } from '../../controllers/github-menu.controller'

export const GithubButtonOperation: ICommand = {
  id: 'github-menu.operation.github-button',
  type: CommandType.OPERATION,
  handler: async (accessor: IAccessor) => {
    const configService = accessor.get(ConfigService)
    const configs = configService.getConfig<IConfigData>(CONFIG_KEY)!

    window.open(`https://github.com/dream-num/univer.ai/tree/main${configs.link}`, '_blank', 'noopener')
    return true
  },
}
