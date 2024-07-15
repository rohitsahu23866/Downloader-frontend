// api/downloadVideo.js
const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const os = require('os');
const { send } = require('micro');
const { json } = require('micro');

const DOWNLOAD_DIR = path.join(os.tmpdir(), 'downloads');

module.exports = async (req, res) => {
  try {
    const { url } = await json(req);

    const videoInfo = await ytdl.getInfo(url);
    const videoFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'highest' });

    const videoFilePath = path.join(DOWNLOAD_DIR, `${videoInfo.title}.${videoFormat.container}`);

    const downloadStream = ytdl(url, { format: videoFormat });

    downloadStream.pipe(fs.createWriteStream(videoFilePath));

    downloadStream.on('end', () => {
      send(res, 200, fs.readFileSync(videoFilePath));
    });

  } catch (error) {
    send(res, 500, { error: error.message });
  }
};
