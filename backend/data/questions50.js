/** 100 Curated LeetCode-style Java Questions */
const { d } = require('./javaDrivers');
const easy = require('./defs/easy');
const medium = require('./defs/medium');
const hard = require('./defs/hard');

const resolveDriver = (driver) => {
    if (typeof driver === 'string') return d(driver);
    return d(driver.key, driver.method);
};

const toQuestion = (def) => {
    const { starter, driver, ...rest } = def;
    return {
        ...rest,
        starter_code: { java: starter },
        driver_code: { java: resolveDriver(driver) }
    };
};

module.exports = [...easy, ...medium, ...hard].map(toQuestion);
