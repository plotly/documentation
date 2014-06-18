clear all; clc;
fldr = 'exceptions/matlab/';
D=dir([fldr, '*.m']);

for i=1:size(D,1);
    disp(sprintf('\n Running %s', D(i).name));
    run([fldr, D(i).name]);
    % write url to file
    [~, id] = fileparts(D(i).name);
    savejson('', struct('url', plotly_url), [fldr, '/', id '.json']);
    close all
    clearvars -except D fldr i;
end
