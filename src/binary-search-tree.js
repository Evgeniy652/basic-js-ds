const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {

  constructor() {
    this.treeRootNode = null
  }

  root() {
    return this.treeRootNode
  }

  add( data ) {
    this.treeRootNode = addNodeToTree(this.treeRootNode, data);

    function addNodeToTree(node, value) {

      if (!node) return new Node(value);


      if (node.data === value) return node;


      if (value < node.data) {
        node.left = addNodeToTree(node.left, value)
      } else {

        node.right = addNodeToTree(node.right, value)
      };

      return node
    }
  }

  has( data ) {
    return doesNodeExist(this.treeRootNode, data);

    function doesNodeExist(node, value) {
      if (!node) return false;


      if (node.data === value) return true;

      if (value < node.data)
	   {
        return doesNodeExist(node.left, value)
      } else {
        return doesNodeExist(node.right, value)
      }
    }
  }

  find( data ) {
    return returnsNode(this.treeRootNode, data);

    function returnsNode(node, value) {
      if (!node) return null;

      if (node.data === value) return node;

      if (value < node.data) {
        return returnsNode(node.left, value)
      } else {
        return returnsNode(node.right, value)
      }
    }
  }

  remove( data ) {
    this.treeRootNode = removeNodeTree(this.treeRootNode, data);

    function removeNodeTree(node, value) {
      if (!node) return null;

      if (node.data > value) {
        node.left = removeNodeTree(node.left, value);
        return node
      } else if (node.data < value) {
        node.right = removeNodeTree(node.right, value);
        return node
      } else {
     
        if (!node.left && !node.right) return null;
      
        if (!node.left) {
          return node.right
          
        };
    
        if (!node.right) {
          return node.left
         
        };

      
        let minimum = node.right;
        while (minimum.left) {
          minimum = minimum.left
        };
   
        node.data = minimum.data;
    
        node.right = removeNodeTree(node.right, minimum.data);

        return node
      };

    }
  }

  min() {
    return nMin(this.treeRootNode);

    function nMin(node) {
      if (!node) return null;

      if (!node.left) return node.data;

      return nMin(node.left)
    }
  }

  max() {
    return nMax(this.treeRootNode);

    function nMax(node) {
      if (!node) return null;

      if (!node.right) return node.data;

      return nMax(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};