# 구현 기능 목록

* 관리자는 인증에 쓰일 사람들의 정보를 저장한다.
    * 중앙 서버에 저장한다.
    * 개인 별 식별 코드, 이름을 저장한다.
    * 수정 및 삭제가 가능하다.
    * 해당 인증데이터에 대한 해쉬 값을 블록체인에 저장한다.
* 출입시 본인확인을 위한 얼굴 인증을 수행한다.
    * 딥러닝 기반의 얼굴 인식 API를 구축한다.
    * 인식 성공 시 고유한 식별코드값이 추출된다.
* 인식 성공 시 해당 데이터에 대한 검증을 실시한다.
    * 인증에 사용된 데이터의 해시값과 블록체인에 저장된 해쉬값을 비교함으로써 위변조를 검증한다.
* 검증 성공 시 해당 데이터를 블록체인에 저장한다.
    * 인증 이력(중요정보가 아닌 메타데이터)을 이더리움 기반의 블록체인에 저장한다.
    * 따라서, 수정 및 삭제가 불가능하다.
* 개인은 자신의 인증이력을 조회할 수 있다.
    * 회원가입 후 본인의 아이디를 통해 조회한다.
* 관리자는 모든 사람의 인증이력을 조회할 수 있다.
    * 주어진 관리자 키를 사용하여 관리자 인증을 수행한다.
* 사내, 학교 내에서 이더리움 기반의 토큰을 발급해 커뮤니티 화폐로 사용한다.
    * 약속된 단체 내에 식당, 카페와 같은 곳에서 결제 시 사용할 수 있다.
    * 결제내역은 메타마스크 및 이더스캔에서 확인가능하다.

