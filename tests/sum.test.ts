import { sum } from '../lib';
import * as assert from 'assert';

describe('sum', () => {

    it('Test of sum', () =>
    {
        let c = sum(1, 2);
        // Check
        assert.strictEqual(c, 3);
    });
});
