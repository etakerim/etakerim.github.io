from pygame import *

WHITE = Color(255, 255, 255)
BLACK = Color(0, 0, 0)

WIDTH = 600
HEIGHT = 400

screen = display.set_mode([WIDTH, HEIGHT])
screen.fill(WHITE)

DIV = 10

for i in range(1, DIV):
    draw.line(screen, BLACK, [0, HEIGHT // DIV * i], [WIDTH, HEIGHT // DIV * i], 2)

for i in range(1, DIV):
    draw.line(screen, BLACK, [WIDTH // DIV * i, 0], [WIDTH // DIV * i, HEIGHT], 2)

display.update()