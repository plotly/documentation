clear all; clc;
fldr = 'exceptions/matlab/';
D=dir([fldr, '*.m']);

for i=1:size(D,1);
    run([fldr, D(i).name]);
    % write url to file
    [~, id] = fileparts(D(i).name);
    fid = fopen([id '.json'], 'w');
    fprintf(fldr, fid, '%s', m2json(struct('url', plotly_url)));
    fclose(fid);
    close all
    clearvars -except D  fldr i
end
