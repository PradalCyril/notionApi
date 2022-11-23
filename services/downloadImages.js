 import fs from 'fs';
 import request from 'request';

export const downloadImages = (uri, filename, callback) => {
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(`pokemons/${filename}`)).on('close', callback);
  });
};


