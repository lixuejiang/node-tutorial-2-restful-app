var express = require('express');
var Mock = require('mockjs');
var Random = Mock.Random;
var router = express.Router();

router.post('/Income/IncomeDetail', function(req, res) {
    var data = Mock.mock({"number|1-10000000.1-10": 1}).number + '';
    var history = Mock.mock({
      "array|1-10": [
        {
          "date": Random.date(),
          "value|+1": [
            "-10.00",
            "23.79",
          ]
        }
      ]
    }).array
    res.send({
        "errmsg": "",
        "success": true,
        "errcode": "",
        "result": {
            "data": {
                "total": data,
                "history": history,
            },
            "success": true
        }
    });
});

router.post('/Income/ScheduledHistory', function(req, res) {
    var state = Mock.mock({"number|1-3": 1}).number + '';

    var history = Mock.mock({
      "array|1-50": [
        {
          "date": Random.date(),
          "rate|0-99.1-10": 0,
          "amount|1-100000.1-10":1
        }
      ]
    }).array
    res.send({
        "errmsg": "",
        "success": true,
        "errcode": "",
        "result": {
            "data": {
                "state": state,
                "history": history,
            },
            "success": true
        }
    });
});

router.post('/Income/Rank', function(req, res) {
    var pattern = {
        "avatar": Random.image('200x100', '#50B347', '#FFF', 'Mock.js'),
        "name|1": [
            "AMD",
            "CMD",
            "UMD"
        ],
        "rank|1-1000":1,
        "number|0-100.1-10":1
    };
    var me = Mock.mock(pattern);
    var history = Mock.mock({
      "history|0-30": [pattern]
    }).history;

    console.log(me)
    res.send({
        "errmsg": "",
        "success": true,
        "errcode": "",
        "result": {
            "data": {
                "me": me,
                "list": history,
            },
            "success": true
        }
    });
});

module.exports = router;