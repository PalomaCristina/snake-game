let canvas = document.getElementById("snake"); //cria o elemento 
let context = canvas.getContext("2d"); 
let box = 32;
let snake = []; //cria cobrinha como array
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG(){
    context.fillStyle =  '#51DCA3';
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo x e y, largura e altura
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; //define o ponto inicial da cobrinha
    let snakeY = snake[0].y; //define o ponto inicial da cobrinha

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakey += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
    
