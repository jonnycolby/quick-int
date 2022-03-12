//
//  quick-int
//    Simply generate a random integer.
//
//  Usage:
//  const my_int_01  =  quick_int({ min: 0, max: 100 });
//  const my_int_02  =  quick_int(0, 100);
//  const my_int_03  =  quick_int();
//

//

const quick_int = (params_01, params_02) => {
    const params = params_01 && typeof params_01 == "object" ? params_01 : {};
    var min = params.min != null && typeof params.min == "number" ? Math.floor(params.min) : 0;
    var max = params.max != null && typeof params.max == "number" ? Math.round(params.max) : 100;
    if (typeof params_01 == "number") min = Math.floor(params_01);
    if (typeof params_02 == "number") max = Math.round(params_02);
    //
    return Math.floor(Math.random() * Math.floor(max + 1 - min)) + min;
};

//

module.exports = quick_int;

//
