# 멀티캠퍼스 프론트엔드 개발자 취업캠프 기록
언젠간 해봐야지 생각만 하던 걸 이제야 한다.

10년 전에는 홈페이지만 줄창 만들다가 포기했고
4년 전에는 방통대 컴퓨터과학과에 등록해서 2년 가까이 공부하다가 포기했다.
다음을 기약한 게 벌써 두 번, 이제는 더 이상 미룰 수가 없다.

이번에는 끝장을 보자는 생각으로 임하기로 했다.

## 학습일지

<details>
<summary>1 ~ 8일차(2023.07.03~2023.07.12)</summary><br/>

html과 css의 기본적인 문법과 태그, 속성 등을 배웠다.<br/>
10여년 전에 독학으로 한 번 공부해봤기 때문에 크게 어려운 내용은 없었다.

하지만 그때와 달라진 게 있다면 어떤 선택자를 사용하고 어떤 속성에 어떤 속성값을 줄지 훨씬 고르기 쉬워졌고, 속도도 빨라졌다.<br/>
고등학생 땐 간단한 홈페이지 하나 만드는 데 한 달이 넘게 걸렸었는데 지금은 그 정도 기간이 주어지면 두세 개 정도는 만들 수 있을 것 같다.

flex와 grid에 대한 건 이번에 처음 접하는 거라서 어떤 속성을 부여해서 어떤 레이아웃이 되는 건지 머릿속에 그려지지 않아서 한참 헤맸다.

친구가 알려준 웹게임이 도움이 많이 됐다. ~~그리고 개구리를 싫어하게 됐다.~~
https://github.com/thomaspark/flexboxfroggy/

<br/></details>
<details>
<summary>9 ~ 10일차(2023.07.13~2023.07.14)</summary><br/>
  
깃과 깃허브 특강이 있었다.<br/>
나는 이미 깃과 깃허브를 사용하고 있었기 때문에 별로 얻어갈 게 없을 거라고 생각했는데 의외로 배운 점이 많았다.<br/>
버전 관리의 중요성을 알고 그걸 위해서 깃허브를 시작한 게 아니었는데 앞으로 깃허브를 어떻게 활용해봐야 할지에 대해 다시 한 번 생각해보는 계기가 됐다.

그리고 여태 cli만 쓰다가 오늘 처음으로 gui툴을 사용해봤는데 간편하고 직관적이어서 좋았다.<br/>
이래서 디자이너와 프론트엔드 개발자가 있는 거라는 생각이 들었다.

아직 cli를 사용하는 게 익숙하지 않아서 gui 툴보다 cli로 작업하는 게 더 빠르다는 강사님의 말에는 공감할 수가 없었다...<br/>
언젠가 파워 공감을 하게 되는 날이 오면 좋겠다.

<br/></details>
<details>
<summary>2주차 주말(2023.07.15~2023.07.16)</summary><br/>

