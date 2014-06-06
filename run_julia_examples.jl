cd("/Users/chris/plotlygithub/documentation/executable/julia")
a = filter!(r"jl$", readdir())

for s in a
    try
        println(s)
        include(s)
    catch
        println("^^^^^failed!")
    end
end
