import * as mm from 'music-metadata';
import util from 'util';

(async () => {
  try {
    const metadata = await mm.parseFile(`./03. Badflower - Ghost.flac`);
    console.log(util.inspect(metadata, { showHidden: false, depth: null }));
  } catch (error) {
    console.error(error.message);
  }
})();
