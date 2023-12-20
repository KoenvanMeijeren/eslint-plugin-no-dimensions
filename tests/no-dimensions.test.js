const { RuleTester } = require('eslint');
const rule = require('../index');

const ruleTester = new RuleTester();

ruleTester.run('no-dimensions', rule.rules['no-dimensions'], {
    valid: [
        'useWindowDimensions();',
        'Dimensions.get("screen");',
    ],
    invalid: [
        {
            code: 'Dimensions.get("window");',
            errors: [
                {
                    message: 'Avoid using Dimensions.get(\'window\'). Use \'useWindowDimensions()\' instead.',
                },
            ],
        },
        {
            code: 'test = Dimensions.get("window");',
            errors: [
                {
                    message: 'Avoid using Dimensions.get(\'window\'). Use \'useWindowDimensions()\' instead.',
                },
            ],
        },
    ],
});
