const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");


// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {    
    const hasilixx = await promiseTheaterIXX();
    const hasilVGC = await promiseTheaterVGC();

    return await Promise.all([hasilixx, hasilVGC])
    .then((hasil) => {
      const [resultOfiix,resultofVGC] = hasil;     
      return[...resultOfiix, ...resultofVGC].filter((jumlahRespon) => jumlahRespon.hasil === emosi).length;
    })
  } catch (error) {
    console.log(`There is an error: ${error}`);
  }
}

module.exports = {
  promiseOutput,
};
