class Tree{
    constructor(x,y,width,height){
        options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
            this.width=width;
            this.height=height;
            World.add(world,this.body)
            this.image=loadImage("tree.png")
    }
    display(){
        image(this.image,0,0,this.width,this.height);

    }
}