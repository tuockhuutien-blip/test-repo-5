
      import { ChannelMessage } from 'mezon-sdk';
      import { Command } from '@app/decorators/command.decorator';
      import { CommandMessage } from '@app/command/common/command.abstract';

      @Command('test1', {
        description: 'test1 command',
        usage: '!test1',
        category: 'Utility',
        aliases: ["t1",],
      })
      export class Test1Command extends CommandMessage {
        execute(args: string[], message: ChannelMessage) {
          const messageContent = `test1 executed!`; 
          return this.replyMessageGenerate({ messageContent }, message);
        }
      }
    