그동안 배운 html과 css 지식을 가지고 티스토리 스킨을 일부 수정했고, 다음주부터 배우게 될 자바스크립트를 미리 예습했고, 우연찮게 [highlight.js](https://github.com/highlightjs/highlight.js)의 버그를 찾게 되어 issue를 작성했다.

사실 그동안은 다른 사람이 만든 티스토리 스킨을 받아다 쓰기만 했지 수정한 적은 거의 없었는데 배운 걸 써먹어보고 싶었다.<br/>
지금 내 티스토리에는 [hELLO 스킨](https://github.com/pronist/tistory-skin-hELLO)이 적용돼 있다.<br/>
스킨을 적용하면 오른쪽 상단과 하단에 버튼이 생기는데 이게 도대체 무슨 기능을 하는 버튼인지 알 수가 없었다.<br/>
버튼 안의 아이콘을 보고 대충 유추는 가능했지만 역시 글자로 보여주는 게 제일 알기 쉽다고 생각했다.<br/>
그래서 마우스오버를 하면 말풍선 모양으로 무슨 기능을 하는 버튼인지 텍스트가 뜨도록 수정했다.<br/>

자바스크립트를 아예 처음 접하는 건 아니지만 방통대에서 강의를 수강한 것도 아니고 각 잡고 독학해본 적도 없어서 다음주부터 교육을 잘 들을 수 있을지 걱정이 앞섰다.<br/>
그래서 예습을 하기로 결심했고, 공식 문서와 다른 사람들이 정리해놓은 내용을 보면서 머리에 김이 났다.

highlight.js는 심각한 버그가 있는 건 아니고, css 선택자 중에서 :first-child와 :first-of-type에 스타일이 적용되지 않는 버그가 있었다.<br/>
구글링을 해보니 나와 같은 문제를 겪은 사람이 있었는데 개발자가 테스트 케이스에 텍스트를 복사할 수 있도록 코드를 달라고 했는데도 계속 이미지만 올리길래 답답해서 내가 코멘트를 달았다.<br/>
그리고 바로 몇 시간 뒤에 개발자로부터 답변을 받았다.<br/>
:first가 앞에 오도록 정렬돼서 :first만 인식하고 -child나 -of-type을 건너뛰는 것 같으니 정렬 순서를 `reverse()`를 하면 간단하게 해결될 거라고 한다.<br/>
자세하게 설명해준 덕에 아주 쉽게 이해가 돼서 내가 수정해보려고 몇 시간 내내 붙잡고 있었는데 결국 실패했다.<br/>
난 아직 남이 쓴 코드를 이해하고 수정할 만큼의 실력이 없다.<br/>
더 열심히 공부해서 다시 도전해봐야겠다.

그렇게 토요일 하루종일, 그리고 일요일 오전 동안 공부한 내용을 가지고 뭔가를 만들어보기로 했다.<br/>
실무에서도 자주 쓸 것 같고 제일 만만해보이는 Date 객체를 사용해서 [일력과 시계](https://github.com/neix604/FrontEndStudying/tree/main/practice/calendar)를 만들었다.<br/>
내가 뭔가를 만들었다는 것만으로도 뿌듯했고, 앞으로 어떤 걸 더 만들 수 있을지 기대됐다.

<br/></details>
<details>
<summary>11일차(2023.07.17)</summary><br/>

주말 동안 걱정하고 걱정하던 자바스크립트 교육의 날이 밝았다.<br/>
하지만 걱정했던 게 무색하게 너무나도 난이도가 쉬웠다.<br/>
예습을 지나치게 많이 했던 걸까...<br/>
그래도 복습을 소홀히 할 수는 없으니 오늘 배운 기억을 더듬어가며 코드도 다시 작성해보고 개발자 도구로 콘솔 창에서 이것저것 입력해봤다.<br/>
새로운 장난감이 생긴 기분이다.

<br/></details>
<details>
<summary>12 ~ 13일차(2023.07.18~2023.07.19)</summary><br/>

프롬프트로 입력받고, 입력받은 숫자와 문자열을 처리하고, html 문서 내의 요소를 js로 불러오는 걸 배웠다.<br/>
혼자서 예습했을 때는 놓쳤던 내용도 알게 되고 헷갈렸던 개념들도 말로 설명을 들었더니 금세 이해됐다.<br/>
특히 스코프 개념이 엄청 헷갈렸는데 이제는 명확하게 알게 됐다.<br/>
그리고 자바스크립트는 c언어처럼 변수를 선언할 때 자료형을 한정시킬 수 없어서 무언가 연산하거나 변수에 저장된 값을 불러올 때 주의해야겠다고 생각했다.<br/>
3주차도 순탄하게 흘러가는 것 같아서 기분이 좋다.

<br/></details>
<details>
<summary>14일차(2023.07.20)</summary><br/>

인풋으로 입력받은 값을 자바스크립트에서 제어하는 걸 배웠다.<br/>
강사님이 짜준 코드 말고 더 간결하고 보기 좋게 쓸 수 있는 코드는 없을까 싶어서 이런저런 시도를 해봤는데, [정상적으로 실행은 되는데 원리는 뭔지 모르겠는 코드](https://github.com/neix604/FrontEndStudying/blob/main/JavaScript/part%2005/js/getForm.js)를 만들었다.<br/>
이것과 관련한 삽질을 [티스토리](https://hapl197.tistory.com/11)에 기록해뒀다.

<br/></details>

<details>
<summary>15일차(2023.07.21)</summary><br/>

자바스크립트의 이벤트에 대해서 배웠다.<br/>
지금까지는 코드를 쓰면 오류가 나서 다시 작성할 일이 거의 없었는데 어제부터 하나 둘 오류가 나기 시작했다.<br/>
대부분이 오타였고, 오타가 아닌 건 변수를 잘못된 위치에 선언해서 생긴 오류였다.<br/>
예습, 복습을 꽤나 철저하게 했다고 생각했는데 아직 한참 모자란 것 같다.<br/>
그래도 15일차까지 무사히 달려왔다.<br/>
아직 갈 길은 멀지만 걱정했던 것과는 다르게 공부하는 게 생각보다 재밌어서 시간이 금방 가버린다.<br/>
<br/>
이번 주말에는 html과 css도 기초부터 다시 차근차근 살펴봐야겠다.<br/>

<br/></details>

<details>
<summary>3주차 주말(2023.07.22~2023.07.23)</summary><br/>

컨디션이 좋지 못해서 공부를 거의 못했다.<br/>
11일~15일차에 배웠던 내용을 전체적으로 한 번씩 훑어봤고, 어렵다고 생각되는 내용이 없어서 푹 쉬었다.<br/>
공부는 체력전이니까!

<br/></details>

<details>
<summary>16일차(2023.07.24)</summary><br/>

내장 객체와 내장 메소드에 대해서 배웠다.<br/>
다른 건 전부 다 이해가 되는데, this는 진짜 모르겠다.<br/>
어떨 땐 의도한 대로 작동하고, 어떨 땐 아예 작동을 안 하고...<br/>
좀 더 자세하게 공부하고 싶었는데 다른 내용도 볼 게 많아서 아무래도 주말에 다시 봐야 할 것 같다.<br/>
오늘따라 진도를 많이 나가서 공부할 게 유난히 더 많다.

<br/></details>

<details>
<summary>17 ~ 19일차(2023.07.25~2023.07.27)</summary><br/>

이제 this를 좀 알 것 같기도 하다.<br/>
하지만 여전히 this를 쓸 땐 이게 어디에 바인딩 되어 있는 건지 한참 생각해보고 써야 한다.<br/>
어렵다....<br/><br/>

아무튼 정해진 자바스크립트 진도가 모두 끝났고, 마무리로 클론 코딩을 했다.<br/>
복습을 열심히 한 덕인지 멤버 카드를 만드는 것까지는 원본 코드를 안 보고도 금방 완성했고, 심지어 내가 짠 코드가 더 마음에 드는데 뮤직 플레이어는 진짜.... 너무 어려웠다.<br/><br/>

막막했던 것 1.<br/>
::before와 ::after로 말풍선을 만들 줄만 알았지 각 잡고 써본 건 이번이 처음이라서 css에서도 한 차례 막혔다.
::before가 요소의 앞에 가상 요소를 생성하니까 position으로 같은 위치에 놓으면 당연히 가상 요소가 아래쪽에 위치할 거라고 생각했는데 가상 요소가 위에 왔다.<br/>
::after를 만들어서 어떻게 해결은 했는데 아직도 이게 맞는 방법인지 모르겠다.<br/><br/>

막막했던 것2.<br/>
이 죽일 놈의 자바스크립트.........
복습도 열심히 하고 수업 중에 배우지 않은 것도 혼자서 찾아보고, 실습해보고, 진짜 열심히 공부했다고 생각했는데 아직 한~~~~참 멀었다.<br/>
지금 나의 제일 큰 문제는 전체적인 틀을 잡지 않고 일단 코드부터 써내려가는 거다.<br/>
마크업을 작성하기 전에는 레이아웃도 그려보고 마진/패딩을 어떻게 줄지, 디스플레이를 뭘 줄지 한 번씩 다 생각해보고 시작하는데 이상하게 자바스크립트에서는 그게 잘 안 된다.<br/><br/>

휴... 힘들었지만 그래도 제대로 된 클론 코딩을 해보니까 여태 몰랐던 나의 안 좋은 습관이나 부족한 점을 더 알 수 있었다.<br/>
어떻게든 내껄 완성하고 나니까 다른 사람들 코드도 보고 싶은데 수강생들 간에 교류가 활발하지 않아서 조금 아쉽다.<br/>
그래서 저번주에 매니저님께 따로 스터디 그룹을 만들어도 된다는 답변도 받았고 코드 리뷰 스터디가 하고 싶어서 구체적인 구상도 다 해놨는데 모집할 엄두가 안 난다.<br/>
내 공부 하기도 바빠서 자는 시간까지 줄여가며 고3 때보다 더 시간에 쫓기는 중인데 과연 스터디 운영을 할 수 있을까?<br/>
하루가 48시간이었으면 좋겠다.<br/>

<br/></details>

<details>
<summary>20일차(2023.07.28)</summary><br/>

UI/UX 특강이 있었다.<br/>
디자인 특강이니까 당연히 디자인 툴 쓰는 방법 같이 디자인 기법에 대한 강의일 거라고 생각했는데 그것보다 훨씬 이론적인 내용이었다.<br/>
처음에는 이걸 어디에 써먹을 수 있을까 싶어서 혼란스러웠지만 듣다 보니 나름대로 재밌었다.<br/>
디자인의 원칙이나 트렌드, 기획 단계 등을 배웠는데 미처 몰랐던 내용들도 새로 알게 돼서 흥미로웠고 나중에 개발자로서 디자이너와 협업할 때 더 원활한 소통이 가능할 것 같다는 생각이 들었다.<br/><br/>

예전 회사에서 매주 카드 뉴스를 만들 일이 있었는데 그때 생각도 좀 났다.<br/>
나는 게으른 완벽주의자라서, 내 개인적인 일은 완벽하게 하지 못할 것 같으면 한없이 미루는 편이다.<br/>
근데 업무는 미룰 수가 없으니까 이왕 할 거면 제대로 해야지 싶어서 UI/UX 인강도 결제해서 보고 퇴근 후에 집에서까지 카드 뉴스를 붙잡고 씨름했었다.<br/>
내 인생에서 그 전에도, 그리고 앞으로도 그때보다 열정이 넘치는 일은 없을 거라고 생각했었는데 지금은 꾸준히 열정 최대치를 갱신하고 있다.<br/>
엉덩이 붙이고 앉아서 공부하는 거엔 소질이 없는 줄 알았는데 꼭 그렇지만은 않은 모양이다.<br/>
언제 또 이렇게 공부해보겠나 싶기도 하고, 수료하고 나서 취업을 못하더라도 뭔가 하나는 얻어가고 싶어서 더 열심히 하게 된다.<br/>
긍정적인 방향으로 잘 나아가고 있어서 뿌듯하다.<br/><br/><br/>

주말에 할 것 :
1. html, css 복습<br/>
2. 코어 자바스크립트 1회독<br/>
3. 클론 코딩 복습<br/>
4. 웹 페이지 구현 실습

<br/></details>

<details>
<summary>4주차 주말~25일차(2023.07.29~2023.08.04)</summary><br/>

한 주가 눈 코 뜰 새 없이 지나갔다.<br/><br/>
주말에 하려고 계획해놨던 것들은 결국 절반밖에 하지 못했다.<br/>
개인적으로 프론트엔드 친구 한 명, 백엔드 친구 한 명과 [토이 프로젝트를 시작](https://hapl197.tistory.com/17)했는데 그쪽에 온 신경을 쏟다 보니 정작 내가 할 공부를 하지 못했다.<br/>
잘하고 싶은 욕심도 들고, 이왕 하는 거 제대로 해보고 싶다는 생각이 들어서 주객전도가 됐다.<br/>
페이지를 구현하면서 html과 css를 자연스럽게 복습하게 되긴 하지만 시간 배분을 더 잘 해야겠다.<br/><br/>

그리고 파이썬 라이브러리를 이용해 데이터를 시각화하는 방법을 배우기 시작했다.<br/>
유가 정보, 날씨 정보, 관광 정보 등을 표나 이미지로 나타내거나 지도에 표시해보기도 하고 파일을 열고 수정해보기도 했는데, 아직은 그냥 코드를 따라 치는 수준이다.<br/>
예전에 따로 공부했어서 파이썬 기본 문법은 알고 있었는데 라이브러리를 쓰기 시작하니까 또 다른 언어를 배우는 것 같아서 재미는 있다.<br/>
나중에 알고리즘 수업도 파이썬으로 할 예정이라고 한다.<br/>
지금까지는 프로그래머스 문제를 자바스크립트로 풀고 있었지만 이제는 파이썬으로도 같이 풀어봐야 할 것 같다.<br/>

<br/></details>

<details>
<summary>5주차 주말~26일차(2023.08.05~2023.08.07)</summary><br/>

이번 주말도 눈 코 뜰 새 없이 지나가버렸다.<br/>
토이 프로젝트의 목표를 개발자 간의 소통과 협업에 중점을 두고 시작해서 디자인이나 기획을 대략적으로만 하고 페이지 구현에 들어갔는데 이게 큰 실수였다.<br/>
디자인과 기능을 정확하게 정하지 않고 하다보니 계속해서 수정할 사항이 생겼고, 거기에 매달려 있다보니 모든게 삐걱거리기 시작했다.<br/>
이걸 시작하면서는 분명 여유 시간만 투자하자고 생각했었는데...<br/><br/>

백엔드 친구가 노션에 기능 정의 템플릿을 만들어준 덕에 거기다 글로 작성하다 보니 기능에 대한 건 꽤나 자세한 틀이 잡혔다.<br/>
이제 문제는 디자인이었다.<br/>
피그마를 써서 최초 디자인 시안을 만들긴 했지만 셋 다 디자이너가 아니라서 어느정도로 세세하게 해야 하는지 잘 몰라서 대략적인 위치만 잡았었다.<br/>
그러다 보니 프론트엔드끼리도 각자의 취향이나 중요하게 생각하는 포인트가 달라서 시안과는 또 다른 결과물이 생겼고, 수정하고 또 수정하고를 반복했다.<br/>
의미 없는 반복 작업인 것 같고, 미팅할 때도 디자인 시안이 없어서 두루뭉술한 얘기만 쌓이는 게 너무 시간이 아깝다는 생각이 들었다.<br/>
그래서 디자인을 정확하게 해야겠고, 이왕이면 한 사람이 일관성 있게 작업하는 게 좋겠다고 고집을 부려서 내가 디자인 초안 제작을 담당하게 됐다.<br/>
주말까지 꼭 끝내놓을 테니 월요일에 다시 미팅하자고 했는데 결과적으로 다 끝내지는 못했다...<br/>
피그마로 요소마다 클릭 이벤트나 hover 효과도 줄 수 있어서 하나씩 추가하다보니까 시간이 오래 걸렸고, 중간에 한 번 날려먹어서 부랴부랴 다시 하느라 80퍼센트 정도밖에 완성을 못했다.<br/>
그래도 디자인에 UI/UX 특강 들었던 걸 적용시키면서 하다보니 사용자 입장에서는 어떤 화면이 더 보기 좋고 사용하기 편할지 다시 한 번 생각할 수 있었다.<br/>
하지만... 피그마 어려워.... 디자인 어려워..!<br/>

<br/></details>

<details>
<summary>27일차~28일차(2023.08.08~2023.08.09)</summary><br/>

알고리즘을 배우기 시작했다.<br/>
이제 자바스크립트로는 이런 방식으로 접근하면 되지 않을까? 하는 게 문제를 보자마자 떠오르는데 학원에서는 알고리즘을 파이썬으로 한다...<br/>
파이썬으로 코딩 테스트를 많이들 준비한다고 하니 이번 기회에 확실하게 배워두면 좋을 것 같다.<br/>
일단은 올해가 끝날 때까지 파이썬과 자바스크립트로 매일 한 문제 이상 푸는 걸 목표로 잡고 있다.<br/>
토이 프로젝트를 핑계로 내 공부에 소홀하기도 했고 잔디에 탈모가 오기도 했지만 이젠 집중도를 더 끌어올릴 때가 됐다.<br/>


<br/></details>