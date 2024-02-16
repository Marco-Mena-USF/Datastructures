const BinarySearchTree = require("./binary-search-tree");

describe("insert", function() {
  it("inserts nodes correctly", function() {
    var bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12);
    expect(bst.root.val).toEqual(15);
    expect(bst.root.right.val).toEqual(20);
    expect(bst.root.left.right.val).toEqual(12);
  });

  it("inserts a node at the root if the tree is empty", function() {
    var bst = new BinarySearchTree();
    bst.insert(15);
    expect(bst.root.val).toEqual(15);
    expect(bst.root.left).toBe(null);
    expect(bst.root.right).toBe(null);
  });
});

describe("insertRecursively", function() {
  it("inserts nodes correctly", function() {
    var bst = new BinarySearchTree();
    bst
      .insertRecursively(15)
      .insertRecursively(20)
      .insertRecursively(10)
      .insertRecursively(12);
    expect(bst.root.val).toEqual(15);
    expect(bst.root.right.val).toEqual(20);
    expect(bst.root.left.right.val).toEqual(12);
  });

  it("inserts a node at the root if the tree is empty", function() {
    var bst = new BinarySearchTree();
    bst.insertRecursively(15);
    expect(bst.root.val).toEqual(15);
    expect(bst.root.left).toBe(null);
    expect(bst.root.right).toBe(null);
  });
});

describe("find", function() {
  it("finds a node correctly", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12);
    var foundNode = bst.find(20);
    expect(foundNode.val).toBe(20);
    expect(foundNode.left).toBe(null);
    expect(foundNode.right).toBe(null);
  });

  it("returns undefined if a node is not found", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12);
    var foundNode = bst.find(120);
    expect(foundNode).toBe(undefined);
  });
});

describe("findRecursively", function() {
  it("finds a node correctly", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12);
    var foundNode = bst.findRecursively(20);
    expect(foundNode.val).toBe(20);
    expect(foundNode.left).toBe(null);
    expect(foundNode.right).toBe(null);
  });

  it("returns undefined if a node is not found", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12);
    var foundNode = bst.findRecursively(120);
    expect(foundNode).toBe(undefined);
  });
});

describe("dfsPreOrder", function() {
  it("returns correct array for DFS Pre Order", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50);
    expect(bst.dfsPreOrder()).toEqual([15, 10, 1, 5, 12, 20, 50]);
  });
});

describe("dfsInOrder", function() {
  it("returns correct array for DFS In Order", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50);
    expect(bst.dfsInOrder()).toEqual([1, 5, 10, 12, 15, 20, 50]);
  });
});

describe("dfsPostOrder", function() {
  it("returns correct array for DFS Post Order", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50);
    expect(bst.dfsPostOrder()).toEqual([5, 1, 12, 10, 50, 20, 15]);
  });
});

describe("BFS", function() {
  it("returns correct output for BFS", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50);
    expect(bst.bfs()).toEqual([15, 10, 20, 1, 12, 50, 5]);
  });
});

describe("remove", function() {
  it("correctly removes a node with no children", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50);
    bst.remove(50);
    expect(bst.root.right.val).toBe(20);
    expect(bst.root.right.right).toBe(null);

    bst.remove(5);
    expect(bst.root.left.left.val).toBe(1);
    expect(bst.root.left.left.right).toBe(null);
  });

  it("correctly removes a node with one child", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50);

    bst.remove(1);
    expect(bst.root.left.left.val).toBe(5);
    expect(bst.root.left.left.left).toBe(null);
    expect(bst.root.left.left.right).toBe(null);

    bst.remove(20);
    expect(bst.root.right.val).toBe(50);
    expect(bst.root.right.right).toBe(null);
    expect(bst.root.right.left).toBe(null);
  });

  it("correctly removes a node with two children", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(50)
      .insert(60)
      .insert(30)
      .insert(25)
      .insert(23)
      .insert(24)
      .insert(70);

    bst.remove(10);
    expect(bst.root.left.val).toBe(12);
    expect(bst.root.left.left.val).toBe(1);
    expect(bst.root.left.left.right.val).toBe(5);

    bst.remove(50);
    expect(bst.root.right.val).toBe(20);
    expect(bst.root.right.right.val).toBe(60);
    expect(bst.root.right.right.left.val).toBe(30);
  });

  it("removes a node with two children and handles its children", function() {
    var bst = new BinarySearchTree();
    bst
      .insert(22)
      .insert(49)
      .insert(85)
      .insert(66)
      .insert(95)
      .insert(90)
      .insert(100)
      .insert(88)
      .insert(93)
      .insert(89);

    bst.remove(85);
    expect(bst.root.right.right.val).toBe(88);
    expect(bst.root.right.right.right.left.left.val).toBe(89);
  });
});

describe("isBalanced", function() {
  it("checks if tree is balanced", function() {
    var bst = new BinarySearchTree();
    bst.insert(15);
    bst.insert(20);
    bst.insert(10);
    bst.insert(12);
    expect(bst.isBalanced()).toEqual(true);

    var bst2 = new BinarySearchTree();
    bst2.insert(5);
    expect(bst2.isBalanced()).toEqual(true);
    bst2.insert(6);
    expect(bst2.isBalanced()).toEqual(true);
    bst2.insert(7);
    expect(bst2.isBalanced()).toEqual(false);
  });
});

describe("findSecondHighest", function() {
  it("finds the second highest value", function() {
    var bst = new BinarySearchTree();
    bst.insert(15);
    bst.insert(20);
    bst.insert(10);
    bst.insert(12);
    expect(bst.findSecondHighest()).toEqual(15);

    var bst2 = new BinarySearchTree();
    expect(bst2.findSecondHighest()).toEqual(undefined);
  });
});

describe("dfsInOrderIterative", function() {
  it("returns array of values for DFS In Order", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(15)
      .insert(20)
      .insert(10)
      .insert(12)
      .insert(1)
      .insert(5)
      .insert(6)
      .insert(7)
      .insert(50)
      .insert(17)
      .insert(18)
      .insert(16);
    expect(bst.dfsInOrderIterative()).toEqual([1, 5, 6, 7, 10, 12, 15, 16, 17, 18, 20, 50]);
  });

  it("handles empty tree", function() {
    let bst = new BinarySearchTree();
    expect(bst.dfsInOrderIterative()).toEqual([]);
  });

  it("handles single root node", function() {
    let bst = new BinarySearchTree();
    bst.insert(7);
    expect(bst.dfsInOrderIterative()).toEqual([7]);
  });

  it("works with unbalanced tree", function() {
    let bst = new BinarySearchTree();
    bst
      .insert(7)
      .insert(8)
      .insert(9)
      .insert(10)
      .insert(11);
    expect(bst.dfsInOrderIterative()).toEqual([7, 8, 9, 10, 11]);

    bst = new BinarySearchTree();
    bst
      .insert(11)
      .insert(10)
      .insert(9)
      .insert(8)
      .insert(7);
    expect(bst.dfsInOrderIterative()).toEqual([7, 8, 9, 10, 11]);
  });
});