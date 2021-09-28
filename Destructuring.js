var [a,b] = [1,2]; // var a=1, b=2와 같음
[a,b] = [2*a, 3*b]; // a=2*a,b=3*b와 같음
[a,b] = [b,a]; // a값과 b값을 교환함
[a,b,c] = [1,2]; // a=1, b=2, c=undefined와 같음
[a,b] = [1,2,3]; // a=1, b=2, 3은 무시됨
[,a,,b] = [1,2,3,4]; // a=2 b=4와 같음

var array, first, second;
array = [first, second] = [1,2,3,4];
// first=1, second=2, array = [1,2,3,4]와 같음

[a,b ...rest] = [1,2,3,4]; // a=1,b=2, rest = [3,4]와 같음
[a=0, b=1, c=2] = [1,2]; // a=1, b=2, c=2와 같음

//2차원 좌푯점 (x,y)를 원점 기준으로 각도 theta만큼 회전하기
function rotation(x,y,theta) {
    var s = Math.sin(theta), c = Math.cos(theta);
    return [c*x - s*y, s*x + c*y];
}
var [a,b] = rotation(1,2,Math.PI/3);
