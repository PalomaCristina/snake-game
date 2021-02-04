let canvas = document.getElementById("snake"); //cria o elemento 
let context = canvas.getContext("2d"); 
let box = 32;
let snake = []; //cria cobrinha como array

snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
 

function criarBG(){
    context.fillStyle = '#51DCA3';
    context.fillRect(0, 0, 16 * box, 16 * box); //desenha o retângulo x e y, largura e altura
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = '#0A3E89';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = '#7C074B';
    context.fillRect(food.x, food.y, box, box); //coordenadas da comidinha

}

document.addEventListener('keydown', update); //

function update(event) {
    //direções que a cobrinha vai seguir
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}


function iniciarJogo() {
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box; 

    for(i = 1; i < snake.length; i++ ) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){ //se a posição de y e x forem a mesma, o jogo para
            clearInterval(jogo);
            alert('Game Over =(');

        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x; //define o ponto inicial da cobrinha
    let snakeY = snake[0].y; //define o ponto inicial da cobrinha

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else {
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
        
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); // primeiro quadrado da cobrinha

}

let jogo = setInterval(iniciarJogo, 100);
    
