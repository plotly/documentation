size = 50;
z = zeros(size, size);
for r = 1:size
    for c = 1:size
        z(r,c) = r+c
    end
end
