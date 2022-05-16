let primes = []
var q
var p
function setup() {
  createCanvas(1600,650)
  for(let i=2;i<350000;i++){
    if(isPrime(i))
      primes[primes.length] = i
  }
  q=1
  p=1
  console.log(primes)
}

function isPrime(x){
  if (x==1 || x==0)
    return false;
  if (x==2)
    return true
  if (x%2==0)
    return false
  for(let d=3;d<=sqrt(x)+1;d+=2){
    if (x%d==0)
      return false
  }
  return true
}

function draw() {
  clear()
  background(43)

  translate(width/2,height/2);
  scale(q)

  for(let i=0;i<primes.length;i++){
    circle(cos(primes[i]) * primes[i],sin(primes[i]) * primes[i],40*p)
  }
  
}

function mouseWheel(event) {
  q += 0.05 * (event.delta > 0 ? -1 : 1) * (q/2)
  p = p * (event.delta > 0 ? 1.007 : -0.993)
}
