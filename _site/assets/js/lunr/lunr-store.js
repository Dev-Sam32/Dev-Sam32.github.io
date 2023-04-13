var store = [{
        "title": "[23/04/06] Inflearn_SpringCoreBasic 스프링 컨테이너와 스프링 빈",
        "excerpt":"섹션 4. 스프링 컨테이너와 스프링 빈 Spring Container ApplicationContext new AnnotationConfigApplicationContext(AppConfig.class); AppConfig.class 에 등록된 구성 정보를 통해 스프링 컨테이너 생성 AppConfig.class @Bean public MemberService memberService() { return new MemberServiceImpl(memberRepository()); } @Bean public OrderService orderService() { return new OrderServiceImpl(memberRepository(), discountPolicy()); } @Bean public MemberRepository memberRepository() { return new MemoryMemberRepository(); } @Bean...","categories": ["TIL"],
        "tags": ["TIL","Spring"],
        "url": "/til/04_SpringContainer-SpringBean/",
        "teaser": null
      },{
        "title": "[23/04/06] Inflearn_SpringCoreBasic 싱글톤 컨테이너",
        "excerpt":"섹션 5. 싱글톤 컨테이너 싱글톤 패턴(Singleton Pattern) Class의 인스턴스가 단 하나만 생성되는 것을 보장하는 디자인 패턴 객체 인스턴스가 2개 이상 생성되지 못하도록 설정 private 생성자를 사용해서 외부에서 new 키워드 사용을 막음 싱글톤 패턴의 문제점 ⚠️ 싱글톤 패턴을 위한 코드 필요 의존관계상 클라이언트가 구체 클래스에 의존 -&gt; DIP 위반, OCP원칙 위반...","categories": ["TIL"],
        "tags": ["TIL","Spring"],
        "url": "/til/05_SingletonContainer-Configuration/",
        "teaser": null
      },{
        "title": "[23/04/06] Inflearn_SpringCoreBasic 컴포넌트 스캔",
        "excerpt":"섹션 6. 컴포넌트 스캔 @ComponentScan 설정 정보 없이 @Component 어노테이션이 붙은 클래스 스프링 빈으로 등록한다. ⚠️ @Configuration 안에 @Component 어노테이션이 붙어있기 때문에 따로 등록이 필요없다. 탐색 위치, 기본 스캔 대상 지정 @ComponentScan { basePackages = \"hello.core\", \"hello.service\" } 탐색할 패키지의 시작 위치를 변경할 수 있다. ( 명시된 패키지를 포함한 하위...","categories": ["TIL"],
        "tags": ["TIL","Spring"],
        "url": "/til/06_ComponentScan/",
        "teaser": null
      },{
        "title": "[23/04/07] Inflearn_SpringCoreBasic 의존관계 자동 주입",
        "excerpt":"07. 의존관계 자동 주입 의존관계 주입 방법 생성자 주입 생성자 호출 시점에서 한번 호출되는 것이 보장됨 불변, 필수 의존관계에서 사용 생성자가 하나일 경우, @Autowired 생략해도 자동 주입 수정자 주입(Setter) 선택, 변경 가능성이 있는 의존관계에서 사용 필드 주입 필드에서 바로 주입하는 방식 코드가 간결하지만 외부 변경이 불가하여 테스트하기 힘듦 테스트 코드,...","categories": ["TIL"],
        "tags": ["TIL","Spring"],
        "url": "/til/07_SpringCoreBasic/",
        "teaser": null
      }]
