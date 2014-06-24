function matlab_exceptions(varargin)
clearvars -except varargin; clc;
addpath('~/Downloads/'); % where stft lives
fldr = 'exceptions/matlab/';
D = [];
switch nargin
    case 0
        D=dir([fldr, '*.m']);
    otherwise
        for i = 1:nargin
            D(i,1).name = [varargin{i} '.m'];
        end
end
for inx=1:size(D,1); %change to inx to avoid variable clash with scripts that use i. 
    disp(sprintf('\n Running %s', D(inx).name));
    run([fldr, D(inx).name]);
    % write url to file
    [~, id] = fileparts(D(inx).name);
    savejson('', struct('url', plotly_url), [fldr, '/', id '.json']);
    close all
    clearvars -except D fldr inx;
end

end