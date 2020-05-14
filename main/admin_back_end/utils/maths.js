/*
This utils class is mainly for math functions we are using
*/

const maths = {
    getJwtTime(js_time){
        return Math.floor((js_time) / 1000);
    },
};

module.exports = maths;