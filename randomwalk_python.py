from p5 import *

class Photon:
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
        self.trail = []  #--> is this correct?

    def walk(self):
        self.trail.append([self.x,self.y])
        self.x += random_uniform(-5,5) # it turned blue tho?
        self.y += random_uniform(-5,10)
        
    def display(self):
        #what about color here? fill function? white
        fill(255,0,0)
        circle((self.x,self.y),10)

    def show_trail(self):
        fill(255, 15) # what is this??? i think show trail is not visible at all
        for i in self.trail:
            point(i[0],i[1],)

p =  Photon()

def setup():
    size(640,360)
    no_stroke()
    background(0) #for black??
  #why

def draw():
    p.walk()
    p.display()
    p.show_trail()



run()

