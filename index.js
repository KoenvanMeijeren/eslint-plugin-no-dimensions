module.exports = {
    rules: {
        'no-dimensions': {
            create: function (context) {
                return {
                    MemberExpression(node) {
                        // Check if the code matches Dimensions.get('window')
                        if (
                            node.object &&
                            node.object.type === 'CallExpression' &&
                            node.object.callee.property &&
                            node.object.callee.property.name === 'get' &&
                            node.object.callee.object.name === 'Dimensions' &&
                            node.object.arguments.length === 1 &&
                            node.object.arguments[0].type === 'Literal' &&
                            node.object.arguments[0].value === 'window'
                        ) {
                            context.report({
                                node: node,
                                message: 'Avoid using Dimensions.get(\'window\'). Use \'useWindowDimensions()\' instead.',
                            });
                        }
                    },
                };
            },
        },
    },
};
