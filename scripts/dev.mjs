import { checkbox } from '@inquirer/prompts'
import concurrently from 'concurrently'

try {
  const answer = await checkbox({
    message: 'Please select the project you want to start',
    choices: [
      { name: 'www', value: 'www' },
      { name: 'docs', value: 'docs' },
    ],
  })

  const commands = answer.map(value => `pnpm --filter ${value} dev`)

  concurrently(commands, {
    killOthers: ['failure', 'success'],
    prefix: '{name} ',
    restartTries: 0,
  })
}
catch (error) {
  if (error.name !== 'ExitPromptError') {
    console.error(error)
  }
}
