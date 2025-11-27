
      import { ChannelMessage } from 'mezon-sdk';
      import { Command } from '@app/decorators/command.decorator';
      import { CommandMessage } from '@app/command/common/command.abstract';

      @Command('test2', {
        description: 'test2 command',
        usage: '!test2',
        category: 'Utility',
        aliases: ["t2",],
      })
      export class Test2Command extends CommandMessage {
        execute(args: string[], message: ChannelMessage) {
          const messageContent = `test2 executed!`; 
          return this.replyMessageGenerate({ messageContent }, message);
        }
      }
    