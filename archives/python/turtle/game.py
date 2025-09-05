import turtle

#window
wn = turtle.Screen()
wn.title('title')
wn.bgcolor('white')
wn.setup(width=800, height=600)
wn.tracer(0)

#turtle
sprite = turtle.Turtle()
sprite.speed(0)
sprite.penup()
sprite.shape('turtle')
sprite.shapesize(stretch_wid=1, stretch_len=1)

while True:
    pass