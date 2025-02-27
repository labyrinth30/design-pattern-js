// 2번 OCP 위반 코드 예시
// function main(type: any) {
//     if (type === 'a') {
//         doA();
//     }
//     if (type === 'b') {
//         doB();
//     }
// }

// OCP 개선 코드
interface Doable {
    do(): void;
}

function main(type: Doable) {
    type.do();
}

class A implements Doable {
    do() {}
}

class B implements Doable {
    do() {}
}

/**
 * 클래스가 아닌 객체로도 구현 가능하다
 * 객체 리터럴로 생성한 a, b 객체는 앱 전체에서 고유한 싱글톤이다.
 * C와 D가 새로 생겨도 main 함수를 수정하지 않고 사용할 수 있다.
 * 바로 이것이 확장에는 열려있고, 수정에는 닫혀있다는 개념이다.
 */

const a ={ do() {} };
const b ={ do() {} };
const c ={ do() {} };
main(a);

// LSP 코드 예시
class Animal {
    isAnimal() {
        return true;
    }
}
class Bird extends Animal {
    fly() {
        return '훨훨';
    }
    isBird() {
        return true;
    }
}
console.log(new Animal().isAnimal()); // true
console.log(new Bird().fly()); // 훨훨

class Penguin extends Bird {
    // override fly() {
    //     // LSP 위반 사례
    //     throw new Error('펭귄은 날 수 없어요');
    // }
}
// 펭귄(자식 클래스)으로 바꿨을 떄 타입 에러가 없어야함.
console.log(new Penguin().isAnimal()); // true
console.log(new Bird().fly().at(1)); // 훨
console.log(new Penguin().fly().at(1)); // void에는 at 메서드가 없어 에러 발생
// 해결법: Bird 클래스에서 fly()를 제거하고 Penguin 에서 fly()를 따로 구현한다. 모든 새가 날 수 있는 게 아니니까.

// ISP 코드 예시
// IBird에서 fly()와 quack()을 묶을 필요가 없다.
// 실제로 필요한 것보다 더 많은 메서드 속성들이 인터페이스 안에 있는 상황이다.
// interface IBird {
//     fly(): string;
//     quack(): string;
// }

// 개선한 코드
// 인터페이스는 추상클래스와 다르게 여러 개를 implements 할 수 있다는 장점이 있다.
interface Flyable {
    fly(): string;
}
interface Quackable {
    quack(): string;
}

class Bird2 extends Animal implements Quackable {
    fly() {
        return '훨훨';
    }
    quack() {
        return '꽥꽥';
    }
}

// DIP 코드 예시
interface IObj {}
class Obj implements IObj {}

class D {
    constructor(obj?: IObj) {}
}
new D(new Obj());