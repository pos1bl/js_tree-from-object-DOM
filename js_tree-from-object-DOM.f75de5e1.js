'use strict';
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const tree = document.querySelector('#tree');
function createTree(element, data) {
    for (const [key, children] of Object.entries(data)){
        const item = document.createElement('li');
        item.textContent = key;
        element.append(item);
        if (Object.keys(children).length) {
            const list = document.createElement('ul');
            item.append(list);
            createTree(list, children);
        }
    }
}
createTree(tree, food);

//# sourceMappingURL=js_tree-from-object-DOM.f75de5e1.js.map
