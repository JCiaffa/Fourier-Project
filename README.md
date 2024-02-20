A Fourier Series is an expansion of a periodic function into a sum of trigonometric functions. 
By expressing a function as a sum of sines and cosines, many problems involving the function
become easier to analyze because trigonometric functions are well understood.

The principle component of these animations is rotation.
We can draw any shape with a discrete fourier transform by fixing lots of circles end to end 
and giving each circle a specific rotational velocity and radius – tracing a point on the final circle in the series.

Technologies used: Javacript, C#, p5js

The fourier series function takes an array of x y coordinates as an input from which it traces a 2-d image. 
One major challenge associated with this project is the creation and storage of these coordinate arrays.

Coordinate arrays can be created by manually tracing an image or drawing in inkscape using cubic bezier curves, 
then exporting the route as an SVG file. From there, an online application such as Coördinator is used to 
convert the svg into the x y coordinate array. Here we can trim the size of the array by removing every nth element in 
order to save space because the fourier transform can produce extremely accurate approximations of the overall shape despite missing 
a significant number of elements in the input array.

The main issue I've encountered is the storage of the input arrays. Ideally, I'd like to put these arrays into a database. Unfortunately,
p5js, which is the software used to render the animations, doesn't work well when there is a delay in fetching the data that is used to render the canvas.
This is an open sourced software and perhaps in the future it will support more asynchronous funtionality, however, for now I am confined to 
storing these arrays within the application itsself. 
