import { Content } from './Content';
import { Notification } from './Notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade.'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
