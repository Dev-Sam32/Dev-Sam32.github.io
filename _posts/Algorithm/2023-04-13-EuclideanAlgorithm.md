---
title:  "[23/04/13] 최대공약수, 최소공백수와 유클리드 호제법"
excerpt: ""

categories:
  - Algorithm
tags:
  - [Math]

toc: true
toc_sticky: true
 
date: 2023-04-13
last_modified_at: 2023-04-13
---
# 최대공약수, 최소공백수와 유클리드 호제법
## 최대공약수(Greatest Common Divisor, GCD)
- 두 자연수의 공통된 약수 중 가장 큰 수
  > 36과 126의 **최대공약수**는 18 <br>
  >  : 36/18, 126/18 -> 2, 7
  
  💡 더 이상 나눠지지 않았을 때 **서로소(Corprime)** 관계에 있다고 함

## 최소공배수(Least Common Multiple, LCM)
- 두 자연수의 공통된 배수 중 가장 작은 수를 의미한다.
  > 36과 126의 **최소공배수**는 <br>
  > 36 72 108 144 180 216 <b>252</b> ... <br>
  > 126 **252** ... <br>
  > 252 = 2 * 7 * 18
  > 18은 **최대공약수**다 <br>

  💡 <br>
  (자연수1/최대공약수) * (자연수2/~~최대공약수~~) * ~~최대공약수~~ <br>
  자연수1 * 자연수2 / 최대공약수 = 최소공배수

---
# 유클리드 호제법(Euclidean Algorithm)
## 정의
두 자연수의 최대공약수를 구하는 알고리즘
> 2개의 자연수(a>b) a, b에 대해서 a를 b로 나눈 나머지가 c일 때 <br>
> a와 b의 최대공약수는 b와 c의 최대공약수와 같다. <br>

이렇게 b와 c, c와 d ...로 나누는 과정을 반복하여 나머지가 0이 되었을 때, <br> 나누어지는 수가 a와 b의 최소 공약수가 된다.

## 예시
> 위에서 구했던 36 과 126의 최대공약수를 구한다 했을 때 <br>
> 126 = 36 * 3 + 18 -> 나누어 떨어지지 않음 <br>
> 36%18 = 0 => 최대공약수는 18이 된다.

## Java로 구현
``` java
 public static int gcd(int p, int q) {
	if (q == 0) return p;
	return gcd(q, p%q);
 }
```
재귀함수를 통해 **최대공약수**를 구할 수 있다!

---
### 참고
http://www.tcpschool.com/codingmath/common <br>
https://mathbang.net/202#gsc.tab=0 <br>
[Wikipedia_유클리드_호제법](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)