/* eslint no-param-reassign: 0 */
/* eslint no-return-assign: "error" */
import importAll from '../../../script/utils/import-all';

const helpImage = [];

importAll(require.context('./', true, /\.(png|jpg|svg|gif|webp)$/), helpImage);

export default helpImage;
