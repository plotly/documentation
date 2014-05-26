cd("/Users/chris/plotlygithub/graph-decoder/julia_examples")
a = filter!(r"jl$", readdir())

for s in a
    try
        println(s)
        include(s)
    catch
        println("^^^^^failed!")
    end
end