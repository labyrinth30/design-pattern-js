import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";

/**
 * 여러 팩토리 패턴 중 가장 간단한 형태의 팩토리 패턴이다.
 * 매개변수로 타입을 받아서 타입에 따라 다른 객체를 반환한다.
 *
 * type을 받아 if로 분기를 하고, 객체를 생성도 하고 있기에 SRP를 위반하고 있다.
 * 만약 getInstance()안에 매개변수가 추가된다면, 이 팩토리 함수 또한 수정이 필요하다.
 * IE, Chrome의 getInstance에 각각 다른 매개변수가 들어간다면, options 라는 매개변수에 지저분하게 코딩해줘야한다.
 * if문을 없애기 위해 팩토리 메서드 패턴을 사용해보자.
 */
function grimpanFactory(type: string){
    if (type === "ie") {
        return IEGrimpan.getInstance();
    }
    if (type === "chrome") {
        return ChromeGrimpan.getInstance();
    }
    throw new Error("일치하는 타입이 없습니다.");
}

function main() {
    grimpanFactory("ie");
    grimpanFactory("chrome");
}

main();
