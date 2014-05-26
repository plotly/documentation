cd 'matlab_examples'
D=dir('*.m');

for i=1:size(D,1);
    run( D(i).name);
end 

cd '..'
