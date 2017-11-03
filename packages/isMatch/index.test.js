import test from 'ava';
import sut from './index';

test('match', t => t.true(sut('password', 'password')));

test('mismatch', t => t.false(sut('password', 'incorrectpassword')));

const averageEvalTime = (x, y) => {
    let start, end;
    let times = [];

    for(let i = 0; i < 999999; i++) {
        start = process.hrtime()[1];
        sut(x, y);
        end = process.hrtime()[1];
        times.push(end - start);
    }

    return times.reduce((sum, n) => sum + n, 0) / times.length;
};

test('constant time equality', t => {
    const matchTime = averageEvalTime('AAAAAA', 'AAAAAA');
    const misMatchTime = averageEvalTime('AAAAAA', 'BB');
    t.true(Math.abs(matchTime - misMatchTime) < 2500)
});
