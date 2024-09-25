https://course.acciojob.com/open-web-editor?question=b26d3602-54f2-4e6e-8493-6dba39617f2e



function fibonacci(num) {
	if(num==1)
	{
		return 0;
	}
	else if(num==2)
	{
		return 1;
	}
	else
	{
     let a=0;
	  let b=1;
	  let sum=0;
	  for(let i=3;i<=num;i++)
	  {
		sum=a+b;
		a=b;
		b=sum;
	  }
	return sum;
  }
}

module.exports = fibonacci;
