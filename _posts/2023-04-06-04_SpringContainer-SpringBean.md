---
title:  "[23/04/06] Inflearn_SpringCoreBasic 스프링 컨테이너와 스프링 빈"
excerpt: ""

categories:
  - TIL
tags:
  - [TIL, Spring]

toc: true
toc_sticky: true
 
date: 2023-04-06
last_modified_at: 2023-04-06
---
# 섹션 4. 스프링 컨테이너와 스프링 빈

## Spring Container

- ApplicationContext

  ``` java
  new AnnotationConfigApplicationContext(AppConfig.class);
  ```

  - ```AppConfig.class``` 에 등록된 구성 정보를 통해 스프링 컨테이너 생성

- AppConfig.class

  ```java
  @Bean
  public MemberService memberService() {
      return new MemberServiceImpl(memberRepository());
  }
  
  @Bean
  public OrderService orderService() {
      return new OrderServiceImpl(memberRepository(), discountPolicy());
  }
  
  @Bean
  public MemberRepository memberRepository() {
      return new MemoryMemberRepository();
  }
  
  @Bean
  public DiscountPolicy discountPolicy() {
      return new RateDiscountPolicy();
  }
  ```

  - ```memberService()```,``` orderService()``` -> ```memberRepository()```
    - 2개의 서비스를 실행 시, 코드상으로는 2개 이상 인스턴스가 생성되어야 하지만 하나의 인스턴스가 생성 됨
      - 스프링이 내부적으로 '싱글톤(Singleton) 패턴'으로 설계해줌

- ApplicationContext & BeanFactory

  - BeanFactory 

    - 스프링 컨테이너 최상위 인터페이스
    - 스프링 빈 관리 및 조회 -> ```getBean()``` 등 Bean 관련 메서드 제공
  - ApplicationContext
  
    - BeanFactory 기능 상속
      - MessageSorce
      - EnvironmentCapable
      - ApplicationEventPublisher
      - ResourceLoader


***
      ⚠️ 김영한님의 인프런 강의 '스프링 핵심 원리 - 기본편' 내용을 개인적으로 
      요약 및 정리한 내용으로 오류가 있을 수 있으며, 문제 될 시 삭제될 예정입니다. 

출처 : [인프런 강의 스프링 핵심 원리 - 기본편](https://inf.run/k7P8)
