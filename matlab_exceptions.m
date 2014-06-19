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
for i=1:size(D,1);
    disp(sprintf('\n Running %s', D(i).name));
    run([fldr, D(i).name]);
    % write url to file
    [~, id] = fileparts(D(i).name);
    savejson('', struct('url', plotly_url), [fldr, '/', id '.json']);
    close all
    clearvars -except D fldr i;
end

end