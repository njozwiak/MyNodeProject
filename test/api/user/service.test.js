var expect = require('chai').expect;

const userService = require('../../../api/user/service');

describe('User', function() {
    describe('#getUserById()', function() {
        it('should get a user with its id', function() {
            const firstname = userService.getUserById(2).firstname;

            expect(firstname).to.equal("firstName_2");
        });
    });
});

