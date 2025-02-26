/**
 * 싱글톤(Singleton) 패턴
 * JS의 모듈은 기본적으로 Singleton 패턴으로 동작한다.

 * 싱글톤의 특징: 어떤 클래스의 인스턴스가 반드시 하나만 생성되도록 하는 패턴
 * 단점:
 * 1. private 메서드 덕에 테스트하기 어렵다.
 * 2. getInstance 메서드가 SRP 원칙(단일 책임 원칙)을 위반한다.
 * 이 메서드는 인스턴스를 생성하는 역할과 싱글톤 패턴을 구현하는 역할을 동시에 담당한다.
 * 3. 강한 결합도: getInstance 메서드를 호출하는 클라이언트 코드는 Grimpan 클래스에 강하게 의존한다.
 */

class Grimpan {
    private static instance: Grimpan

    // 생성자를 private로 선언하면 외부에서 인스턴스를 생성할 수 없다.
    private constructor(canvas: HTMLElement | null) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error('canvas is required');
        }
    }

    initialize() {}
    initializeMenu() {}


    // Singleton 패턴을 구현한 메서드
    static getInstance() {
        if (!this.instance) {
            this.instance = new Grimpan(document.querySelector('canvas'));
        }
        return this.instance;
    }
}

export default Grimpan;