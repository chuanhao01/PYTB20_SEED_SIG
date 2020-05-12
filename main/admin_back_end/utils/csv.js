/*
This utils class is mainly for parsing data from db model calls into a csv file
*/

const jsonCsvParser = require('json2csv');
const fs = require('fs');
const uuid = require('uuid').v4;

// Main idea for this util is that you use one function to parse data and create the csv files, once downloaded, you deleted them
const csv = {
    generateCsv(data){
        let csv_data = jsonCsvParser.parse(data);
        return new Promise((resolve, reject) => {
            const id = uuid();
            let file_path = `./data_files/${id}.csv`;
            let full_path = `/home/chuanhao01/home/Github/PYTB20_SEED_SIG/main/admin_back_end/data_files/${id}.csv`;
            fs.writeFile(file_path, csv_data, function(err){
                if(err){
                    reject(err);
                }
                resolve(full_path);
            });
        });
    },
    deleteCsvFile(file_path){
        return new Promise((resolve, reject) => {
            fs.unlink(file_path, function(err){
                if(err){
                    reject(err);
                }
                resolve(true);
            });
        });
    }
};

module.exports = csv;