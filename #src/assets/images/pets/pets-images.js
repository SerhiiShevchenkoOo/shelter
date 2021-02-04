import importAll from '../../../script/utils/import-all';

const img = [];

importAll(require.context('./', true, /\.(png|jpg|svg|gif|webp)$/), img);

export default img;
