#!/usr/bin/node
const Square_Parent = require("./5-square");

class Square extends Square_Parent
{
    constructor(size)
    {
        super(size)
    }
    charPrint(c)
    {
        super.print()
        {
            for (let i=0; i<this.height; i++)
            {
                console.log('C'.repeat(this.width))
            }
        }
    }
}

module.exports = Square;