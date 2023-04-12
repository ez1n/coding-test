/**
 * 충돌 (Collision) 해결 방법
 *
 * 개별 체이닝 (Separate Chaining)
 *
 * 같은 장소에 여러 데이터를 저장할 때 배열, 연결 리스트 등을 활용하여 이중 데이터 구조를 쓰는 방법
 * 배열을 사용하는 경우 중첩 배열 구조가 나타남!
 */

// 해시 테이블 클래스
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
}

let ht = new HashTable();
ht.set("black", "#000000");
ht.set("white", "#FFFFFF");

console.log(ht.get("black")); // #000000
