/**
 * 윈도우용, 맥용 그림판이 따로 있고, 둘의 기능이 다르다고 가정하자.
 */
class ChromeGrimpan {
    private static instance: ChromeGrimpan

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
            this.instance = new ChromeGrimpan(document.querySelector('canvas'));
        }
        return this.instance;
    }
}

export default ChromeGrimpan;
