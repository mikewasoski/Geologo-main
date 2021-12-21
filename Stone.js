class Stone{
	constructor(x,y,width,height)
	{
		var options={
			restitution:0.8,
			friction:0.9,
			density:12
	// assign options to the rubber ball
       this.height=height;
		this.width=width;
		this.body=Bodies.rectangle(this.x, this.y,width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
            var angle=this.body.angle;	
			push()
			translate(pos.x, pos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.width, this.height);
			pop()
	}

}