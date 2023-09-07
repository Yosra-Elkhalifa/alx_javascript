#!/usr/bin/node
class Rectangle
{
    constructor (w, h)
    {
        if (w && h > 0)
        {
            this.width = w
            this.height = h   
            return this.width, this.width
        }
    }
    print()
        {
            for (let i=0; i<this.height; i++)
            {
                console.log('X'.repeat(this.width))
            }
        }
    rotate()
    {
        for (let i=0; i<this.width; i++)
            {
                console.log('X'.repeat(this.height))
            }
    }
    double()
    {
        let double_h = this.height * 2
        let double_w = this.width * 2
        for (let i=0; i< double_h; i++)
            {
                console.log('X'.repeat(double_w))
            }
    }
};

module.exports = Rectangle;