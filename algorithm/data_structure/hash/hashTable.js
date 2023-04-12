/**
 * 해시 테이블 (Hash Table)
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) this.keyMap[hashedKey] = [];
    this.keyMap[hashedKey].push([key, value]);

    return this.keyMap;
  }

  get(key) {
    const hashedKey = this._hash(key);
    if (this.keyMap[hashedKey]) {
      for (let current of this.keyMap[hashedKey]) {
        const [currentKey, currentValue] = current;

        if (key === currentKey) return currentValue;
      }
    }

    return undefined;
  }

  keys() {
    let keysArr = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let [key, value] of this.keyMap[i]) {
          keysArr.add(key);
        }
      }
    }
    return Array.from(keysArr);
  }

  values() {
    let valuesArr = new Set();
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let [key, value] of this.keyMap[i]) {
          valuesArr.add(value);
        }
      }
    }
    return Array.from(valuesArr);
  }
}

let ht = new HashTable();
ht.set("black", "#000000");
ht.set("maroon", "#800000");
ht.set("white", "#FFFFFF");
ht.set("white", "#FFFFFF");

console.log(ht.keys()); // [ 'white', 'black', 'maroon' ]
console.log(ht.values()); // [ '#FFFFFF', '#000000', '#800000' ]
