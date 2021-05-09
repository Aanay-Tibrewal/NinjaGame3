class Ninja{
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        } 

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.animation = loadAnimation("ninja/Run_000", "ninja/Run_001", "ninja/Run_002", "ninja/Run_003",
        "ninja/Run_004", "ninja/Run_005", "ninja/Run_006", "ninja/Run_007", "ninja/Run_008", "ninja/Run_009");
        World.add(world, this.body);

    }

    display(){
       //  imageMode(CENTER);
        animation(this.animation, x, y, this.width, this.height);
    }
}