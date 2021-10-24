class bob
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.1,
			density:1.4}

		
		this.x=x;
		this.y=y;
		this.radius=radius;
		
		this.body=Bodies.circle(this.x, this.y, (this.radius)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			fill(255,0,255)
			ellipse(0,0,this.radius, this.radius);
			pop()
			
	}

}

