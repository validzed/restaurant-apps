import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);
    const pictureId = ['04', '43', '23', '38'];
    const randomPictureId = pictureId[Math.floor(Math.random() * pictureId.length)];

    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL_MEDIUM}/${randomPictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
